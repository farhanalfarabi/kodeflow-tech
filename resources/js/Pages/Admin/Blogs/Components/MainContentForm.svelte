<script>
    import { Hash, X } from "lucide-svelte";
    import Combobox from "@/Components/ui/Combobox.svelte";
    import SelectMultiple from "@/Components/ui/SelectMultiple.svelte";
    import Tiptap from "@/Components/ui/Tiptap.svelte";

    let { form, existingTags = [], blogsList = [] } = $props();

    function removeTag(tagToRemove) {
        form.tags = form.tags.filter((tag) => tag !== tagToRemove);
    }
</script>

<div class="space-y-6">
    <!-- Title Input -->
    <div class="bg-card border border-border rounded-2xl p-6 shadow-sm">
        <label
            for="title"
            class="block text-sm font-semibold text-foreground mb-2"
            >Article Title</label
        >
        <input
            type="text"
            id="title"
            bind:value={form.title}
            placeholder="e.g. Cara Memilih Vendor Software Terbaik..."
            class="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground placeholder-foreground/30 focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm font-medium transition-all"
        />

        <div class="mt-4 flex items-center gap-2 text-sm mb-6">
            <span class="text-foreground/50">Slug Preview:</span>
            <span
                class="text-primary font-mono bg-primary/5 px-2 py-0.5 rounded border border-primary/10"
            >
                {form.slug ? form.slug : (form.title ? form.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "") : "auto-generated-slug")}
            </span>
        </div>

        <label
            for="desc"
            class="block text-sm font-semibold text-foreground mb-2"
            >Short Description (Excerpt)</label
        >
        <textarea 
            id="desc"
            bind:value={form.desc}
            rows="5"
            placeholder="A brief summary or long description of the article. This will appear on the blog cards and header..."
            class="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground placeholder-foreground/30 focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm transition-all resize-y min-h-[100px]"
        ></textarea>

        <div class="mt-6 border-t border-border pt-6">
            <label
                class="flex items-center gap-2 text-sm font-semibold text-foreground mb-2"
                ><Hash class="size-4 text-primary" /> Tags</label
            >
            <p class="text-xs text-foreground/50 mb-3">
                Tekan 'Enter' untuk menambahkan tag baru.
            </p>
            <div class="flex flex-wrap gap-2 mb-3">
                {#each form.tags as tag}
                    <span
                        class="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-lg text-sm font-medium"
                    >
                        {tag}
                        <button
                            type="button"
                            on:click={() => removeTag(tag)}
                            class="hover:text-destructive hover:bg-destructive/10 rounded-full p-0.5 transition-colors"
                            ><X class="size-3" /></button
                        >
                    </span>
                {/each}
            </div>
            <Combobox
                items={existingTags}
                bind:selectedValues={form.tags}
                multiple={true}
                placeholder="Pilih atau ketik tag..."
                addLabel="Tambah Tag:"
                showSelectedInButton={false}
            />
        </div>
    </div>

    <!-- Editor Area -->
    <div class="bg-card border border-border rounded-2xl p-6 shadow-sm">
        <h3 class="font-display text-foreground mb-4">Main Content</h3>
        <Tiptap bind:content={form.content} />
    </div>

    <!-- AI Summary Area -->
    <div class="bg-card border border-border rounded-2xl p-6 shadow-sm">
        <h3 class="font-display text-foreground mb-4">AI Summary</h3>
        <Tiptap bind:content={form.ai_summary} />
    </div>

    <!-- Related Blog Input -->
    <div class="bg-card border border-border rounded-2xl p-6 shadow-sm">
        <label
            for="related"
            class="block text-sm font-semibold text-foreground mb-2"
            >Related Blog Article</label
        >
        <p class="text-xs text-foreground/50 mb-4">
            Pilih artikel terkait untuk merekomendasikan pembaca ke
            postingan lain di akhir artikel ini.
        </p>
        <div class="relative">
            <SelectMultiple
                options={blogsList ? blogsList.map(b => ({ value: b.id, label: b.title })) : []}
                bind:values={form.related_blogs}
                placeholder="Pilih artikel terkait..."
            />
        </div>
    </div>
</div>
