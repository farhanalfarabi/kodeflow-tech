<script>
  import { ChevronDown, ArrowRight } from "lucide-svelte";
  import { inview } from "@/lib/utils";
  import { t } from "@/lib/i18n";
  import { page } from "@inertiajs/svelte";

  let show = false;
  let activeIndex = 0;

  function toggle(i) {
    activeIndex = activeIndex === i ? null : i;
  }
</script>

<section class="relative py-24 md:py-32" use:inview={{ threshold: 0.1 }} on:enter={() => show = true}>
  <div class="max-w-4xl mx-auto px-[var(--gutter)] relative z-10">
    
    <div class="text-center mb-16">
      <div class="flex justify-center mb-6">
        <span class="inline-block border border-white/10 text-white/90 rounded-full px-5 py-2 text-xs bg-white/5 font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(255,255,255,0.05)]">
          {$t.SERVICES_FAQ_BADGE}
        </span>
      </div>
      <h2 class="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-white">
        {$t.SERVICES_FAQ_TITLE}
      </h2>
    </div>

    <div class="space-y-4 mb-16">
      {#each $t.SERVICES_FAQS as faq, i}
        <div 
          class="liquid-glass rounded-2xl border transition-all duration-300 overflow-hidden {activeIndex === i ? 'border-primary/50 bg-[#1A1025] shadow-[0_10px_30px_rgba(0,0,0,0.5)]' : 'border-white/5 hover:border-white/20'}"
          style="opacity: {show ? 1 : 0}; transform: translateY({show ? 0 : 20}px); transition: opacity 400ms ease-out {i * 50}ms, transform 400ms ease-out {i * 50}ms;"
        >
          <button 
            class="w-full text-left p-6 md:p-8 flex items-center justify-between gap-6"
            on:click={() => toggle(i)}
          >
            <h3 class="font-display text-lg md:text-xl font-medium {activeIndex === i ? 'text-white' : 'text-white/80'} transition-colors">
              {faq.q}
            </h3>
            <div class="size-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 transition-transform duration-300 {activeIndex === i ? 'rotate-180 bg-primary/20 text-primary' : 'text-white/50'}">
              <ChevronDown class="size-5" />
            </div>
          </button>
          
          <div 
            class="grid transition-all duration-300 ease-in-out {activeIndex === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}"
          >
            <div class="overflow-hidden">
              <div class="p-6 md:p-8 pt-0 font-body text-base md:text-lg text-white/60 leading-relaxed border-t border-white/5 mt-2">
                {faq.a}
              </div>
            </div>
          </div>
        </div>
      {/each}
    </div>

    <div class="text-center" style="opacity: {show ? 1 : 0}; transition: opacity 800ms ease-out 600ms;">
      <p class="font-body text-white/50 mb-6">{$t.SERVICES_FAQ_STILL_HAVE_Q}</p>
      <a href={`https://wa.me/${page.props.social_links?.whatsapp}?text=Halo,%20saya%20masih%20punya%20pertanyaan%20tentang%20layanan%20Kodeflow%20Tech`} target="_blank" class="inline-flex items-center gap-2 text-primary font-display font-medium hover:text-primary-foreground transition-colors group">
        {$t.SERVICES_FAQ_CHAT} <ArrowRight class="size-4 group-hover:translate-x-1 transition-transform" />
      </a>
    </div>

  </div>
</section>
