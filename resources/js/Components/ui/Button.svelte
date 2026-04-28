<script>
  import { cn } from "@/lib/utils";
  export let variant = "default";
  export let size = "default";
  export let asChild = false;
  let className = "";
  export { className as class };
  
  const variants = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    hero: "bg-primary text-primary-foreground rounded-full px-7 py-3.5 text-base font-medium tracking-[-0.01em] hover:bg-primary/90 transition-colors",
    heroGlass: "liquid-glass-strong text-foreground rounded-full px-7 py-3.5 text-base font-normal tracking-[-0.01em] hover:bg-white/5 transition-colors",
    heroSolid: "bg-foreground text-background rounded-full px-7 py-3.5 text-base font-medium tracking-[-0.01em] hover:bg-foreground/90 transition-colors",
  };
  const sizes = {
    default: "h-10 px-4 py-2",
    sm: "h-9 rounded-md px-3",
    lg: "h-11 rounded-md px-8",
    icon: "h-10 w-10",
  };
</script>

{#if asChild}
  <slot />
{:else}
  <button class={cn("inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", variants[variant], sizes[size], className)} on:click {...$$restProps}>
    <slot />
  </button>
{/if}
