<script>
    import { t } from "@/lib/i18n";
    import * as Icons from "lucide-svelte";
</script>

<section
    id="app-categories"
    class="relative py-20 md:py-28 bg-white overflow-hidden border-t border-neutral-100"
>
    <!-- Background accents -->
    <div
        class="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"
    ></div>
    <div
        class="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary-light/5 rounded-full blur-[120px] pointer-events-none"
    ></div>

    <div
        class="max-w-[var(--max)] mx-auto px-[var(--gutter)] flex flex-col items-center text-center mb-16 relative z-10"
    >
        <div
            class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary-light uppercase tracking-wider mb-6"
        >
            <Icons.Layers class="size-3.5 text-primary-light" />
            <span>{$t.APP_CATEGORIES_BADGE}</span>
        </div>

        <h2
            class="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 max-w-3xl mx-auto leading-tight uppercase text-neutral-900"
        >
            {$t.APP_CATEGORIES_TITLE}<span
                class="text-primary-light italic drop-shadow-[0_0_15px_rgba(247,37,134,0.25)]"
                >{$t.APP_CATEGORIES_TITLE_HIGHLIGHT}</span
            >
        </h2>

        <p class="font-body text-neutral-600 max-w-2xl text-base md:text-lg">
            {$t.APP_CATEGORIES_DESC}
        </p>
    </div>

    <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[var(--max)] mx-auto px-[var(--gutter)] relative z-10"
    >
        {#each $t.APP_CATEGORIES as category}
            <div
                class="bg-white rounded-[24px] p-8 border border-neutral-200 shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:border-primary/20 transition-all duration-300 group flex flex-col h-full"
            >
                <div
                    class="size-14 rounded-2xl bg-neutral-50 flex items-center justify-center mb-6 group-hover:bg-primary/5 group-hover:scale-110 transition-all duration-300 ease-out border border-neutral-100 group-hover:border-primary/10"
                >
                    <svelte:component
                        this={Icons[category.icon]}
                        class="size-6 text-neutral-600 group-hover:text-primary transition-colors duration-300"
                    />
                </div>

                <h3 class="font-display text-xl font-bold text-neutral-900 mb-5">
                    {category.title}
                </h3>

                <ul class="space-y-3 mt-auto">
                    {#each category.items as item}
                        <li class="flex items-start gap-3">
                            <div
                                class="mt-1 size-4 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0"
                            >
                                <Icons.Check class="size-2.5 text-primary" />
                            </div>
                            <span class="font-body text-sm text-neutral-600 font-medium">
                                {item}
                            </span>
                        </li>
                    {/each}
                </ul>
            </div>
        {/each}
    </div>
</section>
