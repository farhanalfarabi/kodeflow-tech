<script>
  import { inview } from "@/lib/utils";
  import { t } from "@/lib/i18n";
  import { BookOpen } from "lucide-svelte";
  
  let show = false;
</script>

<section class="relative py-24 md:py-32" use:inview on:enter={() => show = true}>
  <div class="max-w-[var(--max)] mx-auto px-[var(--gutter)]">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12">
      
      <!-- Left Narrative -->
      <div class="lg:col-span-6 xl:col-span-7 pr-0 lg:pr-8">
        <div class="flex items-start mb-6">
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary-light uppercase tracking-wider shadow-[0_0_15px_rgba(247,37,134,0.1)]">
            <BookOpen class="size-3.5 text-primary-light" />
            <span>{$t.ABOUT_STORY_BADGE}</span>
          </div>
        </div>
        
        <h2 class="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground uppercase mb-8 leading-tight">
          {$t.ABOUT_STORY_TITLE}
          <span class="text-primary-light italic drop-shadow-[0_0_15px_rgba(247,37,134,0.25)]">
            {$t.ABOUT_STORY_TITLE_HIGHLIGHT}
          </span>
        </h2>

        <div class="space-y-6 text-foreground/70 font-body text-base md:text-lg leading-relaxed">
          <p>{$t.ABOUT_STORY_P1}</p>
          <p>{$t.ABOUT_STORY_P2}</p>
          <p>{@html $t.ABOUT_STORY_P3}</p>
        </div>
      </div>

      <!-- Right Timeline -->
      <div class="lg:col-span-6 xl:col-span-5 relative">
        <div class="absolute left-[11px] top-4 bottom-4 w-0.5 bg-border rounded-full"></div>
        
        <div class="space-y-12 relative z-10 pl-8">
          {#each $t.ABOUT_STORY_MILESTONES as milestone, i}
            <div 
              class="relative transition-all duration-700 ease-out"
              style="opacity: {show ? 1 : 0}; transform: translateX({show ? 0 : 20}px); transition-delay: {i * 150}ms;"
            >
              <!-- Dot -->
              <div class="absolute -left-[37px] top-1.5 size-3.5 rounded-full bg-primary-light shadow-[0_0_0_4px_rgba(247,37,134,0.15)] ring-1 ring-background"></div>
              
              <!-- Content -->
              <div class="flex items-center gap-4 mb-2">
                <span class="font-display text-xl font-bold text-primary-light">{milestone.year}</span>
                <div class="h-px flex-1 bg-border/50 hidden sm:block"></div>
                <span class="font-display text-sm uppercase tracking-wider text-foreground/50 hidden sm:block">{milestone.title}</span>
              </div>
              <div class="liquid-glass rounded-xl p-4 md:p-5 border border-white/5 hover:border-primary/20 transition-colors">
                <p class="font-body text-sm md:text-base text-foreground/80 m-0">{milestone.desc}</p>
              </div>
            </div>
          {/each}
        </div>
      </div>

    </div>
  </div>
</section>
