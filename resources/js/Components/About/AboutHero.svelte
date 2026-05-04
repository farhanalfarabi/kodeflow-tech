<script>
  import { MapPin } from "lucide-svelte";
  import { fade, fly } from "svelte/transition";
  import { inview } from "@/lib/utils";
  import ArrowButton from "../ui/ArrowButton.svelte";

  let show = false;
</script>

<section class="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden" use:inview on:enter={() => show = true}>
  <!-- Background Glows -->
  <div class="absolute top-0 right-0 w-[60vw] h-[60vh] bg-[radial-gradient(ellipse_at_top_right,rgba(217,70,239,0.2)_0%,transparent_60%)] pointer-events-none z-[1] mix-blend-screen"></div>
  <div class="absolute bottom-0 left-0 w-[50vw] h-[50vh] bg-[radial-gradient(ellipse_at_bottom_left,rgba(217,70,239,0.2)_0%,transparent_60%)] pointer-events-none z-[1] mix-blend-screen"></div>

  <div class="max-w-[var(--max)] mx-auto px-[var(--gutter)] relative z-10">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
      
      <!-- Left Content -->
      <div class="lg:col-span-7 flex flex-col items-start text-left">
        {#if show}
          <div transition:fly={{ y: 20, duration: 600, delay: 100 }} class="flex items-start mb-6">
            <span class="inline-block border border-white/10 text-white/90 rounded-full px-5 py-2 text-xs bg-white/5 font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(255,255,255,0.05)]">
              Tentang Kami
            </span>
          </div>
          
          <h1 transition:fly={{ y: 30, duration: 800, delay: 200 }} class="font-display text-4xl md:text-5xl lg:text-[64px] leading-[1.1] font-semibold text-foreground mb-6 drop-shadow-lg">
            Kami bukan sekadar vendor IT.<br/>
            Kami adalah tim yang ikut<br/>
            berkembang bersama <span class="text-primary italic">Anda.</span>
          </h1>

          <div transition:fly={{ y: 20, duration: 600, delay: 450 }} class="inline-flex items-center px-5 py-2 rounded-full border border-primary/20 bg-primary/5 mb-10 liquid-glass">
            <span class="font-display italic text-primary font-medium tracking-wide">"We Build. We Maintain. You Scale."</span>
          </div>

          <div transition:fly={{ y: 20, duration: 600, delay: 550 }} class="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <ArrowButton href="#contact" text="Konsultasi Gratis" size="lg" />
            
            <div class="flex items-center gap-2 text-foreground/50 text-sm font-medium">
              <MapPin class="size-4" />
              <span>Pasuruan, Jawa Timur · Est. 2022</span>
            </div>
          </div>
        {/if}
      </div>

      <!-- Right Visual -->
      <div class="lg:col-span-5 relative w-full h-[400px] lg:h-[500px] flex items-center justify-center">
        {#if show}
          <!-- Dramatic Spotlight Beam -->
          <div transition:fade={{ duration: 1500, delay: 600 }} class="absolute -top-10 left-1/2 -translate-x-1/2 w-[350px] md:w-[450px] h-[500px] pointer-events-none z-0 mix-blend-screen flex flex-col items-center">
            <!-- Light Source Flare -->
            <div class="w-40 h-10 bg-white/30 blur-[25px] rounded-[100%] absolute top-0"></div>
            <div class="w-24 h-24 bg-primary/40 blur-[40px] rounded-full absolute -top-5"></div>
            <!-- Volumetric Light Beam -->
            <div class="w-full h-full bg-gradient-to-b from-white/15 via-primary/5 to-transparent blur-[25px] [clip-path:polygon(35%_0%,65%_0%,100%_100%,0%_100%)]"></div>
          </div>
          
          <!-- Premium Glowing Rings Backdrop -->
          <div transition:fade={{ duration: 1000, delay: 800 }} class="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
             <div class="absolute w-[260px] h-[260px] md:w-[340px] md:h-[340px] rounded-full border border-white/5 bg-white/[0.01] shadow-[inset_0_0_40px_rgba(255,255,255,0.02)]"></div>
             <div class="absolute w-[340px] h-[340px] md:w-[460px] md:h-[460px] rounded-full border border-white/[0.02]"></div>
          </div>

          <!-- Static Logo Container -->
          <div 
            transition:fly={{ x: 20, opacity: 0, duration: 1200, delay: 700 }} 
            class="relative z-10 w-64 h-64 md:w-[340px] md:h-[340px] flex items-center justify-center group"
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
