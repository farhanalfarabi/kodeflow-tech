<script>
  import { Search } from "lucide-svelte";
  import { createEventDispatcher } from "svelte";
  
  export let value = "";
  export let placeholder = "Search...";
  export let debounceTime = 500;
  
  let className = "";
  export { className as class };

  const dispatch = createEventDispatcher();
  
  let timeout;
  
  function handleInput() {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      dispatch("search", value);
    }, debounceTime);
  }
</script>

<div class="relative {className}">
  <Search class="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-foreground/40" />
  <input 
    type="text" 
    bind:value
    on:input={handleInput}
    {placeholder}
    class="w-full pl-9 pr-4 py-2 bg-foreground/5 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" 
  />
</div>
