<script>
  import { LANG, BRAND_TAGLINE, HERO_HEADLINE, HERO_HEADLINE2, HERO_SUB, HERO_CTA_PRIMARY, HERO_CTA_SECONDARY, CTA_HREF, PARTNERS, FRAMES_PATH, FRAME_COUNT, FRAME_EXT } from "@/lib/constants";
  import { ArrowUpRight, Play } from "lucide-svelte";
  import Button from "./ui/Button.svelte";
  import ArrowButton from "./ui/ArrowButton.svelte";
  import BlurText from "./ui/BlurText.svelte";
  import { inview } from "@/lib/utils";
  import { fly, blur } from "svelte/transition";
  import { cubicOut } from "svelte/easing";
  
  export let scrollRef = null;
  
  let showSub = false;
  let showCta = false;
  let showBadge = false;
</script>

<section bind:this={scrollRef} class="relative h-screen bg-background overflow-hidden flex items-center">
  <!-- Video di kanan bawah -->
  <div class="absolute bottom-0 right-0 w-full md:w-[65%] h-[80%] z-0 pointer-events-none">
    <video 
      src="/source.mp4" 
      autoplay 
      loop 
      muted 
      playsinline 
      class="w-full h-full object-cover [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)] opacity-80"
    ></video>
  </div>
  
  <!-- Spotlight ungu muda dari atas ke navbar -->
  <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full md:w-[80vw] h-[40vh] bg-[radial-gradient(ellipse_at_top,rgba(217,70,239,0.25)_0%,transparent_70%)] pointer-events-none z-[1] mix-blend-screen"></div>

  <!-- Cinematic vignette (ditempatkan sebelum glow bawah agar tidak menutupi cahaya) -->
  <div class="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_top_left,rgba(0,0,0,0)_40%,rgba(0,0,0,0.8)_100%)] pointer-events-none"></div>

  <!-- Glow ungu muda terang dari ujung bawah ke atas (area video) -->
  <div class="absolute bottom-0 right-0 md:right-10 w-full md:w-[60vw] h-[50vh] bg-[radial-gradient(ellipse_at_bottom,rgba(217,70,239,0.4)_0%,transparent_70%)] pointer-events-none z-[2] mix-blend-screen"></div>

  <!-- Content -->
  <div class="relative z-10 w-full max-w-[1400px] mx-auto px-6">
    <div class="max-w-3xl text-left">
      <BlurText
        text={HERO_HEADLINE}
        as="h1"
        class="font-display text-5xl md:text-7xl lg:text-[90px] leading-[1.05] tracking-tight text-foreground mb-5"
        delay={90}
        startDelay={150}
      />
      <BlurText
        text={HERO_HEADLINE2}
        as="h1"
        class="font-display text-5xl md:text-4xl lg:text-[80px] leading-[1.05] text-primary"
        delay={90}
        startDelay={150}
      />

      <div use:inview on:enter={() => showSub = true}>
        {#if showSub}
          <p
            in:blur={{ amount: 10, duration: 700, delay: 600, easing: cubicOut }}
            class="mt-6 font-body text-base md:text-lg text-foreground/70 leading-relaxed max-w-lg"
          >
            {HERO_SUB}
          </p>
        {:else}
          <p class="mt-6 h-6"></p>
        {/if}
      </div>

      <div use:inview on:enter={() => showCta = true}>
        {#if showCta}
          <div
            in:fly={{ y: 12, duration: 600, delay: 900, easing: cubicOut }}
            class="mt-10 flex items-center gap-4"
          >
            <!-- Start a project Button -->
            <ArrowButton href={CTA_HREF} text={HERO_CTA_PRIMARY} size="lg" />
          </div>
        {:else}
          <div class="mt-10 h-12"></div>
        {/if}
      </div>
    </div>
  </div>
</section>
