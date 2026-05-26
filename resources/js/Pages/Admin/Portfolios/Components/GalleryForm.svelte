<script>
    import { Plus, Trash2, ImageIcon } from "lucide-svelte";

    // Svelte 5 props
    let { form } = $props();

    // Gallery helpers
    function addGalleryItem() {
        form.gallery = [...form.gallery, { url: "", caption: "", file: null, preview: null }];
    }
    function removeGalleryItem(index) {
        if (form.gallery.length > 1) {
            form.gallery = form.gallery.filter((_, i) => i !== index);
        }
    }
</script>

<div class="space-y-4">

    <div class="border-t border-border/30 pt-3">
        <div class="flex justify-between items-center mb-3">
            <span class="text-xs font-bold text-foreground/75 uppercase tracking-wide">Daftar Foto Galeri ({form.gallery.length})</span>
            <button type="button" on:click={addGalleryItem} class="p-1 rounded bg-primary/10 text-primary-light hover:bg-primary/20 text-xs cursor-pointer"><Plus class="size-3" /></button>
        </div>
        <div class="space-y-4">
            {#each form.gallery as gal, index}
                <div class="p-3 bg-foreground/[0.02] border border-border rounded-xl space-y-2 relative">
                    <button type="button" on:click={() => removeGalleryItem(index)} class="absolute top-2 right-2 p-1 text-destructive bg-destructive/10 hover:bg-destructive/20 rounded cursor-pointer"><Trash2 class="size-3" /></button>
                    <span class="text-[9px] font-mono text-foreground/40 block">Foto #{index+1}</span>
                    <div>
                        <label class="block text-[9px] font-bold text-foreground/60 uppercase mb-0.5">Gambar</label>
                        <div class="flex items-center gap-3 mt-1.5">
                            {#if gal.preview || gal.url}
                                <div class="relative group rounded-lg overflow-hidden border border-border shrink-0 w-14 h-14">
                                    <img src={gal.preview || gal.url} alt="Preview" class="w-full h-full object-cover" />
                                    <button type="button" on:click={() => { 
                                        let newGallery = [...form.gallery];
                                        newGallery[index].file = null;
                                        newGallery[index].url = "";
                                        newGallery[index].preview = null;
                                        form.gallery = newGallery;
                                    }} class="absolute inset-0 bg-black/50 hover:bg-black/70 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity text-[10px] font-bold">Hapus</button>
                                </div>
                            {/if}
                            <label class="flex items-center justify-center gap-2 {gal.preview || gal.url ? 'flex-1' : 'w-full'} px-2.5 bg-foreground/5 hover:bg-foreground/10 border border-border rounded-lg text-xs font-semibold cursor-pointer transition-colors h-10">
                                <ImageIcon class="size-3 shrink-0" />
                                <span class="truncate">{gal.preview || gal.url ? 'Ganti Gambar' : 'Pilih Gambar'}</span>
                                <input 
                                    type="file" 
                                    accept="image/*"
                                    on:change={(e) => {
                                        const file = e.target.files[0];
                                        if (file) {
                                            let newGallery = [...form.gallery];
                                            newGallery[index].file = file;
                                            newGallery[index].preview = URL.createObjectURL(file);
                                            newGallery[index].url = file.name;
                                            form.gallery = newGallery;
                                        }
                                    }}
                                    class="hidden"
                                />
                            </label>
                        </div>
                    </div>
                    <div>
                        <label class="block text-[9px] font-bold text-foreground/60 uppercase mb-0.5">Foto Caption</label>
                        <input 
                            type="text" 
                            bind:value={gal.caption}
                            placeholder="Tahap Analisis Kebutuhan..."
                            class="w-full px-2.5 py-1 bg-foreground/5 border border-border rounded-lg text-xs focus:outline-none"
                        />
                    </div>
                </div>
            {/each}
        </div>
    </div>
</div>
