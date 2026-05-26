<script>
  import { STATS_BG_VIDEO } from "@/lib/constants";
  import { t } from "@/lib/i18n";
  import { inview } from "@/lib/utils";
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

  function parseStat(valueStr) {
    const match = valueStr.match(/(\d+)/);
    if (match) {
      const num = parseInt(match[1]);
      const prefix = valueStr.substring(0, match.index);
      const suffix = valueStr.substring(match.index + match[1].length);
      return { hasNum: true, prefix, num, suffix };
    }
    return { hasNum: false, prefix: '', num: 0, suffix: valueStr };
  }
</script>

<section class="bg-white pb-8 relative z-20">
  <div class="relative z-30 w-full max-w-[1100px] mx-auto px-6 flex justify-center translate-y-32">
    <div class="relative w-full border border-white/10 rounded-[32px] p-10 md:p-14 shadow-[0_30px_80px_rgba(0,0,0,0.5)] overflow-hidden bg-[#0a0a0a]">
    
    <!-- Video Background inside the card -->
    <video 
      src={STATS_BG_VIDEO} 
      autoplay 
      loop 
      muted 
      playsinline 
      class="absolute inset-0 w-full h-full object-cover filter saturate-0 opacity-60"
    ></video>
    <div class="absolute inset-0 bg-black/50 pointer-events-none"></div>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 relative text-center md:text-left z-10" use:inview on:enter={handleEnter}>
      {#each $t.STATS as stat, i}
        {@const parsed = parseStat(stat.value)}
        <div class="flex flex-col items-center md:items-start relative z-10">
          <span class="font-display font-medium text-5xl md:text-6xl tracking-tight text-white mb-2">
            {#if parsed.hasNum}
              {parsed.prefix}{Math.floor(parsed.num * $progress)}{parsed.suffix}
            {:else}
              {stat.value}
            {/if}
          </span>
          <span class="font-body text-sm text-white/60 font-medium">
            {stat.label}
          </span>
        </div>
        {#if i < 3}
          <div class="hidden md:block absolute top-1/2 -translate-y-1/2 w-px h-16 bg-white/10" style="left: {(i + 1) * 25}%"></div>
        {/if}
      {/each}
    </div>
  </div>
</section>
