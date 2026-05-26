<script>
    import {
        ArrowRight,
        CheckCircle2,
        Workflow,
    } from "lucide-svelte";
    import { inview } from "@/lib/utils";
    import { t } from "@/lib/i18n";
    import { onMount, onDestroy } from "svelte";

    let show = false;
    let activeStep = 0;

    let triggerEl;
    let pinned = false;
    let doneScrolling = false;
    let windowHeight = 800; // default fallback

    const STEP_SCROLL_PX = 600; // pixels of scroll per step

    function handleScroll() {
        if (!triggerEl) return;
        const rect = triggerEl.getBoundingClientRect();
        const steps = $t.SERVICES_PROCESS_STEPS.length;
        const totalScroll = steps * STEP_SCROLL_PX;

        // How far we've scrolled past the trigger point
        const scrolled = -rect.top;

        if (scrolled <= 0) {
            // Haven't reached section yet
            pinned = false;
            doneScrolling = false;
            activeStep = 0;
            return;
        }

        if (scrolled >= totalScroll) {
            // Past the section
            pinned = false;
            doneScrolling = true;
            activeStep = steps - 1;
            return;
        }

        // In the scroll zone — pin the content
        pinned = true;
        doneScrolling = false;

        const fraction = scrolled / totalScroll;
        const newStep = Math.min(steps - 1, Math.floor(fraction * steps));
        if (newStep !== activeStep) {
            activeStep = newStep;
        }
    }

    onMount(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
    });

    onDestroy(() => {
        if (typeof window !== "undefined") {
            window.removeEventListener("scroll", handleScroll);
        }
    });

    $: steps = $t.SERVICES_PROCESS_STEPS || [];
    $: totalScrollHeight = steps.length * STEP_SCROLL_PX;
</script>

<svelte:window bind:innerHeight={windowHeight} />

<div class="bg-white">
    <!-- Static Intro Section -->
    <section class="pt-16 md:pt-24 pb-8 md:pb-12" use:inview on:enter={() => (show = true)}>
        <div class="max-w-[var(--max)] mx-auto px-[var(--gutter)] relative z-10 w-full">
            <div
                class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary-light uppercase tracking-wider mb-6 shadow-[0_4px_15px_rgba(var(--primary),0.05)]"
            >
                <Workflow class="size-3.5 text-primary-light" />
                <span>{$t.SERVICES_PROCESS_BADGE}</span>
            </div>

            <h2
                class="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 uppercase leading-tight mb-4"
            >
                {$t.SERVICES_PROCESS_TITLE}
                <span class="text-primary-light italic drop-shadow-[0_0_15px_rgba(247,37,134,0.25)]">
                    {$t.SERVICES_PROCESS_TITLE_HIGHLIGHT}
                </span>
            </h2>
            <p class="font-body text-slate-600 text-lg max-w-3xl">
                {$t.SERVICES_PROCESS_DESC}
            </p>
        </div>
    </section>

    <!-- Scroll spacer: this div provides the scrollable height -->
    <div
        bind:this={triggerEl}
        class="relative"
        style="height: {totalScrollHeight + windowHeight}px;"
    >
        <!-- The visual content: perfectly transitions between absolute top, fixed, and absolute bottom -->
        <div
            class="w-full bg-white z-30 flex flex-col justify-center {pinned ? 'fixed top-0 left-0 right-0' : 'absolute left-0 right-0'}"
            style="height: {windowHeight}px; {(!pinned && doneScrolling) ? 'bottom: 0;' : (!pinned && !doneScrolling) ? 'top: 0;' : ''}"
        >
            <div class="max-w-[var(--max)] mx-auto px-[var(--gutter)] relative z-10 w-full">
                
                <!-- Horizontal Timeline Navigation (Desktop) -->
                <div
                    class="hidden md:flex items-start justify-between mb-10 relative"
                    style="opacity: {show ? 1 : 0}; transition: opacity 800ms ease-out 200ms;"
                >
                    <!-- Background line -->
                    <div
                        class="absolute top-5 left-0 right-0 h-px bg-slate-200 -translate-y-1/2 z-0"
                    ></div>
                    <!-- Active progress line -->
                    <div
                        class="absolute top-5 left-0 h-px bg-primary -translate-y-1/2 z-0 transition-all duration-500"
                        style="width: {steps.length > 1
                            ? (activeStep / (steps.length - 1)) * 100
                            : 0}%"
                    ></div>

                    {#each steps as step, i}
                        <div
                            class="relative z-10 flex flex-col items-center gap-4"
                        >
                            <div
                                class="size-10 rounded-full flex items-center justify-center text-sm font-display font-bold transition-all duration-300 {i <=
                                activeStep
                                    ? 'bg-primary text-white shadow-[0_0_15px_rgba(var(--primary),0.4)]'
                                    : 'bg-slate-50 border border-slate-200 text-slate-400'}"
                            >
                                {i + 1}
                            </div>
                            <span
                                class="font-display text-sm whitespace-nowrap {i ===
                                activeStep
                                    ? 'text-primary font-semibold'
                                    : i < activeStep
                                      ? 'text-slate-900'
                                      : 'text-slate-400'} transition-colors"
                            >
                                {step.title}
                            </span>
                        </div>
                    {/each}
                </div>

                <!-- Mobile step indicator -->
                <div class="flex md:hidden items-center gap-2 mb-6">
                    {#each steps as _, i}
                        <div
                            class="h-1.5 rounded-full transition-all duration-500 {i === activeStep
                                ? 'w-8 bg-primary'
                                : 'w-2 bg-slate-300'}"
                        ></div>
                    {/each}
                    <span class="ml-auto font-display text-sm font-bold text-slate-400">
                        <span class="text-slate-900">{activeStep + 1}</span> / {steps.length}
                    </span>
                </div>

                <!-- Sliding Cards Container -->
                <div class="relative overflow-hidden rounded-3xl border border-slate-200 shadow-[0_10px_40px_rgba(0,0,0,0.06)] bg-white">
                    <div
                        class="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                        style="transform: translateX(-{activeStep * 100}%);"
                    >
                        {#each steps as step, i}
                            <div class="w-full shrink-0 p-8 md:p-12 relative flex flex-col justify-center min-h-[420px]">
                                <!-- Decorative large number -->
                                <span
                                    class="absolute -top-10 -right-10 font-display text-[250px] font-black text-slate-900/[0.03] leading-none select-none pointer-events-none"
                                >
                                    0{i + 1}
                                </span>

                                <div class="relative z-10 flex flex-col h-full">
                                    <div class="flex items-center gap-4 mb-8">
                                        <span
                                            class="bg-primary/10 border border-primary/20 text-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-2"
                                        >
                                            ⏱ {step.time}
                                        </span>
                                    </div>

                                    <h3
                                        class="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-6"
                                    >
                                        <span class="text-slate-300 mr-2">0{i + 1}</span>
                                        {step.title}
                                    </h3>

                                    <div
                                        class="space-y-3 mb-10 max-w-2xl font-body text-base md:text-lg text-slate-600 leading-relaxed"
                                    >
                                        {#each step.desc.split("\n") as line}
                                            {#if line.startsWith("•")}
                                                <div class="flex items-start gap-3 ml-2">
                                                    <ArrowRight
                                                        class="size-4 text-primary shrink-0 mt-1.5"
                                                    />
                                                    <span>{line.substring(1).trim()}</span>
                                                </div>
                                            {:else}
                                                <p>{line}</p>
                                            {/if}
                                        {/each}
                                    </div>

                                    <div class="mt-auto pt-6 w-full">
                                        <div
                                            class="bg-primary/5 border border-primary/20 rounded-xl p-5 flex items-start gap-4"
                                        >
                                            <div
                                                class="size-10 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0"
                                            >
                                                <CheckCircle2 class="size-5" />
                                            </div>
                                            <div>
                                                <span
                                                    class="block text-xs font-bold uppercase tracking-widest text-primary mb-1"
                                                    >{$t.SERVICES_PROCESS_OUTPUT_LABEL}</span
                                                >
                                                <span
                                                    class="font-body text-sm md:text-base font-medium text-slate-900"
                                                    >{step.output}</span
                                                >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        {/each}
                    </div>
                </div>

                <!-- Scroll hint (hide when done) -->
                {#if pinned && activeStep < steps.length - 1}
                    <div class="mt-6 flex items-center justify-center gap-2 text-slate-400 text-sm font-body animate-pulse">
                        <svg xmlns="http://www.w3.org/2000/svg" class="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                        <span>Scroll untuk melanjutkan</span>
                    </div>
                {/if}
            </div>
        </div>
    </div>
</div>
