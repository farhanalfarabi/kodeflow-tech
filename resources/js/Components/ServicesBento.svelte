<script>
    import { t } from "@/lib/i18n";
    import * as Icons from "lucide-svelte";
    import BlurText from "./ui/BlurText.svelte";
    import LottiePlayer from "./ui/LottiePlayer.svelte";

    const LOTTIE_URLS = [
        // 0: Distributor & Trading (API Integration)
        "https://cdn.prod.website-files.com/690b5a39d269efd72421ec15/699f223d78724cb1ec19e035_04.json",
        // 1: Logistik & Ekspedisi (Fast Performance)
        "https://cdn.prod.website-files.com/690b5a39d269efd72421ec15/699f223d66a26c53542f7de9_03.json",
        // 2: Kontraktor & Properti (Workflow Automation)
        "https://cdn.prod.website-files.com/690b5a39d269efd72421ec15/699f223d50d87df2a92b7743_53de64471d0a277f8667726a0df311a3_05.json",
        // 3: Klinik & Rumah Sakit (Systems/Code)
        "/assets/lottie/programming-code.json",
        // 4: F&B Multi-Outlet (Graphic Design)
        "/assets/lottie/graphic-design.json",
        // 5: Retail & Toko Bangunan (API Integration repeated)
        "https://cdn.prod.website-files.com/690b5a39d269efd72421ec15/699f223d78724cb1ec19e035_04.json",
        // 6: Manufaktur Skala Menengah (Workflow Automation repeated)
        "https://cdn.prod.website-files.com/690b5a39d269efd72421ec15/699f223d50d87df2a92b7743_53de64471d0a277f8667726a0df311a3_05.json",
        // 7: Sekolah & Pendidikan (Expert Mentorship)
        "/assets/lottie/leaderku.json",
    ];
</script>

<section
    id="services"
    class="relative py-28 md:py-40 bg-[#fafafa] overflow-hidden"
>
    <div
        class="max-w-[var(--max)] mx-auto px-[var(--gutter)] flex flex-col items-center text-center mb-20"
    >
        <div
            class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary-light uppercase tracking-wider mb-6"
        >
            <Icons.LayoutTemplate class="size-3.5 text-primary-light" />
            <span>{$t.SERVICES_BENTO_BADGE}</span>
        </div>

        <h2
            class="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 max-w-4xl mx-auto leading-tight uppercase text-neutral-900"
        >
            {$t.SERVICES_BENTO_TITLE}<span
                class="text-primary-light italic drop-shadow-[0_0_15px_rgba(247,37,134,0.25)]"
                >{$t.SERVICES_BENTO_TITLE_HIGHLIGHT}</span
            >
        </h2>

        <p class="font-body text-neutral-600 max-w-2xl text-base md:text-lg">
            {$t.SERVICES_BENTO_DESC}
        </p>
    </div>

    <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[var(--max)] mx-auto px-[var(--gutter)]"
    >
        {#each $t.SERVICES as service, idx}
            <div
                class="bg-white rounded-[32px] p-8 relative group transition-all duration-500 hover:-translate-y-1 flex flex-col h-full border border-black/[0.03] shadow-[0_10px_40px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)]"
            >
                <!-- Animated Icon Container (Visual Header of Card) -->
                <div
                    class="w-full h-32 mb-8 relative flex items-center justify-center overflow-hidden"
                >
                    <!-- Lottie Background Animation -->
                    <div
                        class="absolute inset-0 w-full h-full opacity-80 mix-blend-multiply flex justify-center items-center scale-[1.35]"
                    >
                        <LottiePlayer
                            src={LOTTIE_URLS[idx % LOTTIE_URLS.length]}
                            speed={1}
                        />
                    </div>
                </div>

                <h3
                    class="font-display text-2xl font-medium tracking-tight mb-3 text-primary-light drop-shadow-sm"
                >
                    {service.title}
                </h3>
                <p
                    class="font-body text-sm text-neutral-500 leading-relaxed font-medium"
                >
                    {service.body}
                </p>
            </div>
        {/each}
    </div>
</section>

<style>
    @keyframes float {
        0%,
        100% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-8px);
        }
    }

    .anim-float {
        animation: float 4s ease-in-out infinite;
    }
</style>
