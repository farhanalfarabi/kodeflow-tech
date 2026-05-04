<script>
  import { inview } from "@/lib/utils";

  let show = false;
  
  const stats = [
    { target: 5, label: "Klien Aktif", sub: "Bisnis yang sedang scaling", isPlus: false },
    { target: 50, label: "IT Professionals", sub: "Siap untuk tim Anda", isPlus: true },
    { target: 7, label: "Supervisors", sub: "Memantau kualitas kerja", isPlus: false },
    { target: 5, label: "Project Managers", sub: "Menjaga proyek on-track", isPlus: false },
    { target: 20, label: "Proyek Selesai", sub: "Dan terus bertambah", isPlus: true }
  ];

  // Action for counter animation
  function counter(node, params) {
    let start = null;
    const duration = 1500;
    let animationFrameId;

    function update(time) {
      if (!start) start = time;
      const progress = Math.min((time - start) / duration, 1);
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(easeOutCubic * params.target);
      
      node.textContent = current + (params.isPlus ? '+' : '');

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(update);
      }
    }

    if (params.show) {
      animationFrameId = requestAnimationFrame(update);
    }

    return {
      update(newParams) {
        if (newParams.show && !params.show) {
          start = null;
          animationFrameId = requestAnimationFrame(update);
        }
        params = newParams;
      },
      destroy() {
        if (animationFrameId) cancelAnimationFrame(animationFrameId);
      }
    };
  }
</script>

<section class="relative py-20 bg-transparent border-y border-white/5 overflow-hidden" use:inview on:enter={() => show = true}>
  <!-- Subtle gradient background -->
  <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(var(--primary),0.03)_0%,transparent_70%)]"></div>
  
  <div class="max-w-[1400px] mx-auto px-[var(--gutter)] relative z-10">
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-white/10 text-center border border-white/10 rounded-2xl md:border-none md:rounded-none bg-transparent">
      
      {#each stats as stat, i}
        <div class="p-8 flex flex-col justify-center items-center group relative">
          <!-- Hover Glow -->
          <div class="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none md:rounded-xl"></div>
          
          <span 
            class="font-display font-extrabold text-4xl md:text-5xl lg:text-[56px] text-white mb-2 leading-none drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
            use:counter={{ target: stat.target, isPlus: stat.isPlus, show }}
          >
            0{stat.isPlus ? '+' : ''}
          </span>
          <span class="font-display text-sm uppercase tracking-widest text-primary mb-1">
            {stat.label}
          </span>
          <span class="font-body text-xs text-foreground/40 max-w-[120px]">
            {stat.sub}
          </span>
        </div>
      {/each}

    </div>
  </div>
</section>
