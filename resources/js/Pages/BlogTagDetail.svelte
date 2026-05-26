<script>
  import { ArrowLeft, Tag as TagIcon, ChevronLeft, ChevronRight } from "lucide-svelte";
  import { Link } from "@inertiajs/svelte";
  import Navbar from "../Components/Navbar.svelte";
  import CtaFooter from "../Components/CtaFooter.svelte";
  import BlogCta from "../Components/Blog/BlogCta.svelte";
  import { t } from "@/lib/i18n";

  export let tag = {};
  export let blogs = { data: [], links: [], current_page: 1 };
  
  // Fungsi utilitas tanggal
  const formatDate = (dateString) => {
    if (!dateString) return '';
    return new Date(dateString).toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };
</script>

<svelte:head>
  <title>Tag: {tag.name} — Kodeflow Tech Blog</title>
  <meta name="description" content="Kumpulan artikel blog dengan topik {tag.name}." />
</svelte:head>

<div class="bg-background text-foreground min-h-screen relative noise overflow-x-hidden">
  <Navbar />
  
  <main class="pt-32 pb-24">
    <div class="max-w-[var(--max)] mx-auto px-[var(--gutter)]">
      
      <!-- Hero Header -->
      <div class="mb-16 pb-8 border-b border-border/50">
        <Link href="/blogs/tags" class="inline-flex items-center gap-2 text-foreground/60 hover:text-primary transition-colors mb-8 font-medium text-sm">
          <ArrowLeft class="size-4" />
          {$t.BLOG_TAG_DETAIL_ALL_TOPICS}
        </Link>
        <div class="flex items-center gap-4 mb-4">
          <div class="size-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
            <TagIcon class="size-6" />
          </div>
          <h1 class="font-display text-4xl font-bold">{$t.BLOG_TAG_DETAIL_TOPIC} {tag.name}</h1>
        </div>
        <p class="font-body text-lg text-foreground/60">
          {$t.BLOG_TAG_DETAIL_FOUND} {blogs.total || blogs.data.length} {$t.BLOG_TAG_DETAIL_ARTICLES_WITH_TOPIC}
        </p>
      </div>

      <!-- Articles Grid -->
      {#if blogs.data && blogs.data.length > 0}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {#each blogs.data as article}
            <Link href="/blogs/{article.slug}" class="block group h-full">
              <div class="bg-card rounded-2xl border border-border overflow-hidden flex flex-col h-full hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5">
                <div class="aspect-video relative overflow-hidden bg-foreground/5">
                  <img src={article.image_path || "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=800&auto=format&fit=crop"} alt={article.title} class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div class="absolute top-4 left-4">
                    <span class="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border shadow-sm bg-white text-black border-white">
                      {article.category?.name || $t.BLOG_GRID_UNCATEGORIZED}
                    </span>
                  </div>
                </div>
                
                <div class="p-6 flex flex-col flex-grow">
                  <h3 class="font-display text-xl font-semibold text-foreground mb-3 line-clamp-2 leading-tight group-hover:text-primary transition-colors">
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
          <p class="font-body text-foreground/50 text-lg">{$t.BLOG_TAG_DETAIL_EMPTY}</p>
        </div>
      {/if}

      <!-- Pagination -->
      {#if blogs.links && blogs.links.length > 3}
        <div class="flex flex-wrap items-center justify-center gap-2 mt-16">
          {#each blogs.links as link}
            {#if link.url}
              <Link 
                href={link.url}
                class="size-10 rounded-lg flex items-center justify-center transition-colors font-display font-medium border {link.active ? 'bg-primary text-white font-bold border-primary shadow-md' : 'border-border text-foreground/70 hover:bg-foreground/5'}"
              >
                {#if link.label.includes('Previous')}
                  <ChevronLeft class="size-5" />
                {:else if link.label.includes('Next')}
                  <ChevronRight class="size-5" />
                {:else}
                  {@html link.label}
                {/if}
              </Link>
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
      {/if}

    </div>
  </main>

  <BlogCta />
  <CtaFooter />
</div>
