<script>
  import { t } from "@/lib/i18n";
  import * as Icons from "lucide-svelte";
  import { ArrowRight, ArrowLeft } from "lucide-svelte";
  
  $: reasonsLength = $t.REASONS.length;
  let virtualIndex = 1000 * 4 + 1; // Default to 4 but it'll update if needed

  const next = () => virtualIndex++;
  const prev = () => virtualIndex--;

  let diffs = [];
  let isTeleporting = [];
  let zIndices = [];

  $: {
    const N = $t.REASONS.length;
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

  // --- Horizontal Scroll, Touch Swipe & Mouse Drag Logic ---
  let startX = 0;
  let isDragging = false;
  let wheelAccumulator = 0;
  let isThrottled = false;

  const handlePointerDown = (e) => {
    isDragging = true;
    startX = e.clientX || (e.touches && e.touches[0].screenX);
  };

  const handlePointerUp = (e) => {
    if (!isDragging) return;
    isDragging = false;
    let endX = e.clientX || (e.changedTouches && e.changedTouches[0].screenX);
    const minSwipeDistance = 50;
    if (endX < startX - minSwipeDistance) next();
    if (endX > startX + minSwipeDistance) prev();
  };

  const handlePointerLeave = (e) => {
    if (isDragging) {
      handlePointerUp(e);
    }
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

<section id="pourquoi" class="relative py-28 md:py-40 bg-background overflow-hidden border-t border-white/5">
  <!-- Ambient background glow filters for rich deep purple/pink visual depth -->
  <div class="absolute top-1/4 left-[-10%] w-[500px] h-[500px] bg-primary-light/8 rounded-full blur-[120px] pointer-events-none"></div>
  <div class="absolute bottom-1/4 right-[-10%] w-[600px] h-[600px] bg-primary/12 rounded-full blur-[150px] pointer-events-none"></div>

  <div class="max-w-[1400px] mx-auto px-6 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 relative z-10">
    <div class="flex flex-col items-start text-left">
      <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary-light uppercase tracking-wider mb-6 animate-fade-up">
        <Icons.HelpCircle class="size-3.5 text-primary-light" />
        <span>{$t.POURQUOI_BADGE}</span>
      </div>
      <h2 class="font-display text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white uppercase leading-tight animate-fade-up">
        {$t.POURQUOI_TITLE}
        <span class="text-primary-light italic drop-shadow-[0_0_15px_rgba(247,37,134,0.25)]">
          {$t.POURQUOI_TITLE_HIGHLIGHT}
        </span>
      </h2>
    </div>
    
    <div class="flex items-center gap-3 relative z-10">
      <button 
        on:click={prev} 
        aria-label="Previous card"
        class="size-12 rounded-full bg-white/5 border border-white/10 text-white flex items-center justify-center backdrop-blur-md hover:bg-primary-light hover:border-primary-light/50 hover:text-white transition-all duration-300 shadow-lg hover:shadow-[0_0_15px_rgba(247,37,134,0.35)] active:scale-95"
      >
        <ArrowLeft class="size-5" />
      </button>
      <button 
        on:click={next} 
        aria-label="Next card"
        class="size-12 rounded-full bg-white/5 border border-white/10 text-white flex items-center justify-center backdrop-blur-md hover:bg-primary-light hover:border-primary-light/50 hover:text-white transition-all duration-300 shadow-lg hover:shadow-[0_0_15px_rgba(247,37,134,0.35)] active:scale-95"
      >
        <ArrowRight class="size-5" />
      </button>
    </div>
  </div>

  <!-- Carousel Container (Added Swipe, Drag & Wheel events) -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div 
    class="relative w-full h-[550px] md:h-[600px] flex justify-center mt-16 overflow-hidden md:overflow-visible touch-pan-y select-none cursor-grab active:cursor-grabbing"
    on:mousedown={handlePointerDown}
    on:mouseup={handlePointerUp}
    on:mouseleave={handlePointerLeave}
    on:touchstart={handlePointerDown}
    on:touchend={handlePointerUp}
    on:wheel={handleWheel}
  >
    {#each $t.REASONS as reason, i}
      {@const diff = diffs[i]}
      {@const isActive = diff === 0}
      {@const teleport = isTeleporting[i]}
      
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <div 
        class="absolute top-0 w-[90vw] md:w-[450px] h-[500px] md:h-[550px] rounded-[32px] p-8 md:p-10 flex flex-col border shadow-2xl ease-[cubic-bezier(0.2,0.8,0.2,1)] {teleport ? 'transition-opacity duration-700' : 'transition-all duration-700'}"
        on:click={() => {
          if (diff === 1) next();
          if (diff === -1) prev();
        }}
        style="
          transform: translateX({diff * 88}%) scale({isActive ? 1 : 0.85}) translateY({isActive ? '0px' : '40px'});
          z-index: {zIndices[i]};
          opacity: {Math.abs(diff) > 1 ? 0 : (isActive ? 1 : 0.4)};
          pointer-events: {Math.abs(diff) <= 1 ? 'auto' : 'none'};
          cursor: {Math.abs(diff) === 1 ? 'pointer' : 'default'};
          border-color: {isActive ? 'rgba(247, 37, 134, 0.3)' : 'rgba(255, 255, 255, 0.05)'};
          background: {isActive ? 'linear-gradient(135deg, rgba(247, 37, 134, 0.12) 0%, rgba(20, 10, 30, 0.95) 50%, rgba(247, 37, 134, 0.02) 100%)' : 'linear-gradient(135deg, rgba(255, 255, 255, 0.02) 0%, rgba(15, 10, 25, 0.7) 100%)'};
          box-shadow: {isActive ? '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 40px rgba(247, 37, 134, 0.1)' : '0 10px 30px -15px rgba(0, 0, 0, 0.7)'};
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
        "
      >
        
        <h3 class="font-display text-3xl font-semibold tracking-tight mb-4 transition-colors duration-300 {isActive ? 'text-white' : 'text-white/70'}">
          {reason.title}
        </h3>
        
        <p class="font-body text-[15px] leading-relaxed mb-8 transition-colors duration-300 {isActive ? 'text-white/70' : 'text-white/50'}">
          {reason.body}
        </p>

        <!-- Impact Box -->
        <div class="rounded-2xl p-5 border mb-auto transition-all duration-500 shadow-inner {isActive ? 'bg-primary-light/8 border-primary-light/20 shadow-primary-light/5' : 'bg-white/[0.03] border-white/5'}">
          <span class="block font-body text-[11px] mb-1.5 font-bold tracking-wider uppercase {isActive ? 'text-primary-light' : 'text-white/40'}">
            {$t.POURQUOI_IMPACT_LABEL}
          </span>
          <span class="block font-display text-lg font-medium tracking-wide transition-colors duration-300 {isActive ? 'text-white' : 'text-white/80'}">
            {reason.impact || $t.POURQUOI_IMPACT_TEXT}
          </span>
        </div>

        <!-- Glass Icon Decoration at Bottom -->
        <div class="absolute -bottom-10 -right-10 w-64 h-64 bg-gradient-to-br from-primary-light/20 to-transparent rounded-full blur-[60px] pointer-events-none transition-opacity duration-700 {isActive ? 'opacity-100' : 'opacity-0'}"></div>
        
        <div class="absolute bottom-0 inset-x-0 h-40 flex items-end justify-center pointer-events-none">
          <div 
            class="w-48 h-40 liquid-glass rounded-t-[48px] flex items-center justify-center transition-all duration-700 ease-out {isActive ? 'translate-y-8 bg-primary-light/5 border-primary-light/20' : 'translate-y-24 bg-white/5 border-white/10'}"
            style="border-bottom-width: 0;"
          >
            <svelte:component 
              this={Icons[reason.icon]} 
              class="size-16 transition-all duration-700 {isActive ? 'text-primary-light drop-shadow-[0_0_15px_rgba(247,37,134,0.6)] scale-110' : 'text-white/20 scale-100'}" 
            />
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
