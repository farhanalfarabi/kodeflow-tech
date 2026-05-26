<script>
  import { CTA_HREF } from "@/lib/constants";
  import { currentLanguage, t } from "@/lib/i18n";
  import { ArrowUpRight, Menu, Globe, ChevronDown } from "lucide-svelte";
  import Button from "./ui/Button.svelte";
  import { onMount } from "svelte";
  import { Link, page } from "@inertiajs/svelte";
  import { fade, slide } from "svelte/transition";
  import { isLeadModalOpen } from "@/lib/stores";

  let scrolled = false;
  let hidden = false;
  let lastScrollY = 0;
  let isMobileMenuOpen = false;
  
  function toggleMobileMenu() {
    isMobileMenuOpen = !isMobileMenuOpen;
  }

  function closeMobileMenu() {
    isMobileMenuOpen = false;
  }
  
  function changeLanguage(lang) {
    $currentLanguage = lang;
  }
  
  onMount(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      scrolled = currentScrollY > 40;
      
      // Show when scrolling up or near top, hide when scrolling down
      if (currentScrollY <= 40) {
        hidden = false;
      } else if (currentScrollY > lastScrollY) {
        hidden = true;
      } else {
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
        <img src="/assets/logopng.png" alt="{$t.BRAND_NAME}" class="h-8 w-auto object-contain" />
      </a>
    </div>
    
    <nav class="hidden md:flex items-center gap-10 lg:gap-14">
      {#each $t.NAV_ITEMS as item}
        {#if item.href.startsWith('/')}
          <Link 
            href={item.href} 
            class="text-sm font-medium transition-colors font-body relative py-2 
              {page.url === item.href || (page.url.startsWith(item.href) && item.href !== '/') 
                ? 'text-primary-light drop-shadow-[0_0_8px_rgba(247,37,134,0.3)]' 
                : 'text-foreground/70 hover:text-foreground'}"
          >
            {item.label}
            {#if page.url === item.href || (page.url.startsWith(item.href) && item.href !== '/')}
              <span class="absolute -bottom-1 left-0 w-full h-[2px] bg-primary-light rounded-full shadow-[0_0_8px_rgba(247,37,134,0.6)]"></span>
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
      <!-- Language Dropdown -->
      <div class="relative group">
        <button class="flex items-center gap-1.5 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors font-body py-2 px-2">
          <Globe class="size-4" />
          <span>{$currentLanguage === 'id' ? 'ID' : 'EN'}</span>
          <ChevronDown class="size-3 transition-transform duration-200 group-hover:rotate-180" />
        </button>
        
        <div class="absolute top-full right-0 pt-2 w-32 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
          <div class="rounded-xl border border-white/10 bg-background/95 backdrop-blur-xl shadow-lg overflow-hidden py-1">
            <button 
              on:click={() => changeLanguage('id')} 
              class="w-full text-left px-4 py-2 text-sm text-foreground/80 hover:text-foreground hover:bg-white/5 transition-colors {$currentLanguage === 'id' ? 'text-primary bg-primary/5' : ''}"
            >
              Indonesia
            </button>
            <button 
              on:click={() => changeLanguage('en')} 
              class="w-full text-left px-4 py-2 text-sm text-foreground/80 hover:text-foreground hover:bg-white/5 transition-colors {$currentLanguage === 'en' ? 'text-primary bg-primary/5' : ''}"
            >
              English
            </button>
          </div>
        </div>
      </div>

      <!-- Contact us Button -->
      <button on:click={() => isLeadModalOpen.set(true)} class="rounded-full px-6 py-2.5 text-[15px] font-semibold text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-colors backdrop-blur-sm">
        {$t.CONTACT_US}
      </button>
    </div>
    
    <button class="md:hidden p-2 text-foreground/80" on:click={toggleMobileMenu}>
      <Menu class="size-6" />
    </button>
  </div>
</header>

<!-- Mobile Menu Overlay -->
{#if isMobileMenuOpen}
  <div 
    class="fixed inset-0 z-[40] bg-background/95 backdrop-blur-xl pt-24 px-6 md:hidden"
    transition:fade={{ duration: 200 }}
  >
    <div class="flex flex-col gap-6" transition:slide={{ duration: 300 }}>
      {#each $t.NAV_ITEMS as item}
        {#if item.href.startsWith('/')}
          <Link 
            href={item.href} 
            class="text-xl font-display font-medium text-foreground {page.url === item.href || (page.url.startsWith(item.href) && item.href !== '/') ? 'text-primary' : ''}"
            on:click={closeMobileMenu}
          >
            {item.label}
          </Link>
        {:else}
          <a 
            href={item.href} 
            class="text-xl font-display font-medium text-foreground"
            on:click={closeMobileMenu}
          >
            {item.label}
          </a>
        {/if}
      {/each}

      <div class="h-px bg-border my-2 w-full"></div>

      <!-- Language Selection (Mobile) -->
      <div class="flex flex-col gap-4 mb-4">
        <span class="text-xs font-bold uppercase tracking-widest text-foreground/50">Bahasa</span>
        <div class="flex items-center gap-4">
          <button 
            on:click={() => { changeLanguage('id'); closeMobileMenu(); }} 
            class="text-base font-medium px-4 py-2 rounded-lg {$currentLanguage === 'id' ? 'bg-primary/10 text-primary' : 'bg-foreground/5 text-foreground/70'}"
          >
            ID
          </button>
          <button 
            on:click={() => { changeLanguage('en'); closeMobileMenu(); }} 
            class="text-base font-medium px-4 py-2 rounded-lg {$currentLanguage === 'en' ? 'bg-primary/10 text-primary' : 'bg-foreground/5 text-foreground/70'}"
          >
            EN
          </button>
        </div>
      </div>

      <div class="flex flex-col gap-3 mt-4">
        <button class="w-full text-center rounded-xl px-6 py-3.5 text-base font-semibold text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-colors backdrop-blur-sm" on:click={() => { isLeadModalOpen.set(true); closeMobileMenu(); }}>
          {$t.CONTACT_US}
        </button>
      </div>
    </div>
  </div>
{/if}
