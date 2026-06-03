<script>
    import { Calendar } from "lucide-svelte";

    export let item;
    export let lang = "id";
</script>

<section class="max-w-[var(--max)] mx-auto px-[var(--gutter)] mb-16">
    <h2 class="font-display text-2xl font-bold mb-4 tracking-wider uppercase border-b border-border/10 pb-4 text-foreground/90 flex items-center gap-3">
        <Calendar class="size-6 text-primary-light" />
        <span>{lang === "id" ? "GALERI & DOKUMENTASI PROSES" : "PROCESS DOCUMENTATION GALLERY"}</span>
    </h2>

    <p class="font-body text-xs text-foreground/50 mb-8 italic">
        {lang === "id" ? "* Dokumentasi otentik proses kolaborasi pengerjaan sistem" : "* Authentic documentation of the system development collaborative lifecycle"}
    </p>

    <!-- Process Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-8">
        {#each item.gallery as gal, idx}
            <div class="liquid-glass rounded-2xl overflow-hidden p-2.5 border border-border/10 group">
                <div class="rounded-xl overflow-hidden aspect-[4/3] bg-muted/20 relative">
                    <img
                        src={gal.url}
                        alt={gal.caption}
                        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                    />
                    <div class="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <p class="text-xs font-semibold tracking-wider text-white bg-black/60 px-4 py-2 rounded-full border border-white/10">
                            [ {lang === "id" ? "GAMBAR GALERI PROSES" : "PROCESS GALLERY IMAGE"} {idx + 1} ]
                        </p>
                    </div>
                </div>
                <div class="p-4">
                    <p class="font-body text-xs text-foreground/75 leading-relaxed font-semibold">
                        {gal.caption}
                    </p>
                </div>
            </div>
        {/each}
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
