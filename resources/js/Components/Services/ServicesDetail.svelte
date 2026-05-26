<script>
    import {
        ChevronDown,
        LayoutTemplate,
        Server,
        Smartphone,
        Cloud,
        Bot,
        PenTool,
        ClipboardList,
        ShieldCheck,
    } from "lucide-svelte";
    import { inview } from "@/lib/utils";
    import { t } from "@/lib/i18n";
    import { page } from "@inertiajs/svelte";
    import { slide } from "svelte/transition";

    let show = false;
    let activeFilter = "Semua";
    let openAccordions = [];

    function toggleAccordion(id) {
        if (openAccordions.includes(id)) {
            openAccordions = openAccordions.filter((a) => a !== id);
        } else {
            openAccordions = [...openAccordions, id];
        }
    }

    const filters = ["Semua", "Engineering", "Design", "Operations"];

    const positions = [
        {
            id: "fe",
            icon: LayoutTemplate,
            tech: [
                "React",
                "Next.js",
                "Vue",
                "Svelte",
                "TypeScript",
                "Tailwind",
            ],
            supervisor: {
                name: "John Doe",
                role: "Head of Frontend Engineering",
                photo: "https://i.pravatar.cc/150?img=11",
                description:
                    "Mengawasi dan memastikan standar kualitas frontend, performa aplikasi, dan kesesuaian UI/UX dengan kebutuhan bisnis.",
            },
        },
        {
            id: "be",
            icon: Server,
            tech: [
                "Laravel",
                "Node.js",
                "Golang",
                "PostgreSQL",
                "MySQL",
                "Redis",
            ],
            supervisor: {
                name: "Jane Smith",
                role: "Head of Backend Engineering",
                photo: "https://i.pravatar.cc/150?img=5",
                description:
                    "Bertanggung jawab atas arsitektur database, keamanan API, dan skalabilitas sistem backend secara keseluruhan.",
            },
        },
        {
            id: "mob",
            icon: Smartphone,
            tech: ["Flutter", "React Native", "Kotlin", "Swift"],
            supervisor: {
                name: "Michael Johnson",
                role: "Mobile App Lead",
                photo: "https://i.pravatar.cc/150?img=8",
                description:
                    "Memimpin tim mobile dalam pengembangan aplikasi native dan cross-platform yang efisien dan user-friendly.",
            },
        },
        {
            id: "devops",
            icon: Cloud,
            tech: ["AWS", "GCP", "Docker", "Kubernetes", "CI/CD", "Linux"],
            supervisor: {
                name: "David Lee",
                role: "Lead DevOps",
                photo: "https://i.pravatar.cc/150?img=15",
                description:
                    "Mengelola infrastruktur cloud, pipeline deployment, dan memastikan keandalan sistem dengan uptime maksimal.",
            },
        },
        {
            id: "ai",
            icon: Bot,
            tech: ["LangChain", "n8n", "Flowise", "Mastra", "OpenAI", "Python"],
            supervisor: {
                name: "Sarah Connor",
                role: "AI & Automation Lead",
                photo: "https://i.pravatar.cc/150?img=20",
                description:
                    "Mengarahkan implementasi solusi AI, otomasi workflow, dan integrasi LLM untuk efisiensi bisnis.",
            },
        },
        {
            id: "ui",
            icon: PenTool,
            tech: ["Figma", "Adobe XD", "Prototyping", "User Research"],
            supervisor: {
                name: "Alex Turner",
                role: "Head of UI/UX Design",
                photo: "https://i.pravatar.cc/150?img=33",
                description:
                    "Menjaga kualitas desain antarmuka, pengalaman pengguna, dan konsistensi design system pada seluruh produk.",
            },
        },
        {
            id: "pm",
            icon: ClipboardList,
            tech: [
                "Kodeflow PM",
                "Agile/Scrum",
                "Jira",
                "Notion",
                "Google Meet",
            ],
            supervisor: {
                name: "Rachel Green",
                role: "Product Management Lead",
                photo: "https://i.pravatar.cc/150?img=44",
                description:
                    "Menyusun strategi produk, mengatur timeline, dan memastikan setiap fitur dirilis sesuai ekspektasi klien.",
            },
        },
        {
            id: "qa",
            icon: ShieldCheck,
            tech: [
                "Manual Testing",
                "Selenium",
                "Cypress",
                "Postman",
                "Bug Tracking",
            ],
            supervisor: {
                name: "Chris Evans",
                role: "QA Assurance Lead",
                photo: "https://i.pravatar.cc/150?img=52",
                description:
                    "Melakukan pengujian kualitas secara menyeluruh untuk memastikan tidak ada bug yang masuk ke production.",
            },
        },
    ];

    $: activeFilterId =
        $t.SERVICES_DETAIL_FILTERS.findIndex((f) => f === activeFilter) === 0
            ? "Semua"
            : activeFilter;

    $: filteredPositions =
        activeFilter === $t.SERVICES_DETAIL_FILTERS[0]
            ? positions
            : positions.filter(
                  (p) => $t.SERVICES_POSITIONS[p.id].category === activeFilter,
              );

    $: {
        // If language changes, make sure activeFilter is a valid filter string
        if (!$t.SERVICES_DETAIL_FILTERS.includes(activeFilter)) {
            activeFilter = $t.SERVICES_DETAIL_FILTERS[0];
        }
    }
</script>

<section
    class="relative py-24 md:py-32 bg-white"
    use:inview
    on:enter={() => (show = true)}
>
    <!-- Light background decorative elements -->
    <div
        class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(var(--primary),0.03)_0%,transparent_70%)] pointer-events-none"
    ></div>

    <div class="max-w-[var(--max)] mx-auto px-[var(--gutter)] relative z-10">
        <div class="text-center max-w-3xl mx-auto mb-16">
            <div class="flex justify-center mb-6">
                <div
                    class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary-light uppercase tracking-wider mb-6 shadow-[0_4px_15px_rgba(var(--primary),0.05)]"
                >
                    <LayoutTemplate class="size-3.5 text-primary-light" />
                    <span>{$t.SERVICES_DETAIL_BADGE}</span>
                </div>
            </div>
            <h2
                class="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 uppercase leading-tight mb-6"
            >
                {$t.SERVICES_DETAIL_TITLE}
                <span
                    class="text-primary-light italic drop-shadow-[0_0_15px_rgba(247,37,134,0.25)]"
                >
                    {$t.SERVICES_DETAIL_TITLE_HIGHLIGHT}
                </span>
            </h2>
            <p
                class="font-body text-base md:text-lg text-slate-600 leading-relaxed"
            >
                {$t.SERVICES_DETAIL_DESC}
            </p>
        </div>

        <!-- Filter Tabs -->
        <div class="flex flex-wrap items-center justify-center gap-3 mb-12">
            {#each $t.SERVICES_DETAIL_FILTERS as filter}
                <button
                    class="px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border {activeFilter ===
                    filter
                        ? 'bg-primary border-primary text-white shadow-[0_4px_15px_rgba(var(--primary),0.2)]'
                        : 'bg-white border-slate-200 text-slate-500 hover:border-primary/30 hover:text-primary shadow-sm'}"
                    on:click={() => (activeFilter = filter)}
                >
                    {filter}
                </button>
            {/each}
        </div>

        <!-- Cards Grid -->
        <div
            class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 transition-all duration-500"
        >
            {#each filteredPositions as pos (pos.id)}
                <div
                    class="bg-white rounded-[32px] p-8 border border-black/[0.03] shadow-[0_10px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-shadow duration-500 group flex flex-col h-full relative"
                    style="animation: fadeIn 0.4s cubic-bezier(0.22, 1, 0.36, 1) forwards;"
                >
                    <div class="flex items-center gap-4 mb-6">
                        <div
                            class="w-14 h-14 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500 shadow-[0_4px_15px_rgba(var(--primary),0.15)]"
                        >
                            <svelte:component
                                this={pos.icon}
                                class="size-6 text-primary-light"
                            />
                        </div>
                        <h3
                            class="font-display text-2xl font-semibold tracking-tight text-primary-light drop-shadow-sm"
                        >
                            {$t.SERVICES_POSITIONS[pos.id].title}
                        </h3>
                    </div>
                    <p
                        class="font-body text-sm text-neutral-500 font-medium mb-8 flex-grow leading-relaxed"
                    >
                        {$t.SERVICES_POSITIONS[pos.id].desc}
                    </p>

                    <div class="flex flex-wrap gap-2 mb-8">
                        {#each pos.tech as t}
                            <span
                                class="text-[11px] font-mono font-medium px-2.5 py-1 rounded-full bg-primary/[0.03] border border-primary/20 text-primary-light transition-colors hover:bg-primary/10"
                                >{t}</span
                            >
                        {/each}
                    </div>

                    <div class="mt-auto pt-6 border-t border-neutral-100">
                        <button
                            on:click={() => toggleAccordion(pos.id)}
                            class="w-full flex items-center justify-between text-sm font-display text-slate-800 hover:text-primary transition-colors group"
                        >
                            <span>Detail Supervisi</span>
                            <ChevronDown
                                class="size-4 transition-transform duration-300 {openAccordions.includes(
                                    pos.id,
                                )
                                    ? 'rotate-180'
                                    : ''}"
                            />
                        </button>

                        {#if openAccordions.includes(pos.id)}
                            <div
                                transition:slide={{ duration: 300 }}
                                class="overflow-hidden"
                            >
                                <div
                                    class="mt-4 pt-4 border-t border-dashed border-neutral-100"
                                >
                                    <div class="flex gap-4">
                                        <img
                                            src={pos.supervisor.photo}
                                            alt={pos.supervisor.name}
                                            class="w-12 h-12 rounded-full object-cover border-2 border-white shadow-[0_2px_10px_rgba(0,0,0,0.05)] shrink-0"
                                        />
                                        <div>
                                            <h4
                                                class="font-display font-semibold text-sm text-neutral-900"
                                            >
                                                {pos.supervisor.name}
                                            </h4>
                                            <p
                                                class="text-[11px] text-primary-light font-medium mb-1.5 uppercase tracking-wider"
                                            >
                                                {pos.supervisor.role}
                                            </p>
                                            <p
                                                class="text-xs text-neutral-500 leading-relaxed"
                                            >
                                                {pos.supervisor.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        {/if}
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>

<style>
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: scale(0.98) translateY(10px);
        }
        to {
            opacity: 1;
            transform: scale(1) translateY(0);
        }
    }
</style>
