<script>
  import { Compass, Anchor, Shield, TrendingUp, ArrowLeft, ArrowRight } from "lucide-svelte";
  import { inview } from "@/lib/utils";
  import { fly } from "svelte/transition";
  import { cubicOut, cubicIn } from "svelte/easing";

  let show = false;

  const missions = [
    {
      title: "Build with intention",
      icon: Compass,
      desc: "Membangun sistem digital yang benar dari hari pertama — arsitektur scalable, antarmuka berpusat pada pengguna, standar engineering yang tidak dikompromikan demi kecepatan."
    },
    {
      title: "Stay when others leave",
      icon: Anchor,
      desc: "Hadir tidak hanya saat build, tapi saat maintain, iterate, dan scale. Komitmen kami dimulai tepat ketika kebanyakan vendor berpamitan — saat sistem go-live."
    },
    {
      title: "Quality over shortcuts",
      icon: Shield,
      desc: "Tidak ada technical debt yang kami wariskan. Setiap baris kode direview, setiap fitur melewati QA, karena produk yang dibangun sembarangan selalu meminta bayaran mahal."
    },
    {
      title: "Grow together",
      icon: TrendingUp,
      desc: "Ketika bisnis klien tumbuh, kami tumbuh bersamanya. Bukan sebagai vendor yang mengerjakan satu proyek lalu selesai, tapi partner yang memahami konteks dan arah selanjutnya."
    }
  ];

  let currentMissionIndex = 0;
  let direction = 'next';

  function nextMission() {
    direction = 'next';
    currentMissionIndex = (currentMissionIndex + 1) % missions.length;
  }

  function prevMission() {
    direction = 'prev';
    currentMissionIndex = (currentMissionIndex - 1 + missions.length) % missions.length;
  }
</script>

<section class="relative py-24 md:py-32" use:inview on:enter={() => show = true}>
  <div class="max-w-[1200px] mx-auto px-[var(--gutter)]">
    {#if show}
      <div 
        transition:fly={{ y: 40, duration: 1000, delay: 100, easing: cubicOut }} 
        class="bg-[#fafafa] rounded-[32px] md:rounded-[48px] overflow-hidden flex flex-col lg:flex-row shadow-[0_30px_80px_rgba(0,0,0,0.5)] relative"
      >
        <!-- Subtle inner gradient for premium light feel -->
        <div class="absolute inset-0 bg-gradient-to-br from-white via-[#fafafa] to-[#f4f4f4] pointer-events-none z-0"></div>

        <!-- Left: Visi (Static) -->
        <div class="lg:w-1/2 p-10 md:p-14 lg:p-20 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-black/5 bg-transparent relative z-10">
          <div>
            <!-- Section Pill -->
            <div class="inline-flex items-center justify-center border border-primary/20 text-primary rounded-full px-5 py-2 text-xs bg-primary/5 font-bold tracking-widest uppercase mb-10 shadow-[0_4px_15px_rgba(217,70,239,0.05)]">
              Visi Kami
            </div>
            
            <h2 class="font-display text-4xl md:text-5xl lg:text-[52px] font-semibold text-neutral-900 leading-[1.15] tracking-tight mb-8">
              Menjadi <span class="text-primary italic">technology partner</span> paling terpercaya
            </h2>
            
            <p class="font-body text-neutral-500 text-base md:text-lg leading-relaxed max-w-md">
              Membangun sistem digital yang tidak hanya selesai, tapi bertahan, berkembang, dan memberikan nilai nyata jangka panjang untuk bisnis di Indonesia dan Asia Tenggara.
            </p>
          </div>
          
          <!-- Navigation Arrows -->
          <div class="flex items-center gap-3 mt-16">
            <button on:click={prevMission} class="w-12 h-12 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center text-neutral-600 transition-colors">
              <ArrowLeft class="size-5" />
            </button>
            <button on:click={nextMission} class="w-12 h-12 rounded-full bg-primary hover:bg-primary/90 flex items-center justify-center text-white transition-colors shadow-lg shadow-primary/30">
              <ArrowRight class="size-5" />
            </button>
          </div>
        </div>

        <!-- Right: Misi (Dynamic Carousel) -->
        <div class="lg:w-1/2 p-6 md:p-10 lg:p-14 relative flex flex-col justify-center min-h-[450px] lg:min-h-[600px] z-10 overflow-hidden bg-transparent">
          
          {#key currentMissionIndex}
            <div 
              class="absolute inset-0 p-6 md:p-10 flex flex-col items-center justify-center"
              in:fly={{ x: direction === 'next' ? 300 : -300, duration: 800, opacity: 0, delay: 50, easing: cubicOut }}
              out:fly={{ x: direction === 'next' ? -300 : 300, duration: 800, opacity: 0, easing: cubicIn }}
            >
              <!-- Container Card -->
              <div class="w-full h-full bg-white rounded-[32px] md:rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-black/5 flex flex-col items-center justify-center text-center p-8 md:p-12 relative overflow-hidden">
              <!-- Icon -->
              <div class="w-16 h-16 rounded-full border border-primary/20 bg-primary/5 flex items-center justify-center text-primary mb-8 mx-auto shadow-inner">
                <svelte:component this={missions[currentMissionIndex].icon} class="size-8" />
              </div>
              
              <!-- Mission Content -->
              <h3 class="font-display text-2xl md:text-3xl font-semibold text-neutral-900 mb-5">
                {missions[currentMissionIndex].title}
              </h3>
              
                <p class="font-body text-neutral-500 text-lg leading-relaxed max-w-sm mx-auto">
                  {missions[currentMissionIndex].desc}
                </p>
              </div>
            </div>
          {/key}
          
          <!-- Indicator -->
          <div class="absolute bottom-4 left-1/2 -translate-x-1/2 font-display text-sm font-bold text-primary/50 tracking-widest z-20">
            {currentMissionIndex + 1}/{missions.length}
          </div>
          
        </div>
      </div>
    {/if}
  </div>
</section>
