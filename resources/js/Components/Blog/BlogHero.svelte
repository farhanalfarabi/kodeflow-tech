<script>
  import { Search, ArrowRight, BookOpen } from "lucide-svelte";
  import { inview } from "@/lib/utils";
  import { router } from "@inertiajs/svelte";
  import { t } from "@/lib/i18n";

  let show = false;
  export let searchQuery = "";
  export let filters = { search: "", category: "semua" };

  function handleSearch() {
    router.get('/blogs', { search: searchQuery, category: filters.category }, { preserveState: true, preserveScroll: true });
  }

  let searchTimeout;
  function handleSearchInput() {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
      handleSearch();
    }, 500);
  }
</script>

<section class="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden" use:inview on:enter={() => show = true}>
  <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(var(--primary),0.05)_0%,transparent_70%)] pointer-events-none"></div>

  <div class="max-w-[640px] mx-auto px-[var(--gutter)] relative z-10 text-center">
    
    <div class="flex justify-center mb-6" style="opacity: {show ? 1 : 0}; transform: translateY({show ? 0 : 20}px); transition: all 600ms ease-out;">
      <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary-light uppercase tracking-wider shadow-[0_0_15px_rgba(247,37,134,0.1)]">
        <BookOpen class="size-3.5 text-primary-light" />
        <span>{$t.BLOG_HERO_BADGE}</span>
      </div>
    </div>
    
    <h1 
      class="font-display text-3xl md:text-4xl font-bold tracking-tight text-foreground uppercase mb-6 leading-tight"
      style="opacity: {show ? 1 : 0}; transform: translateY({show ? 0 : 20}px); transition: all 600ms ease-out 100ms;"
    >
      {@html $t.BLOG_HERO_TITLE}
    </h1>

    <p 
      class="font-body text-base md:text-lg text-foreground/60 max-w-[480px] mx-auto mb-10 leading-relaxed"
      style="opacity: {show ? 1 : 0}; transform: translateY({show ? 0 : 20}px); transition: all 600ms ease-out 200ms;"
    >
      {$t.BLOG_HERO_DESC}
    </p>

    <!-- Search Box -->
    <div 
      class="relative group max-w-[500px] mx-auto mb-5"
      style="opacity: {show ? 1 : 0}; transform: translateY({show ? 0 : 20}px); transition: all 600ms ease-out 300ms;"
    >
      <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
        <Search class="size-5 text-foreground/40 group-focus-within:text-primary-light transition-colors" />
      </div>
      <input 
        type="text" 
        bind:value={searchQuery}
        on:input={handleSearchInput}
        placeholder={$t.BLOG_HERO_SEARCH_PLACEHOLDER} 
        class="block w-full pl-12 pr-12 py-4 bg-foreground/5 border border-border rounded-2xl text-foreground placeholder-foreground/40 focus:bg-foreground/10 focus:border-primary-light/50 focus:ring-1 focus:ring-primary-light/50 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.05)] outline-none backdrop-blur-md"
      />
      {#if searchQuery && searchQuery.trim().length > 0}
        <button on:click={handleSearch} class="absolute inset-y-0 right-2 flex items-center justify-center w-10 text-primary-light hover:text-primary-foreground transition-colors bg-primary-light/10 hover:bg-primary-light/80 rounded-xl my-2">
          <ArrowRight class="size-4" />
        </button>
      {/if}
    </div>

  </div>
</section>
