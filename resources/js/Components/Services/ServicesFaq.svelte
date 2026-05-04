<script>
  import { ChevronDown, ArrowRight } from "lucide-svelte";
  import { inview } from "@/lib/utils";

  let show = false;
  let activeIndex = 0;

  const faqs = [
    {
      q: "Berapa lama proses onboarding tim dari Kodeflow Tech?",
      a: "Rata-rata 7–14 hari kerja dari penandatanganan PKS hingga tim aktif bekerja. Ini mencakup akses setup, kickoff meeting, dan alignment dengan sistem Anda. Untuk kebutuhan mendesak, kami bisa diskusikan fast-track onboarding."
    },
    {
      q: "Apakah ada deposit atau biaya di muka?",
      a: "Tidak ada deposit sama sekali. Anda membayar di akhir bulan setelah tim bekerja selama bulan tersebut. Invoice dikirim di akhir bulan, pembayaran dilakukan setelah tim memberikan hasil kerja."
    },
    {
      q: "Bagaimana jika developer yang ditempatkan tidak cocok dengan tim kami?",
      a: "Kami memberikan garansi replacement — jika terjadi ketidakcocokan, kami akan mencari pengganti tanpa biaya tambahan. Sebelum itu, ada trial period di awal yang bisa dimanfaatkan untuk memastikan kecocokan sebelum masuk ke kontrak penuh."
    },
    {
      q: "Apakah developer bekerja remote atau dari kantor?",
      a: "Developer bekerja dari kantor Kodeflow Tech di Pasuruan, Jawa Timur — bukan remote lepas. Ini artinya ada supervisor yang secara aktif memantau pekerjaan, jam kerja terjaga, dan produktivitas termonitor setiap hari."
    },
    {
      q: "Bagaimana cara saya memantau progress pekerjaan tim?",
      a: "Anda mendapatkan akses ke Kodeflow PM — project management tool internal kami. Anda bisa melihat status task, progress harian, dan update terbaru kapan saja, tanpa harus menunggu laporan. Review mingguan juga dilakukan bersama Anda."
    },
    {
      q: "Berapa kontrak minimum dan apakah bisa diperpanjang?",
      a: "Kontrak minimum adalah 6 bulan. Untuk kontrak 12 bulan, ada diskon Rp 500.000 per orang per bulan. Setelah kontrak minimum selesai, bisa diperpanjang atau disesuaikan jumlah anggota tim sesuai kebutuhan bisnis Anda."
    },
    {
      q: "Apakah bisa menambah atau mengurangi anggota tim di tengah kontrak?",
      a: "Penambahan anggota tim bisa dilakukan kapan saja dengan proses onboarding baru. Pengurangan anggota tim diatur dalam ketentuan kontrak dengan notice period yang disepakati di awal — biasanya 30 hari sebelumnya."
    },
    {
      q: "Bagaimana dengan kerahasiaan data dan kode yang dikerjakan?",
      a: "Semua anggota tim menandatangani NDA (Non-Disclosure Agreement) sebelum mulai bekerja. Kode yang dikerjakan adalah sepenuhnya milik klien. Kami tidak menyimpan atau menggunakan kode klien untuk kepentingan lain."
    },
    {
      q: "Apakah Kodeflow Tech hanya untuk perusahaan besar?",
      a: "Tidak — kami melayani semua skala bisnis, dari startup yang baru mulai hingga perusahaan menengah dan enterprise. Yang terpenting adalah Anda memiliki kebutuhan IT yang jelas dan komitmen untuk bekerja sama minimal 6 bulan."
    },
    {
      q: "Bagaimana dengan perbedaan zona waktu jika perusahaan saya di luar Jawa Timur?",
      a: "Tim kami beroperasi Senin–Jumat, jam 08.00–17.00 WIB. Untuk perusahaan di luar WIB, kami bisa mendiskusikan jadwal overlap yang sesuai. Review mingguan dan komunikasi rutin bisa diatur menyesuaikan kebutuhan Anda."
    }
  ];

  function toggle(i) {
    activeIndex = activeIndex === i ? null : i;
  }
</script>

<section class="relative py-24 md:py-32" use:inview on:enter={() => show = true}>
  <div class="max-w-4xl mx-auto px-[var(--gutter)] relative z-10">
    
    <div class="text-center mb-16">
      <div class="flex justify-center mb-6">
        <span class="inline-block border border-white/10 text-white/90 rounded-full px-5 py-2 text-xs bg-white/5 font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(255,255,255,0.05)]">
          FAQ
        </span>
      </div>
      <h2 class="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-white">
        Pertanyaan yang sering ditanyakan
      </h2>
    </div>

    <div class="space-y-4 mb-16">
      {#each faqs as faq, i}
        <div 
          class="liquid-glass rounded-2xl border transition-all duration-300 overflow-hidden {activeIndex === i ? 'border-primary/50 bg-[#1A1025] shadow-[0_10px_30px_rgba(0,0,0,0.5)]' : 'border-white/5 hover:border-white/20'}"
          style="opacity: {show ? 1 : 0}; transform: translateY({show ? 0 : 20}px); transition: opacity 400ms ease-out {i * 50}ms, transform 400ms ease-out {i * 50}ms;"
        >
          <button 
            class="w-full text-left p-6 md:p-8 flex items-center justify-between gap-6"
            on:click={() => toggle(i)}
          >
            <h3 class="font-display text-lg md:text-xl font-medium {activeIndex === i ? 'text-white' : 'text-white/80'} transition-colors">
              {faq.q}
            </h3>
            <div class="size-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 transition-transform duration-300 {activeIndex === i ? 'rotate-180 bg-primary/20 text-primary' : 'text-white/50'}">
              <ChevronDown class="size-5" />
            </div>
          </button>
          
          <div 
            class="grid transition-all duration-300 ease-in-out {activeIndex === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}"
          >
            <div class="overflow-hidden">
              <div class="p-6 md:p-8 pt-0 font-body text-base md:text-lg text-white/60 leading-relaxed border-t border-white/5 mt-2">
                {faq.a}
              </div>
            </div>
          </div>
        </div>
      {/each}
    </div>

    <div class="text-center" style="opacity: {show ? 1 : 0}; transition: opacity 800ms ease-out 600ms;">
      <p class="font-body text-white/50 mb-6">Masih ada pertanyaan lain?</p>
      <a href="https://wa.me/6285733235489?text=Halo,%20saya%20masih%20punya%20pertanyaan%20tentang%20layanan%20Kodeflow%20Tech" target="_blank" class="inline-flex items-center gap-2 text-primary font-display font-medium hover:text-primary-foreground transition-colors group">
        Chat Langsung via WhatsApp <ArrowRight class="size-4 group-hover:translate-x-1 transition-transform" />
      </a>
    </div>

  </div>
</section>
