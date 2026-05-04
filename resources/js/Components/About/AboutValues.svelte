<script>
  import { inview } from "@/lib/utils";

  let show = false;

  const values = [
    {
      num: "01",
      title: "Built Right",
      accent: "from-primary/20 to-transparent",
      border: "hover:border-primary/50",
      quoteCol: "text-white",
      desc: "Setiap keputusan teknikal diambil dengan pertimbangan jangka panjang. Kami tidak pernah memilih jalan pintas yang akan menjadi masalah enam bulan kemudian. Arsitektur yang benar, code yang bisa dibaca, dokumentasi yang lengkap.",
      quote: "Kalau tidak bisa di-maintain, belum selesai."
    },
    {
      num: "02",
      title: "Built for Users",
      accent: "from-primary/20 to-transparent",
      border: "hover:border-primary/50",
      quoteCol: "text-white",
      desc: "Produk yang tidak dipakai adalah kegagalan, apapun alasannya. Setiap sistem kami rancang dari sudut pandang orang yang akan menggunakannya setiap hari — bukan dari sudut pandang database atau convenience developer.",
      quote: "Teknologi ada untuk manusia, bukan sebaliknya."
    },
    {
      num: "03",
      title: "Built to Last",
      accent: "from-primary/20 to-transparent",
      border: "hover:border-primary/50",
      quoteCol: "text-white",
      desc: "Ini yang paling membedakan kami. Sistem kami dirancang untuk hidup lama — bisa di-maintain, bisa di-scale, dan bisa berkembang seiring bisnis klien. Dan kami tetap ada untuk memastikan itu terjadi, bukan hanya di hari pertama.",
      quote: "Kami tidak pergi setelah go-live."
    }
  ];
</script>

<section class="relative py-32 overflow-hidden" use:inview on:enter={() => show = true}>
  <!-- Deep Dark Glow -->
  <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.02)_0%,transparent_80%)]"></div>

  <div class="max-w-[var(--max)] mx-auto px-[var(--gutter)] relative z-10">
    
    <div class="text-center max-w-3xl mx-auto mb-20">
      <div class="flex justify-center mb-6">
        <span class="inline-block border border-white/10 text-white/90 rounded-full px-5 py-2 text-xs bg-white/5 font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(255,255,255,0.05)]">
          Nilai Perusahaan
        </span>
      </div>
      <h2 class="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6">
        Tiga prinsip yang tidak pernah kami kompromikan
      </h2>
      <p class="font-body text-base md:text-lg text-white/50 leading-relaxed">
        Nilai-nilai ini bukan poster di dinding kantor. Ini adalah filter yang kami gunakan saat menghadapi pilihan sulit — antara cepat atau benar, antara murah atau berkualitas.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
      {#each values as val, i}
        <div 
          class="relative bg-[#170e20] border border-white/[0.08] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] rounded-[32px] p-8 lg:p-10 transition-all duration-500 overflow-hidden"
          style="opacity: {show ? 1 : 0}; transform: translateY({show ? 0 : 30}px); transition-delay: {i * 120}ms;"
        >
          <!-- Subtle top gradient -->
          <div class="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none"></div>
          
          <span class="absolute top-6 right-6 font-display text-[80px] leading-none font-black text-white/[0.03] transition-colors pointer-events-none select-none">
            {val.num}
          </span>

          <div class="relative z-10">
            <h3 class="font-display text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span class="text-xs text-white/30 font-normal tracking-widest uppercase">{val.num}</span>
              {val.title}
            </h3>
            
            <p class="font-body text-sm md:text-base text-white/60 leading-relaxed mb-8">
              {val.desc}
            </p>
            
            <div class="w-full h-px bg-gradient-to-r from-white/10 to-transparent mb-6"></div>
            
            <p class={`font-body italic font-medium text-sm text-white/80`}>
              "{val.quote}"
            </p>
          </div>
        </div>
      {/each}
    </div>

  </div>
</section>
