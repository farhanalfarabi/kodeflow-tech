<script>
  import { BRAND_NAME, NAV_ITEMS, CTA_LABEL, CTA_HREF } from "@/lib/constants";
  import { ArrowUpRight, Menu } from "lucide-svelte";
  import Button from "./ui/Button.svelte";
  import ArrowButton from "./ui/ArrowButton.svelte";
  import { onMount } from "svelte";
  import { Link, page } from "@inertiajs/svelte";

  let scrolled = false;
  let hidden = false;
  let lastScrollY = 0;
  
  onMount(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      scrolled = currentScrollY > 40;
      
      // Hide on scroll down (past threshold), show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        hidden = true;
      } else if (currentScrollY < lastScrollY) {
        hidden = false;
      }
      
      lastScrollY = currentScrollY;
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  });
</script>

<header class="fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-in-out px-6 py-4 {scrolled ? 'bg-background/90 backdrop-blur-xl border-b border-border/10 shadow-sm' : ''} {hidden ? '-translate-y-full' : 'translate-y-0'}">
  <div class="max-w-[1400px] mx-auto flex items-center justify-between">
    <div class="flex items-center gap-2">
      <a href="/" class="flex items-center">
        <img src="/assets/logopng.png" alt="{BRAND_NAME}" class="h-8 w-auto object-contain" />
      </a>
    </div>
    
    <nav class="hidden md:flex items-center gap-10 lg:gap-14">
      {#each NAV_ITEMS as item}
        {#if item.href.startsWith('/')}
          <Link 
            href={item.href} 
            class="text-sm font-medium transition-colors font-body relative py-2 
              {page.url === item.href || (page.url.startsWith(item.href) && item.href !== '/') 
                ? 'text-primary' 
                : 'text-foreground/70 hover:text-foreground'}"
          >
            {item.label}
            {#if page.url === item.href || (page.url.startsWith(item.href) && item.href !== '/')}
              <span class="absolute -bottom-1 left-0 w-full h-[2px] bg-primary rounded-full"></span>
            {/if}
          </Link>
        {:else}
          <a href={item.href} class="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors font-body py-2">
            {item.label}
          </a>
        {/if}
      {/each}
    </nav>
    
    <div class="hidden md:flex items-center gap-3">
      <!-- Contact us Button -->
      <a href={CTA_HREF} target="_blank" class="rounded-full px-6 py-2.5 text-[15px] font-semibold text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-colors backdrop-blur-sm">
        Contact us
      </a>
      
      <!-- Login Button -->
      <ArrowButton href="/admin/blogs" text="Login" size="md" />
    </div>
    
    <button class="md:hidden p-2 text-foreground/80">
      <Menu class="size-6" />
    </button>
  </div>
</header>
