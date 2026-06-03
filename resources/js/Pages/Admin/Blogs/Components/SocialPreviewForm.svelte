<script>
    import { Image as ImageIcon } from "lucide-svelte";

    let { form, featuredImagePreview } = $props();
</script>

<!-- Social Media Preview -->
<div class="bg-card border border-border rounded-2xl p-6 shadow-sm">
    <h3 class="font-display text-foreground mb-4">
        Social Preview
    </h3>
    <p class="text-xs text-foreground/50 mb-4">
        Tampilan link saat dibagikan ke WhatsApp, LinkedIn, atau
        Twitter.
    </p>

    <div
        class="border border-border rounded-xl overflow-hidden bg-background shadow-sm hover:shadow-md transition-shadow"
    >
        {#if featuredImagePreview}
            <div
                class="aspect-[1.91/1] w-full border-b border-border relative"
            >
                <img
                    src={featuredImagePreview}
                    alt="Preview"
                    class="w-full h-full object-cover"
                />
            </div>
        {:else}
            <div
                class="aspect-[1.91/1] w-full bg-foreground/5 flex items-center justify-center text-foreground/30 border-b border-border"
            >
                <ImageIcon class="size-8" />
            </div>
        {/if}
        <div class="p-4 bg-foreground/[0.02]">
            <p
                class="text-[10px] text-foreground/40 uppercase tracking-widest mb-1 truncate"
            >
                kodeflow.tech
            </p>
            <h4
                class="font-bold text-foreground text-sm line-clamp-1 mb-1"
            >
                {form.title || "Judul Artikel Anda"}
            </h4>
            <p
                class="text-xs text-foreground/60 line-clamp-2 leading-relaxed"
            >
                {form.desc ||
                    "Deskripsi singkat artikel akan muncul di sini sebagai cuplikan konten saat link dibagikan."}
            </p>
        </div>
    </div>
</div>
