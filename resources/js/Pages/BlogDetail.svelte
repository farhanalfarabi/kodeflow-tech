<script>
  import { ArrowLeft, Clock, Calendar, Share2, Link as LinkIcon } from "lucide-svelte";
  import { Link } from "@inertiajs/svelte";
  import Navbar from "../Components/Navbar.svelte";
  import CtaFooter from "../Components/CtaFooter.svelte";
  import BlogCta from "../Components/Blog/BlogCta.svelte";

  export let slug = "";

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

  $: article = articles.find(a => a.slug === slug) || articles[0];
  $: relatedArticles = articles.filter(a => a.categoryId === article.categoryId && a.id !== article.id).slice(0, 3);
  
  // fallback if related is empty
  $: if (relatedArticles.length === 0) {
      relatedArticles = articles.filter(a => a.id !== article.id).slice(0, 3);
  }
</script>

<svelte:head>
  <title>{article.title} — Kodeflow Tech Blog</title>
  <meta name="description" content={article.desc} />
</svelte:head>

<div class="bg-background text-foreground min-h-screen relative noise overflow-x-hidden">
  <Navbar />
  
  <main class="pt-32 pb-24">
    <article class="max-w-4xl mx-auto px-[var(--gutter)]">
      <!-- Back Button -->
      <Link href="/blogs" class="inline-flex items-center gap-2 text-foreground/60 hover:text-primary transition-colors mb-8 font-medium">
        <ArrowLeft class="size-4" />
        Kembali ke Blog
      </Link>

      <!-- Header -->
      <div class="mb-10 text-center">
        <div class="mb-6 flex justify-center">
          <span class="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border shadow-sm {categories[article.categoryId].color} {categories[article.categoryId].border}">
            {categories[article.categoryId].label}
          </span>
        </div>
        <h1 class="font-display text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
          {article.title}
        </h1>
        
        <div class="flex flex-wrap items-center justify-center gap-6 text-foreground/60 text-sm font-medium">
          <div class="flex items-center gap-3">
            <img src={article.authorAvatar} alt={article.authorName} class="size-10 rounded-full border border-border object-cover" />
            <span class="text-foreground font-display">{article.authorName}</span>
          </div>
          <div class="flex items-center gap-2">
            <Calendar class="size-4" />
            {article.date}
          </div>
          <div class="flex items-center gap-2">
            <Clock class="size-4" />
            {article.readTime}
          </div>
        </div>
      </div>

      <!-- Featured Image -->
      <div class="relative aspect-[21/9] rounded-3xl overflow-hidden mb-16 border border-border shadow-2xl">
        <img src={article.image} alt={article.title} class="w-full h-full object-cover" />
      </div>

      <!-- Content Layout -->
      <div class="flex flex-col lg:flex-row gap-12 relative">
        
        <!-- Social Share Sidebar (Sticky) -->
        <div class="hidden lg:block w-16 shrink-0">
          <div class="sticky top-32 flex flex-col gap-4 items-center">
            <span class="text-xs font-bold text-foreground/40 uppercase mb-2" style="writing-mode: vertical-rl; transform: rotate(180deg);">Bagikan</span>
            <button class="size-10 rounded-full flex items-center justify-center border border-border text-foreground/60 hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </button>
            <button class="size-10 rounded-full flex items-center justify-center border border-border text-foreground/60 hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
            </button>
            <button class="size-10 rounded-full flex items-center justify-center border border-border text-foreground/60 hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </button>
            <button class="size-10 rounded-full flex items-center justify-center border border-border text-foreground/60 hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all mt-4">
              <LinkIcon class="size-4" />
            </button>
          </div>
        </div>

        <!-- Main Content (Markdown styled) -->
        <div class="flex-1 font-body text-foreground/80 leading-relaxed text-lg">
          <p class="text-xl text-foreground font-medium mb-10 leading-snug">
            {article.desc}
          </p>

          <h2 class="font-display text-3xl font-bold text-foreground mt-12 mb-6">Pengantar Masalah</h2>
          <p class="mb-6">
            Dalam era digital yang bergerak sangat cepat, banyak perusahaan yang terjebak pada solusi sementara. Hal ini berakibat pada penumpukan "technical debt" atau utang teknis yang pada akhirnya membuat sistem menjadi lambat, sulit dikembangkan, dan rentan terhadap masalah keamanan.
          </p>
          <p class="mb-6">
            Melalui pengalaman kami menangani berbagai studi kasus dan proyek skala enterprise, kami merangkum beberapa pendekatan terbaik yang bisa Anda terapkan mulai hari ini. Mengapa hal ini penting? Karena skalabilitas tidak terjadi secara tidak sengaja—ia harus direncanakan.
          </p>

          <h3 class="font-display text-2xl font-semibold text-foreground mt-10 mb-4">Langkah 1: Audit Sistem Secara Menyeluruh</h3>
          <p class="mb-4">
            Sebelum Anda bisa memperbaiki sesuatu, Anda harus mengerti kerusakannya. Lakukan audit menyeluruh yang mencakup:
          </p>
          <ul class="list-disc list-outside pl-6 mb-8 space-y-2 marker:text-primary">
            <li>Evaluasi kualitas kode dan arsitektur saat ini</li>
            <li>Identifikasi <strong>bottleneck</strong> pada performa database</li>
            <li>Tinjauan keamanan untuk memastikan tidak ada celah eksploitasi yang terlewat</li>
          </ul>

          <blockquote class="border-l-4 border-primary pl-6 my-10 bg-primary/5 py-6 pr-6 rounded-r-2xl">
            <p class="text-xl italic text-foreground/90 font-medium leading-snug mb-0">
              "Sistem IT yang baik bukan hanya tentang fitur yang banyak, tapi tentang seberapa mudah sistem tersebut di-scale saat bisnis Anda bertumbuh. Kami menyebutnya pondasi untuk esok hari."
            </p>
          </blockquote>

          <h3 class="font-display text-2xl font-semibold text-foreground mt-10 mb-4">Langkah 2: Migrasi Bertahap (Strangler Fig Pattern)</h3>
          <p class="mb-6">
            Jangan mencoba mengganti sistem lama dalam satu malam. Gunakan pendekatan bertahap di mana fitur-fitur baru atau yang perlu dioptimasi dipindahkan perlahan ke arsitektur modern (seperti <em>microservices</em> atau <em>serverless</em>).
          </p>
          
          <figure class="my-10">
            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop" alt="Arsitektur Modern" class="rounded-2xl border border-border w-full object-cover max-h-[400px]" />
            <figcaption class="text-center text-sm text-foreground/50 mt-4 font-medium">Contoh penerapan arsitektur modern yang modular dan terukur.</figcaption>
          </figure>

          <h2 class="font-display text-3xl font-bold text-foreground mt-12 mb-6">Kesimpulan</h2>
          <p class="mb-6">
            Memilih solusi yang tepat dari awal mungkin akan membutuhkan investasi waktu yang lebih di fase perencanaan. Namun, itu akan menghemat ratusan jam <em>debugging</em> dan <em>refactoring</em> di masa depan. Jangan ragu untuk berkonsultasi dengan expert jika Anda merasa ragu.
          </p>
        </div>

      </div>
    </article>
  </main>

  <!-- Related Blogs Section -->
  <section class="py-24 bg-card border-t border-border">
    <div class="max-w-[var(--max)] mx-auto px-[var(--gutter)]">
      <div class="flex items-center justify-between mb-12">
        <h2 class="font-display text-3xl font-bold text-foreground">Artikel Terkait</h2>
        <Link href="/blogs" class="text-sm font-medium text-primary hover:text-primary/80 transition-colors flex items-center gap-2">
          Lihat Semua <ArrowLeft class="size-4 rotate-180" />
        </Link>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        {#each relatedArticles as related}
          <Link href="/blogs/{related.slug}" class="block group h-full">
            <div class="bg-background rounded-2xl border border-border overflow-hidden flex flex-col h-full hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5">
              <div class="aspect-video relative overflow-hidden">
                <img src={related.image} alt={related.title} class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div class="absolute top-4 left-4">
                  <span class="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border shadow-sm {categories[related.categoryId].color} {categories[related.categoryId].border}">
                    {categories[related.categoryId].label}
                  </span>
                </div>
              </div>
              
              <div class="p-6 flex flex-col flex-grow">
                <h3 class="font-display text-xl font-semibold text-foreground mb-3 line-clamp-2 leading-tight group-hover:text-primary transition-colors">
                  {related.title}
                </h3>
                <p class="font-body text-sm text-foreground/60 mb-6 line-clamp-3 leading-relaxed flex-grow">
                  {related.desc}
                </p>
                
                <div class="flex items-center gap-3 pt-5 border-t border-border/50 mt-auto">
                  <img src={related.authorAvatar} alt={related.authorName} class="size-8 rounded-full object-cover border border-border" />
                  <div class="flex flex-col">
                    <span class="font-display text-xs font-medium text-foreground/90">{related.authorName}</span>
                    <span class="font-body text-[11px] text-foreground/40">{related.date} · {related.readTime}</span>
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
