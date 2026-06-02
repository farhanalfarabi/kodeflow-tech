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
            id: "web",
            icon: LayoutTemplate,
            tech: [
                { name: "Node.js", icon: "/assets/techs/web/pngegg 1.png" },
                { name: "React", icon: "/assets/techs/web/React-icon.svg 1.png" },
                { name: "Svelte", icon: "/assets/techs/web/Svelte_Logo.svg 1.png" },
                { name: "Golang", icon: "/assets/techs/web/Go_Logo_Blue.svg 1.png" },
                { name: "Laravel", icon: "/assets/techs/web/Laravel.svg 1.png" }
            ],
            supervisor: {
                name: "Muhammad Murtadho",
                role: "Head of Web Engineering",
                photo: "/assets/teams/tado.png",
                description:
                    "Mengawasi dan memastikan standar kualitas arsitektur frontend dan backend, performa aplikasi, dan kesesuaian dengan kebutuhan bisnis.",
            },
        },
        {
            id: "mob",
            icon: Smartphone,
            tech: [
                { name: "Flutter", icon: "/assets/techs/mobile/flutter.png" },
                { name: "React Native", icon: "/assets/techs/mobile/react-native.png" },
                { name: "Swift", icon: "/assets/techs/mobile/swift.png" },
                { name: "Kotlin", icon: "/assets/techs/mobile/Kotlin.png" }
            ],
            supervisor: {
                name: "Rafokhul Akhiroh",
                role: "Mobile App Lead",
                photo: "/assets/teams/rafi.png",
                description:
                    "Memimpin tim mobile dalam pengembangan aplikasi native dan cross-platform yang efisien dan user-friendly.",
            },
        },
        {
            id: "devops",
            icon: Cloud,
            tech: [
                { name: "AWS", icon: "/assets/techs/dev-ops/AWS-Logo-PNG-File 1.png" },
                { name: "DigitalOcean", icon: "/assets/techs/dev-ops/25231 1.png" },
                { name: "GitHub Actions", icon: "/assets/techs/dev-ops/Group.png" },
                { name: "Azure", icon: "/assets/techs/dev-ops/Azure-Logo-PNG-Photo 1.png" },
                { name: "Jenkins", icon: "/assets/techs/dev-ops/Jenkins_logo.svg 1.png" },
                { name: "Prometheus", icon: "/assets/techs/dev-ops/Prometheus_software_logo.svg 1.png" },
                { name: "Google Cloud", icon: "/assets/techs/dev-ops/Google-cloud 1.png" }
            ],
            supervisor: {
                name: "Muhammad Taufiq",
                role: "Lead DevOps",
                photo: "/assets/teams/taufik.png",
                description:
                    "Mengelola infrastruktur cloud, pipeline deployment, dan memastikan keandalan sistem dengan uptime maksimal.",
            },
        },
        {
            id: "ai",
            icon: Bot,
            tech: [
                { name: "Flowise", icon: "/assets/techs/automation/flowise 1.png" },
                { name: "Mastra", icon: "/assets/techs/automation/mastra 1.png" },
                { name: "LangChain", icon: "/assets/techs/automation/image 1 (1).png" },
                { name: "n8n", icon: "/assets/techs/automation/N8n-logo-new.svg 1.png" }
            ],
            supervisor: {
                name: "Muhammad Rodhi",
                role: "AI & Automation Lead",
                photo: "/assets/teams/rodhi.png",
                description:
                    "Mengarahkan implementasi solusi AI, otomasi workflow, dan integrasi LLM untuk efisiensi bisnis.",
            },
        },
        {
            id: "ui",
            icon: PenTool,
            tech: [
                { name: "Figma", icon: "/assets/techs/design/Figma-logo.svg 1.png" }
            ],
            supervisor: {
                name: "Muhammad Fayi",
                role: "Head of UI/UX Design",
                photo: "/assets/teams/fayi.png",
                description:
                    "Menjaga kualitas desain antarmuka, pengalaman pengguna, dan konsistensi design system pada seluruh produk.",
            },
        },
        {
            id: "pm",
            icon: ClipboardList,
            tech: [
                { name: "Agile Management", icon: "/assets/techs/pm/3967015 1.png" }
            ],
            supervisor: {
                name: "Muhammad Rafif",
                role: "Product Management Lead",
                photo: "/assets/teams/rafif.png",
                description:
                    "Menyusun strategi produk, mengatur timeline, dan memastikan setiap fitur dirilis sesuai ekspektasi klien.",
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

                    <div class="flex flex-wrap gap-3 mb-8 {typeof pos.tech[0] === 'object' ? 'justify-end mt-4' : 'gap-y-2 gap-x-2'}">
                        {#each pos.tech as t}
                            {#if typeof t === 'string'}
                                <span
                                    class="text-[11px] font-mono font-medium px-2.5 py-1 rounded-full bg-primary/[0.03] border border-primary/20 text-primary-light transition-colors hover:bg-primary/10"
                                    >{t}</span
                                >
                            {:else}
                                <div class="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center p-2.5 shadow-[0_4px_15px_rgba(0,0,0,0.08)] border border-neutral-100 transition-transform hover:scale-110 hover:-translate-y-1 cursor-default" title={t.name}>
                                    <img src={t.icon} alt={t.name} class="w-full h-full object-contain" />
                                </div>
                            {/if}
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
