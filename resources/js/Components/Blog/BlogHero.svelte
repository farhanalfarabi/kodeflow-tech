<script>
  import { Search, ArrowRight } from "lucide-svelte";
  import { inview } from "@/lib/utils";

  let show = false;
  let searchQuery = "";
</script>

<section class="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden" use:inview on:enter={() => show = true}>
  <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(var(--primary),0.05)_0%,transparent_70%)] pointer-events-none"></div>

  <div class="max-w-[640px] mx-auto px-[var(--gutter)] relative z-10 text-center">
    
    <div class="flex items-center justify-center gap-3 mb-6" style="opacity: {show ? 1 : 0}; transform: translateY({show ? 0 : 20}px); transition: all 600ms ease-out;">
      <div class="h-px w-8 bg-primary/50"></div>
      <span class="text-xs font-bold tracking-widest text-primary uppercase">Blog</span>
      <div class="h-px w-8 bg-primary/50"></div>
    </div>
    
    <h1 
      class="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6 leading-tight"
      style="opacity: {show ? 1 : 0}; transform: translateY({show ? 0 : 20}px); transition: all 600ms ease-out 100ms;"
    >
      <span class="block">Insights untuk bisnis</span>
      <span class="block text-primary italic">yang sedang scaling.</span>
    </h1>

    <p 
      class="font-body text-base md:text-lg text-foreground/60 max-w-[480px] mx-auto mb-10 leading-relaxed"
      style="opacity: {show ? 1 : 0}; transform: translateY({show ? 0 : 20}px); transition: all 600ms ease-out 200ms;"
    >
      Artikel praktis tentang IT, digitalisasi, dan cara membangun tim teknologi yang bisa diandalkan.
    </p>

    <!-- Search Box -->
    <div 
      class="relative group max-w-[500px] mx-auto mb-5"
      style="opacity: {show ? 1 : 0}; transform: translateY({show ? 0 : 20}px); transition: all 600ms ease-out 300ms;"
    >
      <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
        <Search class="size-5 text-foreground/40 group-focus-within:text-primary transition-colors" />
      </div>
      <input 
        type="text" 
        bind:value={searchQuery}
        placeholder="Cari artikel, topik, atau kata kunci..." 
        class="block w-full pl-12 pr-12 py-4 bg-foreground/5 border border-border rounded-2xl text-foreground placeholder-foreground/40 focus:bg-foreground/10 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.05)] outline-none backdrop-blur-md"
      />
      {#if searchQuery.trim().length > 0}
        <button class="absolute inset-y-0 right-2 flex items-center justify-center w-10 text-primary hover:text-primary-foreground transition-colors bg-primary/10 hover:bg-primary/80 rounded-xl my-2">
          <ArrowRight class="size-4" />
        </button>
      {/if}
    </div>

  </div>
</section>
