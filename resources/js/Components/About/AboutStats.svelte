<script>
  import { inview } from "@/lib/utils";
  import { t } from "@/lib/i18n";
  import { tweened } from 'svelte/motion';
  import { cubicOut } from 'svelte/easing';

  let show = false;

  const progress = tweened(0, {
    duration: 2000,
    easing: cubicOut
  });

  function handleEnter() {
    if (!show) {
      show = true;
      progress.set(1);
    }
  }
</script>

<section class="relative py-20 bg-transparent border-y border-white/5 overflow-hidden" use:inview on:enter={handleEnter}>
  <!-- Subtle gradient background -->
  <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(var(--primary),0.03)_0%,transparent_70%)]"></div>
  
  <div class="max-w-[1400px] mx-auto px-[var(--gutter)] relative z-10">
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-white/10 text-center border border-white/10 rounded-2xl md:border-none md:rounded-none bg-transparent">
      
      {#each $t.ABOUT_STATS_ITEMS as stat, i}
        <div class="p-8 flex flex-col justify-center items-center group relative">
          <!-- Hover Glow -->
          <div class="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none md:rounded-xl"></div>
          
          <span 
            class="font-display font-extrabold text-4xl md:text-5xl lg:text-[56px] text-white mb-2 leading-none drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
          >
            {Math.floor(stat.target * $progress)}{stat.isPlus ? '+' : ''}
          </span>
          <span class="font-display text-sm uppercase tracking-widest text-primary-light mb-1">
            {stat.label}
          </span>
          <span class="font-body text-xs text-foreground/40 max-w-[120px]">
            {stat.sub}
          </span>
        </div>
      {/each}

    </div>
  </div>
</section>
