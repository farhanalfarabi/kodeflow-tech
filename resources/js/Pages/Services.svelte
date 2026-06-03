<script>
  import Navbar from "../Components/Navbar.svelte";
  import CtaFooter from "../Components/CtaFooter.svelte";
  import ServicesHero from "../Components/Services/ServicesHero.svelte";
  import ServicesDetail from "../Components/Services/ServicesDetail.svelte";
  import ServicesCtaInterrupt from "../Components/Services/ServicesCtaInterrupt.svelte";
  import ServicesWhy from "../Components/Services/ServicesWhy.svelte";
  import ServicesProcess from "../Components/Services/ServicesProcess.svelte";
  import ServicesTechStack from "../Components/Services/ServicesTechStack.svelte";
  import ServicesFaq from "../Components/Services/ServicesFaq.svelte";
  import { currentLanguage } from "../lib/i18n";
</script>

<svelte:head>
  <title>{$currentLanguage === 'id' ? 'Layanan Kami — Dedicated IT Team | Kodeflow Tech' : 'Our Services — Dedicated IT Team | Kodeflow Tech'}</title>
  <meta name="description" content="{$currentLanguage === 'id' ? 'Sewa tim IT profesional dari Kodeflow Tech: Frontend Developer, Backend Developer, Mobile, DevOps, AI Engineer, UI/UX, PM, dan QA. Tanpa deposit, tanpa rekrut, siap dalam 2 minggu.' : 'Hire professional IT teams from Kodeflow Tech: Frontend Developer, Backend Developer, Mobile, DevOps, AI Engineer, UI/UX, PM, and QA. No deposit, no hiring hassle, ready in 2 weeks.'}" />
  <meta property="og:title" content="{$currentLanguage === 'id' ? 'Layanan Kami — Dedicated IT Team | Kodeflow Tech' : 'Our Services — Dedicated IT Team | Kodeflow Tech'}" />
  <meta property="og:description" content="{$currentLanguage === 'id' ? '8 posisi IT profesional tersedia. Termonitor dari kantor kami, siap bergabung dalam 2 minggu. Tanpa deposit, trial period tersedia.' : '8 professional IT roles available. Monitored from our office, ready to join in 2 weeks. No deposit, trial period available.'}" />
  <meta property="og:image" content="/og-services.png" />
  <meta property="og:url" content="https://kodeflow.tech/services" />
  <link rel="canonical" href="https://kodeflow.tech/services" />

  {@html `
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home",     "item": "https://kodeflow.tech" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://kodeflow.tech/services" }
      ]
    }
    </script>
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Berapa lama proses onboarding tim dari Kodeflow Tech?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Rata-rata 7–14 hari kerja dari penandatanganan PKS hingga tim aktif bekerja."
          }
        },
        {
          "@type": "Question",
          "name": "Apakah ada deposit atau biaya di muka?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Tidak ada deposit sama sekali. Pembayaran dilakukan di akhir bulan setelah tim bekerja."
          }
        }
      ]
    }
    </script>
  `}
</svelte:head>

<div class="bg-background text-foreground min-h-screen relative noise overflow-x-hidden">
  <Navbar />
  
  <main>
    <ServicesHero />
    <ServicesDetail />
    <ServicesCtaInterrupt />
    <ServicesWhy />
    <ServicesProcess />
    <!-- Using the same CtaFooter from Homepage / About as required by PRD -->
    <CtaFooter />
  </main>
</div>
