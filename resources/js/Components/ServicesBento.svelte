<script>
  import { SERVICES, LANG } from "@/lib/constants";
  import * as Icons from "lucide-svelte";
  import BlurText from "./ui/BlurText.svelte";
  import LottiePlayer from "./ui/LottiePlayer.svelte";

  const LOTTIE_URLS = [
    // 0: Web Development
    "https://assets3.lottiefiles.com/packages/lf20_vnikrcia.json",
    // 1: Responsive Design
    "https://assets2.lottiefiles.com/packages/lf20_w51pcehl.json",
    // 2: Fast Performance
    "https://cdn.prod.website-files.com/690b5a39d269efd72421ec15/699f223d66a26c53542f7de9_03.json",
    // 3: Workflow Automation (Dipindah dari Web Dev sebelumnya)
    "https://cdn.prod.website-files.com/690b5a39d269efd72421ec15/699f223d50d87df2a92b7743_53de64471d0a277f8667726a0df311a3_05.json",
    // 4: API Integration
    "https://cdn.prod.website-files.com/690b5a39d269efd72421ec15/699f223d78724cb1ec19e035_04.json",
    // 5: Expert Mentorship
    "https://assets1.lottiefiles.com/packages/lf20_qp1q7mct.json"
  ];
</script>

<section id="services" class="relative py-28 md:py-40 bg-[#fafafa] overflow-hidden">
  <div class="max-w-[var(--max)] mx-auto px-[var(--gutter)] flex flex-col items-center text-center mb-20">
    <span class="border border-primary/30 text-primary rounded-full px-4 py-1.5 text-xs bg-primary/10 mb-6 font-medium tracking-wide">
      Main features
    </span>
    
    <h2 class="font-display text-4xl md:text-5xl lg:text-6xl tracking-tight mb-5 text-neutral-900">
      Tingkatkan <span class="text-primary font-semibold">Bisnis Anda</span>
    </h2>
    
    <p class="font-body text-neutral-600 max-w-2xl text-base md:text-lg">
      Solusi pengembangan website dan aplikasi cerdas yang membantu mengkualifikasi leads, otomatisasi alur kerja, dan meningkatkan pendapatan Anda secara autopilot.
    </p>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[var(--max)] mx-auto px-[var(--gutter)]">
    {#each SERVICES as service, idx}
      <div class="bg-white rounded-[32px] p-8 relative group transition-all duration-500 hover:-translate-y-1 flex flex-col h-full border border-black/[0.03] shadow-[0_10px_40px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)]">
        
        <!-- Animated Icon Container (Visual Header of Card) -->
        <div class="w-full h-32 mb-8 relative flex items-center justify-center overflow-hidden">
          
          <!-- Lottie Background Animation -->
          <div class="absolute inset-0 w-full h-full opacity-80 mix-blend-multiply flex justify-center items-center scale-[1.35]">
            <LottiePlayer src={LOTTIE_URLS[idx % LOTTIE_URLS.length]} speed={1} />
          </div>

          <!-- Floating Icon Badge -->
          <div 
            class="relative z-10 w-14 h-14 rounded-full bg-white border border-neutral-100 flex items-center justify-center anim-float group-hover:scale-110 transition-transform duration-500 shadow-[0_4px_15px_rgba(131,25,160,0.1)]"
            style="animation-delay: {idx * 0.3}s;"
          >
            <svelte:component this={Icons[service.icon]} class="size-6 text-primary" />
          </div>
        </div>

        <h3 class="font-display text-2xl font-medium tracking-tight mb-3 text-neutral-900">
          {service.title}
        </h3>
        <p class="font-body text-sm text-neutral-500 leading-relaxed font-medium">
          {service.body}
        </p>
      </div>
    {/each}
  </div>
</section>

<style>
  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-8px); }
  }

  .anim-float { animation: float 4s ease-in-out infinite; }
</style>
