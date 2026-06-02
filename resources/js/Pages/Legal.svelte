<script>
  import Navbar from "../Components/Navbar.svelte";
  import CtaFooter from "../Components/CtaFooter.svelte";
  import { t, currentLanguage } from "@/lib/i18n";
  import { Scale, FileText, ArrowLeft, Clock } from "lucide-svelte";
  import { page } from "@inertiajs/svelte";

  // Receive type from Laravel route (privacy, terms, etc.)
  export let type = "privacy";

  // Get the data based on current language
  $: data = $t.LEGAL_PAGES[type] || {
    title: "Document Not Found",
    lastUpdated: "-",
    content: "The requested legal document could not be found."
  };
</script>

<svelte:head>
  <title>{data.title} | Kodeflow Tech</title>
  <meta name="description" content={`Halaman ${data.title} resmi PT Kodeflow Digital Indonesia.`} />
</svelte:head>

<div class="bg-background text-foreground min-h-screen relative noise overflow-x-hidden">
  <Navbar />

  <main class="pt-32 pb-24">
    <!-- Header Section -->
    <section class="max-w-4xl mx-auto px-6 mb-12 text-center">
      <a href="/" class="inline-flex items-center gap-2 text-sm text-foreground/60 hover:text-primary-light transition-colors mb-8">
        <ArrowLeft class="size-4" />
        <span>{$currentLanguage === 'id' ? 'Kembali ke Beranda' : 'Back to Home'}</span>
      </a>

      <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary-light uppercase tracking-wider mb-6 animate-fade-up">
        <Scale class="size-3.5 text-primary-light" />
        <span>{$t.LEGAL_BADGE || 'KEPATUHAN HUKUM'}</span>
      </div>

      <h1 class="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight uppercase animate-fade-up" style="animation-delay: 100ms">
        {data.title}
      </h1>

      <div class="flex items-center justify-center gap-2 text-sm text-foreground/50 animate-fade-up" style="animation-delay: 200ms">
        <Clock class="size-4" />
        <span>{$currentLanguage === 'id' ? 'Terakhir diperbarui:' : 'Last updated:'} {data.lastUpdated}</span>
      </div>
    </section>

    <!-- Content Document -->
    <section class="max-w-4xl mx-auto px-6 animate-fade-up" style="animation-delay: 300ms">
      <div class="liquid-glass rounded-3xl p-8 md:p-12 lg:p-16 border border-white/10 shadow-2xl relative overflow-hidden">
        <!-- Ambient light inside card -->
        <div class="absolute top-0 right-0 w-64 h-64 bg-primary-light/5 rounded-full blur-3xl pointer-events-none"></div>
        <div class="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
        
        <div class="relative z-10 flex flex-col gap-6">
          <div class="flex items-center gap-3 pb-6 border-b border-white/10 mb-2">
            <FileText class="size-6 text-primary-light" />
            <h2 class="font-display text-2xl font-bold text-white tracking-tight">{data.title}</h2>
          </div>

          <div class="prose prose-invert prose-p:font-body prose-p:text-foreground/75 prose-p:leading-relaxed prose-p:text-[15px] md:prose-p:text-base prose-strong:text-white prose-strong:font-semibold prose-h3:text-xl prose-h3:font-display prose-h3:text-white prose-h3:mt-8 prose-h3:mb-4 prose-ul:text-foreground/75 prose-ul:list-disc prose-ul:pl-5 prose-li:mb-2 max-w-none">
            {@html data.content}
            
            <div class="mt-12 p-6 rounded-2xl bg-primary/10 border border-primary/20">
              <p class="m-0 text-sm text-foreground/80">
                {$currentLanguage === 'id' 
                  ? 'Jika Anda memiliki pertanyaan lebih lanjut mengenai dokumen ini, silakan hubungi tim legal kami melalui email di ' 
                  : 'If you have any further questions regarding this document, please contact our legal team via email at '}
                <a href="mailto:admin@kodeflow.id" class="text-primary-light hover:underline font-medium">admin@kodeflow.id</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>

  <CtaFooter />
</div>
