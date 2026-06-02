<script>
  import { CTA_HREF } from "@/lib/constants";
  import { t } from "@/lib/i18n";
  import { onMount } from "svelte";
  import { ArrowRight, Workflow } from "lucide-svelte";
  import { isLeadModalOpen } from "@/lib/stores";
  
  let sectionRef;
  let scrollProgress = 0;
  
  let trackWidth = 0;
  let windowWidth = 1024;
  
  $: isMobile = windowWidth < 768;
  
  // Hitung seberapa jauh track harus digeser ke kiri.
  // Maksimum geseran adalah (Lebar Track - Lebar Layar + margin kanan yang aman)
  $: maxTranslate = Math.max(0, trackWidth - windowWidth + (windowWidth > 1024 ? 200 : 50));
  
  function handleScroll() {
    if (!sectionRef) return;
    if (isMobile) {
      scrollProgress = 0;
      return;
    }
    const rect = sectionRef.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    
    // Calculate scroll progress within the sticky section
    if (rect.top <= 0) {
      const totalScrollable = rect.height - windowHeight;
      let progress = Math.abs(rect.top) / totalScrollable;
      scrollProgress = Math.max(0, Math.min(1, progress));
    } else {
      scrollProgress = 0;
    }
  }

  $: {
    if (typeof window !== 'undefined' && sectionRef && isMobile !== undefined) {
      handleScroll();
    }
  }

  onMount(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  });
</script>

<svelte:window bind:innerWidth={windowWidth} />

<section bind:this={sectionRef} id="processus" class="relative {isMobile ? '' : 'h-[300vh]'} bg-background">
  <div class="{isMobile ? 'py-24' : 'sticky top-0 h-screen pt-24 md:pt-32'} w-full flex flex-col justify-start overflow-hidden border-t border-border/10">
    <!-- Sticky-wise ambient background glows for deep purple/pink futuristic depth -->
    <div class="absolute top-[10%] right-[5%] w-[600px] h-[600px] bg-primary-light/4 rounded-full blur-[140px] pointer-events-none z-0"></div>
    <div class="absolute bottom-[10%] left-[5%] w-[700px] h-[700px] bg-primary/8 rounded-full blur-[160px] pointer-events-none z-0"></div>
    
    <!-- Horizontal Scroll Area -->
    <div class="relative w-full {isMobile ? 'mt-8' : 'h-[600px] flex items-center mt-8'}">
      
      <!-- Track yang bergerak ke kiri berdasarkan scrollProgress -->
      <div 
        bind:clientWidth={trackWidth}
        class="flex {isMobile ? 'overflow-x-auto snap-x snap-mandatory px-6 gap-6 pb-12 w-full [scrollbar-width:none] [&::-webkit-scrollbar]:hidden items-stretch' : 'items-center gap-10 lg:gap-24 absolute left-6 md:left-12 lg:left-[max(3rem,calc((100vw-1400px)/2+1.5rem))] transition-transform duration-75 ease-out z-10 w-max pr-12 lg:pr-32'}" 
        style={isMobile ? "" : `transform: translateX(-${scrollProgress * maxTranslate}px);`}
      >
        
        <!-- Dekorasi Garis Tengah (Sumbu Axis) dipindah ke dalam track agar putus sebelum logo -->
        <div class="absolute top-1/2 -translate-y-1/2 pointer-events-none hidden lg:block z-0" style="left: -50vw; right: calc(1100px + 8rem);">
          <div class="w-full h-32 bg-gradient-to-r from-transparent via-primary-light/10 to-transparent blur-3xl opacity-40"></div>
          <div class="w-full h-[2px] bg-[linear-gradient(90deg,transparent_0%,rgba(247,37,134,0.3)_50%,transparent_100%)] shadow-[0_0_20px_rgba(247,37,134,0.3)]"></div>
          <div class="w-full h-[2px] border-t-[4px] border-dashed border-white/10 mt-1"></div>
        </div>
        
        <!-- Teks Utama sekarang berada di dalam Track agar ikut scroll -->
        <div class="w-[320px] md:w-[480px] shrink-0 flex flex-col justify-center bg-background/40 backdrop-blur-md p-8 rounded-3xl border border-white/5 shadow-xl {isMobile ? 'snap-center mx-auto' : '-ml-6'}">
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary-light uppercase tracking-wider mb-6 w-max {isMobile ? 'mx-auto' : ''}">
            <Workflow class="size-3.5 text-primary-light" />
            <span>{$t.PROCESS_BADGE}</span>
          </div>
          <h2 class="font-display text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1.05] tracking-tight text-foreground uppercase mb-6 {isMobile ? 'text-center' : ''}">
            {$t.PROCESS_HEADING}
            <span class="text-primary-light italic drop-shadow-[0_0_15px_rgba(247,37,134,0.25)]">
              {$t.PROCESS_HEADING_HIGHLIGHT}
            </span>
          </h2>
          <p class="font-body text-[15px] text-foreground/60 leading-relaxed max-w-sm {isMobile ? 'text-center mx-auto' : ''}">
            {$t.PROCESS_DESC}
          </p>
        </div>

        {#each $t.PROCESS_STEPS as step, i}
          <div 
            class="w-[320px] md:w-[380px] shrink-0 p-8 md:p-10 rounded-[32px] border flex flex-col {i % 2 === 0 ? 'lg:-translate-y-36' : 'lg:translate-y-36'} relative z-20 backdrop-blur-xl {isMobile ? 'snap-center' : ''}"
            style="
              background: linear-gradient(135deg, rgba(247, 37, 134, 0.04) 0%, rgba(20, 10, 30, 0.85) 60%, rgba(247, 37, 134, 0.01) 100%);
              border-color: rgba(255, 255, 255, 0.06);
              box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
            "
          >
            
            <!-- Step Number Bubble - glowing & matching primary fuchsia theme -->
            <div class="w-14 h-14 rounded-full bg-primary-light/10 border border-primary-light/20 flex items-center justify-center font-display text-xl font-bold mb-8 text-primary-light shadow-[0_0_15px_rgba(247,37,134,0.15)]">
              {step.n.padStart(2, "0")}
            </div>
            
            <h3 class="font-display text-2xl font-bold tracking-tight mb-4 text-white">
              {step.title}
            </h3>
            
            <p class="font-body text-[15px] text-white/60 leading-relaxed">
              {step.body}
            </p>
          </div>
        {/each}

        <!-- FINAL CTA SLIDE DI AKHIR SCROLL -->
        <div class="w-[320px] md:w-[90vw] lg:w-[1100px] shrink-0 flex items-center justify-between gap-12 lg:gap-24 relative z-20 {isMobile ? 'snap-center pl-0 justify-center text-center' : 'pl-10 lg:pl-32'}">
          
          <!-- Gambar K Raksasa -->
          <div class="hidden lg:flex w-1/2 justify-center relative select-none items-center">
            <div class="absolute inset-0 bg-primary-light/20 blur-[120px] rounded-full"></div>
            <img 
              src="/assets/k.png" 
              alt="Kodeflow Icon" 
              class="relative w-[350px] h-auto drop-shadow-[0_20px_50px_rgba(247,37,134,0.5)] z-10 animate-float"
            />
          </div>

          <!-- Teks CTA & Tombol -->
          <div class="flex flex-col w-full lg:w-1/2 {isMobile ? 'items-center pr-0' : 'items-start pr-10'}">
            <div class="w-12 h-12 rounded-full bg-primary-light/10 border border-primary-light/20 text-primary-light font-bold flex items-center justify-center font-display text-lg mb-8 shadow-[0_0_15px_rgba(247,37,134,0.15)]">
              ?
            </div>
            <h2 class="font-display text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1.05] tracking-tight text-foreground uppercase mb-6">
              {$t.CTA_HEADLINE}
              <span class="text-primary-light italic drop-shadow-[0_0_15px_rgba(247,37,134,0.25)]">
                {$t.CTA_HEADLINE_HIGHLIGHT}
              </span>
            </h2>
            <p class="font-body text-base lg:text-[17px] text-foreground/60 leading-relaxed max-w-md mb-10 {isMobile ? 'mx-auto' : ''}">
              {$t.CTA_SUB}
            </p>
            
            <!-- Tombol Pill seperti di gambar -->
            <button 
              on:click={() => isLeadModalOpen.set(true)} 
              class="inline-flex items-center gap-4 bg-white hover:bg-white/95 text-black rounded-full pl-6 pr-2 py-2 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.25)] hover:shadow-[0_0_30px_rgba(247,37,134,0.35)] hover:scale-[1.03] active:scale-95 group/btn"
            >
              <span class="font-semibold text-sm lg:text-base">{$t.CTA_LABEL}</span>
              <div class="w-10 h-10 rounded-full bg-primary-light text-white flex items-center justify-center shadow-lg transition-colors duration-300 group-hover/btn:bg-primary">
                <ArrowRight class="size-5" />
              </div>
            </button>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</section>
