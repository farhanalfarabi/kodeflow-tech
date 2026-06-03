<script>
    import { CTA_HREF } from "@/lib/constants";
    import { t } from "@/lib/i18n";
    import { ArrowUpRight, Play } from "lucide-svelte";
    import Button from "./ui/Button.svelte";
    import ArrowButton from "./ui/ArrowButton.svelte";
    import BlurText from "./ui/BlurText.svelte";
    import { inview } from "@/lib/utils";
    import { fly, blur } from "svelte/transition";
    import { cubicOut } from "svelte/easing";
    import { isLeadModalOpen } from "@/lib/stores";

    export let scrollRef = null;

    let showSub = false;
    let showCta = false;
    let showBadge = false;

    // Reactively track headline for BlurText
    $: headline = $t.HERO_HEADLINE;
    $: headlineRecreateKey = $t.HERO_HEADLINE;

    const partnerLogos = [
        "LOGO ponpes cangaan.png",
        "LOGO-LJSS.png",
        "Logo emabror.png",
        "logo almufid.png",
        "logo jetsky.png",
        "logo lirboyo.png",
        "logo myngaji.png",
        "logo ponpes waha.svg",
        "logo sd plus annur assalafy.png",
        "logo wepose.svg",
        "logo-rayhar.svg",
        "logoDigidanta.png",
    ];
</script>

<section
    bind:this={scrollRef}
    class="relative h-screen bg-background overflow-hidden flex items-center"
>
    <!-- Video di kanan bawah -->
    <div
        class="absolute bottom-0 right-0 w-full md:w-[65%] h-[80%] z-0 pointer-events-none"
    >
        <video
            src="/source.mp4"
            autoplay
            loop
            muted
            playsinline
            class="w-full h-full object-cover [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)] opacity-80"
        ></video>
    </div>

    <!-- Spotlight ungu muda dari atas ke navbar -->
    <div
        class="absolute top-0 left-1/2 -translate-x-1/2 w-full md:w-[80vw] h-[40vh] bg-[radial-gradient(ellipse_at_top,rgba(217,70,239,0.25)_0%,transparent_70%)] pointer-events-none z-[1] mix-blend-screen"
    ></div>

    <!-- Cinematic vignette (ditempatkan sebelum glow bawah agar tidak menutupi cahaya) -->
    <div
        class="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_top_left,rgba(0,0,0,0)_40%,rgba(0,0,0,0.8)_100%)] pointer-events-none"
    ></div>

    <!-- Glow ungu muda terang dari ujung bawah ke atas (area video) -->
    <div
        class="absolute bottom-0 right-0 md:right-10 w-full md:w-[60vw] h-[50vh] bg-[radial-gradient(ellipse_at_bottom,rgba(217,70,239,0.4)_0%,transparent_70%)] pointer-events-none z-[2] mix-blend-screen"
    ></div>

    <!-- Content -->
    <div class="relative z-10 w-full max-w-[1400px] mx-auto px-6">
        <div class="max-w-3xl text-left">
            {#key headlineRecreateKey}
                <h1 class="flex flex-col">
                    <BlurText
                        text={$t.HERO_HEADLINE}
                        as="span"
                        class="block font-display text-5xl md:text-7xl lg:text-[90px] leading-[1.05] tracking-tight text-foreground mb-5"
                        delay={90}
                        startDelay={150}
                    />
                    <BlurText
                        text={$t.HERO_HEADLINE2}
                        as="span"
                        class="block font-display text-5xl md:text-4xl lg:text-[80px] leading-[1.05] text-primary-light"
                        delay={90}
                        startDelay={150}
                    />
                </h1>
            {/key}

            <div use:inview on:enter={() => (showSub = true)}>
                {#if showSub}
                    <p
                        in:blur={{
                            amount: 10,
                            duration: 700,
                            delay: 600,
                            easing: cubicOut,
                        }}
                        class="mt-6 font-body text-base md:text-lg text-foreground/70 leading-relaxed max-w-lg"
                    >
                        {$t.HERO_SUB}
                    </p>
                {:else}
                    <p class="mt-6 h-6"></p>
                {/if}
            </div>

            <div use:inview on:enter={() => (showCta = true)}>
                {#if showCta}
                    <div
                        in:fly={{
                            y: 12,
                            duration: 600,
                            delay: 900,
                            easing: cubicOut,
                        }}
                        class="mt-10 flex items-center gap-4"
                    >
                        <!-- Start a project Button -->
                        <ArrowButton
                            href="#"
                            on:click={(e) => {
                                e.preventDefault();
                                isLeadModalOpen.set(true);
                            }}
                            text={$t.HERO_CTA_PRIMARY}
                            size="lg"
                        />
                    </div>
                {:else}
                    <div class="mt-10 h-12"></div>
                {/if}
            </div>
        </div>
    </div>

    <!-- Trusted By Marquee -->
    <div
        class="absolute bottom-0 left-0 w-full z-20 bg-background/50 backdrop-blur-sm border-t border-white/5 py-4 flex flex-col items-center"
    >
        <p
            class="text-[10px] md:text-xs text-foreground/50 uppercase tracking-[0.2em] font-bold mb-4"
        >
            Dipercaya oleh
        </p>
        <div class="marquee-container w-full">
            <div class="marquee-content">
                {#each [...partnerLogos, ...partnerLogos] as logo, i}
                    <div class="marquee-item" title={logo.split(".")[0]}>
                        <img
                            src={`/assets/partners/${logo}`}
                            alt="Partner {i}"
                        />
                    </div>
                {/each}
            </div>
        </div>
    </div>
</section>

<style>
    .marquee-container {
        display: flex;
        overflow: hidden;
        white-space: nowrap;
        width: 100%;
        mask-image: linear-gradient(
            to right,
            transparent,
            black 10%,
            black 90%,
            transparent
        );
        -webkit-mask-image: linear-gradient(
            to right,
            transparent,
            black 10%,
            black 90%,
            transparent
        );
    }
    .marquee-content {
        display: flex;
        width: max-content;
        animation: marquee-left-to-right 40s linear infinite;
    }
    @keyframes marquee-left-to-right {
        0% {
            transform: translateX(-50%);
        }
        100% {
            transform: translateX(0%);
        }
    }
    .marquee-item {
        flex-shrink: 0;
        margin: 0 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .marquee-item img {
        height: 35px;
        width: auto;
        max-width: 150px;
        object-fit: contain;
        filter: grayscale(100%) opacity(50%);
        transition: all 0.3s ease;
    }
    .marquee-item:hover img {
        filter: grayscale(0%) opacity(100%);
        transform: scale(1.05);
    }
</style>
