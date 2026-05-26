<script>
  import Navbar from "../Components/Navbar.svelte";
  import CtaFooter from "../Components/CtaFooter.svelte";
  export let portfolios = [];
  export let categories = [];
  export let filters = {};
  import { t, currentLanguage } from "../lib/i18n";
  import { Link, router } from "@inertiajs/svelte";
  import { ArrowRight, Sparkles } from "lucide-svelte";
  import { fade } from "svelte/transition";

  // Categories from backend
  $: categoryOptions = [{ value: 'semua', label: 'Semua' }, ...categories.map(c => ({ value: c.slug, label: c.name }))];
  
  // Set active filter from server props
  $: activeFilter = filters.category || 'semua';

  function setFilter(categorySlug) {
    activeFilter = categorySlug;
    router.get(
      "/portfolio",
      { category: activeFilter },
      { preserveState: true }
    );
  }
</script>

<svelte:head>
  <title>Portofolio Kami — Studi Kasus Solusi Digital | Kodeflow Tech</title>
  <meta name="description" content="Lihat kumpulan hasil karya terbaik kami. Sistem ERP kustom, aplikasi mobile, dan otomatisasi alur kerja terintegrasi yang membantu bisnis skala nasional berkembang pesat." />
  <meta property="og:title" content="Portofolio Kami — Studi Kasus Solusi Digital | Kodeflow Tech" />
  <meta property="og:description" content="Koleksi studi kasus solusi digital terbaik dari Kodeflow Tech untuk transformasi operasional manufaktur, medis, dan bisnis enterprise." />
  <meta property="og:image" content="/og-portfolio.png" />
  <meta property="og:url" content="https://kodeflow.tech/portfolio" />
  <link rel="canonical" href="https://kodeflow.tech/portfolio" />

  {@html `
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home",  "item": "https://kodeflow.tech" },
        { "@type": "ListItem", "position": 2, "name": "Portfolio", "item": "https://kodeflow.tech/portfolio" }
      ]
    }
    </script>
  `}
</svelte:head>

<div class="bg-background text-foreground min-h-screen relative noise overflow-x-hidden">
  <Navbar />
  
  <main class="pt-32 pb-20">
    <!-- Hero Section -->
    <section class="max-w-[var(--max)] mx-auto px-[var(--gutter)] mb-16 text-center">
      <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary-light uppercase tracking-wider mb-6 animate-fade-up">
        <Sparkles class="size-3.5" />
        <span>{$currentLanguage === 'id' ? 'KARYA PILIHAN KAMI' : 'OUR PORTFOLIOS'}</span>
      </div>

      <h1 class="font-display text-4xl md:text-6xl font-bold tracking-tight mb-6 max-w-4xl mx-auto leading-tight uppercase animate-fade-up" style="animation-delay: 100ms">
        {$t.PORTFOLIO_TITLE || 'Mewujudkan Visi Digital Menjadi'}
        <span class="text-primary-light italic drop-shadow-[0_0_15px_rgba(247,37,134,0.25)]">
          {$t.PORTFOLIO_TITLE_HIGHLIGHT || 'Solusi yang Scaling'}
        </span>
      </h1>

      <p class="font-body text-base md:text-lg text-foreground/75 max-w-2xl mx-auto leading-relaxed animate-fade-up" style="animation-delay: 200ms">
        {$t.PORTFOLIO_DESC || 'Kami tidak hanya menulis kode; kami merancang sistem terintegrasi yang memecahkan tantangan bisnis nyata, memangkas inefisiensi, dan mendorong pertumbuhan eksponensial bagi mitra kami.'}
      </p>
    </section>

    <!-- Filters Section -->
    <section class="max-w-[var(--max)] mx-auto px-[var(--gutter)] mb-12">
      <div class="flex flex-wrap items-center justify-center gap-3 border-b border-border/10 pb-6">
        {#each categoryOptions as category}
          {@const isSelected = activeFilter === category.value}
          <button
            on:click={() => setFilter(category.value)}
            class="px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 relative overflow-hidden cursor-pointer
              {isSelected 
                ? 'bg-primary text-white border border-primary font-bold shadow-md shadow-primary/20' 
                : 'bg-card/45 text-foreground/70 border border-border hover:bg-card/90 hover:text-foreground'}"
          >
            {category.label}
            {#if isSelected}
              <span class="absolute inset-0 bg-white/5 animate-pulse"></span>
            {/if}
          </button>
        {/each}
      </div>
    </section>

    <!-- Portfolio Grid -->
    <section class="max-w-[var(--max)] mx-auto px-[var(--gutter)] mb-10">
      {#if portfolios.length > 0}
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {#each portfolios as item (item.id)}
            <div 
              class="liquid-glass rounded-3xl overflow-hidden flex flex-col group transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 hover:translate-y-[-4px]"
              in:fade={{ duration: 400 }}
            >
              <!-- Card Header / Image Mockup -->
              <div class="aspect-video relative overflow-hidden bg-muted/40 border-b border-border/10">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
                />
                <!-- Gradient Overlay -->
                <div class="absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
                
                <!-- Tag & Impact Badges overlay -->
                <div class="absolute top-5 left-5 right-5 flex justify-between items-center z-10">
                  <span class="text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full bg-background/90 text-foreground border border-border/15 backdrop-blur-sm">
                    {item.category?.name}
                  </span>
                </div>
              </div>

              <!-- Card Content -->
              <div class="p-8 flex flex-col flex-grow relative z-10">
                <span class="text-xs font-semibold text-primary-light tracking-widest uppercase mb-2">
                  {item.category?.name}
                </span>

                <h3 class="font-display text-2xl font-bold mb-4 text-foreground group-hover:text-primary-light transition-colors duration-300 leading-tight">
                  {item.title}
                </h3>

                <p class="font-body text-foreground/65 mb-6 text-sm leading-relaxed flex-grow line-clamp-3">
                  {item.subtitle}
                </p>

                <!-- Tech Stack Tag Cloud -->
                <div class="flex flex-wrap gap-1.5 mb-8">
                  {#each item.tech_stack || [] as tech}
                    <span class="text-[11px] font-medium text-foreground/50 bg-foreground/[0.04] px-2.5 py-1 rounded-md border border-border/5">
                      {tech}
                    </span>
                  {/each}
                </div>

                <!-- Call to Action Link -->
                <div class="mt-auto pt-4 border-t border-border/10">
                  <Link 
                    href="/portfolio/{item.slug}" 
                    class="inline-flex items-center gap-2 text-sm font-semibold text-primary-light hover:text-white transition-colors duration-300 group/link"
                  >
                    <span>
                      {$currentLanguage === 'id' ? 'BACA STUDI KASUS' : 'READ CASE STUDY'}
                    </span>
                    <ArrowRight class="size-4 transition-transform duration-300 group-hover/link:translate-x-1.5" />
                  </Link>
                </div>
              </div>
            </div>
          {/each}
        </div>
      {:else}
        <div class="text-center py-20 border border-dashed border-border/25 rounded-3xl bg-card/10">
          <p class="text-foreground/50 font-body">
            {$currentLanguage === 'id' ? 'Belum ada portofolio di kategori ini.' : 'No portfolios in this category yet.'}
          </p>
        </div>
      {/if}
    </section>
  </main>

  <CtaFooter />
</div>

<style>
  /* Custom transitions and overlays */
  .liquid-glass {
    background: rgba(255, 255, 255, 0.015);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    border: 1px solid rgba(255, 255, 255, 0.05);
    box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.05);
  }
</style>
