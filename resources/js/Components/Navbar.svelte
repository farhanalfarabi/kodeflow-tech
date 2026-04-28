<script>
  import { BRAND_NAME, NAV_ITEMS, CTA_LABEL, CTA_HREF } from "@/lib/constants";
  import { ArrowUpRight, Menu } from "lucide-svelte";
  import Button from "./ui/Button.svelte";
  import { onMount } from "svelte";

  let scrolled = false;
  
  onMount(() => {
    const handleScroll = () => scrolled = window.scrollY > 40;
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
</script>

<header class="fixed top-0 inset-x-0 z-50 transition-all duration-300 px-6 py-4 {scrolled ? 'bg-background/80 backdrop-blur-xl border-b border-border/10' : ''}">
  <div class="max-w-[1400px] mx-auto flex items-center justify-between">
    <div class="flex items-center gap-2">
      <span class="font-display text-xl tracking-tight font-bold text-foreground">{BRAND_NAME}</span>
    </div>
    
    <nav class="hidden md:flex items-center gap-8">
      {#each NAV_ITEMS as item}
        <a href={item.href} class="text-sm text-foreground/70 hover:text-foreground transition-colors font-body">{item.label}</a>
      {/each}
    </nav>
    
    <div class="hidden md:flex items-center gap-3">
      <Button variant="heroGlass" size="sm" class="rounded-full px-5 py-2 text-sm text-foreground border-border/40 hover:bg-white/5">
        Contact us
      </Button>
      <Button variant="heroSolid" size="sm" class="rounded-full px-5 py-2 text-sm bg-primary text-primary-foreground hover:bg-primary/90">
        <a href={CTA_HREF} class="flex items-center">Login <ArrowUpRight class="ml-1 size-4" /></a>
      </Button>
    </div>
    
    <button class="md:hidden p-2 text-foreground/80">
      <Menu class="size-6" />
    </button>
  </div>
</header>
