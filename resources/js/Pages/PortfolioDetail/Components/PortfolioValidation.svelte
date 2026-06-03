<script>
    export let item;
    export let lang = "id";
</script>

<section class="max-w-[var(--max)] mx-auto px-[var(--gutter)] mb-16">
    <div class="bg-primary/5 rounded-3xl border border-primary/10 p-8 md:p-12 relative overflow-hidden">
        <div class="absolute right-0 bottom-0 top-0 w-1/3 bg-radial from-primary-light/10 to-transparent pointer-events-none"></div>

        <h2 class="font-display text-2xl font-bold mb-10 text-center uppercase tracking-wider">
            {lang === "id" ? "BUKTI NYATA & VALIDASI PASCA GO-LIVE" : "REAL EVIDENCE & VALIDATION POST GO-LIVE"}
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            {#each item.validation as val, i}
                <div class="text-center flex flex-col items-center p-4 border-r border-border/5 last:border-0 relative">
                    <!-- Large Highlight Metric -->
                    <span class="font-display text-5xl md:text-6xl font-extrabold text-primary-light mb-4 block drop-shadow-[0_0_15px_rgba(247,37,134,0.3)]">
                        {val.metric}
                    </span>

                    <h4 class="font-display text-base font-bold uppercase text-foreground mb-2">
                        {val.title}
                    </h4>

                    <p class="font-body text-xs text-foreground/60 leading-relaxed max-w-xs">
                        {val.desc}
                    </p>
                </div>
            {/each}
        </div>
    </div>
</section>
