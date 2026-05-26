<script>
  import { ArrowLeft, Tag as TagIcon } from "lucide-svelte";
  import { Link } from "@inertiajs/svelte";
  import Navbar from "../Components/Navbar.svelte";
  import CtaFooter from "../Components/CtaFooter.svelte";
  import BlogCta from "../Components/Blog/BlogCta.svelte";
  import { t } from "@/lib/i18n";

  export let tags = [];
</script>

<svelte:head>
  <title>Kumpulan Tags — Kodeflow Tech Blog</title>
  <meta name="description" content="Jelajahi berbagai topik dan tags artikel di blog Kodeflow Tech." />
</svelte:head>

<div class="bg-background text-foreground min-h-screen relative noise overflow-x-hidden">
  <Navbar />
  
  <main class="pt-32 pb-24">
    <div class="max-w-[var(--max)] mx-auto px-[var(--gutter)]">
      
      <div class="mb-16 text-center max-w-2xl mx-auto">
        <div class="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-6 text-primary">
          <TagIcon class="size-6" />
        </div>
        <h1 class="font-display text-4xl md:text-5xl font-bold mb-6">{$t.BLOG_TAGS_TITLE}</h1>
        <p class="font-body text-lg text-foreground/60">
          {$t.BLOG_TAGS_DESC}
        </p>
      </div>

      <div class="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
        {#each tags as tag}
          <Link 
            href="/blogs/tags/{tag.slug}"
            class="group relative overflow-hidden px-6 py-3 rounded-full border border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 flex items-center gap-3 hover:-translate-y-1"
          >
            <div class="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors"></div>
            <span class="font-display font-medium text-foreground group-hover:text-primary transition-colors">
              {tag.name}
            </span>
            <span class="px-2 py-0.5 rounded-full bg-foreground/5 text-xs font-bold text-foreground/50 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
              {tag.blogs_count}
            </span>
          </Link>
        {/each}

        {#if tags.length === 0}
          <div class="w-full text-center py-12 border border-dashed border-border rounded-2xl">
            <p class="text-foreground/50">{$t.BLOG_TAGS_EMPTY}</p>
          </div>
        {/if}
      </div>

      <div class="mt-16 text-center">
        <Link href="/blogs" class="inline-flex items-center gap-2 font-medium text-primary hover:text-primary/80 transition-colors">
          <ArrowLeft class="size-4" />
          {$t.BLOG_TAGS_BACK}
        </Link>
      </div>
      
    </div>
  </main>

  <BlogCta />
  <CtaFooter />
</div>
