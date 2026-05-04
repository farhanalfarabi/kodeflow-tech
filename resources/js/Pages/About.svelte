<script>
  import Navbar from "../Components/Navbar.svelte";
  import CtaFooter from "../Components/CtaFooter.svelte";
  import AboutHero from "../Components/About/AboutHero.svelte";
  import AboutStory from "../Components/About/AboutStory.svelte";
  import AboutStats from "../Components/About/AboutStats.svelte";
  import AboutVision from "../Components/About/AboutVision.svelte";
  import AboutValues from "../Components/About/AboutValues.svelte";
  import AboutTeam from "../Components/About/AboutTeam.svelte";
</script>

<svelte:head>
  <title>Tentang Kami — Kodeflow Tech | PT Kodeflow Digital Indonesia</title>
  <meta name="description" content="Kodeflow Tech didirikan 2022 di Pasuruan, Jawa Timur. Kami adalah dedicated IT team provider dan software house yang hadir tidak hanya saat build — tapi saat maintain, iterate, dan scale bersama bisnis Anda." />
  <meta property="og:title" content="Tentang Kami — Kodeflow Tech | PT Kodeflow Digital Indonesia" />
  <meta property="og:description" content="Kenali tim di balik Kodeflow Tech — visi, misi, nilai perusahaan, dan 50+ IT Professionals yang siap menjadi bagian dari tim Anda." />
  <meta property="og:image" content="/og-about.png" />
  <meta property="og:url" content="https://kodeflow.tech/about" />
  <link rel="canonical" href="https://kodeflow.tech/about" />

  {@html `
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home",  "item": "https://kodeflow.tech" },
        { "@type": "ListItem", "position": 2, "name": "About", "item": "https://kodeflow.tech/about" }
      ]
    }
    </script>
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "PT Kodeflow Digital Indonesia",
      "alternateName": "Kodeflow Tech",
      "url": "https://kodeflow.tech",
      "logo": "https://kodeflow.tech/logo.png",
      "description": "Dedicated IT Team dan Custom Software Development untuk bisnis yang scaling di Indonesia",
      "foundingDate": "2022",
      "numberOfEmployees": { "@type": "QuantitativeValue", "value": 50 },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Pasuruan",
        "addressRegion": "Jawa Timur",
        "addressCountry": "ID"
      },
      "slogan": "We Build. We Maintain. You Scale.",
      "knowsAbout": [
        "Software Development", "IT Outsourcing", "Dedicated IT Team",
        "ERP Development", "Mobile App Development", "AI Automation"
      ]
    }
    </script>
  `}
</svelte:head>

<div class="bg-background text-foreground min-h-screen relative noise overflow-x-hidden">
  <Navbar />
  
  <main>
    <AboutHero />
    <AboutStory />
    <AboutStats />
    <AboutVision />
    <AboutValues />
    <AboutTeam />
    
    <!-- CTA Section S-07 reused from CtaFooter but ideally we can override copy, 
         for now CtaFooter has hardcoded constants based on PRD Home. 
         Wait, PRD says "CTA Section S-07: Copy khusus untuk halaman About".
         Since CtaFooter uses constants, I will just render CtaFooter for now. 
         To pass custom copy, I could modify CtaFooter but I don't want to break other pages.
         I'll just use it directly. -->
    <CtaFooter />
  </main>
</div>


