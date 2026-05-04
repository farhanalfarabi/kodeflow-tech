<script>
  import { inview } from "@/lib/utils";
  
  let show = false;

  const milestones = [
    { year: "2022", title: "Didirikan", desc: "Kodeflow Tech didirikan di Pasuruan, Jawa Timur" },
    { year: "2023", title: "Klien Pertama", desc: "Klien pertama onboard & tim berkembang hingga 20+ professionals" },
    { year: "2024", title: "Scale Up", desc: "Ekspansi ke 50+ IT Professionals dengan 7 Supervisors aktif" },
    { year: "2025", title: "Sekarang", desc: "5 Klien Aktif, 20+ Proyek Selesai, dan terus berkembang" }
  ];
</script>

<section class="relative py-24 md:py-32" use:inview on:enter={() => show = true}>
  <div class="max-w-[var(--max)] mx-auto px-[var(--gutter)]">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12">
      
      <!-- Left Narrative -->
      <div class="lg:col-span-6 xl:col-span-7 pr-0 lg:pr-8">
        <div class="flex items-start mb-6">
          <span class="inline-block border border-white/10 text-white/90 rounded-full px-5 py-2 text-xs bg-white/5 font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(255,255,255,0.05)]">
            Cerita Kami
          </span>
        </div>
        
        <h2 class="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-8 leading-tight">
          Lahir dari frustrasi yang sama yang dirasakan klien kami
        </h2>

        <div class="space-y-6 text-foreground/70 font-body text-base md:text-lg leading-relaxed">
          <p>
            Kodeflow Tech didirikan pada 2022 di Pasuruan, Jawa Timur — bukan di Jakarta, bukan di Silicon Valley. Kami mulai dari keresahan sederhana: terlalu banyak bisnis di Indonesia yang punya kebutuhan IT nyata, tapi tidak bisa menemukan partner yang bisa diandalkan.
          </p>
          <p>
            Polanya selalu sama — vendor yang terlihat bagus di proposal tapi menghilang setelah delivery. Developer yang rekrut susah, lama onboarding, lalu resign di tengah proyek. Sistem yang selesai dibangun tapi tidak ada yang tahu cara maintain-nya. Kami melihat ini terjadi berulang, dan kami yakin ada cara yang lebih baik.
          </p>
          <p>
            Cara yang lebih baik itu dimulai dengan satu prinsip: <strong class="text-foreground font-medium">kami tidak pergi setelah go-live.</strong> Kami hadir tidak hanya saat build, tapi saat maintain, iterate, dan scale. Bukan sebagai vendor yang menyelesaikan satu proyek lalu pamit — tapi sebagai tim yang memahami konteks bisnis Anda dan ikut merayakan setiap pencapaiannya.
          </p>
        </div>
      </div>

      <!-- Right Timeline -->
      <div class="lg:col-span-6 xl:col-span-5 relative">
        <div class="absolute left-[11px] top-4 bottom-4 w-0.5 bg-border rounded-full"></div>
        
        <div class="space-y-12 relative z-10 pl-8">
          {#each milestones as milestone, i}
            <div 
              class="relative transition-all duration-700 ease-out"
              style="opacity: {show ? 1 : 0}; transform: translateX({show ? 0 : 20}px); transition-delay: {i * 150}ms;"
            >
              <!-- Dot -->
              <div class="absolute -left-[37px] top-1.5 size-3.5 rounded-full bg-primary shadow-[0_0_0_4px_rgba(var(--primary),0.15)] ring-1 ring-background"></div>
              
              <!-- Content -->
              <div class="flex items-center gap-4 mb-2">
                <span class="font-display text-xl font-bold text-primary">{milestone.year}</span>
                <div class="h-px flex-1 bg-border/50 hidden sm:block"></div>
                <span class="font-display text-sm uppercase tracking-wider text-foreground/50 hidden sm:block">{milestone.title}</span>
              </div>
              <div class="liquid-glass rounded-xl p-4 md:p-5 border border-white/5 hover:border-primary/20 transition-colors">
                <p class="font-body text-sm md:text-base text-foreground/80 m-0">{milestone.desc}</p>
              </div>
            </div>
          {/each}
        </div>
      </div>

    </div>
  </div>
</section>
