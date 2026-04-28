<script>
  import { FAQ_ITEMS, LANG } from "@/lib/constants";
  import BlurText from "./ui/BlurText.svelte";
  import Button from "./ui/Button.svelte";
  import { ChevronDown } from "lucide-svelte";
  import { slide } from "svelte/transition";

  let openIndex = -1;

  function toggle(i) {
    if (openIndex === i) openIndex = -1;
    else openIndex = i;
  }
</script>

<section id="faq" class="relative py-28 md:py-40">
  <div class="max-w-[var(--max)] mx-auto px-[var(--gutter)] grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-16">
    <div class="md:sticky md:top-24 md:self-start">
      <span class="liquid-glass rounded-full px-4 py-1.5 text-xs text-foreground/80 mb-6 inline-block">FAQ</span>
      <BlurText 
        as="h2" 
        text={LANG === "fr-CH" ? "Questions fréquentes." : "Frequently asked."} 
        class="font-display uppercase text-5xl md:text-6xl leading-[0.9] tracking-tight mt-4" 
      />
      <p class="mt-6 font-body text-foreground/65 mb-8">
        Vous avez des questions sur notre façon de travailler ? Retrouvez les réponses aux interrogations les plus courantes.
      </p>
      <Button variant="heroGlass">Nous contacter</Button>
    </div>

    <div class="flex flex-col w-full">
      {#each FAQ_ITEMS as item, i}
        <div class="border-b border-border/40">
          <button 
            class="flex items-center justify-between w-full py-6 text-left font-display uppercase text-lg md:text-xl tracking-tight transition-colors {openIndex === i ? 'text-primary' : ''}"
            on:click={() => toggle(i)}
          >
            {item.q}
            <ChevronDown class="size-5 transition-transform duration-200 {openIndex === i ? 'rotate-180' : ''}" />
          </button>
          {#if openIndex === i}
            <div transition:slide={{ duration: 200 }} class="overflow-hidden">
              <div class="font-body text-foreground/70 text-[15px] leading-relaxed pb-6 max-w-[60ch]">
                {item.a}
              </div>
            </div>
          {/if}
        </div>
      {/each}
    </div>
  </div>
</section>
