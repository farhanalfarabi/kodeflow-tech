<script>
  import { REASONS } from "@/lib/constants";
  import * as Icons from "lucide-svelte";
  import { ArrowRight, ArrowLeft } from "lucide-svelte";
  
  let virtualIndex = 1000 * REASONS.length + 1;

  const next = () => virtualIndex++;
  const prev = () => virtualIndex--;

  let diffs = [];
  let isTeleporting = [];
  let zIndices = [];

  $: {
    const N = REASONS.length;
    let newDiffs = [];
    let newTeleports = [];
    let newZIndices = [];
    
    for (let i = 0; i < N; i++) {
      let diff = ((i - virtualIndex) % N + N) % N;
      if (diff > N / 2) diff -= N;
      newDiffs[i] = diff;
      
      if (diffs.length > 0) {
        newTeleports[i] = Math.abs(diff - diffs[i]) > 1;
      } else {
        newTeleports[i] = false;
      }
      
      newZIndices[i] = 20 - Math.abs(diff);
      if (newTeleports[i]) newZIndices[i] = 0;
    }
    
    diffs = newDiffs;
    isTeleporting = newTeleports;
    zIndices = newZIndices;
  }

  // --- Horizontal Scroll & Touch Swipe Logic ---
  let touchStartX = 0;
  let touchEndX = 0;
  let wheelAccumulator = 0;
  let isThrottled = false;

  const handleTouchStart = (e) => {
    touchStartX = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e) => {
    touchEndX = e.changedTouches[0].screenX;
    const minSwipeDistance = 50;
    if (touchEndX < touchStartX - minSwipeDistance) next();
    if (touchEndX > touchStartX + minSwipeDistance) prev();
  };

  const handleWheel = (e) => {
    // Only react if scrolling horizontally more than vertically
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
      e.preventDefault(); // Mencegah back/forward history browser
      
      if (isThrottled) return;
      
      wheelAccumulator += e.deltaX;
      
      if (wheelAccumulator > 60) {
        next();
        resetWheel();
      } else if (wheelAccumulator < -60) {
        prev();
        resetWheel();
      }
    }
  };

  const resetWheel = () => {
    isThrottled = true;
    wheelAccumulator = 0;
    // Cooldown selama 700ms (sesuai durasi transisi CSS)
    setTimeout(() => { 
      isThrottled = false; 
      wheelAccumulator = 0; 
    }, 700);
  };
</script>

<section id="pourquoi" class="relative py-28 md:py-40 bg-background overflow-hidden border-t border-border/10">
  <div class="max-w-[1400px] mx-auto px-6 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
    <div class="flex flex-col items-start text-left">
      <span class="border border-white/10 text-foreground/80 rounded-full px-5 py-2 text-xs bg-white/5 mb-6 font-medium tracking-wide">
        Our Benefits
      </span>
      <h2 class="font-display text-4xl md:text-5xl lg:text-7xl tracking-tight text-foreground font-semibold">
        Why Choose Kodeflow?
      </h2>
    </div>
    
    <div class="flex items-center gap-3">
      <button on:click={prev} class="size-12 rounded-full bg-white text-black flex items-center justify-center hover:bg-white/80 transition-colors shadow-lg">
        <ArrowLeft class="size-5" />
      </button>
      <button on:click={next} class="size-12 rounded-full bg-white text-black flex items-center justify-center hover:bg-white/80 transition-colors shadow-lg">
        <ArrowRight class="size-5" />
      </button>
    </div>
  </div>

  <!-- Carousel Container (Added Swipe & Wheel events) -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div 
    class="relative w-full h-[550px] md:h-[600px] flex justify-center mt-16 overflow-hidden md:overflow-visible touch-pan-y"
    on:touchstart={handleTouchStart}
    on:touchend={handleTouchEnd}
    on:wheel={handleWheel}
  >
    {#each REASONS as reason, i}
      {@const diff = diffs[i]}
      {@const isActive = diff === 0}
      {@const teleport = isTeleporting[i]}
      
      <div 
        class="absolute top-0 w-[90vw] md:w-[450px] h-[500px] md:h-[550px] bg-[#111111] rounded-[32px] p-8 md:p-10 flex flex-col border shadow-2xl ease-[cubic-bezier(0.2,0.8,0.2,1)] {teleport ? 'transition-opacity duration-700' : 'transition-all duration-700'}"
        style="
          transform: translateX({diff * 88}%) scale({isActive ? 1 : 0.85}) translateY({isActive ? '0px' : '40px'});
          z-index: {zIndices[i]};
          opacity: {Math.abs(diff) > 1 ? 0 : (isActive ? 1 : 0.4)};
          pointer-events: {isActive ? 'auto' : 'none'};
          border-color: {isActive ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.02)'};
        "
      >
        
        <h3 class="font-display text-3xl font-semibold tracking-tight mb-4 text-foreground/90">
          {reason.title}
        </h3>
        
        <p class="font-body text-[15px] text-foreground/60 leading-relaxed mb-8">
          {reason.body}
        </p>

        <!-- Impact Box -->
        <div class="bg-black/50 rounded-2xl p-5 border border-white/5 mb-auto transition-colors">
          <span class="block font-body text-xs text-foreground/50 mb-1.5 font-medium">Impact:</span>
          <span class="block font-display text-lg font-medium text-foreground/90">Fokus pada hasil akhir.</span>
        </div>

        <!-- Glass Icon Decoration at Bottom -->
        <div class="absolute -bottom-10 -right-10 w-64 h-64 bg-gradient-to-br from-primary/30 to-transparent rounded-full blur-[60px] pointer-events-none transition-opacity duration-700 {isActive ? 'opacity-100' : 'opacity-0'}"></div>
        
        <div class="absolute bottom-0 inset-x-0 h-40 flex items-end justify-center pointer-events-none">
          <div class="w-48 h-40 liquid-glass bg-white/5 border-white/10 rounded-t-[48px] flex items-center justify-center border-b-0 transition-transform duration-700 ease-out {isActive ? 'translate-y-8' : 'translate-y-24'}">
            <svelte:component this={Icons[reason.icon]} class="size-16 text-white/40 drop-shadow-2xl" />
          </div>
        </div>
      </div>
    {/each}
  </div>
</section>

<style>
  .hide-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .hide-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
</style>
