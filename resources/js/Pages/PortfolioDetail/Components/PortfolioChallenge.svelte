<script>
    import { AlertTriangle, Check } from "lucide-svelte";

    export let item;
    export let lang = "id";
</script>

<section class="max-w-[var(--max)] mx-auto px-[var(--gutter)] mb-16">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
        <!-- Challenges column -->
        <div class="flex flex-col">
            <div class="inline-flex items-center gap-2 text-rose-400 font-bold uppercase tracking-wider text-xs mb-4">
                <AlertTriangle class="size-4" />
                <span>{lang === "id" ? "Tantangan Utama" : "Key Challenge"}</span>
            </div>
            <h3 class="font-display text-2xl font-bold uppercase leading-tight text-foreground mb-4">
                {lang === "id" ? "Masalah Operasional Sebelum Sistem Ada" : "Operational Hurdle Prior to System Adoption"}
            </h3>
            <p class="font-body text-sm text-foreground/75 leading-relaxed">
                {item.challenge_short}
            </p>
        </div>

        <!-- Solution column -->
        <div class="flex flex-col">
            <div class="inline-flex items-center gap-2 text-emerald-400 font-bold uppercase tracking-wider text-xs mb-4">
                <Check class="size-4" />
                <span>{lang === "id" ? "Solusi Kodeflow" : "Kodeflow Solution"}</span>
            </div>
            <h3 class="font-display text-2xl font-bold uppercase leading-tight text-foreground mb-4">
                {lang === "id" ? "Merancang Arsitektur Kustom Real-Time" : "Designing A Custom Real-Time Architecture"}
            </h3>
            <p class="font-body text-sm text-foreground/75 leading-relaxed mb-6">
                {item.solution_short}
            </p>

            <!-- Tech Stack List -->
            <div>
                <span class="text-xs font-bold text-foreground/45 uppercase tracking-wider block mb-3">
                    {lang === "id" ? "TEKNOLOGI YANG DIGUNAKAN:" : "TECHNOLOGY STACK USED:"}
                </span>
                <div class="flex flex-wrap gap-2">
                    {#each item.tech_stack || [] as tech}
                        <span class="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-card border border-border/15 text-primary-light">
                            {tech}
                        </span>
                    {/each}
                </div>
            </div>
        </div>
    </div>
</section>
