<script>
    import { BookOpen, ChevronDown, ChevronUp } from "lucide-svelte";
    import { slide } from "svelte/transition";

    export let item;
    export let lang = "id";

    let isDeepDiveExpanded = false;

    function toggleDeepDive() {
        isDeepDiveExpanded = !isDeepDiveExpanded;
    }
</script>

<section class="max-w-[var(--max)] mx-auto px-[var(--gutter)] mb-16">
    <div class="liquid-glass rounded-3xl border border-border/10 overflow-hidden">
        <!-- Accordion Trigger Button -->
        <button
            on:click={toggleDeepDive}
            class="w-full px-8 py-8 flex flex-col md:flex-row md:items-center justify-between gap-4 text-left transition-colors hover:bg-white/[0.01] cursor-pointer"
        >
            <div class="flex items-start gap-4">
                <div class="size-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary-light shrink-0 mt-0.5">
                    <BookOpen class="size-6" />
                </div>
                <div>
                    <h3 class="font-display text-xl md:text-2xl font-bold uppercase tracking-wider text-foreground">
                        {lang === "id" ? "DETAIL STUDI KASUS (DEEP DIVE)" : "CASE STUDY DEEP DIVE"}
                    </h3>
                    <p class="font-body text-xs md:text-sm text-foreground/50 mt-1">
                        {lang === "id"
                            ? "Klik untuk membaca analisis mendalam, arsitektur teknis, dan pelajaran penting (Opsional)"
                            : "Click to expand in-depth analysis, technical architecture, and valuable lessons learned (Optional)"}
                    </p>
                </div>
            </div>

            <div class="flex items-center gap-2 font-display text-sm font-semibold text-primary-light shrink-0 self-end md:self-auto">
                <span>{isDeepDiveExpanded
                        ? lang === "id" ? "TUTUP DETAIL" : "CLOSE DEEP DIVE"
                        : lang === "id" ? "BACA DETAIL LENGKAP" : "EXPAND STUDY"}</span>
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

<style>
    .liquid-glass {
        background: rgba(255, 255, 255, 0.015);
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);
        border: 1px solid rgba(255, 255, 255, 0.05);
        box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.05);
    }
</style>
