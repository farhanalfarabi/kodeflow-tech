<script>
  import { inview } from "@/lib/utils";
  import { t } from "@/lib/i18n";
  import { Users2 } from "lucide-svelte";

  let show = false;
</script>

<section class="relative py-32 bg-black overflow-hidden" use:inview on:enter={() => show = true}>
  <!-- Ambient background glow to match the dark theme of the screenshot -->
  <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(100,50,150,0.15)_0%,transparent_70%)] pointer-events-none"></div>

  <div class="max-w-[var(--max)] mx-auto px-[var(--gutter)] relative z-10">
        
    <!-- Header aligned to center -->
    <div class="text-center mb-16 md:mb-20 flex flex-col items-center">
      <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary-light uppercase tracking-wider mb-8 shadow-[0_4px_20px_rgba(255,255,255,0.03)]">
        <Users2 class="size-3.5 text-primary-light" />
        <span>{$t.ABOUT_TEAM_BADGE}</span>
      </div>
      
      <h2 class="font-display text-4xl md:text-5xl lg:text-[56px] font-bold text-white uppercase leading-tight tracking-tight">
        {@html $t.ABOUT_TEAM_TITLE}
        <span class="text-primary-light italic drop-shadow-[0_0_15px_rgba(247,37,134,0.25)]">
          {$t.ABOUT_TEAM_TITLE_HIGHLIGHT}
        </span>
      </h2>
    </div>
  </div>

  <!-- Founders Section (Static) -->
  <div class="max-w-[var(--max)] mx-auto px-[var(--gutter)] relative z-10 mb-24 transition-all duration-1000" style="opacity: {show ? 1 : 0}; transform: translateY({show ? '0px' : '40px'});">
    <div class="text-center mb-12">
      <h3 class="font-display text-2xl md:text-3xl font-bold text-white">{$t.ABOUT_FOUNDERS_TITLE}</h3>
    </div>
    
    <div class="flex flex-wrap justify-center gap-12 md:gap-24">
      {#each $t.ABOUT_FOUNDERS as person}
        <div class="flex flex-col items-center justify-center text-center group cursor-pointer w-48">
          <div class="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-[#3b1b54] mb-6 z-20 transition-all duration-500 group-hover:scale-105 group-hover:border-primary group-hover:shadow-[0_0_30px_rgba(var(--primary),0.3)] bg-white/5 flex items-end justify-center">
            <img 
              src={person.image} 
              alt={person.name} 
              class="w-full h-full object-cover object-top transition-transform duration-500"
              on:error={(e) => {
                e.target.style.display = 'none';
                e.target.nextElementSibling.style.display = 'flex';
              }}
            />
            <div class="hidden absolute inset-0 bg-white/5 flex items-center justify-center">
              <Users2 class="size-12 text-white/20" />
            </div>
          </div>
          <h4 class="font-display text-xl md:text-2xl font-bold text-white mb-1.5 group-hover:text-primary-light transition-colors duration-300">{person.name}</h4>
          <p class="font-body text-sm md:text-base text-white/70 font-semibold uppercase tracking-wider">{person.role}</p>
        </div>
      {/each}
    </div>
  </div>

  <!-- Supervisors Section (Marquee) -->
  <div 
    class="relative w-full overflow-hidden pb-10 transition-all duration-1000 delay-300 z-10"
    style="opacity: {show ? 1 : 0}; transform: translateY({show ? '0px' : '40px'});"
  >
    <div class="text-center mb-12">
      <h3 class="font-display text-2xl md:text-3xl font-bold text-white">{$t.ABOUT_SUPERVISORS_TITLE}</h3>
    </div>

    <!-- Gradient masks for left/right fading -->
    <div class="absolute left-0 top-0 bottom-0 w-12 md:w-48 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none mt-20"></div>
    <div class="absolute right-0 top-0 bottom-0 w-12 md:w-48 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none mt-20"></div>

    <div class="flex w-max animate-marquee hover:[animation-play-state:paused] items-center pt-4 pb-8">
      <!-- Render the list twice for seamless looping -->
      {#each [...$t.ABOUT_SUPERVISORS, ...$t.ABOUT_SUPERVISORS] as person}
        <div class="flex flex-col items-center justify-center text-center group cursor-pointer w-40 md:w-48 mx-6 shrink-0">
          <div class="relative w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-[#3b1b54] mb-5 md:mb-6 z-20 transition-all duration-500 group-hover:scale-105 group-hover:border-primary group-hover:shadow-[0_0_30px_rgba(var(--primary),0.3)] bg-white/5 flex items-end justify-center">
            <img 
              src={person.image} 
              alt={person.name} 
              class="w-full h-full object-cover object-top transition-transform duration-500"
              on:error={(e) => {
                e.target.style.display = 'none';
                e.target.nextElementSibling.style.display = 'flex';
              }}
            />
            <div class="hidden absolute inset-0 bg-white/5 flex items-center justify-center">
              <Users2 class="size-12 text-white/20" />
            </div>
          </div>
          <h4 class="font-display text-lg md:text-xl font-bold text-white mb-1 group-hover:text-primary-light transition-colors duration-300">{person.name}</h4>
          <p class="font-body text-sm md:text-base text-white/70 font-semibold uppercase tracking-wider">{person.role}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  @keyframes marquee {
    0% { transform: translateX(0%); }
    100% { transform: translateX(-50%); }
  }
  .animate-marquee {
    animation: marquee 40s linear infinite;
  }
</style>
