<script>
  import { CTA_HEADLINE, CTA_SUB, CTA_LABEL, LANG, FOOTER_LINKS, COPYRIGHT } from "@/lib/constants";
  import { ArrowRight } from "lucide-svelte";
  import ArrowButton from "./ui/ArrowButton.svelte";
</script>

<section class="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-background pt-56">
  
  <!-- Massive Bottom Eclipse Glow -->
  <div class="absolute -bottom-[500px] left-1/2 -translate-x-1/2 w-[1200px] h-[1000px] rounded-[100%] bg-[radial-gradient(ellipse_at_bottom,rgba(255,255,255,0.6)_0%,rgba(147,51,234,0.4)_30%,transparent_70%)] opacity-80 pointer-events-none z-0"></div>
  
  <!-- Secondary inner glow for that bright rim at the bottom -->
  <div class="absolute -bottom-[200px] left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-white/20 blur-[80px] pointer-events-none z-0"></div>

  <!-- Floating Question Marks -->
  <span class="absolute top-[30%] left-[5%] md:left-[15%] text-[150px] md:text-[250px] leading-none font-display font-black text-white/[0.04] rotate-[-15deg] pointer-events-none select-none blur-[2px]">?</span>
  <span class="absolute top-[15%] right-[5%] md:right-[15%] text-[120px] md:text-[200px] leading-none font-display font-black text-white/[0.03] rotate-[20deg] pointer-events-none select-none blur-[1px]">?</span>

  <div class="relative z-10 flex flex-col items-center justify-center flex-1 w-full px-6 text-center max-w-4xl mx-auto">
    
    <!-- Get Started Pill -->
    <span class="border border-white/10 text-white/80 rounded-full px-6 py-2 text-sm bg-white/5 backdrop-blur-md mb-8 font-medium tracking-wide shadow-[0_0_30px_rgba(147,51,234,0.15)]">
      Get Started
    </span>
    
    <!-- Headline -->
    <h2 class="font-display text-5xl md:text-6xl lg:text-[72px] leading-[1.05] tracking-tight text-white font-semibold mb-8 drop-shadow-2xl">
      {CTA_HEADLINE}
    </h2>
    
    <!-- Subheadline -->
    <p class="font-body text-base md:text-lg text-white/70 max-w-xl text-center mx-auto mb-12 font-medium">
      {CTA_SUB}
    </p>
    
    <!-- Action Buttons -->
    <div class="flex items-center gap-4 flex-wrap justify-center">
      <!-- Primary Button -->
      <ArrowButton href="#" text="Start Growth" size="lg" class="shadow-[0_0_40px_rgba(255,255,255,0.2)]" />
      
      <!-- Secondary Dark Button (No Icon) -->
      <a href="#" class="inline-flex items-center justify-center h-[64px] px-8 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-full transition-all backdrop-blur-sm ring-[6px] ring-white/5 hover:ring-white/10">
        <span class="font-bold text-lg">Contact us</span>
      </a>
    </div>
  </div>

  <!-- New Card Footer Layout -->
  <div class="relative z-10 w-full max-w-[1400px] mx-auto px-6 mt-24 pb-6">
    <div class="w-full bg-background/50 backdrop-blur-md border border-white/5 rounded-[32px] p-8 md:p-12 lg:p-16 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
      
      <!-- Top Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        <!-- Logo & Socials -->
        <div class="flex flex-col gap-6">
          <div class="flex items-center gap-2">
            <img src="/assets/logopng.png" alt="Kodeflow" class="h-10 w-auto object-contain" />
          </div>
          <div class="flex items-center gap-3">
            <a href="#" class="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all shadow-inner">
               <svg class="size-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href="#" class="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all shadow-inner">
               <svg class="size-4" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
            </a>
            <a href="#" class="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all shadow-inner">
               <svg class="size-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
          </div>
        </div>

        <!-- Legal -->
        <div class="flex flex-col gap-4">
          <span class="font-display font-semibold text-white/90 mb-2">Legal</span>
          <a href="#" class="font-body text-sm text-white/60 font-medium hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" class="font-body text-sm text-white/60 font-medium hover:text-white transition-colors">Terms of Service</a>
          <a href="#" class="font-body text-sm text-white/60 font-medium hover:text-white transition-colors">Partner Terms</a>
          <a href="#" class="font-body text-sm text-white/60 font-medium hover:text-white transition-colors">Service Level (SLA)</a>
          <a href="#" class="font-body text-sm text-white/60 font-medium hover:text-white transition-colors">Data Processing (DPA)</a>
        </div>

        <!-- Navigation -->
        <div class="flex flex-col gap-4">
          <span class="font-display font-semibold text-white/90 mb-2">Navigation</span>
          <a href="#services" class="font-body text-sm text-white/60 font-medium hover:text-white transition-colors">Features</a>
          <a href="#pricing" class="font-body text-sm text-white/60 font-medium hover:text-white transition-colors">Pricing</a>
          <a href="#about" class="font-body text-sm text-white/60 font-medium hover:text-white transition-colors">About Us</a>
        </div>

        <!-- Contact -->
        <div class="flex flex-col gap-4">
          <span class="font-display font-semibold text-white/90 mb-2">Contact Information</span>
          <span class="font-body text-sm text-white/60 font-medium leading-relaxed">Jakarta Raya, Indonesia<br>12190</span>
          <a href="mailto:hello@kodeflow.id" class="font-body text-sm text-white/60 font-medium hover:text-white transition-colors mt-2">hello@kodeflow.id</a>
        </div>
      </div>

      <!-- Bottom Divider & Copyright -->
      <div class="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
        <span class="font-body text-sm text-white/50">© 2026 Kodeflow Corp. All rights reserved</span>
        <span class="font-body text-sm text-white/50 flex items-center gap-2">Created in <span class="font-display font-bold text-white/90 tracking-widest">KODEFLOW</span></span>
      </div>
    </div>
  </div>
</section>
