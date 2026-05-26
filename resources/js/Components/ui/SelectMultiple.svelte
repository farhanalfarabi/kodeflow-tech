<script>
  import { createEventDispatcher, onMount } from 'svelte';
  import { ChevronDown, Check, X } from 'lucide-svelte';
  
  const dispatch = createEventDispatcher();

  export let options = []; // Array of { value, label }
  export let values = []; // Currently selected values array
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

  $: selectedOptions = options.filter(opt => values.includes(opt.value));

  function toggleOption(opt) {
    if (disabled) return;
    if (values.includes(opt.value)) {
      values = values.filter(v => v !== opt.value);
    } else {
      values = [...values, opt.value];
    }
    dispatch('change', values);
  }

  function removeOption(e, opt) {
    e.stopPropagation();
    if (disabled) return;
    values = values.filter(v => v !== opt.value);
    dispatch('change', values);
  }
</script>

<div class="relative w-full" bind:this={containerRef}>
  <!-- Dropdown Trigger -->
  <div 
    on:click={() => { if (!disabled) isOpen = !isOpen; }}
    class="w-full min-h-[42px] bg-background border border-border rounded-xl px-3 py-2 flex items-center justify-between text-left focus-within:ring-2 focus-within:ring-primary/50 transition-all cursor-pointer {disabled ? 'opacity-50 cursor-not-allowed' : (isOpen ? 'ring-2 ring-primary/50' : 'hover:border-foreground/30')}"
  >
    <div class="flex flex-wrap gap-1.5 items-center flex-1 pr-2">
      {#if selectedOptions.length === 0}
        <span class="text-sm font-medium text-foreground/50 py-0.5">{placeholder}</span>
      {:else}
        {#each selectedOptions as opt}
          <span class="inline-flex items-center gap-1 bg-primary/10 text-primary px-2 py-0.5 rounded-md text-xs font-semibold">
            <span class="max-w-[150px] truncate">{opt.label}</span>
            <button 
              type="button" 
              class="hover:bg-primary/20 rounded-full p-0.5 transition-colors"
              on:click={(e) => removeOption(e, opt)}
            >
              <X class="size-3" />
            </button>
          </span>
        {/each}
      {/if}
    </div>
    <ChevronDown class="size-4 text-foreground/50 shrink-0 transition-transform {isOpen ? 'rotate-180' : ''}" />
  </div>

  <!-- Dropdown Menu -->
  {#if isOpen}
    <div class="absolute z-[100] w-full mt-2 bg-card border border-border rounded-xl shadow-xl overflow-hidden flex flex-col">
      <!-- Options List -->
      <div class="max-h-60 overflow-y-auto p-1">
        {#each options as opt}
          <button 
            type="button" 
            class="w-full text-left px-3 py-2.5 text-sm rounded-lg flex items-center justify-between hover:bg-foreground/5 transition-colors"
            on:click={() => toggleOption(opt)}
          >
            <span class="font-medium text-foreground/80 line-clamp-1 pr-4">{opt.label}</span>
            <div class="shrink-0 size-4 rounded border flex items-center justify-center transition-colors {values.includes(opt.value) ? 'bg-primary border-primary text-primary-foreground' : 'border-border'}">
              {#if values.includes(opt.value)}
                <Check class="size-3" />
              {/if}
            </div>
          </button>
        {/each}
        {#if options.length === 0}
          <div class="p-4 text-center text-sm text-foreground/50">
            Tidak ada opsi
          </div>
        {/if}
      </div>
    </div>
  {/if}
</div>
