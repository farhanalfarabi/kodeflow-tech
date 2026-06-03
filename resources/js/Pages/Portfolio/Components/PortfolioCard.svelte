<script>
    import { Link } from "@inertiajs/svelte";
    import { ArrowRight } from "lucide-svelte";
    import { fade } from "svelte/transition";
    import { currentLanguage, t } from "../../../lib/i18n";

    export let item;
</script>

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

<style>
  .liquid-glass {
    background: rgba(255, 255, 255, 0.015);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    border: 1px solid rgba(255, 255, 255, 0.05);
    box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.05);
  }
</style>
