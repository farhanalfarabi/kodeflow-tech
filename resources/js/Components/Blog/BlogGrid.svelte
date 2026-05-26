<script>
  import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-svelte";
  import { Link, router } from "@inertiajs/svelte";
  import { t } from "@/lib/i18n";

  export let blogs = { data: [], links: [], current_page: 1, last_page: 1, total: 0 };
  export let categories = [];
  export let activeFilter = "semua";
  export let searchQuery = "";

  function handleFilterChange(filterId) {
    router.get('/blogs', { category: filterId, search: searchQuery }, { preserveState: true, preserveScroll: true });
  }

  function handlePagination(url) {
    if (!url) return;
    router.get(url, {}, { 
      preserveState: true, 
      preserveScroll: true,
      onSuccess: () => {
        const el = document.getElementById('blog-grid');
        if (el) {
          // Calculate offset to account for navbar
          const y = el.getBoundingClientRect().top + window.scrollY - 100;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }
    });
  }

  // Bangun filter secara dinamis dari categories yang masuk
  $: filters = [
    { id: "semua", label: $t.BLOG_GRID_ALL },
    ...categories.map(c => ({
      id: c.slug,
      label: c.name
    }))
  ];

  // Fungsi utilitas tanggal
  const formatDate = (dateString) => {
    if (!dateString) return '';
    return new Date(dateString).toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  $: filteredArticles = blogs.data || [];
  
  // Featured is the first featured blog
  $: featuredArticle = (blogs.current_page === 1 && activeFilter === "semua" && !searchQuery) 
    ? filteredArticles.find(a => a.is_featured)
    : null;
    
  $: gridArticles = featuredArticle 
    ? filteredArticles.filter(a => a.id !== featuredArticle.id) 
    : filteredArticles;
</script>

<section id="blog-grid" class="relative pb-24">
  <div class="max-w-[var(--max)] mx-auto px-[var(--gutter)]">
    
    <!-- Filter Categories -->
    <div class="flex overflow-x-auto no-scrollbar gap-3 mb-12 pb-4 pt-4 border-b border-border/50 mask-edges">
      {#each filters as filter}
        <button 
          class="px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 border {activeFilter === filter.id ? 'bg-primary-light border-primary-light text-primary-foreground shadow-md' : 'bg-transparent border-foreground/10 text-foreground/50 hover:border-foreground/30 hover:text-foreground'}"
          on:click={() => handleFilterChange(filter.id)}
        >
          {filter.label}
        </button>
      {/each}
    </div>

    <!-- Featured Article (if exists) -->
    {#if featuredArticle}
      <Link href="/blogs/{featuredArticle.slug}" class="block group mb-12 lg:mb-16">
        <div class="flex flex-col md:flex-row bg-card rounded-3xl border border-border overflow-hidden hover:border-primary-light/30 transition-colors duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary-light/5">
          <!-- Thumbnail -->
          <div class="md:w-1/2 relative aspect-video md:aspect-auto overflow-hidden">
            <img 
              src={featuredArticle.image_path || "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop"} 
              alt={featuredArticle.title} 
              class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:hidden"></div>
            <!-- Badge -->
            <div class="absolute top-6 left-6">
              <span class="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border shadow-sm bg-white text-black border-white">
                {featuredArticle.category?.name || $t.BLOG_GRID_UNCATEGORIZED}
              </span>
            </div>
          </div>
          
          <!-- Content -->
          <div class="md:w-1/2 p-6 md:p-8 lg:p-12 flex flex-col justify-center">
            <h2 class="font-display text-2xl lg:text-3xl font-bold text-foreground mb-4 line-clamp-2 leading-tight group-hover:text-primary-light transition-colors">
              {featuredArticle.title}
            </h2>
            <p class="font-body text-foreground/60 mb-6 md:mb-8 line-clamp-3 text-sm md:text-base lg:text-lg leading-relaxed">
              {featuredArticle.desc}
            </p>
            
            <div class="flex items-center gap-4 mb-6 md:mb-8">
              <img src={"https://ui-avatars.com/api/?name=" + featuredArticle.author?.name + "&background=random"} alt={featuredArticle.author?.name} class="size-10 rounded-full object-cover border border-border" />
              <div class="flex flex-col">
                <span class="font-display text-sm font-medium text-foreground">{featuredArticle.author?.name || $t.BLOG_GRID_ADMIN}</span>
                <span class="font-body text-xs text-foreground/40">{formatDate(featuredArticle.publish_date)} · {featuredArticle.read_time} {$t.BLOG_GRID_READ_MIN}</span>
              </div>
            </div>
            
            <div class="mt-auto pt-6 border-t border-border">
              <span class="inline-flex items-center gap-2 text-sm font-display font-medium text-foreground/70 group-hover:text-primary-light transition-colors">
                {$t.BLOG_GRID_READ_ARTICLE} <ArrowRight class="size-4" />
              </span>
            </div>
          </div>
        </div>
      </Link>
    {/if}

    <!-- Grid Articles -->
    {#if gridArticles.length > 0}
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {#each gridArticles as article}
          <Link href="/blogs/{article.slug}" class="block group h-full">
            <div class="bg-card rounded-2xl border border-border overflow-hidden flex flex-col h-full hover:border-primary-light/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary-light/5">
              <div class="aspect-video relative overflow-hidden">
                <img src={article.image_path || "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=800&auto=format&fit=crop"} alt={article.title} class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div class="absolute top-4 left-4">
                  <span class="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border shadow-sm bg-white text-black border-white">
                    {article.category?.name || $t.BLOG_GRID_UNCATEGORIZED}
                  </span>
                </div>
              </div>
              
              <div class="p-5 md:p-6 flex flex-col flex-grow">
                <h3 class="font-display text-lg md:text-xl font-semibold text-foreground mb-3 line-clamp-2 leading-tight group-hover:text-primary-light transition-colors">
                  {article.title}
                </h3>
                <p class="font-body text-sm text-foreground/60 mb-6 line-clamp-3 leading-relaxed flex-grow">
                  {article.desc}
                </p>
                
                <div class="flex items-center gap-3 pt-5 border-t border-border/50 mt-auto">
                  <img src={"https://ui-avatars.com/api/?name=" + article.author?.name + "&background=random"} alt={article.author?.name} class="size-8 rounded-full object-cover border border-border" />
                  <div class="flex flex-col">
                    <span class="font-display text-xs font-medium text-foreground/90">{article.author?.name || $t.BLOG_GRID_ADMIN}</span>
                    <span class="font-body text-[11px] text-foreground/40">{formatDate(article.publish_date)} · {article.read_time} {$t.BLOG_GRID_READ_MIN}</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        {/each}
      </div>
    {:else}
      <div class="text-center py-24 bg-foreground/5 rounded-3xl border border-border">
        <p class="font-body text-foreground/50 text-lg">{$t.BLOG_GRID_EMPTY}</p>
      </div>
    {/if}

    <!-- Pagination -->
    {#if blogs.last_page > 1}
      <div class="flex flex-col sm:flex-row items-center justify-between mt-16 pt-8 border-t border-border/50">
        <span class="text-sm font-body text-foreground/50 mb-4 sm:mb-0">
          Menampilkan halaman {blogs.current_page} dari {blogs.last_page} ({blogs.total} artikel)
        </span>
        <div class="flex flex-wrap items-center gap-2">
          {#each blogs.links as link}
            {#if link.url}
              <button 
                on:click={() => handlePagination(link.url)}
                class="size-10 rounded-lg flex items-center justify-center transition-colors font-display font-medium border {link.active ? 'bg-primary-light text-primary-foreground font-bold border-primary-light shadow-md' : 'border-border text-foreground/70 hover:bg-foreground/5'}"
              >
                {#if link.label.includes('Previous')}
                  <ChevronLeft class="size-5" />
                {:else if link.label.includes('Next')}
                  <ChevronRight class="size-5" />
                {:else}
                  {@html link.label}
                {/if}
              </button>
            {:else}
              <span class="size-10 rounded-lg flex items-center justify-center border border-border text-foreground/50 opacity-50 cursor-not-allowed">
                {#if link.label.includes('Previous')}
                  <ChevronLeft class="size-5" />
                {:else if link.label.includes('Next')}
                  <ChevronRight class="size-5" />
                {:else}
                  {@html link.label}
                {/if}
              </span>
            {/if}
          {/each}
        </div>
      </div>
    {/if}

  </div>
</section>

<style>
  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .mask-edges {
    mask-image: linear-gradient(to right, transparent, black 10px, black calc(100% - 10px), transparent);
    -webkit-mask-image: linear-gradient(to right, transparent, black 10px, black calc(100% - 10px), transparent);
  }
</style>
