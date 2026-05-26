<script>
    import Navbar from "../Components/Navbar.svelte";
    import CtaFooter from "../Components/CtaFooter.svelte";
    import Faq from "../Components/Faq.svelte";
    export let portfolio;
    export let relatedPortfolios = [];
    import { currentLanguage } from "../lib/i18n";
    import { isLeadModalOpen } from "@/lib/stores";
    import { Link } from "@inertiajs/svelte";
    import ArrowButton from "../Components/ui/ArrowButton.svelte";
    import {
        ArrowLeft,
        Check,
        AlertTriangle,
        Calendar,
        Cpu,
        BookOpen,
        ChevronDown,
        ChevronUp,
        HelpCircle,
        PhoneCall,
        Target,
        BarChart3,
        Clock,
        Users,
        ArrowUpRight,
    } from "lucide-svelte";
    import { slide, fade } from "svelte/transition";

    // Component Reactivity
    $: lang = $currentLanguage || "id";
    $: item = portfolio;

    // Component States
    let isDeepDiveExpanded = false;

    function toggleDeepDive() {
        isDeepDiveExpanded = !isDeepDiveExpanded;
    }

    function openConsultationModal() {
        isLeadModalOpen.set(true);
    }
</script>

<svelte:head>
    {#if item}
        <title>{item.title} — Studi Kasus Kodeflow Tech</title>
        <meta name="description" content={item.subtitle} />
        <meta
            property="og:title"
            content="{item.title} — Studi Kasus Kodeflow Tech"
        />
        <meta property="og:description" content={item.subtitle} />
        <meta property="og:image" content={item.image} />
    {:else}
        <title>Studi Kasus Portofolio — Kodeflow Tech</title>
    {/if}
</svelte:head>

<div
    class="bg-background text-foreground min-h-screen relative noise overflow-x-hidden"
>
    <Navbar />

    {#if item}
        <main class="pt-32 pb-16">
            <!-- 1. HEADER & HERO SECTION -->
            <section
                class="max-w-[var(--max)] mx-auto px-[var(--gutter)] mb-16"
            >
                <!-- Back Link -->
                <Link
                    href="/portfolio"
                    class="inline-flex items-center gap-2 text-sm text-foreground/50 hover:text-primary-light transition-colors mb-8 font-medium group"
                >
                    <ArrowLeft
                        class="size-4 transition-transform group-hover:-translate-x-1"
                    />
                    <span
                        >{lang === "id"
                            ? "Kembali ke Portofolio"
                            : "Back to Portfolios"}</span
                    >
                </Link>

                <!-- Category Tag -->
                <span
                    class="text-xs font-bold text-primary-light tracking-widest uppercase mb-4 block"
                >
                    {item.category?.name}
                </span>

                <!-- Title -->
                <h1
                    class="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight uppercase mb-6 max-w-5xl"
                >
                    {item.title}
                </h1>

                <!-- Short Sub-title -->
                <p
                    class="font-body text-lg md:text-xl text-foreground/75 leading-relaxed max-w-4xl mb-12"
                >
                    {item.subtitle}
                </p>

                <!-- Hero Mockup Container -->
                <div
                    class="liquid-glass rounded-3xl p-3 md:p-4 border border-border/10 shadow-2xl relative overflow-hidden group"
                >
                    <div
                        class="absolute inset-0 bg-primary/5 pointer-events-none"
                    ></div>
                    <div
                        class="rounded-2xl overflow-hidden aspect-[16/9] border border-border/5 bg-muted/20 relative"
                    >
                        <img
                            src={item.image}
                            alt={item.title}
                            class="w-full h-full object-cover"
                        />
                        <!-- Visual Indicator Text Overlay -->
                        <div
                            class="absolute inset-0 bg-black/40 flex items-center justify-center p-6 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-xs"
                        >
                            <p
                                class="text-sm font-semibold tracking-wider text-white bg-black/60 px-4 py-2 rounded-full border border-white/10 uppercase"
                            >
                                {lang === "id"
                                    ? "[ GAMBAR UTAMA PROYEK / MOCKUP DASHBOARD UTAMA ]"
                                    : "[ MAIN PROJECT IMAGE / MAIN DASHBOARD MOCKUP ]"}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- 2. RINGKASAN CEPAT (QUICK SUMMARY) -->
            <section
                class="max-w-[var(--max)] mx-auto px-[var(--gutter)] mb-16"
            >
                <h2
                    class="font-display text-2xl font-bold mb-8 tracking-wider uppercase border-b border-border/10 pb-4 text-foreground/90 flex items-center gap-3"
                >
                    <Target class="size-6 text-primary-light" />
                    <span
                        >{lang === "id"
                            ? "RINGKASAN CEPAT PROYEK"
                            : "QUICK PROJECT SUMMARY"}</span
                    >
                </h2>

                <!-- Columns Layout -->
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                    <!-- Aspect Importance -->
                    <div
                        class="liquid-glass p-8 rounded-2xl border border-border/10 flex flex-col h-full"
                    >
                        <h3
                            class="font-display text-lg font-bold uppercase tracking-wider text-primary-light mb-4"
                        >
                            {lang === "id"
                                ? "Apa Yang Penting Dari Proyek Ini?"
                                : "Why This Project Matters?"}
                        </h3>
                        <p
                            class="font-body text-sm text-foreground/75 leading-relaxed flex-grow"
                        >
                            {item.summary.importance}
                        </p>
                    </div>

                    <!-- Context -->
                    <div
                        class="liquid-glass p-8 rounded-2xl border border-border/10 flex flex-col h-full"
                    >
                        <h3
                            class="font-display text-lg font-bold uppercase tracking-wider text-primary-light mb-4"
                        >
                            {lang === "id"
                                ? "Konteks Industri & Klien"
                                : "Client & Industry Context"}
                        </h3>
                        <p
                            class="font-body text-sm text-foreground/75 leading-relaxed flex-grow"
                        >
                            {item.summary.context}
                        </p>
                    </div>

                    <!-- Direct Results -->
                    <div
                        class="liquid-glass p-8 rounded-2xl border border-border/10 flex flex-col h-full"
                    >
                        <h3
                            class="font-display text-lg font-bold uppercase tracking-wider text-primary-light mb-4"
                        >
                            {lang === "id"
                                ? "Dampak Langsung (Hasil)"
                                : "Direct Impact (Results)"}
                        </h3>
                        <ul
                            class="space-y-3 font-body text-sm text-foreground/75"
                        >
                            {#each item.summary.result as res}
                                <li class="flex items-start gap-2.5">
                                    <Check
                                        class="size-4 text-emerald-400 shrink-0 mt-0.5"
                                    />
                                    <span>{res}</span>
                                </li>
                            {/each}
                        </ul>
                    </div>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    <!-- Core Modules -->
                    <div
                        class="liquid-glass p-8 rounded-2xl border border-border/10 lg:col-span-7"
                    >
                        <h4
                            class="font-display text-base font-bold uppercase tracking-wider text-foreground mb-4"
                        >
                            {lang === "id"
                                ? "Modul Inti Yang Dibangun"
                                : "Core Modules Built"}
                        </h4>
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {#each item.summary.modules as mod}
                                <div
                                    class="flex items-center gap-3 p-3 rounded-xl bg-foreground/[0.02] border border-border/5"
                                >
                                    <div
                                        class="size-2 rounded-full bg-primary-light"
                                    ></div>
                                    <span
                                        class="font-body text-xs font-semibold text-foreground/80"
                                        >{mod}</span
                                    >
                                </div>
                            {/each}
                        </div>
                    </div>

                    <!-- Ideal Reader / Fits if -->
                    <div
                        class="liquid-glass p-8 rounded-2xl border border-border/10 lg:col-span-5 flex flex-col justify-center"
                    >
                        <h4
                            class="font-display text-base font-bold uppercase tracking-wider text-foreground mb-4"
                        >
                            {lang === "id"
                                ? "Studi Kasus Ini Cocok Dibaca Jika Anda:"
                                : "This Case Study Is Relevant If You Are:"}
                        </h4>
                        <ul
                            class="space-y-3 font-body text-xs text-foreground/70"
                        >
                            {#each item.summary.targetReader as reader}
                                <li class="flex items-center gap-2">
                                    <div
                                        class="size-1.5 rounded-full bg-foreground/40 shrink-0"
                                    ></div>
                                    <span>{reader}</span>
                                </li>
                            {/each}
                        </ul>
                    </div>
                </div>
            </section>

            <!-- 3. BUKTI AWAL & VALIDASI -->
            <section
                class="max-w-[var(--max)] mx-auto px-[var(--gutter)] mb-16"
            >
                <div
                    class="bg-primary/5 rounded-3xl border border-primary/10 p-8 md:p-12 relative overflow-hidden"
                >
                    <div
                        class="absolute right-0 bottom-0 top-0 w-1/3 bg-radial from-primary-light/10 to-transparent pointer-events-none"
                    ></div>

                    <h2
                        class="font-display text-2xl font-bold mb-10 text-center uppercase tracking-wider"
                    >
                        {lang === "id"
                            ? "BUKTI NYATA & VALIDASI PASCA GO-LIVE"
                            : "REAL EVIDENCE & VALIDATION POST GO-LIVE"}
                    </h2>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {#each item.validation as val, i}
                            <div
                                class="text-center flex flex-col items-center p-4 border-r border-border/5 last:border-0 relative"
                            >
                                <!-- Large Highlight Metric -->
                                <span
                                    class="font-display text-5xl md:text-6xl font-extrabold text-primary-light mb-4 block drop-shadow-[0_0_15px_rgba(247,37,134,0.3)]"
                                >
                                    {val.metric}
                                </span>

                                <h4
                                    class="font-display text-base font-bold uppercase text-foreground mb-2"
                                >
                                    {val.title}
                                </h4>

                                <p
                                    class="font-body text-xs text-foreground/60 leading-relaxed max-w-xs"
                                >
                                    {val.desc}
                                </p>
                            </div>
                        {/each}
                    </div>
                </div>
            </section>

            <!-- 4. TANTANGAN & SOLUSI SINGKAT -->
            <section
                class="max-w-[var(--max)] mx-auto px-[var(--gutter)] mb-16"
            >
                <div
                    class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16"
                >
                    <!-- Challenges column -->
                    <div class="flex flex-col">
                        <div
                            class="inline-flex items-center gap-2 text-rose-400 font-bold uppercase tracking-wider text-xs mb-4"
                        >
                            <AlertTriangle class="size-4" />
                            <span
                                >{lang === "id"
                                    ? "Tantangan Utama"
                                    : "Key Challenge"}</span
                            >
                        </div>
                        <h3
                            class="font-display text-2xl font-bold uppercase leading-tight text-foreground mb-4"
                        >
                            {lang === "id"
                                ? "Masalah Operasional Sebelum Sistem Ada"
                                : "Operational Hurdle Prior to System Adoption"}
                        </h3>
                        <p
                            class="font-body text-sm text-foreground/75 leading-relaxed"
                        >
                            {item.challenge_short}
                        </p>
                    </div>

                    <!-- Solution column -->
                    <div class="flex flex-col">
                        <div
                            class="inline-flex items-center gap-2 text-emerald-400 font-bold uppercase tracking-wider text-xs mb-4"
                        >
                            <Check class="size-4" />
                            <span
                                >{lang === "id"
                                    ? "Solusi Kodeflow"
                                    : "Kodeflow Solution"}</span
                            >
                        </div>
                        <h3
                            class="font-display text-2xl font-bold uppercase leading-tight text-foreground mb-4"
                        >
                            {lang === "id"
                                ? "Merancang Arsitektur Kustom Real-Time"
                                : "Designing A Custom Real-Time Architecture"}
                        </h3>
                        <p
                            class="font-body text-sm text-foreground/75 leading-relaxed mb-6"
                        >
                            {item.solution_short}
                        </p>

                        <!-- Tech Stack List -->
                        <div>
                            <span
                                class="text-xs font-bold text-foreground/45 uppercase tracking-wider block mb-3"
                            >
                                {lang === "id"
                                    ? "TEKNOLOGI YANG DIGUNAKAN:"
                                    : "TECHNOLOGY STACK USED:"}
                            </span>
                            <div class="flex flex-wrap gap-2">
                                {#each item.tech_stack || [] as tech}
                                    <span
                                        class="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-card border border-border/15 text-primary-light"
                                    >
                                        {tech}
                                    </span>
                                {/each}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- 5. GALERI PROSES -->
            <section
                class="max-w-[var(--max)] mx-auto px-[var(--gutter)] mb-16"
            >
                <h2
                    class="font-display text-2xl font-bold mb-4 tracking-wider uppercase border-b border-border/10 pb-4 text-foreground/90 flex items-center gap-3"
                >
                    <Calendar class="size-6 text-primary-light" />
                    <span
                        >{lang === "id"
                            ? "GALERI & DOKUMENTASI PROSES"
                            : "PROCESS DOCUMENTATION GALLERY"}</span
                    >
                </h2>

                <p class="font-body text-xs text-foreground/50 mb-8 italic">
                    {lang === "id"
                        ? "* Dokumentasi otentik proses kolaborasi pengerjaan sistem"
                        : "* Authentic documentation of the system development collaborative lifecycle"}
                </p>

                <!-- Process Grid -->
                <div
                    class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-8"
                >
                    {#each item.gallery as gal, idx}
                        <div
                            class="liquid-glass rounded-2xl overflow-hidden p-2.5 border border-border/10 group"
                        >
                            <div
                                class="rounded-xl overflow-hidden aspect-[4/3] bg-muted/20 relative"
                            >
                                <img
                                    src={gal.url}
                                    alt={gal.caption}
                                    class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                                />
                                <div
                                    class="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                >
                                    <p
                                        class="text-xs font-semibold tracking-wider text-white bg-black/60 px-4 py-2 rounded-full border border-white/10"
                                    >
                                        [ {lang === "id"
                                            ? "GAMBAR GALERI PROSES"
                                            : "PROCESS GALLERY IMAGE"}
                                        {idx + 1} ]
                                    </p>
                                </div>
                            </div>
                            <div class="p-4">
                                <p
                                    class="font-body text-xs text-foreground/75 leading-relaxed font-semibold"
                                >
                                    {gal.caption}
                                </p>
                            </div>
                        </div>
                    {/each}
                </div>


            </section>

            <!-- 6. DETAIL STUDI KASUS (DEEP DIVE / ACCORDION) -->
            <section
                class="max-w-[var(--max)] mx-auto px-[var(--gutter)] mb-16"
            >
                <div
                    class="liquid-glass rounded-3xl border border-border/10 overflow-hidden"
                >
                    <!-- Accordion Trigger Button -->
                    <button
                        on:click={toggleDeepDive}
                        class="w-full px-8 py-8 flex flex-col md:flex-row md:items-center justify-between gap-4 text-left transition-colors hover:bg-white/[0.01] cursor-pointer"
                    >
                        <div class="flex items-start gap-4">
                            <div
                                class="size-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary-light shrink-0 mt-0.5"
                            >
                                <BookOpen class="size-6" />
                            </div>
                            <div>
                                <h3
                                    class="font-display text-xl md:text-2xl font-bold uppercase tracking-wider text-foreground"
                                >
                                    {lang === "id"
                                        ? "DETAIL STUDI KASUS (DEEP DIVE)"
                                        : "CASE STUDY DEEP DIVE"}
                                </h3>
                                <p
                                    class="font-body text-xs md:text-sm text-foreground/50 mt-1"
                                >
                                    {lang === "id"
                                        ? "Klik untuk membaca analisis mendalam, arsitektur teknis, dan pelajaran penting (Opsional)"
                                        : "Click to expand in-depth analysis, technical architecture, and valuable lessons learned (Optional)"}
                                </p>
                            </div>
                        </div>

                        <div
                            class="flex items-center gap-2 font-display text-sm font-semibold text-primary-light shrink-0 self-end md:self-auto"
                        >
                            <span
                                >{isDeepDiveExpanded
                                    ? lang === "id"
                                        ? "TUTUP DETAIL"
                                        : "CLOSE DEEP DIVE"
                                    : lang === "id"
                                      ? "BACA DETAIL LENGKAP"
                                      : "EXPAND STUDY"}</span
                            >
                            {#if isDeepDiveExpanded}
                                <ChevronUp class="size-5" />
                            {:else}
                                <ChevronDown class="size-5" />
                            {/if}
                        </div>
                    </button>

                    <!-- Accordion Content -->
                    {#if isDeepDiveExpanded}
                        <div
                            class="border-t border-border/10 bg-black/20 px-8 py-10"
                            transition:slide={{ duration: 400 }}
                        >
                            <div class="max-w-4xl mx-auto">
                                {#if item.deep_dive && item.deep_dive.content}
                                    <div class="rich-text-content max-w-none text-foreground/75 leading-relaxed [&>h1]:text-3xl [&>h1]:font-display [&>h1]:text-primary-light [&>h1]:font-bold [&>h1]:mt-8 [&>h1]:mb-4 [&>h2]:text-2xl [&>h2]:font-display [&>h2]:text-primary-light [&>h2]:font-bold [&>h2]:mt-8 [&>h2]:mb-4 [&>h3]:text-xl [&>h3]:font-display [&>h3]:text-primary-light [&>h3]:font-bold [&>h3]:mt-6 [&>h3]:mb-3 [&>p]:mb-4 [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:mb-4 [&>ol]:list-decimal [&>ol]:pl-5 [&>ol]:mb-4 [&>li]:mb-1 [&>blockquote]:border-l-4 [&>blockquote]:border-primary/50 [&>blockquote]:pl-4 [&>blockquote]:italic [&>blockquote]:my-4 [&>strong]:text-foreground [&>a]:text-primary [&>a]:underline hover:[&>a]:text-primary-light">
                                        {@html item.deep_dive.content}
                                    </div>
                                {:else}
                                    <p class="text-center text-foreground/50 italic">
                                        {lang === "id" ? "Detail studi kasus belum tersedia." : "Case study details are not available yet."}
                                    </p>
                                {/if}
                            </div>
                        </div>
                    {/if}
                </div>
            </section>

            <!-- 7. FAQ PROYEK (TANYA JAWAB) -->
            <Faq
                subtitle={lang === "id" ? "FAQ PROYEK" : "PROJECT FAQ"}
                heading={lang === "id"
                    ? "PERTANYAAN SEPUTAR PROYEK INI"
                    : "QUESTIONS ABOUT THIS PROJECT"}
                description=""
                items={item.faqs}
                showContactCta={false}
            />

            <CtaFooter />
        </main>
    {:else}
        <!-- Not Found Area -->
        <main class="pt-32 pb-24 text-center">
            <div
                class="max-w-md mx-auto px-6 py-12 liquid-glass border border-border/10 rounded-2xl"
            >
                <h2
                    class="font-display text-2xl font-bold uppercase mb-4 text-rose-400"
                >
                    {lang === "id"
                        ? "Studi Kasus Tidak Ditemukan"
                        : "Case Study Not Found"}
                </h2>
                <p
                    class="font-body text-sm text-foreground/60 mb-8 leading-relaxed"
                >
                    {lang === "id"
                        ? "Maaf, data studi kasus yang Anda cari tidak ada atau telah dipindahkan."
                        : "Sorry, the case study you are looking for does not exist or has been relocated."}
                </p>
                <Link
                    href="/portfolio"
                    class="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-semibold text-white hover:bg-primary-light transition-colors text-sm"
                >
                    <ArrowLeft class="size-4" />
                    <span
                        >{lang === "id"
                            ? "Kembali ke Portofolio"
                            : "Back to Portfolios"}</span
                    >
                </Link>
            </div>
        </main>
    {/if}
</div>

<style>
    .liquid-glass {
        background: rgba(255, 255, 255, 0.015);
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);
        border: 1px solid rgba(255, 255, 255, 0.05);
        box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.05);
    }
</style>
