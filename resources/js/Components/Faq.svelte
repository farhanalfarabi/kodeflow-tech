<script>
  import { FAQ_ITEMS, LANG } from "@/lib/constants";
  import BlurText from "./ui/BlurText.svelte";
  import ArrowButton from "./ui/ArrowButton.svelte";
  import { ChevronDown } from "lucide-svelte";
  import { slide } from "svelte/transition";

  let openIndex = -1;

  function toggle(i) {
    if (openIndex === i) openIndex = -1;
    else openIndex = i;
  }
</script>

<section id="faq" class="relative py-28 md:py-40 bg-white">
  <div class="max-w-[var(--max)] mx-auto px-[var(--gutter)] grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-16">
    <div class="md:sticky md:top-24 md:self-start">
      <span class="bg-black/5 border border-black/10 rounded-full px-4 py-1.5 text-xs text-black/80 mb-6 inline-block font-medium">FAQ</span>
      <BlurText 
        as="h2" 
        text="Pertanyaan Seputar Kodeflow." 
        class="font-display uppercase text-5xl md:text-6xl leading-[0.9] tracking-tight mt-4 text-black" 
      />
      <p class="mt-6 font-body text-black/80 mb-8 leading-relaxed">
        Punya pertanyaan tentang cara kerja kami? Temukan jawaban untuk pertanyaan yang paling sering diajukan di sini.
      </p>
      <ArrowButton href="#" text="Hubungi Kami" size="lg" class="shadow-lg mt-2 w-max" />
    </div>

    <div class="flex flex-col w-full">
      {#each FAQ_ITEMS as item, i}
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
