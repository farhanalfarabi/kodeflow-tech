<script>
  import { ArrowRight, LayoutTemplate, Server, Smartphone, Cloud, Bot, PenTool, ClipboardList, ShieldCheck } from "lucide-svelte";
  import { inview } from "@/lib/utils";

  let show = false;
  let activeFilter = "Semua";

  const filters = ["Semua", "Engineering", "Design", "Operations"];

  const positions = [
    {
      id: "fe", category: "Engineering", title: "Frontend Developer", icon: LayoutTemplate,
      desc: "Membangun antarmuka web yang cepat, responsif, dan maintainable. Dari landing page hingga aplikasi web kompleks dengan UX yang intuitif.",
      tech: ["React", "Next.js", "Vue", "Svelte", "TypeScript", "Tailwind"]
    },
    {
      id: "be", category: "Engineering", title: "Backend Developer", icon: Server,
      desc: "Membangun API, logika bisnis, dan infrastruktur database yang scalable dan aman. Dari REST API sederhana hingga sistem microservices kompleks.",
      tech: ["Laravel", "Node.js", "Golang", "PostgreSQL", "MySQL", "Redis"]
    },
    {
      id: "mob", category: "Engineering", title: "Mobile Developer", icon: Smartphone,
      desc: "Membangun aplikasi mobile native atau cross-platform untuk Android dan iOS. Performa optimal, UX intuitif, dan integrasi backend mulus.",
      tech: ["Flutter", "React Native", "Kotlin", "Swift"]
    },
    {
      id: "devops", category: "Engineering", title: "DevOps / Cloud Engineer", icon: Cloud,
      desc: "Mengelola infrastruktur cloud, otomasi deployment, dan memastikan sistem berjalan dengan uptime tinggi. CI/CD, monitoring, dan keamanan.",
      tech: ["AWS", "GCP", "Docker", "Kubernetes", "CI/CD", "Linux"]
    },
    {
      id: "ai", category: "Engineering", title: "AI & Automation Engineer", icon: Bot,
      desc: "Membangun sistem AI dan otomasi yang terintegrasi dengan proses bisnis — dari chatbot WhatsApp hingga pipeline otomasi workflow.",
      tech: ["LangChain", "n8n", "Flowise", "Mastra", "OpenAI", "Python"]
    },
    {
      id: "ui", category: "Design", title: "UI/UX Designer", icon: PenTool,
      desc: "Merancang pengalaman pengguna yang intuitif dan antarmuka yang indah. Dari riset pengguna hingga high-fidelity prototype siap handover.",
      tech: ["Figma", "Adobe XD", "Prototyping", "User Research"]
    },
    {
      id: "pm", category: "Operations", title: "Project Manager", icon: ClipboardList,
      desc: "Memastikan proyek berjalan on-track, on-budget, dan sesuai ekspektasi. Menggunakan Agile/Scrum dengan transparansi penuh.",
      tech: ["Kodeflow PM", "Agile/Scrum", "Jira", "Notion", "Google Meet"]
    },
    {
      id: "qa", category: "Operations", title: "Quality Assurance", icon: ShieldCheck,
      desc: "Memastikan setiap fitur yang selesai benar-benar berfungsi sesuai ekspektasi — functional testing, edge case, hingga performance testing.",
      tech: ["Manual Testing", "Selenium", "Cypress", "Postman", "Bug Tracking"]
    }
  ];

  $: filteredPositions = activeFilter === "Semua" 
    ? positions 
    : positions.filter(p => p.category === activeFilter);
</script>

<section class="relative py-24 md:py-32 bg-[#F9FAFB]" use:inview on:enter={() => show = true}>
  <!-- Light background decorative elements -->
  <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(var(--primary),0.05)_0%,transparent_70%)] pointer-events-none"></div>

  <div class="max-w-[var(--max)] mx-auto px-[var(--gutter)] relative z-10">
    
    <div class="text-center max-w-3xl mx-auto mb-16">
      <div class="flex justify-center mb-6">
        <span class="inline-block border border-primary/20 text-primary rounded-full px-5 py-2 text-xs bg-primary/5 font-bold tracking-widest uppercase shadow-[0_4px_15px_rgba(var(--primary),0.05)]">
          Posisi Tersedia
        </span>
      </div>
      <h2 class="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-900 mb-6">
        Pilih profesional yang tepat untuk tim Anda
      </h2>
      <p class="font-body text-base md:text-lg text-slate-600 leading-relaxed">
        Semua posisi tersedia full-time dari kantor kami, termonitor oleh supervisor berpengalaman. Anda fokus ke bisnis — kami jaga kualitas tim.
      </p>
    </div>

    <!-- Filter Tabs -->
    <div class="flex flex-wrap items-center justify-center gap-3 mb-12">
      {#each filters as filter}
        <button 
          class="px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border {activeFilter === filter ? 'bg-primary border-primary text-white shadow-[0_4px_15px_rgba(var(--primary),0.2)]' : 'bg-white border-slate-200 text-slate-500 hover:border-primary/30 hover:text-primary shadow-sm'}"
          on:click={() => activeFilter = filter}
        >
          {filter}
        </button>
      {/each}
    </div>

    <!-- Cards Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 transition-all duration-500">
      {#each filteredPositions as pos (pos.id)}
        <div 
          class="bg-white rounded-[32px] p-8 border border-black/[0.03] shadow-[0_10px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-shadow duration-500 group flex flex-col h-full relative"
          style="animation: fadeIn 0.4s cubic-bezier(0.22, 1, 0.36, 1) forwards;"
        >
          <div class="absolute top-8 right-8 bg-green-50 border border-green-100 text-green-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
            Tersedia
          </div>
          
          <div class="w-14 h-14 rounded-full bg-white border border-neutral-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-[0_4px_15px_rgba(var(--primary),0.1)]">
            <svelte:component this={pos.icon} class="size-6 text-primary" />
          </div>
          
          <h3 class="font-display text-2xl font-medium tracking-tight text-neutral-900 mb-3">{pos.title}</h3>
          <p class="font-body text-sm text-neutral-500 font-medium mb-8 flex-grow leading-relaxed">{pos.desc}</p>
          
          <div class="flex flex-wrap gap-2 mb-8">
            {#each pos.tech as t}
              <span class="text-[11px] font-mono font-medium px-2 py-1 rounded-full bg-neutral-50 border border-neutral-200 text-neutral-500 transition-colors">{t}</span>
            {/each}
          </div>
          
          <div class="mt-auto pt-6 border-t border-neutral-100">
            <a href="https://wa.me/6285733235489?text=Halo,%20saya%20ingin%20konsultasi%20kebutuhan%20{pos.title}" target="_blank" class="inline-flex items-center gap-2 text-sm font-display font-medium text-primary hover:text-primary/80 transition-colors">
              Konsultasi untuk posisi ini <ArrowRight class="size-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      {/each}
    </div>

  </div>
</section>

<style>
  @keyframes fadeIn {
    from { opacity: 0; transform: scale(0.98) translateY(10px); }
    to { opacity: 1; transform: scale(1) translateY(0); }
  }
</style>
