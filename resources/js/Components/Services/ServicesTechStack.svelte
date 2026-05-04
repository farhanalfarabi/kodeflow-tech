<script>
  import { inview } from "@/lib/utils";

  let show = false;

  const stackCategories = [
    { name: "Frontend", tech: ["React", "Next.js", "Vue", "Svelte", "TypeScript", "Tailwind CSS"] },
    { name: "Backend", tech: ["Laravel", "Node.js", "Golang", "Express", "REST API", "GraphQL"] },
    { name: "Mobile", tech: ["Flutter", "React Native", "Kotlin", "Swift"] },
    { name: "DevOps & Cloud", tech: ["AWS", "GCP", "Docker", "Kubernetes", "CI/CD", "Linux", "Nginx"] },
    { name: "AI & Automation", tech: ["LangChain", "n8n", "Flowise", "Mastra", "CrewAI", "OpenAI"] },
    { name: "Database", tech: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Supabase"] }
  ];
</script>

<section class="relative py-24 md:py-32 border-t border-white/5" use:inview on:enter={() => show = true}>
  <div class="max-w-[var(--max)] mx-auto px-[var(--gutter)]">
    
    <div class="inline-block border border-white/10 text-white/90 rounded-full px-5 py-2 text-xs bg-white/5 font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(255,255,255,0.05)] mb-6">
      Tech Stack
    </div>
    
    <div class="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
      <h2 class="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-white max-w-2xl">
        Teknologi yang dikuasai tim kami
      </h2>
      <p class="font-body text-white/50 text-sm md:text-base max-w-xs">
        Tidak menemukan stack yang Anda butuhkan? Konsultasikan — kemungkinan besar kami bisa bantu.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
      {#each stackCategories as category, i}
        <div 
          class="liquid-glass rounded-2xl p-6 md:p-8 border border-white/5 hover:border-primary/20 transition-all duration-300"
          style="opacity: {show ? 1 : 0}; transform: translateY({show ? 0 : 20}px); transition: all 500ms ease-out {i * 100}ms;"
        >
          <h3 class="text-xs font-bold tracking-widest text-white/40 uppercase mb-6">{category.name}</h3>
          
          <div class="flex flex-wrap gap-3">
            {#each category.tech as t}
              <div class="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-primary/40 hover:bg-primary/5 transition-colors group cursor-default">
                <div class="size-1.5 rounded-full bg-white/20 group-hover:bg-primary transition-colors"></div>
                <span class="font-mono text-xs md:text-sm text-white/70 group-hover:text-white transition-colors">{t}</span>
              </div>
            {/each}
          </div>
        </div>
      {/each}
    </div>

  </div>
</section>
