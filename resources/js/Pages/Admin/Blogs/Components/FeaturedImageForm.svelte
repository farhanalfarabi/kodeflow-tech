<script>
    import { Image as ImageIcon, UploadCloud } from "lucide-svelte";
    import MediaLibraryModal from "@/Components/MediaLibraryModal.svelte";
    import imageCompression from 'browser-image-compression';

    let { form, featuredImagePreview = $bindable(null) } = $props();

    let isMediaModalOpen = $state(false);

    async function handleImageUpload(e) {
        let file = e.target.files[0];
        if (file) {
            // Compress image if larger than 2MB
            if (file.type.startsWith("image/") && file.size > 2 * 1024 * 1024) {
                try {
                    file = await imageCompression(file, {
                        maxSizeMB: 2,
                        maxWidthOrHeight: 1920,
                        useWebWorker: true,
                    });
                } catch (error) {
                    console.error("Gagal mengkompresi gambar:", error);
                }
            }

            form.image = file;
            featuredImagePreview = URL.createObjectURL(file);
            form.image_path = null;
        }
    }

    function handleMediaSelect(item) {
        form.image = null;
        form.image_path = item.path;
        featuredImagePreview = item.path;
        isMediaModalOpen = false;
    }
</script>

<!-- Featured Image -->
<div class="bg-card border border-border rounded-2xl p-6 shadow-sm">
    <div class="flex justify-between items-center mb-4">
        <h3 class="font-display text-foreground">
            Featured Image
        </h3>
        <button
            type="button"
            on:click={() => (isMediaModalOpen = true)}
            class="text-xs font-semibold text-primary hover:text-primary/80 transition-colors flex items-center gap-1"
        >
            <ImageIcon class="size-3.5" />
            Pilih dari Pustaka Media
        </button>
    </div>

    <label
        class="w-full aspect-video rounded-xl border-2 border-dashed border-border hover:border-primary/50 hover:bg-primary/5 transition-all flex flex-col items-center justify-center gap-3 text-foreground/50 hover:text-primary group cursor-pointer overflow-hidden relative mb-4"
    >
        <input
            type="file"
            accept="image/*"
            class="hidden"
            on:change={handleImageUpload}
        />

        {#if featuredImagePreview}
            <img
                src={featuredImagePreview}
                alt="Preview"
                class="absolute inset-0 w-full h-full object-cover z-0"
            />
            <div
                class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10"
            >
                <span
                    class="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium shadow-lg"
                    >Ganti Gambar</span
                >
            </div>
        {:else}
            <div
                class="p-3 rounded-full bg-foreground/5 group-hover:bg-primary/10 transition-colors"
            >
                <UploadCloud class="size-6" />
            </div>
            <div class="text-center px-4">
                <span class="block text-sm font-medium"
                    >Click to upload main image</span
                >
                <span class="block text-xs opacity-70 mt-1"
                    >SVG, PNG, JPG or GIF (max. 5MB)</span
                >
            </div>
        {/if}
    </label>

    {#if form.image_path}
        <div
            class="text-[11px] text-primary bg-primary/5 border border-primary/10 rounded-lg p-2.5 flex items-center justify-between"
        >
            <span class="truncate font-medium"
                >Terpilih dari pustaka: {form.image_path
                    .split("/")
                    .pop()}</span
            >
            <button
                type="button"
                on:click={() => {
                    form.image_path = null;
                    featuredImagePreview = null;
                }}
                class="text-destructive hover:underline font-semibold ml-2"
                >Batal Pilih</button
            >
        </div>
    {/if}
</div>

<MediaLibraryModal
    bind:isOpen={isMediaModalOpen}
    onSelect={handleMediaSelect}
/>
