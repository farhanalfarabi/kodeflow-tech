<script>
  import { ArrowRight, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-svelte";
  import { inview } from "@/lib/utils";

  let show = false;
  let activeStep = 0;

  const steps = [
    {
      title: "Konsultasi Gratis",
      time: "Respon dalam < 24 jam",
      desc: "Ceritakan kebutuhan IT Anda. Kami fasilitasi sesi konsultasi untuk memahami:\n• Posisi yang dibutuhkan dan berapa orangnya\n• Tech stack dan sistem yang akan digunakan\n• Durasi dan model kontrak yang diinginkan\n• Cara kerja dan ritme kolaborasi tim Anda",
      output: "Pemahaman kebutuhan yang jelas + rekomendasi awal komposisi tim"
    },
    {
      title: "Proposal Tim",
      time: "Proposal siap dalam 1–2 hari kerja",
      desc: "Kami siapkan proposal yang mencakup:\n• Komposisi tim yang direkomendasikan beserta profil skill\n• Estimasi timeline onboarding per posisi\n• Detail SLA: jam kerja, response time, mekanisme laporan\n• Ketentuan kontrak dan opsi trial period",
      output: "Proposal tim lengkap + draft kontrak untuk direview"
    },
    {
      title: "PKS & NDA",
      time: "Proses tanda tangan 1–3 hari kerja",
      desc: "Dokumen yang ditandatangani:\n• Perjanjian Kerja Sama (PKS) antara PT Kodeflow Digital Indonesia dan perusahaan Anda\n• NDA (Non-Disclosure Agreement) untuk kerahasiaan data\n• SLA tertulis yang mengikat kedua pihak",
      output: "Kontrak resmi yang melindungi kedua belah pihak. Tidak ada deposit."
    },
    {
      title: "Onboarding & Setup",
      time: "3–7 hari kerja",
      desc: "Proses onboarding mencakup:\n• Tim mendapat akses ke sistem, repository, dan tools Anda\n• Anda diundang ke Kodeflow PM sebagai observer\n• Kickoff meeting untuk alignment tujuan, cara kerja\n• Setup komunikasi harian (Slack/Discord/Meet)",
      output: "Tim siap, sistem terkoneksi, komunikasi berjalan"
    },
    {
      title: "Tim Mulai Bekerja",
      time: "Mulai aktif bekerja dari hari pertama",
      desc: "Setelah onboarding selesai:\n• Developer bekerja dari kantor Kodeflow — termonitor penuh\n• Update status harian tersedia di Kodeflow PM\n• Review mingguan bersama Anda untuk evaluasi progress\n• Komunikasi berjalan terstruktur sesuai SLA",
      output: "Tim produktif, progress transparan, Anda bisa fokus ke bisnis"
    }
  ];

  function next() { if (activeStep < steps.length - 1) activeStep++; }
  function prev() { if (activeStep > 0) activeStep--; }
</script>

<section class="relative py-24 md:py-32 bg-white" use:inview on:enter={() => show = true}>
  <div class="max-w-[var(--max)] mx-auto px-[var(--gutter)] relative z-10">
    
    <div class="inline-block border border-primary/20 text-primary rounded-full px-5 py-2 text-xs bg-primary/5 font-bold tracking-widest uppercase shadow-[0_4px_15px_rgba(var(--primary),0.05)] mb-6">
      Proses Bergabung
    </div>
    
    <h2 class="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-900 mb-6">
      Dari percakapan pertama ke tim yang produktif — dalam 2 minggu
    </h2>
    <p class="font-body text-slate-600 text-lg max-w-3xl mb-16">
      Tidak ada proses yang berbelit. Tidak ada biaya tersembunyi. Setiap langkah punya output yang jelas dan timeline yang realistis.
    </p>

    <!-- Horizontal Timeline Navigation (Desktop) -->
    <div class="hidden md:flex items-start justify-between mb-12 relative" style="opacity: {show ? 1 : 0}; transition: opacity 800ms ease-out 200ms;">
      <!-- The line is placed exactly 20px from top to perfectly bisect the 40px (size-10) circles -->
      <div class="absolute top-5 left-0 right-0 h-px bg-slate-200 -translate-y-1/2 z-0"></div>
      <div class="absolute top-5 left-0 h-px bg-primary -translate-y-1/2 z-0 transition-all duration-500" style="width: {(activeStep / (steps.length - 1)) * 100}%"></div>
      
      {#each steps as step, i}
        <button 
          class="relative z-10 flex flex-col items-center gap-4 group"
          on:click={() => activeStep = i}
        >
          <div class="size-10 rounded-full flex items-center justify-center text-sm font-display font-bold transition-all duration-300 {i <= activeStep ? 'bg-primary text-white shadow-[0_0_15px_rgba(var(--primary),0.4)]' : 'bg-slate-50 border border-slate-200 text-slate-400 group-hover:border-primary/30 group-hover:text-primary'}">
            {i + 1}
          </div>
          <span class="font-display text-sm whitespace-nowrap {i === activeStep ? 'text-primary' : (i < activeStep ? 'text-slate-900' : 'text-slate-400')} transition-colors">
            {step.title}
          </span>
        </button>
      {/each}
    </div>

    <!-- Active Step Card -->
    <div 
      class="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-[0_10px_40px_rgba(0,0,0,0.06)] relative overflow-hidden min-h-[400px] flex flex-col justify-center transition-all duration-500"
      style="opacity: {show ? 1 : 0}; transform: translateY({show ? 0 : 20}px); transition: opacity 800ms ease-out, transform 800ms ease-out;"
    >
      {#key activeStep}
        <div 
          class="relative z-10 animate-fade-up flex flex-col h-full"
          style="--tw-enter-opacity: 0; --tw-enter-translate-y: 10px;"
        >
          <!-- Decorative large number -->
          <span class="absolute -top-10 -right-10 font-display text-[250px] font-black text-slate-900/[0.03] leading-none select-none pointer-events-none">
            0{activeStep + 1}
          </span>

          <div class="flex items-center gap-4 mb-8">
            <span class="bg-primary/10 border border-primary/20 text-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-2">
              ⏱ {steps[activeStep].time}
            </span>
          </div>

          <h3 class="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            <span class="text-slate-300 mr-2">0{activeStep + 1}</span> {steps[activeStep].title}
          </h3>

          <div class="space-y-3 mb-10 max-w-2xl font-body text-base md:text-lg text-slate-600 leading-relaxed">
            {#each steps[activeStep].desc.split('\n') as line}
              {#if line.startsWith('•')}
                <div class="flex items-start gap-3 ml-2">
                  <ArrowRight class="size-4 text-primary shrink-0 mt-1.5" />
                  <span>{line.substring(1).trim()}</span>
                </div>
              {:else}
                <p>{line}</p>
              {/if}
            {/each}
          </div>

          <div class="mt-auto pt-6 w-full">
            <div class="bg-primary/5 border border-primary/20 rounded-xl p-5 flex items-start gap-4">
              <div class="size-10 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0">
                <CheckCircle2 class="size-5" />
              </div>
              <div>
                <span class="block text-xs font-bold uppercase tracking-widest text-primary mb-1">Output Langkah Ini</span>
                <span class="font-body text-sm md:text-base font-medium text-slate-900">{steps[activeStep].output}</span>
              </div>
            </div>
          </div>
        </div>
      {/key}
    </div>

    <!-- Mobile/Footer Navigation Controls -->
    <div class="mt-8 flex items-center justify-between" style="opacity: {show ? 1 : 0}; transition: opacity 800ms ease-out 400ms;">
      <button 
        class="flex items-center gap-2 text-sm font-display uppercase tracking-widest text-slate-500 hover:text-primary transition-colors disabled:opacity-30 disabled:hover:text-slate-500"
        on:click={prev}
        disabled={activeStep === 0}
      >
        <ChevronLeft class="size-4" /> Sebelumnya
      </button>
      
      <span class="font-display text-sm font-bold text-slate-400">
        <span class="text-slate-900">{activeStep + 1}</span> / {steps.length}
      </span>
      
      <button 
        class="flex items-center gap-2 text-sm font-display uppercase tracking-widest text-slate-500 hover:text-primary transition-colors disabled:opacity-30 disabled:hover:text-slate-500"
        on:click={next}
        disabled={activeStep === steps.length - 1}
      >
        Selanjutnya <ChevronRight class="size-4" />
      </button>
    </div>

  </div>
</section>
