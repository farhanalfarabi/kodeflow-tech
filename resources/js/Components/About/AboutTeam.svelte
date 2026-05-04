<script>
  import { inview } from "@/lib/utils";

  let show = false;

  const team = [
    { name: "Salman", role: "CEO / Founder", image: "/assets/team/tomi-removebg-preview.png" },
    { name: "Bagus", role: "Lead Engineer", image: "/assets/team/bagus-removebg-preview.png" },
    { name: "Maulana", role: "UI/UX Designer", image: "/assets/team/maul-removebg-preview.png" },
    { name: "Tomi", role: "Fullstack Developer", image: "/assets/team/tomi-removebg-preview.png" }
  ];
</script>

<section class="relative py-32 bg-black overflow-hidden" use:inview on:enter={() => show = true}>
  <!-- Ambient background glow to match the dark theme of the screenshot -->
  <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(100,50,150,0.15)_0%,transparent_70%)] pointer-events-none"></div>

  <div class="max-w-[var(--max)] mx-auto px-[var(--gutter)] relative z-10">
        
    <!-- Header aligned to center -->
    <div class="text-center mb-20 flex flex-col items-center">
      <div class="inline-flex items-center justify-center border border-white/10 rounded-full px-5 py-2 text-sm text-white/80 bg-white/5 font-medium tracking-wide shadow-[0_4px_20px_rgba(255,255,255,0.03)] mb-8">
        Tim Kami
      </div>
      
      <h2 class="font-display text-4xl md:text-5xl lg:text-[56px] font-semibold text-white leading-tight tracking-tight">
        Orang-orang di Balik <br/>
        Kodeflow Tech
      </h2>
    </div>

    <!-- Staggered Team Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
      {#each team as person, i}
        <div 
          class="relative w-full h-[360px] md:h-[380px] rounded-[32px] overflow-hidden border border-white/[0.08] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] transition-all duration-700 {i % 2 !== 0 ? 'lg:mt-16' : ''}"
          style="background: #1A1025; opacity: {show ? 1 : 0}; transform: translateY({show ? (i % 2 !== 0 ? '64px' : '0') : '40px'}); transition-delay: {i * 100}ms;"
        >
          <!-- Subtle top gradient / glass effect -->
          <div class="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white/[0.04] to-transparent pointer-events-none"></div>

          <!-- Card Content (Top) -->
          <div class="p-7 relative z-20">
            <h3 class="font-display text-2xl font-bold text-white mb-1 tracking-tight">{person.name}</h3>
            <p class="font-body text-sm text-white/50 font-medium">{person.role}</p>
          </div>
          
          <!-- Image Placeholder (Bottom) -->
          <div class="absolute bottom-0 right-[-10px] w-[90%] h-[80%] flex items-end justify-end pointer-events-none">
            <!-- 
              Note for USER: 
              Replace the src with your actual transparent PNG image paths.
            -->
            <img 
              src={person.image} 
              alt={person.name} 
              class="w-full h-full object-contain object-right-bottom transition-transform duration-500"
              on:error={(e) => {
                // Fallback to a placeholder silhouette if image doesn't exist
                e.target.style.display = 'none';
                e.target.nextElementSibling.style.display = 'block';
              }}
            />
            
            <!-- Fallback Silhouette if image is not found -->
            <div class="hidden w-[200px] h-[250px] bg-gradient-to-t from-white/5 to-transparent rounded-t-full opacity-30 mt-auto"></div>
          </div>
        </div>
      {/each}
    </div>

  </div>
</section>
