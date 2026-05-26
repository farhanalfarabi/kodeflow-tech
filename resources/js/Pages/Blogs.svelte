<script>
  import Navbar from "../Components/Navbar.svelte";
  import CtaFooter from "../Components/CtaFooter.svelte";
  import BlogHero from "../Components/Blog/BlogHero.svelte";
  import BlogGrid from "../Components/Blog/BlogGrid.svelte";
  import BlogCta from "../Components/Blog/BlogCta.svelte";

  export let blogs = {};
  export let categories = [];
  export let filters = { search: "", category: "semua" };
</script>

<svelte:head>
  <title>Blog & Insights — Kodeflow Tech | PT Kodeflow Digital Indonesia</title>
  <meta name="description" content="Artikel praktis tentang IT, digitalisasi, dan cara membangun tim teknologi yang bisa diandalkan. Temukan insight untuk bisnis yang sedang scaling." />
  <meta property="og:title" content="Blog & Insights — Kodeflow Tech | PT Kodeflow Digital Indonesia" />
  <meta property="og:description" content="Artikel praktis tentang IT, digitalisasi, dan cara membangun tim teknologi yang bisa diandalkan." />
  <meta property="og:image" content="/og-blog.png" />
  <meta property="og:url" content="https://kodeflow.tech/blogs" />
  <link rel="canonical" href="https://kodeflow.tech/blogs" />

  {@html `
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home",  "item": "https://kodeflow.tech" },
        { "@type": "ListItem", "position": 2, "name": "Blog",  "item": "https://kodeflow.tech/blogs" }
      ]
    }
    </script>
  `}
</svelte:head>

<div class="bg-background text-foreground min-h-screen relative noise overflow-x-hidden">
  <Navbar />
  
  <main>
    <BlogHero bind:searchQuery={filters.search} {filters} />
    <BlogGrid {blogs} {categories} bind:activeFilter={filters.category} bind:searchQuery={filters.search} />
    <BlogCta />
    <CtaFooter />
  </main>
</div>
