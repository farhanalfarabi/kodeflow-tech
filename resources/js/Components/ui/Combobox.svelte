<script>
  import { createEventDispatcher, onMount } from 'svelte';
  import { Search, Plus, ChevronDown, Check } from 'lucide-svelte';
  
  const dispatch = createEventDispatcher();

  export let items = [];
  export let selectedValue = ""; // for single select
  export let selectedValues = []; // for multi select
  export let multiple = false;
  export let placeholder = "Pilih opsi...";
  export let addLabel = "Tambah Baru";
  export let showSelectedInButton = true;

  let isOpen = false;
  let searchQuery = "";
  let containerRef;
  let searchInputRef;

  // Tutup dropdown jika klik di luar
  onMount(() => {
    const handleOutsideClick = (e) => {
      if (containerRef && !containerRef.contains(e.target)) {
        isOpen = false;
      }
    };
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  });

  $: {
    if (isOpen && searchInputRef) {
      setTimeout(() => searchInputRef.focus(), 50);
    }
  }

  $: filteredItems = items.filter(item => 
    item.toLowerCase().includes(searchQuery.toLowerCase())
  );

  function toggleOption(item) {
    if (multiple) {
      if (selectedValues.includes(item)) {
        selectedValues = selectedValues.filter(v => v !== item);
      } else {
        selectedValues = [...selectedValues, item];
      }
      dispatch('change', selectedValues);
      searchQuery = ""; // reset search after select
    } else {
      selectedValue = item;
      isOpen = false;
      searchQuery = "";
      dispatch('change', selectedValue);
    }
  }

  function handleAddNew() {
    if (searchQuery.trim() !== '') {
      const newItem = searchQuery.trim();
      toggleOption(newItem);
      if (!items.includes(newItem)) {
        items = [...items, newItem]; // Optimistically add to items list
      }
    }
  }

  function handleKeydown(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      // If there's exact match, select it. Else add new.
      const exactMatch = items.find(i => i.toLowerCase() === searchQuery.trim().toLowerCase());
      if (exactMatch) {
        toggleOption(exactMatch);
      } else if (searchQuery.trim() !== '') {
        handleAddNew();
      }
    }
  }
</script>

<div class="relative w-full" bind:this={containerRef}>
  <!-- Dropdown Trigger -->
  <button 
    type="button" 
    on:click={() => isOpen = !isOpen}
    class="w-full bg-background border border-border rounded-xl px-4 py-3 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all {isOpen ? 'ring-2 ring-primary/50' : ''}"
  >
    <span class="block truncate text-sm font-medium {multiple ? ((selectedValues.length === 0 || !showSelectedInButton) ? 'text-foreground/50' : 'text-foreground') : (!selectedValue ? 'text-foreground/50' : 'text-foreground')}">
      {#if multiple}
        {selectedValues.length > 0 && showSelectedInButton ? selectedValues.join(', ') : placeholder}
      {:else}
        {selectedValue || placeholder}
      {/if}
    </span>
    <ChevronDown class="size-4 text-foreground/50 transition-transform {isOpen ? 'rotate-180' : ''}" />
  </button>

  <!-- Dropdown Menu -->
  {#if isOpen}
    <div class="absolute z-[100] w-full mt-2 bg-card border border-border rounded-xl shadow-xl overflow-hidden flex flex-col">
      <!-- Search Box -->
      <div class="p-2 border-b border-border/50 bg-background/50">
        <div class="relative">
          <Search class="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-foreground/40" />
          <input 
            bind:this={searchInputRef}
            type="text" 
            bind:value={searchQuery}
            on:keydown={handleKeydown}
            placeholder="Cari atau ketik baru..."
            class="w-full bg-transparent border-none pl-9 pr-4 py-2 text-sm focus:outline-none text-foreground placeholder-foreground/30"
          />
        </div>
      </div>

      <!-- Options List -->
      <div class="max-h-48 overflow-y-auto p-1">
        {#each filteredItems as item}
          <button 
            type="button" 
            class="w-full text-left px-3 py-2 text-sm rounded-md flex items-center justify-between hover:bg-foreground/5 transition-colors"
            on:click={() => toggleOption(item)}
          >
            <span>{item}</span>
            {#if multiple ? selectedValues.includes(item) : selectedValue === item}
              <Check class="size-4 text-primary" />
            {/if}
          </button>
        {:else}
          <div class="px-3 py-4 text-center text-sm text-foreground/50">
            "{searchQuery}" tidak ditemukan.
          </div>
        {/each}
      </div>

      <!-- Add New Button -->
      {#if searchQuery.trim() !== '' && !items.some(i => i.toLowerCase() === searchQuery.trim().toLowerCase())}
        <div class="p-2 border-t border-border/50 bg-background/50">
          <button 
            type="button" 
            class="w-full flex items-center justify-center gap-2 px-3 py-2 text-sm font-medium text-primary bg-primary/5 hover:bg-primary/10 rounded-md transition-colors"
            on:click={handleAddNew}
          >
            <Plus class="size-4" />
            {addLabel} "{searchQuery.trim()}"
          </button>
        </div>
      {/if}
    </div>
  {/if}
</div>
