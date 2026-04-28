<script>
  import { SERVICES, LANG } from "@/lib/constants";
  import * as Icons from "lucide-svelte";
  import BlurText from "./ui/BlurText.svelte";
</script>

<section id="services" class="relative py-28 md:py-40 bg-background overflow-hidden">
  <div class="max-w-[var(--max)] mx-auto px-[var(--gutter)] flex flex-col items-center text-center mb-20">
    <span class="border border-primary/30 text-primary rounded-full px-4 py-1.5 text-xs bg-primary/10 mb-6 font-medium tracking-wide">
      Main features
    </span>
    
    <h2 class="font-display text-4xl md:text-5xl lg:text-6xl tracking-tight mb-5 text-foreground">
      Tingkatkan <span class="text-primary font-bold">Bisnis Anda</span>
    </h2>
    
    <p class="font-body text-foreground/70 max-w-2xl text-base md:text-lg">
      Solusi pengembangan website dan aplikasi cerdas yang membantu mengkualifikasi leads, otomatisasi alur kerja, dan meningkatkan pendapatan Anda secara autopilot.
    </p>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[var(--max)] mx-auto px-[var(--gutter)]">
    {#each SERVICES as service, idx}
      <div class="liquid-glass rounded-3xl p-8 relative group transition-all duration-500 hover:border-primary/50 hover:bg-white/5 flex flex-col h-full border border-border/20 shadow-lg">
        
        <!-- Animated Icon Container (Visual Header of Card) -->
        <div class="w-full h-32 mb-8 relative rounded-xl bg-background/50 flex items-center justify-center overflow-hidden border border-white/5">
          
          <!-- Animated Laser Line -->
          <div 
            class="absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/80 to-transparent anim-laser"
            style="animation-delay: {idx * 0.7}s;"
          ></div>
          
          <!-- Panning Grid Background -->
          <div class="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)] anim-pan"></div>

          <!-- Floating Icon Badge -->
          <div 
            class="relative z-10 w-14 h-14 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center anim-float anim-glow group-hover:scale-110 transition-transform duration-500"
            style="animation-delay: {idx * 0.3}s;"
          >
            <svelte:component this={Icons[service.icon]} class="size-6 text-primary" />
          </div>
        </div>

        <h3 class="font-display text-2xl font-semibold tracking-tight mb-3 text-foreground">
          {service.title}
        </h3>
        <p class="font-body text-sm text-foreground/60 leading-relaxed">
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
  @keyframes laser {
    0% { transform: translate(-100%, -50%); opacity: 0; }
    30% { opacity: 1; }
    70% { opacity: 1; }
    100% { transform: translate(100%, -50%); opacity: 0; }
  }
  @keyframes pan {
    0% { background-position: 0px 0px; }
    100% { background-position: 20px 20px; }
  }
  @keyframes glow-pulse {
    0%, 100% { box-shadow: 0 0 15px rgba(147, 51, 234, 0.3); }
    50% { box-shadow: 0 0 35px rgba(147, 51, 234, 0.7); }
  }

  .anim-float { animation: float 4s ease-in-out infinite; }
  .anim-laser { animation: laser 3s linear infinite; }
  .anim-pan { animation: pan 4s linear infinite; }
  .anim-glow { animation: glow-pulse 3s ease-in-out infinite; }
</style>
