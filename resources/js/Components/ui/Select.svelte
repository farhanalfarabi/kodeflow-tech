<script>
  import { createEventDispatcher, onMount } from 'svelte';
  import { ChevronDown, Check } from 'lucide-svelte';
  
  const dispatch = createEventDispatcher();

  export let options = []; // Array of { value, label }
  export let value = ""; // Currently selected value
  export let placeholder = "Pilih opsi...";
  export let disabled = false;

  let isOpen = false;
  let containerRef;

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

  $: selectedOption = options.find(opt => opt.value == value);
  $: displayLabel = selectedOption ? selectedOption.label : placeholder;

  function toggleOption(opt) {
    if (disabled) return;
    value = opt.value;
    isOpen = false;
    dispatch('change', value);
  }
</script>

<div class="relative w-full" bind:this={containerRef}>
  <!-- Dropdown Trigger -->
  <button 
    type="button" 
    on:click={() => { if (!disabled) isOpen = !isOpen; }}
    {disabled}
    class="w-full bg-foreground/5 border border-border rounded-lg px-4 py-2 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed {isOpen ? 'ring-2 ring-primary/50 bg-background' : 'hover:bg-foreground/10'}"
  >
    <span class="block truncate text-sm font-medium {value === '' || value == null ? 'text-foreground/50' : 'text-foreground'}">
      {displayLabel}
    </span>
    <ChevronDown class="size-4 text-foreground/50 transition-transform {isOpen ? 'rotate-180' : ''}" />
  </button>

  <!-- Dropdown Menu -->
  {#if isOpen}
    <div class="absolute z-[100] w-full mt-2 bg-card border border-border rounded-xl shadow-xl overflow-hidden flex flex-col">
      <!-- Options List -->
      <div class="max-h-60 overflow-y-auto p-1">
        {#each options as opt}
          <button 
            type="button" 
            class="w-full text-left px-3 py-2 text-sm rounded-md flex items-center justify-between hover:bg-foreground/5 transition-colors"
            on:click={() => toggleOption(opt)}
          >
            <span class="font-medium text-foreground/80">{opt.label}</span>
            {#if value == opt.value}
              <Check class="size-4 text-primary" />
            {/if}
          </button>
        {/each}
      </div>
    </div>
  {/if}
</div>
