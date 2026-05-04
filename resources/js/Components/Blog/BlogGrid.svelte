<script>
  import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-svelte";
  import { Link } from "@inertiajs/svelte";

  let activeFilter = "semua";
  let currentPage = 1;

  const filters = [
    { id: "semua", label: "Semua" },
    { id: "it-bisnis", label: "IT Bisnis" },
    { id: "panduan", label: "Panduan" },
    { id: "industri", label: "Industri" },
    { id: "studi-kasus", label: "Studi Kasus" },
    { id: "kodeflow", label: "Dari Kodeflow" }
  ];

  // Mock data for articles
  const categories = {
    "it-bisnis": { label: "IT untuk Bisnis", color: "bg-white text-black shadow-md", border: "border-white" },
    "panduan": { label: "Panduan & Tips", color: "bg-white text-black shadow-md", border: "border-white" },
    "industri": { label: "Insight Industri", color: "bg-white text-black shadow-md", border: "border-white" },
    "studi-kasus": { label: "Studi Kasus", color: "bg-white text-black shadow-md", border: "border-white" },
    "kodeflow": { label: "Dari Kodeflow", color: "bg-white text-black shadow-md", border: "border-white" }
  };

  const articles = [
    {
      id: 1,
      slug: "cara-pilih-vendor-software-terbaik",
      categoryId: "panduan",
      title: "Checklist Lengkap: Cara Pilih Vendor Software yang Bisa Dipercaya",
      desc: "Hindari proyek gagal. Gunakan 10 kriteria evaluasi teknis dan non-teknis ini sebelum menandatangani kontrak dengan vendor IT manapun.",
      authorName: "Farhan Alfarabi",
      authorAvatar: "https://i.pravatar.cc/100?img=11",
      date: "12 Apr 2025",
      readTime: "7 menit baca",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop",
      featured: true
    },
    {
      id: 2,
      slug: "apa-itu-it-outsourcing",
      categoryId: "it-bisnis",
      title: "Apa Itu IT Outsourcing dan Kapan Bisnis Anda Membutuhkannya?",
      desc: "Penjelasan lengkap untuk pemilik bisnis non-teknikal. Pelajari bedanya dengan hire in-house dan tanda-tanda kapan Anda harus mulai outsourcing.",
      authorName: "Rizky Firmansyah",
      authorAvatar: "https://i.pravatar.cc/100?img=12",
      date: "10 Apr 2025",
      readTime: "5 menit baca",
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=800&auto=format&fit=crop",
      featured: false
    },
    {
      id: 3,
      slug: "erp-vs-spreadsheet",
      categoryId: "it-bisnis",
      title: "ERP Custom vs Spreadsheet: Tanda Sistem IT Anda Perlu Diganti",
      desc: "Jika tim Anda menghabiskan lebih dari 10 jam seminggu untuk rekap data manual, ini saatnya beralih ke sistem yang terintegrasi.",
      authorName: "Ayu Lestari",
      authorAvatar: "https://i.pravatar.cc/100?img=5",
      date: "05 Apr 2025",
      readTime: "6 menit baca",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
      featured: false
    },
    {
      id: 4,
      slug: "kenapa-proyek-it-gagal",
      categoryId: "industri",
      title: "Mengapa 70% Proyek IT di Indonesia Mengalami Keterlambatan atau Gagal?",
      desc: "Berdasarkan analisis dari 50+ proyek, kami menemukan 3 penyebab utama kegagalan proyek IT dan cara menghindarinya.",
      authorName: "Farhan Alfarabi",
      authorAvatar: "https://i.pravatar.cc/100?img=11",
      date: "28 Mar 2025",
      readTime: "8 menit baca",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop",
      featured: false
    },
    {
      id: 5,
      slug: "studi-kasus-ecommerce-scaling",
      categoryId: "studi-kasus",
      title: "Studi Kasus: Meningkatkan Performa Web E-Commerce 300% dengan SvelteKit",
      desc: "Bagaimana tim Kodeflow Tech membantu klien e-commerce menangani lonjakan traffic saat flash sale tanpa server down.",
      authorName: "Budi Santoso",
      authorAvatar: "https://i.pravatar.cc/100?img=3",
      date: "20 Mar 2025",
      readTime: "10 menit baca",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop",
      featured: false
    },
    {
      id: 6,
      slug: "template-sla-vendor",
      categoryId: "panduan",
      title: "Template Service Level Agreement (SLA) untuk Vendor Software",
      desc: "Download template SLA gratis yang kami gunakan. Jangan pernah bekerja dengan vendor tanpa menyepakati poin-poin krusial ini.",
      authorName: "Rizky Firmansyah",
      authorAvatar: "https://i.pravatar.cc/100?img=12",
      date: "15 Mar 2025",
      readTime: "4 menit baca",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop",
      featured: false
    },
    {
      id: 7,
      slug: "behind-the-scenes-kodeflow",
      categoryId: "kodeflow",
      title: "Behind the Scenes: Cara Kodeflow Tech Memantau Produktivitas Tim Remote",
      desc: "Mengintip sistem monitoring internal dan rutinitas harian developer di Kodeflow Tech untuk memastikan klien selalu mendapatkan hasil maksimal.",
      authorName: "Ayu Lestari",
      authorAvatar: "https://i.pravatar.cc/100?img=5",
      date: "10 Mar 2025",
      readTime: "6 menit baca",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
      featured: false
    }
  ];

  $: filteredArticles = activeFilter === "semua" 
    ? articles 
    : articles.filter(a => a.categoryId === activeFilter);
  
  // Featured is always the first one if we are viewing "semua" and on page 1
  $: featuredArticle = (activeFilter === "semua" && currentPage === 1) 
    ? filteredArticles.find(a => a.featured) 
    : null;
    
  $: gridArticles = featuredArticle 
    ? filteredArticles.filter(a => a.id !== featuredArticle.id) 
    : filteredArticles;
</script>

<section class="relative pb-24">
  <div class="max-w-[var(--max)] mx-auto px-[var(--gutter)]">
    
    <!-- Filter Categories -->
    <div class="flex overflow-x-auto no-scrollbar gap-3 mb-12 pb-4 pt-4 border-b border-border/50 mask-edges">
      {#each filters as filter}
        <button 
          class="px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 border {activeFilter === filter.id ? 'bg-primary border-primary text-white shadow-md' : 'bg-transparent border-foreground/10 text-foreground/50 hover:border-foreground/30 hover:text-foreground'}"
          on:click={() => { activeFilter = filter.id; currentPage = 1; }}
        >
          {filter.label}
        </button>
      {/each}
    </div>

    <!-- Featured Article (if exists) -->
    {#if featuredArticle}
      <Link href="/blogs/{featuredArticle.slug}" class="block group mb-16">
        <div class="flex flex-col lg:flex-row bg-card rounded-3xl border border-border overflow-hidden hover:border-primary/30 transition-colors duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/5">
          <!-- Thumbnail -->
          <div class="lg:w-1/2 relative aspect-video lg:aspect-auto overflow-hidden">
            <img 
              src={featuredArticle.image} 
              alt={featuredArticle.title} 
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent lg:hidden"></div>
            <!-- Badge -->
            <div class="absolute top-6 left-6">
              <span class="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border shadow-sm {categories[featuredArticle.categoryId].color} {categories[featuredArticle.categoryId].border}">
                {categories[featuredArticle.categoryId].label}
              </span>
            </div>
          </div>
          
          <!-- Content -->
          <div class="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
            <h2 class="font-display text-2xl lg:text-3xl font-bold text-foreground mb-4 line-clamp-2 leading-tight group-hover:text-primary transition-colors">
              {featuredArticle.title}
            </h2>
            <p class="font-body text-foreground/60 mb-8 line-clamp-3 text-base lg:text-lg leading-relaxed">
              {featuredArticle.desc}
            </p>
            
            <div class="flex items-center gap-4 mb-8">
              <img src={featuredArticle.authorAvatar} alt={featuredArticle.authorName} class="size-10 rounded-full object-cover border border-border" />
              <div class="flex flex-col">
                <span class="font-display text-sm font-medium text-foreground">{featuredArticle.authorName}</span>
                <span class="font-body text-xs text-foreground/40">{featuredArticle.date} · {featuredArticle.readTime}</span>
              </div>
            </div>
            
            <div class="mt-auto pt-6 border-t border-border">
              <span class="inline-flex items-center gap-2 text-sm font-display font-medium text-foreground/70 group-hover:text-primary transition-colors">
                Baca Artikel <ArrowRight class="size-4" />
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
            <div class="bg-card rounded-2xl border border-border overflow-hidden flex flex-col h-full hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5">
              <div class="aspect-video relative overflow-hidden">
                <img src={article.image} alt={article.title} class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div class="absolute top-4 left-4">
                  <span class="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border shadow-sm {categories[article.categoryId].color} {categories[article.categoryId].border}">
                    {categories[article.categoryId].label}
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
                  <img src={article.authorAvatar} alt={article.authorName} class="size-8 rounded-full object-cover border border-border" />
                  <div class="flex flex-col">
                    <span class="font-display text-xs font-medium text-foreground/90">{article.authorName}</span>
                    <span class="font-body text-[11px] text-foreground/40">{article.date} · {article.readTime}</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        {/each}
      </div>
    {:else}
      <div class="text-center py-24 bg-foreground/5 rounded-3xl border border-border">
        <p class="font-body text-foreground/50 text-lg">Belum ada artikel di kategori ini.</p>
      </div>
    {/if}

    <!-- Pagination (Placeholder design based on PRD) -->
    {#if gridArticles.length > 0}
      <div class="flex items-center justify-center gap-2 mt-16">
        <button class="size-10 rounded-lg flex items-center justify-center border border-border text-foreground/50 opacity-50 cursor-not-allowed">
          <ChevronLeft class="size-5" />
        </button>
        <button class="size-10 rounded-lg flex items-center justify-center bg-primary text-primary-foreground font-display font-bold">1</button>
        <button class="size-10 rounded-lg flex items-center justify-center border border-border text-foreground/70 hover:bg-foreground/5 transition-colors font-display font-medium">2</button>
        <span class="px-2 text-foreground/30">...</span>
        <button class="size-10 rounded-lg flex items-center justify-center border border-border text-foreground/70 hover:bg-foreground/5 transition-colors font-display font-medium">5</button>
        <button class="size-10 rounded-lg flex items-center justify-center border border-border text-foreground/70 hover:bg-foreground/5 transition-colors">
          <ChevronRight class="size-5" />
        </button>
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
