<script>
  import { MapPin, Sparkles } from "lucide-svelte";
  import { fade, fly } from "svelte/transition";
  import { inview } from "@/lib/utils";
  import ArrowButton from "../ui/ArrowButton.svelte";
  import { t } from "@/lib/i18n";

  let show = false;
</script>

<section class="relative min-h-screen flex items-center pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden" use:inview on:enter={() => show = true}>
  <!-- Background Glows -->
  <div class="absolute top-0 right-0 w-[60vw] h-[60vh] bg-[radial-gradient(ellipse_at_top_right,rgba(217,70,239,0.2)_0%,transparent_60%)] pointer-events-none z-[1] mix-blend-screen"></div>
  <div class="absolute bottom-0 left-0 w-[50vw] h-[50vh] bg-[radial-gradient(ellipse_at_bottom_left,rgba(217,70,239,0.2)_0%,transparent_60%)] pointer-events-none z-[1] mix-blend-screen"></div>

  <div class="max-w-[var(--max)] w-full mx-auto px-[var(--gutter)] relative z-10">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative min-h-[40vh] lg:min-h-0">
      
      <!-- Left Content -->
      <div class="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left mt-8 lg:mt-0 relative z-10">
        {#if show}
          <div transition:fly={{ y: 20, duration: 600, delay: 100 }} class="flex items-center lg:items-start mb-6">
            <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary-light uppercase tracking-wider shadow-[0_0_15px_rgba(247,37,134,0.1)]">
              <Sparkles class="size-3.5 text-primary-light" />
              <span>{$t.ABOUT_HERO_BADGE}</span>
            </div>
          </div>
          
          <h1 transition:fly={{ y: 30, duration: 800, delay: 200 }} class="font-display text-4xl md:text-5xl lg:text-[64px] leading-[1.1] font-semibold text-foreground mb-6 drop-shadow-lg">
            {@html $t.ABOUT_HERO_TITLE}
          </h1>

          <div transition:fly={{ y: 20, duration: 600, delay: 450 }} class="inline-flex items-center px-6 py-3 md:px-8 md:py-4 rounded-full border border-primary/30 bg-primary/10 mb-10 liquid-glass shadow-[0_0_30px_rgba(217,70,239,0.15)] hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 cursor-default">
            <span class="font-display italic text-primary-light font-semibold text-lg md:text-2xl tracking-wider drop-shadow-md">{$t.ABOUT_HERO_QUOTE}</span>
          </div>

          <div transition:fly={{ y: 20, duration: 600, delay: 550 }} class="flex flex-col sm:flex-row items-center gap-6">
            <ArrowButton href="#contact" text={$t.ABOUT_HERO_CONSULT} size="lg" />
            
            <div class="flex items-center justify-center lg:justify-start gap-2 text-foreground/50 text-sm font-medium">
              <MapPin class="size-4" />
              <span>{$t.ABOUT_HERO_LOCATION}</span>
            </div>
          </div>
        {/if}
      </div>

      <!-- Right Visual -->
      <div class="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:translate-x-0 lg:translate-y-0 lg:static lg:col-span-5 w-full lg:w-auto h-[350px] md:h-[400px] lg:h-[500px] items-center justify-center opacity-15 md:opacity-20 lg:opacity-100 pointer-events-none lg:pointer-events-auto z-0">
        {#if show}
          <!-- Dramatic Spotlight Beam -->
          <div transition:fade={{ duration: 1500, delay: 600 }} class="absolute -top-10 lg:-top-10 left-1/2 -translate-x-1/2 w-[250px] md:w-[450px] h-[350px] lg:h-[500px] pointer-events-none z-0 mix-blend-screen flex flex-col items-center">
            <!-- Light Source Flare -->
            <div class="w-32 lg:w-40 h-8 lg:h-10 bg-white/30 blur-[20px] lg:blur-[25px] rounded-[100%] absolute top-0"></div>
            <div class="w-16 h-16 lg:w-24 lg:h-24 bg-primary/40 blur-[30px] lg:blur-[40px] rounded-full absolute -top-5"></div>
            <!-- Volumetric Light Beam -->
            <div class="w-full h-full bg-gradient-to-b from-white/15 via-primary/5 to-transparent blur-[15px] lg:blur-[25px] [clip-path:polygon(35%_0%,65%_0%,100%_100%,0%_100%)]"></div>
          </div>
          
          <!-- Premium Glowing Rings Backdrop -->
          <div transition:fade={{ duration: 1000, delay: 800 }} class="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
             <div class="absolute w-[200px] h-[200px] md:w-[340px] md:h-[340px] rounded-full border border-white/5 bg-white/[0.01] shadow-[inset_0_0_40px_rgba(255,255,255,0.02)]"></div>
             <div class="absolute w-[260px] h-[260px] md:w-[460px] md:h-[460px] rounded-full border border-white/[0.02]"></div>
          </div>

          <!-- Static Logo Container -->
          <div 
            transition:fly={{ x: 20, opacity: 0, duration: 1200, delay: 700 }} 
            class="relative z-10 w-48 h-48 md:w-[340px] md:h-[340px] flex items-center justify-center group"
          >
            <!-- Glowing aura behind the logo -->
            <div class="absolute inset-0 bg-primary/20 rounded-full blur-[80px] group-hover:bg-primary/30 group-hover:blur-[100px] transition-all duration-700 pointer-events-none"></div>
            
            <!-- Static Base Shadow -->
            <div class="absolute -bottom-8 left-1/2 -translate-x-1/2 w-48 md:w-56 h-6 bg-black/90 blur-xl rounded-full opacity-80"></div>
            
            <!-- The Logo with crisp 3D shadow and interaction -->
            <img 
              src="/assets/k.png" 
              alt="Kodeflow Logo" 
              class="relative z-10 w-[85%] h-[85%] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)] drop-shadow-[0_0_20px_rgba(217,70,239,0.2)] transition-all duration-700 ease-out group-hover:scale-105 group-hover:drop-shadow-[0_30px_50px_rgba(0,0,0,0.9)] group-hover:drop-shadow-[0_0_40px_rgba(217,70,239,0.4)]"
            />
          </div>
        {/if}
      </div>

    </div>
  </div>
</section>
