<script>
  import { t } from "@/lib/i18n";
  import { Quote, ArrowRight, ArrowLeft, MessageSquare } from "lucide-svelte";
  
  let currentIndex = 0;
  
  const next = () => {
    currentIndex = (currentIndex + 1) % $t.CASE_STUDIES.length;
  };
  
  const prev = () => {
    currentIndex = (currentIndex - 1 + $t.CASE_STUDIES.length) % $t.CASE_STUDIES.length;
  };

  $: activeCase = $t.CASE_STUDIES[currentIndex];

  // Helper untuk menentukan posisi kartu di tumpukan
  const getDiff = (i, current) => {
     if (current === 0 && i === $t.CASE_STUDIES.length - 1) return -1;
     if (i === current - 1) return -1;
     
     let diff = (i - current) % $t.CASE_STUDIES.length;
     return ((diff % $t.CASE_STUDIES.length) + $t.CASE_STUDIES.length) % $t.CASE_STUDIES.length;
  }
</script>

<section id="testimonials" class="relative py-28 md:py-40 bg-white overflow-hidden border-t border-black/5">
  <div class="max-w-[1400px] mx-auto px-6 flex flex-col items-center text-center mb-20">
    <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary-light uppercase tracking-wider mb-6">
      <MessageSquare class="size-3.5 text-primary-light" />
      <span>{$t.TESTIMONIALS_BADGE}</span>
    </div>
    <h2 class="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black uppercase leading-tight max-w-[15ch]">
      {$t.TESTIMONIALS_HEADING}
      <span class="text-primary-light italic drop-shadow-[0_0_15px_rgba(247,37,134,0.25)]">
        {$t.TESTIMONIALS_HEADING_HIGHLIGHT}
      </span>
    </h2>
  </div>

  <div class="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-[280px_1fr_320px] gap-10 lg:gap-14 items-center">
    
    <!-- Left Column: Metrics -->
    <div class="flex flex-col gap-5 relative z-20 order-2 lg:order-1">
      {#each activeCase.metrics as metric}
        <div class="p-6 rounded-[24px] border border-black/5 bg-black/[0.02] flex flex-col justify-center backdrop-blur-sm transition-all duration-300">
          <span class="font-display text-4xl text-primary/90 font-bold tracking-tight mb-2 drop-shadow-[0_0_15px_rgba(147,51,234,0.1)]">
            {metric.value}
          </span>
          <span class="font-body text-sm text-black/60 leading-tight">
            {metric.label}
          </span>
        </div>
      {/each}
    </div>

    <!-- Center Column: Envelope & Card Stack -->
    <div class="relative w-full h-[600px] flex items-end justify-center order-1 lg:order-2">
      
      <!-- Card Stack Inside Envelope -->
      <div class="absolute inset-x-0 bottom-[150px] top-0 flex flex-col items-center justify-end z-10 perspective-1000">
        {#each $t.CASE_STUDIES as c, i}
          {@const diff = getDiff(i, currentIndex)}
          
          <div 
            class="absolute w-[90%] md:w-[420px] bg-white rounded-[24px] border border-black/10 p-8 shadow-xl transition-all duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)]"
            style="
              transform: translateY({diff === -1 ? -150 : -diff * 30}px) scale({diff === -1 ? 1.05 : 1 - diff * 0.05});
              z-index: {diff === -1 ? 25 : 20 - diff};
              opacity: {diff === -1 ? 0 : 1 - diff * 0.3};
              pointer-events: {diff === 0 ? 'auto' : 'none'};
            "
          >
            <!-- Tags -->
            <div class="flex gap-2 mb-6 flex-wrap">
              {#each c.tags as tag}
                 <span class="px-3 py-1 rounded-full bg-black/5 border border-black/10 text-[11px] font-medium text-black/70">{tag}</span>
              {/each}
            </div>
            
            <!-- Title -->
            <h3 class="font-display text-2xl leading-tight font-medium tracking-tight mb-8 text-black/90">
              {c.title}
            </h3>
            
            <!-- Challenge & Solution -->
            <div class="mb-5">
              <span class="block text-xs font-semibold text-black/40 mb-2 uppercase tracking-wider">{$t.TESTIMONIALS_CHALLENGE}</span>
              <p class="text-[13px] text-black/80 leading-relaxed font-body">{c.challenge}</p>
            </div>
            <div>
              <span class="block text-xs font-semibold text-primary/80 mb-2 uppercase tracking-wider">{$t.TESTIMONIALS_SOLUTION}</span>
              <p class="text-[13px] text-black/80 leading-relaxed font-body">{c.solution}</p>
            </div>
          </div>
        {/each}
      </div>

      <!-- SVG Envelope Front Overlay -->
      <div class="absolute inset-x-0 bottom-0 h-[280px] z-20 pointer-events-none drop-shadow-[0_-15px_30px_rgba(0,0,0,0.05)] flex justify-center">
        <svg class="w-[140%] md:w-[110%] h-full" preserveAspectRatio="none" viewBox="0 0 1000 400" fill="none">
          <path d="M-50 0 L500 280 L1050 0 L1050 450 L-50 450 Z" fill="#f4f4f5" stroke="rgba(0,0,0,0.05)" stroke-width="2" />
          <path d="M-50 450 L500 180 L1050 450 Z" fill="#ffffff" stroke="rgba(0,0,0,0.08)" stroke-width="2" />
          <path d="M-50 450 L500 180 L1050 450 Z" fill="url(#envelope-glow)" opacity="0.1"/>
          <defs>
            <linearGradient id="envelope-glow" x1="500" y1="180" x2="500" y2="450" gradientUnits="userSpaceOnUse">
              <stop stop-color="#9333EA" />
              <stop offset="1" stop-color="transparent" />
            </linearGradient>
          </defs>
        </svg>
        
        <!-- Navigation Buttons -->
        <div class="absolute bottom-16 inset-x-0 flex justify-center gap-4 pointer-events-auto">
          <button on:click={prev} class="size-12 rounded-full bg-black text-white flex items-center justify-center hover:bg-black/80 transition-colors shadow-lg">
            <ArrowLeft class="size-5" />
          </button>
          <button on:click={next} class="size-12 rounded-full bg-black/5 text-black border border-black/10 flex items-center justify-center hover:bg-black/10 transition-colors shadow-lg backdrop-blur-sm">
            <ArrowRight class="size-5" />
          </button>
        </div>
      </div>
    </div>

    <!-- Right Column: Quote -->
    <div class="p-8 md:p-10 rounded-[32px] border border-black/5 bg-[#fafafa] shadow-[0_20px_50px_rgba(0,0,0,0.05)] flex flex-col h-full justify-center relative z-20 order-3">
      <div class="w-14 h-14 rounded-full bg-black/5 border border-black/10 flex items-center justify-center mb-8 shadow-inner">
        <Quote class="size-6 text-black/40" />
      </div>
      <p class="font-body text-[15px] leading-relaxed text-black/90 font-medium italic">
        "{activeCase.quote}"
      </p>
      <div class="mt-8 pt-6 border-t border-black/5 flex flex-col">
        <span class="font-display font-medium text-black/80">{activeCase.author}</span>
      </div>
    </div>
    
  </div>
</section>
