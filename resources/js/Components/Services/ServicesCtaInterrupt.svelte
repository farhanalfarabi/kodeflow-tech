<script>
  import { ArrowRight } from "lucide-svelte";
  import { inview } from "@/lib/utils";
  import ArrowButton from "../ui/ArrowButton.svelte";
  import { t } from "@/lib/i18n";
  import { isLeadModalOpen } from "@/lib/stores";

  let show = false;
</script>

<section class="relative py-20 px-6" use:inview on:enter={() => show = true}>
  <div 
    class="max-w-[800px] mx-auto text-center p-10 md:p-14 rounded-[32px] bg-white border border-black/5 shadow-[0_20px_60px_rgba(0,0,0,0.1)] relative overflow-hidden transition-all duration-1000 ease-out"
    style="opacity: {show ? 1 : 0}; transform: translateY({show ? 0 : 20}px) scale({show ? 1 : 0.98});"
  >
    <!-- Background Glow -->
    <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(var(--primary),0.1)_0%,transparent_70%)] pointer-events-none"></div>

    <div class="relative z-10">
      <h2 class="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-4">
        {$t.SERVICES_CTA_TITLE}
      </h2>
      <p class="font-body text-base md:text-lg text-black/60 max-w-2xl mx-auto mb-10 leading-relaxed">
        {$t.SERVICES_CTA_DESC}
      </p>

      <div class="inline-block mb-10">
        <ArrowButton href="#" on:click={(e) => { e.preventDefault(); isLeadModalOpen.set(true); }} text={$t.SERVICES_CTA_BTN} size="lg" variant="solid" />
      </div>
      
      <div class="mt-4 text-xs font-bold text-black/40 uppercase tracking-widest">
        {$t.SERVICES_CTA_NOTE}
      </div>
    </div>
  </div>
</section>
