<script>
  import Navbar from "../Components/Navbar.svelte";
  import Hero from "../Components/Hero.svelte";
  import TechMarquee from "../Components/TechMarquee.svelte";
  import ServicesBento from "../Components/ServicesBento.svelte";
  import Pourquoi from "../Components/Pourquoi.svelte";
  import Process from "../Components/Process.svelte";
  import Stats from "../Components/Stats.svelte";
  import Testimonials from "../Components/Testimonials.svelte";
  import Faq from "../Components/Faq.svelte";
  import CtaFooter from "../Components/CtaFooter.svelte";
</script>

<div class="bg-background text-foreground min-h-screen relative noise">
  <Navbar />
  <main>
    <Hero />
    <ServicesBento />
    <Pourquoi />
    <Process />
    <TechMarquee />
    <Testimonials />
    <Faq />
    <Stats />
    <CtaFooter />
  </main>
</div>
