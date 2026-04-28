<script>
  import { PROCESS_STEPS, CTA_HEADLINE, CTA_SUB, CTA_LABEL, CTA_HREF, LANG } from "@/lib/constants";
  import { onMount } from "svelte";
  import { ArrowRight } from "lucide-svelte";
  
  let sectionRef;
  let scrollProgress = 0;
  
  let trackWidth = 0;
  let windowWidth = 0;
  
  // Hitung seberapa jauh track harus digeser ke kiri.
  // Maksimum geseran adalah (Lebar Track - Lebar Layar + margin kanan yang aman)
  $: maxTranslate = Math.max(0, trackWidth - windowWidth + (windowWidth > 1024 ? 200 : 50));
  
  onMount(() => {
    const handleScroll = () => {
      if (!sectionRef) return;
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
    };
    
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  });
</script>

<svelte:window bind:innerWidth={windowWidth} />

<!-- Mengurangi tinggi dari 400vh ke 300vh agar terasa lebih cepat dan pas -->
<section bind:this={sectionRef} id="processus" class="relative h-[300vh] bg-background">
  <div class="sticky top-0 h-screen w-full flex flex-col justify-start overflow-hidden border-t border-border/10 pt-24 md:pt-32">
    
    <!-- Horizontal Scroll Area -->
    <div class="relative w-full h-[600px] flex items-center mt-8">
      
      <!-- Dekorasi Garis Tengah (Sumbu Axis) -->
      <div class="absolute inset-x-0 top-1/2 -translate-y-1/2 pointer-events-none hidden lg:block z-0">
        <div class="w-full h-32 bg-gradient-to-r from-transparent via-primary/30 to-transparent blur-3xl opacity-50"></div>
        <div class="w-full h-[2px] bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.4)_50%,transparent_100%)] shadow-[0_0_20px_rgba(255,255,255,0.6)]"></div>
        <div class="w-full h-[2px] border-t-[4px] border-dashed border-white/30 mt-1"></div>
      </div>

      <!-- Track yang bergerak ke kiri berdasarkan scrollProgress -->
      <div 
        bind:clientWidth={trackWidth}
        class="flex items-center gap-10 lg:gap-24 absolute left-6 lg:left-[calc((100vw-1400px)/2+24px)] transition-transform duration-75 ease-out z-10 w-max pr-12 lg:pr-32" 
        style="transform: translateX(-{scrollProgress * maxTranslate}px);"
      >
        
        <!-- Teks Utama sekarang berada di dalam Track agar ikut scroll -->
        <div class="w-[320px] md:w-[480px] shrink-0 flex flex-col justify-center bg-background/50 backdrop-blur-sm p-6 rounded-3xl -ml-6 border border-transparent">
          <span class="border border-white/10 text-foreground/80 rounded-full px-5 py-2 text-xs bg-white/5 mb-6 font-medium tracking-wide w-max">
            How it Works
          </span>
          <h2 class="font-display text-4xl md:text-5xl lg:text-[56px] leading-[1.05] tracking-tight text-foreground font-semibold mb-6">
            Jalur Anda dari Ide hingga Peluncuran
          </h2>
          <p class="font-body text-[15px] text-foreground/60 leading-relaxed max-w-sm">
            Mengubah prospek dari CRM atau ide konsep Anda menjadi aset digital berkualitas tinggi yang siap mendominasi pasar secara efisien.
          </p>
        </div>

        {#each PROCESS_STEPS as step, i}
          <!-- Kartu dengan efek zig-zag ekstrem: Card genap ke atas, ganjil ke bawah -->
          <div class="w-[320px] md:w-[380px] shrink-0 bg-[#161616] p-8 md:p-10 rounded-[32px] border border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col {i % 2 === 0 ? 'lg:-translate-y-36' : 'lg:translate-y-36'} relative z-20">
            
            <div class="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center font-display text-xl font-medium mb-8 text-foreground/80 shadow-inner">
              {step.n.padStart(2, "0")}
            </div>
            
            <h3 class="font-display text-2xl font-medium tracking-tight mb-4 text-foreground/90">
              {step.title}
            </h3>
            
            <p class="font-body text-[15px] text-foreground/60 leading-relaxed">
              {step.body}
            </p>
          </div>
        {/each}

        <!-- FINAL CTA SLIDE DI AKHIR SCROLL -->
        <div class="w-[90vw] lg:w-[1100px] shrink-0 flex items-center justify-between gap-12 lg:gap-24 pl-10 lg:pl-32 relative z-20">
          
          <!-- Huruf K Raksasa Menggantikan V -->
          <div class="hidden lg:flex w-1/2 justify-center relative select-none">
            <div class="absolute inset-0 bg-primary/30 blur-[120px] rounded-full"></div>
            <span 
              class="relative text-[500px] leading-none font-display font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-primary to-background drop-shadow-[0_20px_50px_rgba(147,51,234,0.8)]" 
              style="-webkit-text-stroke: 6px rgba(255,255,255,0.3);"
            >
              K
            </span>
          </div>

          <!-- Teks CTA & Tombol -->
          <div class="flex flex-col items-start w-full lg:w-1/2 pr-10">
            <div class="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center font-display text-lg mb-8 shadow-inner text-foreground/70">
              ?
            </div>
            <h2 class="font-display text-4xl md:text-5xl lg:text-[56px] leading-[1.05] tracking-tight text-foreground font-semibold mb-6">
              {CTA_HEADLINE}
            </h2>
            <p class="font-body text-base lg:text-[17px] text-foreground/60 leading-relaxed max-w-md mb-10">
              {CTA_SUB}
            </p>
            
            <!-- Tombol Pill seperti di gambar -->
            <a href={CTA_HREF} class="inline-flex items-center gap-4 bg-white hover:bg-white/90 text-black rounded-full pl-6 pr-2 py-2 transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)]">
              <span class="font-medium text-sm lg:text-base">{CTA_LABEL}</span>
              <div class="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center shadow-lg">
                <ArrowRight class="size-5" />
              </div>
            </a>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</section>
