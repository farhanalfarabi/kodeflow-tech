<script>
  import { STATS, STATS_BG_VIDEO } from "@/lib/constants";
  import { inview } from "@/lib/utils";
  
  let show = false;
</script>

<section class="relative py-32 md:py-44 overflow-hidden">
  <video 
    src={STATS_BG_VIDEO} 
    autoplay 
    loop 
    muted 
    playsinline 
    class="absolute inset-0 w-full h-full object-cover filter saturate-0"
  ></video>
  <div class="absolute top-0 inset-x-0 h-[200px] gradient-fade-t"></div>
  <div class="absolute bottom-0 inset-x-0 h-[200px] gradient-fade-b"></div>

  <div class="liquid-glass rounded-3xl p-10 md:p-14 mx-[var(--gutter)] max-w-[var(--max)] md:mx-auto relative z-10">
    <div class="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 relative" use:inview on:enter={() => show = true}>
      {#each STATS as stat, i}
        <div class="flex flex-col relative z-10">
          <span class="font-display italic text-5xl md:text-6xl lg:text-7xl leading-none text-foreground">
            {show ? stat.value : '0'}
          </span>
          <span class="font-body text-sm text-foreground/60 mt-3 tracking-wide uppercase">
            {stat.label}
          </span>
        </div>
        {#if i < 3}
          <div class="hidden md:block absolute top-1/2 -translate-y-1/2 w-px h-12 bg-border" style="left: {(i + 1) * 25}%"></div>
        {/if}
      {/each}
    </div>
  </div>
</section>
