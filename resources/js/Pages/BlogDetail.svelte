<script>
  import { ArrowLeft, Clock, Calendar, Share2, Link as LinkIcon, Check } from "lucide-svelte";
  import { Link } from "@inertiajs/svelte";
  import Navbar from "../Components/Navbar.svelte";
  import CtaFooter from "../Components/CtaFooter.svelte";
  import BlogCta from "../Components/Blog/BlogCta.svelte";
  import { t } from "@/lib/i18n";

  export let blog = {};
  export let relatedArticles = [];

  // Fungsi utilitas tanggal
  const formatDate = (dateString) => {
    if (!dateString) return '';
    return new Date(dateString).toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  $: currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  $: encodedUrl = encodeURIComponent(currentUrl);
  $: encodedTitle = encodeURIComponent(blog.title || '');

  let copied = false;
  function copyLink() {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(currentUrl);
      copied = true;
      setTimeout(() => copied = false, 2000);
    }
  }
</script>

<svelte:head>
  <title>{blog.title} — Kodeflow Tech Blog</title>
  <meta name="description" content={blog.desc} />
</svelte:head>

<div class="bg-background text-foreground min-h-screen relative noise overflow-x-hidden">
  <Navbar />
  
  <main class="pt-32 pb-24">
    <article class="max-w-4xl mx-auto px-[var(--gutter)]">
      <!-- Back Button -->
      <Link href="/blogs" class="inline-flex items-center gap-2 text-foreground/60 hover:text-primary-light transition-colors mb-8 font-medium">
        <ArrowLeft class="size-4" />
        {$t.BLOG_DETAIL_BACK}
      </Link>

      <!-- Header -->
      <div class="mb-10 text-center">
        <div class="mb-6 flex justify-center">
          <span class="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border shadow-sm bg-white text-black border-white">
            {blog.category?.name || 'Uncategorized'}
          </span>
        </div>
        <h1 class="font-display text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
          {blog.title}
        </h1>
        
        <div class="flex flex-wrap items-center justify-center gap-6 text-foreground/60 text-sm font-medium">
          <div class="flex items-center gap-3">
            <img src={"https://ui-avatars.com/api/?name=" + blog.author?.name + "&background=random"} alt={blog.author?.name} class="size-10 rounded-full border border-border object-cover" />
            <span class="text-foreground font-display">{blog.author?.name || $t.BLOG_GRID_ADMIN}</span>
          </div>
          <div class="flex items-center gap-2">
            <Calendar class="size-4" />
            {formatDate(blog.publish_date)}
          </div>
          <div class="flex items-center gap-2">
            <Clock class="size-4" />
            {blog.read_time} {$t.BLOG_GRID_READ_MIN}
          </div>
        </div>
      </div>

      <!-- Featured Image -->
      <div class="relative aspect-[21/9] rounded-3xl overflow-hidden mb-16 border border-border shadow-2xl bg-foreground/5">
        {#if blog.image_path}
          <img src={blog.image_path} alt={blog.title} class="w-full h-full object-cover" />
        {/if}
      </div>

      <!-- Content Layout -->
      <div class="flex flex-col lg:flex-row gap-12 relative">
        
        <!-- Social Share Sidebar (Sticky) -->
        <div class="hidden lg:block w-16 shrink-0">
          <div class="sticky top-32 flex flex-col gap-4 items-center">
            <span class="text-xs font-bold text-foreground/40 uppercase mb-2" style="writing-mode: vertical-rl; transform: rotate(180deg);">{$t.BLOG_DETAIL_SHARE}</span>
            <!-- Facebook -->
            <a href="https://www.facebook.com/sharer/sharer.php?u={encodedUrl}" target="_blank" rel="noopener noreferrer" class="size-10 rounded-full flex items-center justify-center border border-border text-foreground/60 hover:text-[#1877F2] hover:border-[#1877F2]/50 hover:bg-[#1877F2]/5 transition-all" title="Share to Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <!-- Twitter/X -->
            <a href="https://twitter.com/intent/tweet?url={encodedUrl}&text={encodedTitle}" target="_blank" rel="noopener noreferrer" class="size-10 rounded-full flex items-center justify-center border border-border text-foreground/60 hover:text-white hover:border-white/50 hover:bg-white/5 transition-all" title="Share to X (Twitter)">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
            </a>
            <!-- LinkedIn -->
            <a href="https://www.linkedin.com/shareArticle?mini=true&url={encodedUrl}&title={encodedTitle}" target="_blank" rel="noopener noreferrer" class="size-10 rounded-full flex items-center justify-center border border-border text-foreground/60 hover:text-[#0A66C2] hover:border-[#0A66C2]/50 hover:bg-[#0A66C2]/5 transition-all" title="Share to LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <!-- Copy Link -->
            <button on:click={copyLink} class="size-10 rounded-full flex items-center justify-center border {copied ? 'border-green-500 text-green-500 bg-green-500/10' : 'border-border text-foreground/60 hover:text-primary-light hover:border-primary-light/50 hover:bg-primary-light/5'} transition-all mt-4" title="Copy Link">
              {#if copied}
                <Check class="size-4" />
              {:else}
                <LinkIcon class="size-4" />
              {/if}
            </button>
          </div>
        </div>

        <!-- Main Content (HTML styled) -->
        <div class="tiptap-content flex-1 font-body text-foreground/80 leading-relaxed text-lg max-w-none">
          <p class="text-xl text-foreground font-medium mb-10 leading-snug">
            {blog.desc}
          </p>
          {@html blog.content}

          {#if blog.ai_summary}
            <div class="mt-12 mb-10 bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8 relative overflow-hidden">
              <div class="absolute top-0 right-0 p-4 opacity-10">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              </div>
              <div class="flex items-center gap-2 mb-4 text-primary font-bold tracking-wide uppercase text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>
                AI Summary
              </div>
              <div class="tiptap-content text-lg leading-relaxed text-foreground/90 font-medium">
                {@html blog.ai_summary}
              </div>
            </div>
          {/if}
          
          {#if blog.tags && blog.tags.length > 0}
            <div class="mt-12 pt-8 border-t border-border flex flex-wrap gap-3">
              <span class="text-sm font-bold text-foreground/50 uppercase tracking-widest my-auto mr-2">{$t.BLOG_DETAIL_TAGS}</span>
              {#each blog.tags as tag}
                <Link href="/blogs/tags/{tag.slug}" class="px-3 py-1 bg-foreground/5 text-foreground/70 rounded-full text-sm hover:bg-foreground/10 hover:text-primary-light transition-colors border border-border">{tag.name}</Link>
              {/each}
            </div>
          {/if}


        </div>

      </div>
    </article>
  </main>

  <!-- Related Blogs Section -->
  <section class="py-24 bg-card border-t border-border">
    <div class="max-w-[var(--max)] mx-auto px-[var(--gutter)]">
      <div class="mb-12">
        <h2 class="font-display text-3xl font-bold text-foreground">{$t.BLOG_DETAIL_RELATED_ARTICLE}</h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        {#each relatedArticles as related}
          <Link href="/blogs/{related.slug}" class="block group h-full">
            <div class="bg-background rounded-2xl border border-border overflow-hidden flex flex-col h-full hover:border-primary-light/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary-light/5">
              <div class="aspect-video relative overflow-hidden bg-foreground/5">
                {#if related.image_path}
                  <img src={related.image_path} alt={related.title} class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                {/if}
                <div class="absolute top-4 left-4">
                  <span class="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border shadow-sm bg-white text-black border-white">
                    {related.category?.name || $t.BLOG_GRID_UNCATEGORIZED}
                  </span>
                </div>
              </div>
              
              <div class="p-6 flex flex-col flex-grow">
                <h3 class="font-display text-xl font-semibold text-foreground mb-3 line-clamp-2 leading-tight group-hover:text-primary-light transition-colors">
                  {related.title}
                </h3>
                <p class="font-body text-sm text-foreground/60 mb-6 line-clamp-3 leading-relaxed flex-grow">
                  {related.desc}
                </p>
                
                <div class="flex items-center gap-3 pt-5 border-t border-border/50 mt-auto">
                  <img src={"https://ui-avatars.com/api/?name=" + related.author?.name + "&background=random"} alt={related.author?.name} class="size-8 rounded-full object-cover border border-border" />
                  <div class="flex flex-col">
                    <span class="font-display text-xs font-medium text-foreground/90">{related.author?.name || $t.BLOG_GRID_ADMIN}</span>
                    <span class="font-body text-[11px] text-foreground/40">{formatDate(related.publish_date)} · {related.read_time} {$t.BLOG_GRID_READ_MIN}</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        {/each}
      </div>
    </div>
  </section>

  <!-- CTA and Footer -->
  <BlogCta />
  <CtaFooter />
</div>

<style>
  :global(.tiptap-content p) {
    margin-bottom: 1.5em;
  }
  :global(.tiptap-content h1),
  :global(.tiptap-content h2),
  :global(.tiptap-content h3),
  :global(.tiptap-content h4),
  :global(.tiptap-content h5),
  :global(.tiptap-content h6) {
    color: var(--foreground);
    font-family: var(--font-display, "Oswald", sans-serif);
    font-weight: 700;
    margin-top: 2em;
    margin-bottom: 0.75em;
    line-height: 1.3;
  }
  :global(.tiptap-content h1) { font-size: 2.25rem; }
  :global(.tiptap-content h2) { font-size: 1.875rem; }
  :global(.tiptap-content h3) { font-size: 1.5rem; }
  :global(.tiptap-content h4) { font-size: 1.25rem; }
  :global(.tiptap-content ul) {
    list-style-type: disc;
    padding-left: 1.5em;
    margin-bottom: 1.5em;
  }
  :global(.tiptap-content ol) {
    list-style-type: decimal;
    padding-left: 1.5em;
    margin-bottom: 1.5em;
  }
  :global(.tiptap-content li) {
    margin-bottom: 0.5em;
  }
  :global(.tiptap-content li > p) {
    margin-bottom: 0.5em;
  }
  :global(.tiptap-content a) {
    color: var(--color-primary-light);
    text-decoration: none;
    font-weight: 500;
  }
  :global(.tiptap-content a:hover) {
    text-decoration: underline;
  }
  :global(.tiptap-content blockquote) {
    border-left: 4px solid var(--color-primary-light);
    padding-left: 1.5rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
    font-style: italic;
    background-color: rgba(139, 92, 246, 0.05); /* Menggunakan warna primary ungu yang soft */
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
    padding-right: 1.5rem;
  }
  :global(.tiptap-content img) {
    border-radius: 1rem;
    max-width: 100%;
    height: auto;
    margin-top: 2rem;
    margin-bottom: 2rem;
    border: 1px solid rgba(255,255,255,0.1);
  }
  :global(.tiptap-content strong) {
    color: var(--foreground);
    font-weight: 600;
  }
  :global(.tiptap-content pre) {
    background-color: #1a1b26;
    color: #a9b1d6;
    padding: 1rem;
    border-radius: 0.5rem;
    overflow-x: auto;
    margin-top: 1.5em;
    margin-bottom: 1.5em;
    border: 1px solid rgba(255,255,255,0.1);
  }
  :global(.tiptap-content code) {
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
    font-size: 0.875em;
    background-color: rgba(139, 92, 246, 0.1);
    color: #c084fc;
    padding: 0.2em 0.4em;
    border-radius: 0.25rem;
  }
  :global(.tiptap-content pre code) {
    background-color: transparent;
    color: inherit;
    padding: 0;
  }
</style>
