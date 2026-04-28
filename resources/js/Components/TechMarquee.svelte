<script>
  // Tiga baris teknologi untuk meniru 3 baris di gambar referensi
  const ROW_1 = ["JavaScript", "TypeScript", "PHP", "Laravel", "Svelte", "React", "Vue.js", "Node.js", "Python"];
  const ROW_2 = ["Golang", "Flutter", "React Native", "Swift", "Kotlin", "Supabase", "Firebase", "MySQL", "PostgreSQL"];
  const ROW_3 = ["Tailwind CSS", "Bootstrap", "AWS", "Google Cloud", "Docker", "Kubernetes", "Git", "Figma", "Vercel"];
</script>

<section class="py-12 md:py-24 bg-background overflow-hidden border-y border-white/5 relative flex flex-col gap-8 md:gap-12">
  <!-- Efek bayangan gelap di pinggir agar marquee terlihat muncul dari kegelapan -->
  <div class="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
  <div class="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>

  <!-- Baris 1: Ke Kiri -->
  <div class="flex w-max animate-marquee">
    {#each [1, 2] as _}
      <div class="flex items-center gap-8 md:gap-16 pr-8 md:pr-16">
        {#each ROW_1 as tech}
          <span class="font-display text-4xl md:text-[80px] leading-none font-bold tracking-tighter text-white">
            {tech}
          </span>
        {/each}
      </div>
    {/each}
  </div>

  <!-- Baris 2: Ke Kanan -->
  <div class="flex w-max animate-marquee-reverse">
    {#each [1, 2] as _}
      <div class="flex items-center gap-8 md:gap-16 pr-8 md:pr-16">
        {#each ROW_2 as tech}
          <span class="font-display text-4xl md:text-[80px] leading-none font-bold tracking-tighter text-white">
            {tech}
          </span>
        {/each}
      </div>
    {/each}
  </div>

  <!-- Baris 3: Ke Kiri -->
  <div class="flex w-max animate-marquee">
    {#each [1, 2] as _}
      <div class="flex items-center gap-8 md:gap-16 pr-8 md:pr-16">
        {#each ROW_3 as tech}
          <span class="font-display text-4xl md:text-[80px] leading-none font-bold tracking-tighter text-white">
            {tech}
          </span>
        {/each}
      </div>
    {/each}
  </div>
</section>

<style>
  @keyframes marquee {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-50%);
    }
  }

  @keyframes marquee-reverse {
    from {
      transform: translateX(-50%);
    }
    to {
      transform: translateX(0);
    }
  }

  .animate-marquee {
    animation: marquee 35s linear infinite;
  }

  .animate-marquee-reverse {
    animation: marquee-reverse 40s linear infinite;
  }
</style>
