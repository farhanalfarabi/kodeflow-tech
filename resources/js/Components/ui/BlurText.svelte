<script>
  import { inview } from "@/lib/utils";
  import { fly } from "svelte/transition";
  import { cubicOut } from "svelte/easing";
  
  export let text = "";
  export let as = "h2";
  let className = "";
  export { className as class };
  export let delay = 70; // ms
  export let startDelay = 0; // ms
  
  let show = false;
  let words = text.split(" ");
</script>

<svelte:element this={as} class={className} use:inview on:enter={() => show = true}>
  {#if show}
    {#each words as w, i}
      <span
        class="inline-block will-change-[filter,transform,opacity]"
        in:fly={{ y: 24, duration: 700, delay: startDelay + i * delay, easing: cubicOut }}
      >
        {w}{i < words.length - 1 ? "\u00A0" : ""}
      </span>
    {/each}
  {:else}
    <span class="opacity-0">{text}</span>
  {/if}
</svelte:element>
