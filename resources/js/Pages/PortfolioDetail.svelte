<script>
    import Navbar from "../Components/Navbar.svelte";
    import CtaFooter from "../Components/CtaFooter.svelte";
    import Faq from "../Components/Faq.svelte";
    export let portfolio;
    export let relatedPortfolios = [];
    import { currentLanguage } from "../lib/i18n";
    import { isLeadModalOpen } from "@/lib/stores";
    import { Link } from "@inertiajs/svelte";
    import ArrowButton from "../Components/ui/ArrowButton.svelte";
    import { ArrowLeft } from "lucide-svelte";
    
    import PortfolioHero from "./PortfolioDetail/Components/PortfolioHero.svelte";
    import PortfolioSummary from "./PortfolioDetail/Components/PortfolioSummary.svelte";
    import PortfolioValidation from "./PortfolioDetail/Components/PortfolioValidation.svelte";
    import PortfolioChallenge from "./PortfolioDetail/Components/PortfolioChallenge.svelte";
    import PortfolioGallery from "./PortfolioDetail/Components/PortfolioGallery.svelte";
    import PortfolioDeepDive from "./PortfolioDetail/Components/PortfolioDeepDive.svelte";

    // Component Reactivity
    $: lang = $currentLanguage || "id";
    $: item = portfolio;
</script>

<svelte:head>
    {#if item}
        <title>{item.title} {lang === 'id' ? '— Studi Kasus Kodeflow Tech' : '— Kodeflow Tech Case Study'}</title>
        <meta name="description" content={item.subtitle} />
        <meta property="og:title" content="{item.title} {lang === 'id' ? '— Studi Kasus Kodeflow Tech' : '— Kodeflow Tech Case Study'}" />
        <meta property="og:description" content={item.subtitle} />
        <meta property="og:image" content={item.image} />
        <meta property="og:type" content="article" />
        
        {@html `
          <script type="application/ld+json">
          {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": ${JSON.stringify(item.title)},
            "description": ${JSON.stringify(item.subtitle)},
            "image": ${JSON.stringify("https://kodeflow.tech" + item.image)},
            "author": {
              "@type": "Organization",
              "name": "Kodeflow Tech"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Kodeflow Tech",
              "logo": {
                "@type": "ImageObject",
                "url": "https://kodeflow.tech/logo.png"
              }
            }
          }
          </script>
        `}
    {:else}
        <title>{lang === 'id' ? 'Studi Kasus Portofolio — Kodeflow Tech' : 'Portfolio Case Studies — Kodeflow Tech'}</title>
    {/if}
</svelte:head>

<div
    class="bg-background text-foreground min-h-screen relative noise overflow-x-hidden"
>
    <Navbar />

    {#if item}
        <main class="pt-32 pb-16">
            <!-- 1. HEADER & HERO SECTION -->
            <PortfolioHero {item} {lang} />

            <!-- 2. RINGKASAN CEPAT (QUICK SUMMARY) -->
            <PortfolioSummary {item} {lang} />

            <!-- 3. BUKTI AWAL & VALIDASI -->
            <PortfolioValidation {item} {lang} />

            <!-- 4. TANTANGAN & SOLUSI SINGKAT -->
            <PortfolioChallenge {item} {lang} />

            <!-- 5. GALERI PROSES -->
            <PortfolioGallery {item} {lang} />

            <!-- 6. DETAIL STUDI KASUS (DEEP DIVE / ACCORDION) -->
            <PortfolioDeepDive {item} {lang} />

            <!-- 7. FAQ PROYEK (TANYA JAWAB) -->
            <Faq
                subtitle={lang === "id" ? "FAQ PROYEK" : "PROJECT FAQ"}
                heading={lang === "id"
                    ? "PERTANYAAN SEPUTAR PROYEK INI"
                    : "QUESTIONS ABOUT THIS PROJECT"}
                description=""
                items={item.faqs}
                showContactCta={false}
            />

            <CtaFooter />
        </main>
    {:else}
        <!-- Not Found Area -->
        <main class="pt-32 pb-24 text-center">
            <div
                class="max-w-md mx-auto px-6 py-12 liquid-glass border border-border/10 rounded-2xl"
            >
                <h2
                    class="font-display text-2xl font-bold uppercase mb-4 text-rose-400"
                >
                    {lang === "id"
                        ? "Studi Kasus Tidak Ditemukan"
                        : "Case Study Not Found"}
                </h2>
                <p
                    class="font-body text-sm text-foreground/60 mb-8 leading-relaxed"
                >
                    {lang === "id"
                        ? "Maaf, data studi kasus yang Anda cari tidak ada atau telah dipindahkan."
                        : "Sorry, the case study you are looking for does not exist or has been relocated."}
                </p>
                <Link
                    href="/portfolio"
                    class="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-semibold text-white hover:bg-primary-light transition-colors text-sm"
                >
                    <ArrowLeft class="size-4" />
                    <span
                        >{lang === "id"
                            ? "Kembali ke Portofolio"
                            : "Back to Portfolios"}</span
                    >
                </Link>
            </div>
        </main>
    {/if}
</div>

<style>
    .liquid-glass {
        background: rgba(255, 255, 255, 0.015);
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);
        border: 1px solid rgba(255, 255, 255, 0.05);
        box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.05);
    }
</style>
