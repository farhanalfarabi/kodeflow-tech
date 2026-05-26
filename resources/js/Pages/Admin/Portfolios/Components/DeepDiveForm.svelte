<script>
    import Tiptap from "../../../../Components/ui/Tiptap.svelte";

    // Svelte 5 props
    let { form } = $props();
</script>

<div class="space-y-5">
    <div>
        <label class="block text-xs font-bold text-foreground/75 uppercase tracking-wide mb-1.5">Konten Deep Dive Lengkap</label>
        <p class="text-[10px] text-foreground/50 mb-3">Tuliskan latar belakang, tantangan, solusi, arsitektur, dan kesimpulan menggunakan format rich text yang bebas.</p>
        <div class="bg-background rounded-xl overflow-hidden border border-border">
            <Tiptap bind:content={form.deep_dive.content} />
        </div>
    </div>
</div>
