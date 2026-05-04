<script>
  import { ArrowRight } from "lucide-svelte";
  import { inview } from "@/lib/utils";
  import ArrowButton from "../ui/ArrowButton.svelte";

  let show = false;
</script>

<section class="relative py-20 px-6" use:inview on:enter={() => show = true}>
  <div 
    class="max-w-[800px] mx-auto text-center p-10 md:p-14 rounded-[32px] bg-white border border-black/5 shadow-[0_20px_60px_rgba(0,0,0,0.1)] relative overflow-hidden transition-all duration-1000 ease-out"
    style="opacity: {show ? 1 : 0}; transform: translateY({show ? 0 : 20}px) scale({show ? 1 : 0.98});"
  >
    <!-- Background Glow -->
    <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(var(--primary),0.1)_0%,transparent_70%)] pointer-events-none"></div>

    <div class="relative z-10">
      <h2 class="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-4">
        Belum yakin posisi mana yang paling dibutuhkan tim Anda?
      </h2>
      <p class="font-body text-base md:text-lg text-black/60 max-w-2xl mx-auto mb-10 leading-relaxed">
        Ceritakan kebutuhan bisnis Anda — kami analisis dan rekomendasikan komposisi tim yang paling tepat, tanpa biaya, tanpa komitmen.
      </p>

      <div class="inline-block mb-10">
        <ArrowButton href="https://wa.me/6285733235489?text=Halo,%20saya%20belum%20yakin%20posisi%20IT%20mana%20yang%20dibutuhkan" text="Konsultasikan Kebutuhan Anda" size="lg" target="_blank" variant="solid" />
      </div>
      
      <div class="mt-4 text-xs font-bold text-black/40 uppercase tracking-widest">
        ⏱ Respon dalam &lt; 24 jam
      </div>
    </div>
  </div>
</section>
