<script>
  import { inview } from "@/lib/utils";
  import { t } from "@/lib/i18n";
  import { Shield } from "lucide-svelte";

  let show = false;
</script>

<section class="relative py-32 overflow-hidden" use:inview on:enter={() => show = true}>
  <!-- Deep Dark Glow -->
  <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.02)_0%,transparent_80%)]"></div>

  <div class="max-w-[var(--max)] mx-auto px-[var(--gutter)] relative z-10">
    
    <div class="text-center max-w-3xl mx-auto mb-20">
      <div class="flex justify-center mb-6">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary-light uppercase tracking-wider shadow-[0_0_15px_rgba(247,37,134,0.1)]">
          <Shield class="size-3.5 text-primary-light" />
          <span>{$t.ABOUT_VALUES_BADGE}</span>
        </div>
      </div>
      <h2 class="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white uppercase mb-6">
        {$t.ABOUT_VALUES_TITLE}
        <span class="text-primary-light italic drop-shadow-[0_0_15px_rgba(247,37,134,0.25)]">
          {$t.ABOUT_VALUES_TITLE_HIGHLIGHT}
        </span>
      </h2>
      <p class="font-body text-base md:text-lg text-white/50 leading-relaxed">
        {$t.ABOUT_VALUES_DESC}
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
      {#each $t.ABOUT_VALUES_ITEMS as val, i}
        <div 
          class="relative bg-[#170e20] border border-white/[0.08] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] rounded-[32px] p-8 lg:p-10 transition-all duration-500 overflow-hidden"
          style="opacity: {show ? 1 : 0}; transform: translateY({show ? 0 : 30}px); transition-delay: {i * 120}ms;"
        >
          <!-- Subtle top gradient -->
          <div class="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none"></div>
          
          <span class="absolute top-6 right-6 font-display text-[80px] leading-none font-black text-white/[0.03] transition-colors pointer-events-none select-none">
            {val.num}
          </span>

          <div class="relative z-10">
            <h3 class="font-display text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span class="text-xs text-white/30 font-normal tracking-widest uppercase">{val.num}</span>
              {val.title}
            </h3>
            
            <p class="font-body text-sm md:text-base text-white/60 leading-relaxed mb-8">
              {val.desc}
            </p>
            
            <div class="w-full h-px bg-gradient-to-r from-white/10 to-transparent mb-6"></div>
            
            <p class={`font-body italic font-medium text-sm text-white/80`}>
              "{val.quote}"
            </p>
          </div>
        </div>
      {/each}
    </div>

  </div>
</section>
