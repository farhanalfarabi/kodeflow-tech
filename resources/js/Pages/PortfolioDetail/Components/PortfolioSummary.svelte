<script>
    import { Target, Check } from "lucide-svelte";
    
    export let item;
    export let lang = "id";
</script>

<section class="max-w-[var(--max)] mx-auto px-[var(--gutter)] mb-16">
    <h2 class="font-display text-2xl font-bold mb-8 tracking-wider uppercase border-b border-border/10 pb-4 text-foreground/90 flex items-center gap-3">
        <Target class="size-6 text-primary-light" />
        <span>{lang === "id" ? "RINGKASAN CEPAT PROYEK" : "QUICK PROJECT SUMMARY"}</span>
    </h2>

    <!-- Columns Layout -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <!-- Aspect Importance -->
        <div class="liquid-glass p-8 rounded-2xl border border-border/10 flex flex-col h-full">
            <h3 class="font-display text-lg font-bold uppercase tracking-wider text-primary-light mb-4">
                {lang === "id" ? "Apa Yang Penting Dari Proyek Ini?" : "Why This Project Matters?"}
            </h3>
            <p class="font-body text-sm text-foreground/75 leading-relaxed flex-grow">
                {item.summary.importance}
            </p>
        </div>

        <!-- Context -->
        <div class="liquid-glass p-8 rounded-2xl border border-border/10 flex flex-col h-full">
            <h3 class="font-display text-lg font-bold uppercase tracking-wider text-primary-light mb-4">
                {lang === "id" ? "Konteks Industri & Klien" : "Client & Industry Context"}
            </h3>
            <p class="font-body text-sm text-foreground/75 leading-relaxed flex-grow">
                {item.summary.context}
            </p>
        </div>

        <!-- Direct Results -->
        <div class="liquid-glass p-8 rounded-2xl border border-border/10 flex flex-col h-full">
            <h3 class="font-display text-lg font-bold uppercase tracking-wider text-primary-light mb-4">
                {lang === "id" ? "Dampak Langsung (Hasil)" : "Direct Impact (Results)"}
            </h3>
            <ul class="space-y-3 font-body text-sm text-foreground/75">
                {#each item.summary.result as res}
                    <li class="flex items-start gap-2.5">
                        <Check class="size-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{res}</span>
                    </li>
                {/each}
            </ul>
        </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <!-- Core Modules -->
        <div class="liquid-glass p-8 rounded-2xl border border-border/10 lg:col-span-7">
            <h4 class="font-display text-base font-bold uppercase tracking-wider text-foreground mb-4">
                {lang === "id" ? "Modul Inti Yang Dibangun" : "Core Modules Built"}
            </h4>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {#each item.summary.modules as mod}
                    <div class="flex items-center gap-3 p-3 rounded-xl bg-foreground/[0.02] border border-border/5">
                        <div class="size-2 rounded-full bg-primary-light"></div>
                        <span class="font-body text-xs font-semibold text-foreground/80">{mod}</span>
                    </div>
                {/each}
            </div>
        </div>

        <!-- Ideal Reader / Fits if -->
        <div class="liquid-glass p-8 rounded-2xl border border-border/10 lg:col-span-5 flex flex-col justify-center">
            <h4 class="font-display text-base font-bold uppercase tracking-wider text-foreground mb-4">
                {lang === "id" ? "Studi Kasus Ini Cocok Dibaca Jika Anda:" : "This Case Study Is Relevant If You Are:"}
            </h4>
            <ul class="space-y-3 font-body text-xs text-foreground/70">
                {#each item.summary.targetReader as reader}
                    <li class="flex items-center gap-2">
                        <div class="size-1.5 rounded-full bg-foreground/40 shrink-0"></div>
                        <span>{reader}</span>
                    </li>
                {/each}
            </ul>
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
