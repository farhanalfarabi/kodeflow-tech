<script>
  import { ArrowRight, CheckCircle2 } from "lucide-svelte";
  import { fade, fly } from "svelte/transition";
  import { inview } from "@/lib/utils";
  import ArrowButton from "../ui/ArrowButton.svelte";

  let show = false;
</script>

<section class="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden" use:inview on:enter={() => show = true}>
  <!-- Deep Dark Glow -->
  <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(var(--primary),0.08)_0%,transparent_70%)]"></div>
  <div class="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>

  <div class="max-w-[var(--max)] mx-auto px-[var(--gutter)] relative z-10">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      
      <!-- Left Content -->
      <div class="lg:col-span-7 flex flex-col items-start text-left">
        {#if show}
          <div transition:fly={{ y: 20, duration: 600, delay: 100 }} class="inline-block border border-white/10 text-white/90 rounded-full px-5 py-2 text-xs bg-white/5 font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(255,255,255,0.05)] mb-6">
            Dedicated IT Team
          </div>
          
          <h1 class="font-display text-4xl md:text-5xl lg:text-[64px] leading-[1.1] font-semibold text-foreground mb-6 drop-shadow-lg">
            <span class="block" transition:fly={{ y: 30, duration: 800, delay: 200 }}>Tim IT profesional Anda</span>
            <span class="block" transition:fly={{ y: 30, duration: 800, delay: 250 }}>tanpa repot rekrut,</span>
            <span class="block text-primary italic" transition:fly={{ y: 30, duration: 800, delay: 300 }}>tanpa risiko turnover.</span>
          </h1>

          <p transition:fly={{ y: 20, duration: 600, delay: 400 }} class="font-body text-base md:text-lg text-foreground/60 max-w-xl mb-10 leading-relaxed">
            Dari frontend developer hingga AI engineer — semua posisi tersedia, termonitor dari kantor kami, siap bergabung dengan tim Anda dalam hitungan minggu.
          </p>

          <div transition:fly={{ y: 20, duration: 600, delay: 500 }} class="mb-12 inline-block">
            <ArrowButton href="https://wa.me/6285733235489?text=Halo,%20saya%20ingin%20konsultasi%20Dedicated%20IT%20Team" text="Konsultasi Gratis" size="lg" target="_blank" />
          </div>

          <!-- Checklist -->
          <div class="w-full h-px bg-border/50 mb-6"></div>
          <div class="flex flex-col sm:flex-row flex-wrap gap-x-8 gap-y-4">
            {#each ['Tanpa deposit — bayar setelah tim bekerja', 'Trial period tersedia sebelum kontrak penuh', 'Garansi replacement jika tidak cocok'] as item, i}
              <div transition:fly={{ y: 10, duration: 400, delay: 600 + (i * 60) }} class="flex items-center gap-2 text-sm text-foreground/80 font-medium">
                <CheckCircle2 class="size-4 text-green-500" />
                <span>{item}</span>
              </div>
            {/each}
          </div>
        {/if}
      </div>

      <!-- Right Visual (Stats Card) -->
      <div class="lg:col-span-5 relative w-full lg:pl-10">
        {#if show}
          <div transition:fly={{ x: 30, duration: 1000, delay: 700 }} class="liquid-glass-strong rounded-3xl p-8 border border-white/10 shadow-2xl relative overflow-hidden">
            <div class="absolute -top-20 -right-20 w-64 h-64 bg-primary/20 rounded-full blur-[60px] pointer-events-none"></div>
            
            <h3 class="font-display text-xl font-semibold text-foreground mb-8">Kodeflow Tech di Angka</h3>
            
            <div class="grid grid-cols-2 gap-y-10 gap-x-6 relative z-10">
              <div>
                <span class="block font-display text-4xl font-extrabold text-white mb-1">50+</span>
                <span class="font-body text-sm text-foreground/50">IT Professionals</span>
              </div>
              <div>
                <span class="block font-display text-4xl font-extrabold text-white mb-1">5</span>
                <span class="font-body text-sm text-foreground/50">Klien Aktif</span>
              </div>
              <div>
                <span class="block font-display text-4xl font-extrabold text-white mb-1">7</span>
                <span class="font-body text-sm text-foreground/50">Supervisors</span>
              </div>
              <div>
                <span class="block font-display text-4xl font-extrabold text-primary mb-1">&lt; 2 <span class="text-xl">mgg</span></span>
                <span class="font-body text-sm text-foreground/50">Rata-rata Onboarding</span>
              </div>
            </div>
            
          </div>
        {/if}
      </div>

    </div>
  </div>
</section>
