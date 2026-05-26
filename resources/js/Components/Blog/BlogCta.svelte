<script>
  import { ArrowRight } from "lucide-svelte";
  import { inview } from "@/lib/utils";
  import ArrowButton from "../ui/ArrowButton.svelte";
  import { t } from "@/lib/i18n";
  import { isLeadModalOpen } from "@/lib/stores";

  let show = false;
</script>

<section class="relative py-24" use:inview on:enter={() => show = true}>
  <div class="max-w-[var(--max)] mx-auto px-[var(--gutter)]">
    <div 
      class="bg-gradient-to-br from-primary/20 via-card to-card border border-primary/20 rounded-[32px] p-8 md:p-16 lg:p-20 relative overflow-hidden transition-all duration-1000 ease-out flex flex-col md:flex-row items-center justify-between gap-10"
      style="opacity: {show ? 1 : 0}; transform: translateY({show ? 0 : 20}px);"
    >
      <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CjxjaXJjbGUgY3g9IjEiIGN5PSIxIiByPSIxIiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] opacity-50"></div>
      
      <div class="relative z-10 max-w-2xl text-center md:text-left">
        <h2 class="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
          {$t.BLOG_CTA_TITLE}
        </h2>
        <p class="font-body text-base md:text-lg text-foreground/60 mb-8 leading-relaxed max-w-xl">
          {$t.BLOG_CTA_DESC}
        </p>
        <p class="text-xs font-bold text-primary tracking-widest uppercase mb-4 md:mb-0">
          {$t.BLOG_CTA_NOTE}
        </p>
      </div>

      <div class="relative z-10 flex flex-col sm:flex-row items-center gap-4 shrink-0">
        <a href="/services" class="text-sm font-medium text-foreground/70 hover:text-foreground px-6 py-3 transition-colors order-2 sm:order-1">
          {$t.BLOG_CTA_SERVICES}
        </a>
        <ArrowButton 
          href="#" 
          on:click={(e) => { e.preventDefault(); isLeadModalOpen.set(true); }}
          text={$t.BLOG_CTA_BTN} 
          size="lg" 
          class="order-1 sm:order-2" 
        />
      </div>
    </div>
  </div>
</section>
