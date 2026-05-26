<script>
  import { portfolios } from "@/lib/portfolios";
  import { currentLanguage, t } from "@/lib/i18n";
  import { Link } from "@inertiajs/svelte";
  import { ArrowRight, Sparkles } from "lucide-svelte";
  import { fade } from "svelte/transition";

  $: lang = $currentLanguage || "id";
  $: items = portfolios[lang] || portfolios["id"];
  
  // Showcase the first 2 portfolio items
  $: featuredItems = items.slice(0, 2);
</script>

<section id="portfolio-preview" class="relative py-28 md:py-40 bg-background overflow-hidden border-t border-white/5 noise">
  <!-- Glowing Background Lights -->
  <div class="absolute top-1/4 left-1/10 w-96 h-96 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-[120px] pointer-events-none animate-pulse duration-[8000ms]"></div>
  <div class="absolute bottom-1/4 right-1/10 w-[450px] h-[450px] bg-gradient-to-br from-primary-light/10 to-transparent rounded-full blur-[150px] pointer-events-none animate-pulse duration-[10000ms]"></div>

  <div class="max-w-[var(--max)] mx-auto px-[var(--gutter)] relative z-10">
    
    <!-- Section Header -->
    <div class="flex flex-col items-center text-center mb-20">
      <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary-light uppercase tracking-wider mb-6 animate-fade-up">
        <Sparkles class="size-3.5 text-primary-light" />
        <span>{$t.PORTFOLIO_PREVIEW_BADGE || 'KARYA PILIHAN'}</span>
      </div>

      <h2 class="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 max-w-4xl mx-auto leading-tight uppercase animate-fade-up" style="animation-delay: 100ms">
        {$t.PORTFOLIO_PREVIEW_TITLE}
        <span class="text-primary-light italic drop-shadow-[0_0_15px_rgba(247,37,134,0.25)]">
          {$t.PORTFOLIO_PREVIEW_TITLE_HIGHLIGHT}
        </span>
      </h2>

      <p class="font-body text-base md:text-lg text-foreground/75 max-w-2xl mx-auto leading-relaxed animate-fade-up" style="animation-delay: 200ms">
        {$t.PORTFOLIO_PREVIEW_DESC}
      </p>
    </div>

    <!-- Portfolio Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-16">
      {#each featuredItems as item (item.id)}
        <div 
          class="liquid-glass rounded-[32px] overflow-hidden flex flex-col group transition-all duration-500 hover:shadow-2xl hover:shadow-primary-light/5 hover:translate-y-[-6px]"
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
              <span class="text-[10px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-background/90 text-foreground border border-border/15 backdrop-blur-sm">
                {item.tag}
              </span>
              
              <span class="text-[11px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-primary-light/95 text-white shadow-lg shadow-primary-light/20 border border-primary-light/35">
                {item.impact}
              </span>
            </div>
          </div>

          <!-- Card Content -->
          <div class="p-8 flex flex-col flex-grow relative z-10 bg-card/20">
            <span class="text-xs font-semibold text-primary-light tracking-widest uppercase mb-2">
              {item.category}
            </span>

            <h3 class="font-display text-2xl font-bold mb-4 text-foreground group-hover:text-primary-light transition-colors duration-300 leading-tight">
              {item.shortTitle}
            </h3>

            <p class="font-body text-foreground/65 mb-6 text-sm leading-relaxed flex-grow line-clamp-3">
              {item.shortDescription}
            </p>

            <!-- Tech Stack Tag Cloud -->
            <div class="flex flex-wrap gap-1.5 mb-8">
              {#each item.techStack as tech}
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
                  {lang === 'id' ? 'BACA STUDI KASUS' : 'READ CASE STUDY'}
                </span>
                <ArrowRight class="size-4 transition-transform duration-300 group-hover/link:translate-x-1.5" />
              </Link>
            </div>
          </div>
        </div>
      {/each}
    </div>

    <!-- Bottom CTA -->
    <div class="flex justify-center animate-fade-up" style="animation-delay: 300ms">
      <Link 
        href="/portfolio" 
        class="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white text-black font-semibold text-sm hover:bg-white/90 transition-all duration-300 shadow-xl hover:shadow-white/10 group/btn cursor-pointer"
      >
        <span>{$t.PORTFOLIO_PREVIEW_CTA || 'Lihat Semua Portofolio'}</span>
        <ArrowRight class="size-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
      </Link>
    </div>

  </div>
</section>
