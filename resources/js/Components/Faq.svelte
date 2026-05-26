<script>
  import { t } from "@/lib/i18n";
  import BlurText from "./ui/BlurText.svelte";
  import ArrowButton from "./ui/ArrowButton.svelte";
  import { ChevronDown, HelpCircle } from "lucide-svelte";
  import { slide } from "svelte/transition";
  import { isLeadModalOpen } from "@/lib/stores";

  // Reusable Props
  export let subtitle = $t.FAQ_SUBTITLE;
  export let heading = $t.FAQ_HEADING;
  export let description = $t.FAQ_DESC;
  export let items = $t.FAQ_ITEMS;
  export let showContactCta = true;

  let openIndex = -1;

  function toggle(i) {
    if (openIndex === i) openIndex = -1;
    else openIndex = i;
  }
</script>

<section id="faq" class="relative py-28 md:py-40 bg-white">
  <div class="max-w-[var(--max)] mx-auto px-[var(--gutter)] grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-16">
    <div class="md:sticky md:top-24 md:self-start">
      <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary-light uppercase tracking-wider mb-6">
        <HelpCircle class="size-3.5 text-primary-light" />
        <span>{subtitle}</span>
      </div>
      <h2 class="font-display uppercase text-5xl md:text-6xl font-bold leading-tight tracking-tight mt-4 text-black">
        {$t.FAQ_HEADING}
        <span class="text-primary-light italic drop-shadow-[0_0_15px_rgba(247,37,134,0.25)]">
          {$t.FAQ_HEADING_HIGHLIGHT || ''}
        </span>
      </h2>
      {#if description}
        <p class="mt-6 font-body text-black/80 mb-8 leading-relaxed">
          {description}
        </p>
      {/if}
      {#if showContactCta}
        <ArrowButton href="#" on:click={(e) => { e.preventDefault(); isLeadModalOpen.set(true); }} text={$t.CONTACT_US} size="lg" class="shadow-lg mt-2 w-max" />
      {/if}
    </div>

    <div class="flex flex-col w-full">
      {#each items as item, i}
        <div class="border-b border-black/10">
          <button 
            class="flex items-center justify-between w-full py-6 text-left font-display uppercase text-lg md:text-xl tracking-tight transition-colors text-black {openIndex === i ? '!text-primary' : ''}"
            on:click={() => toggle(i)}
          >
            {item.q}
            <ChevronDown class="size-5 transition-transform duration-200 {openIndex === i ? 'rotate-180' : ''}" />
          </button>
          {#if openIndex === i}
            <div transition:slide={{ duration: 200 }} class="overflow-hidden">
              <div class="font-body text-black/70 text-[15px] leading-relaxed pb-6 max-w-[60ch]">
                {item.a}
              </div>
            </div>
          {/if}
        </div>
      {/each}
    </div>
  </div>
</section>
