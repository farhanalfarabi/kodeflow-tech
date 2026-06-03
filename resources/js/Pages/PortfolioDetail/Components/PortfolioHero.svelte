<script>
    import { Link } from "@inertiajs/svelte";
    import { ArrowLeft } from "lucide-svelte";
    
    export let item;
    export let lang = "id";
</script>

<section class="max-w-[var(--max)] mx-auto px-[var(--gutter)] mb-16">
    <!-- Back Link -->
    <Link
        href="/portfolio"
        class="inline-flex items-center gap-2 text-sm text-foreground/50 hover:text-primary-light transition-colors mb-8 font-medium group"
    >
        <ArrowLeft class="size-4 transition-transform group-hover:-translate-x-1" />
        <span>{lang === "id" ? "Kembali ke Portofolio" : "Back to Portfolios"}</span>
    </Link>

    <!-- Category Tag -->
    <span class="text-xs font-bold text-primary-light tracking-widest uppercase mb-4 block">
        {item.category?.name}
    </span>

    <!-- Title -->
    <h1 class="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight uppercase mb-6 max-w-5xl">
        {item.title}
    </h1>

    <!-- Short Sub-title -->
    <p class="font-body text-lg md:text-xl text-foreground/75 leading-relaxed max-w-4xl mb-12">
        {item.subtitle}
    </p>

    <!-- Hero Mockup Container -->
    <div class="liquid-glass rounded-3xl p-3 md:p-4 border border-border/10 shadow-2xl relative overflow-hidden group">
        <div class="absolute inset-0 bg-primary/5 pointer-events-none"></div>
        <div class="rounded-2xl overflow-hidden aspect-[16/9] border border-border/5 bg-muted/20 relative">
            <img src={item.image} alt={item.title} class="w-full h-full object-cover" />
            <!-- Visual Indicator Text Overlay -->
            <div class="absolute inset-0 bg-black/40 flex items-center justify-center p-6 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-xs">
                <p class="text-sm font-semibold tracking-wider text-white bg-black/60 px-4 py-2 rounded-full border border-white/10 uppercase">
                    {lang === "id" ? "[ GAMBAR UTAMA PROYEK / MOCKUP DASHBOARD UTAMA ]" : "[ MAIN PROJECT IMAGE / MAIN DASHBOARD MOCKUP ]"}
                </p>
            </div>
        </div>
    </div>
</section>

<style>
    .liquid-glass {
        background: rgba(255, 255, 255, 0.015);
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);
        border: 1px solid rgba(255, 255, 255, 0.05);
        box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.05);
    }
</style>
