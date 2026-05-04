<script>
  import { CheckCircle2, XCircle } from "lucide-svelte";
  import { inview } from "@/lib/utils";

  let show = false;

  const comparisons = [
    { aspect: "Monitoring harian", f: "Tidak ada — Anda harus chase sendiri", k: "Dari kantor kami, supervisor aktif memantau" },
    { aspect: "Kecepatan onboarding", f: "2–8 minggu, sering mundur", k: "< 2 minggu, sudah terstruktur" },
    { aspect: "Jika tidak cocok", f: "Mulai rekrut dari nol lagi", k: "Garansi replacement tanpa biaya tambahan" },
    { aspect: "Trial sebelum komitmen", f: "Hampir tidak ada", k: "Tersedia — coba dulu sebelum kontrak penuh" },
    { aspect: "SLA tertulis", f: "Sering tidak ada atau tidak jelas", k: "Selalu ada — jam kerja, response time, laporan" },
    { aspect: "Deposit di muka", f: "Sering diminta 30–50%", k: "Tidak ada deposit sama sekali" },
    { aspect: "Urusan HR & admin", f: "Anda yang urus BPJS, THR, dll", k: "Kami urus semua — zero HR hassle" },
    { aspect: "Supervisor teknikal", f: "Tidak ada", k: "7 supervisors aktif" },
    { aspect: "Laporan progress", f: "Tidak konsisten", k: "Update harian via Kodeflow PM" }
  ];
</script>

<section class="relative py-24 md:py-32 overflow-hidden" use:inview on:enter={() => show = true}>
  <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(255,255,255,0.02)_0%,transparent_80%)] pointer-events-none"></div>

  <div class="max-w-[1200px] mx-auto px-[var(--gutter)] relative z-10">
    
    <div class="text-center max-w-3xl mx-auto mb-16">
      <div class="flex justify-center mb-6">
        <span class="inline-block border border-white/10 text-white/90 rounded-full px-5 py-2 text-xs bg-white/5 font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(255,255,255,0.05)]">
          Perbandingan
        </span>
      </div>
      <h2 class="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6">
        Apa yang membuat Kodeflow Tech berbeda?
      </h2>
      <p class="font-body text-base md:text-lg text-white/50 leading-relaxed">
        Kami bukan sekadar "menyediakan developer". Kami adalah extension dari tim internal Anda — dengan sistem monitoring, supervisor, dan SLA yang jelas.
      </p>
    </div>

    <!-- Mobile view: Cards -->
    <div class="lg:hidden space-y-6">
      {#each comparisons as row, i}
        <div 
          class="liquid-glass rounded-2xl p-6 border border-white/5"
          style="opacity: {show ? 1 : 0}; transform: translateY({show ? 0 : 20}px); transition: all 400ms ease-out {i * 40}ms;"
        >
          <h4 class="font-display text-lg font-bold text-white mb-4 border-b border-white/10 pb-3">{row.aspect}</h4>
          
          <div class="space-y-4">
            <div>
              <span class="text-xs font-bold uppercase tracking-widest text-white/50 block mb-2">Freelancer / Vendor Biasa</span>
              <div class="flex items-start gap-3">
                <XCircle class="size-5 text-red-500/80 shrink-0 mt-0.5" />
                <span class="font-body text-base text-white/70">{row.f}</span>
              </div>
            </div>
            
            <div class="bg-primary/5 rounded-xl p-4 border border-primary/20">
              <span class="text-xs font-bold uppercase tracking-widest text-primary block mb-2">Kodeflow Tech</span>
              <div class="flex items-start gap-3">
                <CheckCircle2 class="size-5 text-green-500 shrink-0 mt-0.5" />
                <span class="font-body text-sm font-medium text-white/90">{row.k}</span>
              </div>
            </div>
          </div>
        </div>
      {/each}
    </div>

    <!-- Desktop view: Table -->
    <div class="hidden lg:block">
      <div 
        class="liquid-glass rounded-[32px] border border-white/10 overflow-hidden"
        style="opacity: {show ? 1 : 0}; transform: translateY({show ? 0 : 30}px); transition: all 800ms ease-out;"
      >
        <table class="w-full text-left border-collapse">
          <thead>
            <tr>
              <th class="p-6 md:p-8 w-1/3 bg-white/[0.02] border-b border-white/10 border-r">
                <span class="text-xs font-bold tracking-widest text-white/60 uppercase">Aspek</span>
              </th>
              <th class="p-6 md:p-8 w-1/3 bg-white/[0.02] border-b border-white/10 border-r">
                <span class="font-display text-xl font-medium text-white/80">Freelancer / Vendor Biasa</span>
              </th>
              <th class="p-6 md:p-8 w-1/3 bg-primary border-b border-primary relative overflow-hidden shadow-[inset_0_0_20px_rgba(255,255,255,0.1)]">
                <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] opacity-20"></div>
                <span class="font-display text-2xl font-bold text-primary-foreground relative z-10 flex items-center gap-3">
                  <img src="/assets/logopng.png" alt="Kodeflow Tech" class="h-8 w-auto object-contain" />
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            {#each comparisons as row, i}
              <tr 
                class="group transition-colors hover:bg-white/[0.02]"
                style="opacity: {show ? 1 : 0}; transform: translateX({show ? 0 : -20}px); transition: all 400ms ease-out {i * 40}ms;"
              >
                <td class="p-6 md:px-8 border-b border-white/10 border-r border-r-white/10">
                  <span class="font-body text-base font-medium text-white/90">{row.aspect}</span>
                </td>
                <td class="p-6 md:px-8 border-b border-white/10 border-r border-r-white/10">
                  <div class="flex items-start gap-3">
                    <XCircle class="size-5 text-red-500/80 shrink-0 mt-0.5" />
                    <span class="font-body text-base text-white/70 leading-relaxed">{row.f}</span>
                  </div>
                </td>
                <td class="p-6 md:px-8 border-b border-primary/20 bg-primary/5 relative group-hover:bg-primary/10 transition-colors">
                  <div class="flex items-start gap-3">
                    <CheckCircle2 class="size-5 text-green-500 shrink-0 mt-0.5" />
                    <span class="font-body text-base font-medium text-white/90 leading-relaxed">{row.k}</span>
                  </div>
                </td>
              </tr>
            {/each}
          </tbody>
        </table>
      </div>
    </div>

  </div>
</section>
