<script>
  import Navbar from "../Components/Navbar.svelte";
  import Hero from "../Components/Hero.svelte";
  import TechMarquee from "../Components/TechMarquee.svelte";
  import ServicesBento from "../Components/ServicesBento.svelte";
  import ServiceCategories from "../Components/ServiceCategories.svelte";
  import Pourquoi from "../Components/Pourquoi.svelte";
  import PortfolioPreview from "../Components/PortfolioPreview.svelte";
  import Process from "../Components/Process.svelte";
  import Stats from "../Components/Stats.svelte";
  import Testimonials from "../Components/Testimonials.svelte";
  import Faq from "../Components/Faq.svelte";
  import CtaFooter from "../Components/CtaFooter.svelte";
  import { currentLanguage } from "../lib/i18n";
</script>

<svelte:head>
  <title>{$currentLanguage === 'id' ? 'Kodeflow Tech | Solusi IT & Custom Software Development' : 'Kodeflow Tech | IT Solutions & Custom Software Development'}</title>
  <meta name="description" content="{$currentLanguage === 'id' ? 'Dedicated IT team provider dan software house. Kami merancang, mengembangkan, dan memelihara sistem ERP, aplikasi mobile, dan solusi digital untuk bisnis yang scaling.' : 'Dedicated IT team provider and software house. We design, develop, and maintain custom ERPs, mobile apps, and digital solutions for scaling businesses.'}" />
  <meta property="og:title" content="{$currentLanguage === 'id' ? 'Kodeflow Tech | Solusi IT & Custom Software Development' : 'Kodeflow Tech | IT Solutions & Custom Software Development'}" />
  <meta property="og:description" content="{$currentLanguage === 'id' ? 'Dedicated IT team provider dan software house. Kami merancang, mengembangkan, dan memelihara sistem ERP, aplikasi mobile, dan solusi digital untuk bisnis yang scaling.' : 'Dedicated IT team provider and software house. We design, develop, and maintain custom ERPs, mobile apps, and digital solutions for scaling businesses.'}" />
  <meta property="og:image" content="/og-home.png" />
  <meta property="og:url" content="https://kodeflow.tech" />
  <meta property="og:type" content="website" />
  <link rel="canonical" href="https://kodeflow.tech" />

  {@html `
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "PT Kodeflow Digital Indonesia",
      "alternateName": "Kodeflow Tech",
      "url": "https://kodeflow.tech",
      "logo": "https://kodeflow.tech/logo.png",
      "description": "Dedicated IT Team dan Custom Software Development",
      "foundingDate": "2022",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Pasuruan",
        "addressRegion": "Jawa Timur",
        "addressCountry": "ID"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "email": "hello@kodeflow.tech"
      }
    }
    </script>
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "url": "https://kodeflow.tech",
      "name": "Kodeflow Tech",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://kodeflow.tech/blogs?search={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    }
    </script>
  `}
</svelte:head>

<div class="bg-background text-foreground min-h-screen relative noise">
  <Navbar />
  <main>
    <Hero />
    <ServicesBento />
    <ServiceCategories />
    <Pourquoi />
    <PortfolioPreview />
    <Process />
    <TechMarquee />
    <Testimonials />
    <Faq />
    <Stats />
    <CtaFooter />
  </main>
</div>
