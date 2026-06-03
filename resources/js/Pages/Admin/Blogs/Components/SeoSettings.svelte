<script>
    import { Search, X } from "lucide-svelte";

    let { form } = $props();
    let keywordInput = $state("");

    function addKeyword(e) {
        if (e.key === "Enter" && keywordInput.trim() !== "") {
            e.preventDefault();
            if (!form.focus_keywords.includes(keywordInput.trim().toLowerCase())) {
                form.focus_keywords = [
                    ...form.focus_keywords,
                    keywordInput.trim().toLowerCase(),
                ];
            }
            keywordInput = "";
        }
    }

    function removeKeyword(kw) {
        form.focus_keywords = form.focus_keywords.filter((k) => k !== kw);
    }
</script>

<div class="bg-card border border-border rounded-2xl p-6 shadow-sm">
    <div class="flex items-center gap-2 mb-5">
        <div class="p-1.5 rounded-lg bg-emerald-500/10">
            <Search class="size-4 text-emerald-500" />
        </div>
        <h3 class="font-display text-foreground">
            SEO Settings
        </h3>
    </div>

    <div class="space-y-5">
        <!-- URL Slug -->
        <div>
            <label
                class="block text-xs font-medium text-foreground/60 mb-1.5 uppercase tracking-wider"
                >URL Slug Override</label
            >
            <div class="relative">
                <input
                    type="text"
                    bind:value={form.slug}
                    placeholder="article-url-slug (auto-generated if empty)"
                    class="w-full bg-background border border-border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 text-foreground font-mono"
                />
            </div>
        </div>

        <!-- Meta Title -->
        <div>
            <div class="flex items-center justify-between mb-1.5">
                <label
                    class="block text-xs font-medium text-foreground/60 uppercase tracking-wider"
                    >Meta Title</label
                >
                <span
                    class="text-[10px] font-mono {form.meta_title.length >
                    60
                        ? 'text-destructive'
                        : form.meta_title.length >= 50
                            ? 'text-emerald-500'
                            : 'text-foreground/40'}"
                >
                    {form.meta_title.length} / 60
                </span>
            </div>
            <textarea
                bind:value={form.meta_title}
                rows="2"
                placeholder="The Ultimate Guide to Santorini, Greece"
                class="w-full bg-background border border-border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 text-foreground resize-y min-h-[40px]"
            ></textarea>
            <p class="text-[10px] text-foreground/40 mt-1.5">
                Optimal length: 50-60 characters
            </p>
        </div>

        <!-- Meta Description -->
        <div>
            <div class="flex items-center justify-between mb-1.5">
                <label
                    class="block text-xs font-medium text-foreground/60 uppercase tracking-wider"
                    >Meta Description</label
                >
                <span
                    class="text-[10px] font-mono {form.meta_description.length >
                    160
                        ? 'text-destructive'
                        : form.meta_description.length >= 150
                            ? 'text-emerald-500'
                            : 'text-foreground/40'}"
                >
                    {form.meta_description.length} / 160
                </span>
            </div>
            <textarea
                bind:value={form.meta_description}
                maxlength="160"
                rows="3"
                placeholder="Discover everything you need to know for the perfect Greek island escape."
                class="w-full bg-background border border-border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 text-foreground resize-y min-h-[60px]"
            ></textarea>
            <p class="text-[10px] text-foreground/40 mt-1.5">
                Optimal length: 150-160 characters
            </p>
        </div>

        <!-- Focus Keywords -->
        <div>
            <label
                class="block text-xs font-medium text-foreground/60 mb-1.5 uppercase tracking-wider"
                >Focus Keywords</label
            >
            {#if form.focus_keywords.length > 0}
                <div class="flex flex-wrap gap-1.5 mb-2.5">
                    {#each form.focus_keywords as kw}
                        <span
                            class="inline-flex items-center gap-1 px-2.5 py-1 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 rounded-lg text-xs font-medium"
                        >
                            {kw}
                            <button
                                type="button"
                                on:click={() => removeKeyword(kw)}
                                class="hover:text-destructive hover:bg-destructive/10 rounded-full p-0.5 transition-colors"
                            >
                                <X class="size-3" />
                            </button>
                        </span>
                    {/each}
                </div>
            {/if}
            <input
                type="text"
                bind:value={keywordInput}
                on:keydown={addKeyword}
                placeholder="Add keywords..."
                class="w-full bg-background border border-border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 text-foreground"
            />
            <p class="text-[10px] text-foreground/40 mt-1.5">
                Target keywords. Press Enter to add.
            </p>
        </div>
    </div>
</div>
