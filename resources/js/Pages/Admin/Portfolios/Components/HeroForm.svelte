<script>
    import { ImageIcon } from "lucide-svelte";
    import Combobox from "@/Components/ui/Combobox.svelte";

    // Svelte 5 props
    let { 
        form, 
        categories = [],
        localPreviewUrl = $bindable() 
    } = $props();

    let fileInput;

    function handleTitleInput() {
        if (form.title) {
            form.slug = form.title
                .toLowerCase()
                .replace(/\s+/g, '-')
                .replace(/[^a-z0-9\-]+/g, '')
                .replace(/\-\-+/g, '-');
        } else {
            form.slug = "";
        }
    }

    function handleSlugInput() {
        if (form.slug) {
            form.slug = form.slug
                .toLowerCase()
                .replace(/\s+/g, '-')
                .replace(/[^a-z0-9\-]+/g, '')
                .replace(/\-\-+/g, '-');
        }
    }

    import imageCompression from 'browser-image-compression';

    // Upload handle
    async function handleFileChange(e) {
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
            
            // Cleanup previous local object URL to prevent memory leaks
            if (localPreviewUrl) {
                URL.revokeObjectURL(localPreviewUrl);
            }
            
            // Generate temporary local object URL for preview instead of huge Base64 string
            localPreviewUrl = URL.createObjectURL(file);
            
            // Set image_path to just the filename (a very short string) so we don't send huge data to the backend,
            // and it passes any max 255 validation rules
            form.image_path = file.name;
        }
    }

    async function handleCategoryChange(e) {
        const newCat = e.detail;
        if (newCat && !categories.includes(newCat)) {
            try {
                // Extract XSRF-TOKEN cookie for Laravel CSRF protection
                const csrfToken = document.cookie.split('; ').find(row => row.startsWith('XSRF-TOKEN='))?.split('=')[1];
                
                // Instantly save to backend using native fetch
                const response = await fetch('/admin/portfolio-categories/api-store', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        'X-XSRF-TOKEN': decodeURIComponent(csrfToken)
                    },
                    body: JSON.stringify({ category: newCat })
                });
                
                if (response.ok) {
                    const data = await response.json();
                    // Add to local categories to avoid duplicate requests
                    categories = [...categories, data.category];
                    form.category = data.category;
                } else {
                    console.error("Gagal menyimpan kategori baru", await response.text());
                }
            } catch (err) {
                console.error("Error jaringan:", err);
            }
        }
    }
</script>

<div class="space-y-4">
    <div>
        <label class="block text-xs font-bold text-foreground/75 uppercase tracking-wide mb-1.5">Kategori Utama</label>
        <Combobox 
            items={categories} 
            bind:selectedValue={form.category}
            on:change={handleCategoryChange}
            placeholder="Pilih atau ketik kategori baru..."
            addLabel="Tambah Kategori"
        />
    </div>
    <div>
        <label class="block text-xs font-bold text-foreground/75 uppercase tracking-wide mb-1.5">Judul Utama Studi Kasus</label>
        <textarea 
            rows="3"
            bind:value={form.title}
            on:input={handleTitleInput}
            placeholder="Tulis judul lengkap studi kasus..."
            class="w-full p-3 bg-foreground/5 border border-border rounded-xl text-sm focus:outline-none"
        ></textarea>
    </div>

    <div>
        <label class="block text-xs font-bold text-foreground/75 uppercase tracking-wide mb-1.5">Route URL Slug (Unik)</label>
        <input 
            type="text" 
            bind:value={form.slug}
            on:input={handleSlugInput}
            placeholder="Contoh: flowbiz-erp"
            class="w-full px-3.5 py-2 bg-foreground/5 border border-border rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-primary"
        />
    </div>



    <div>
        <label class="block text-xs font-bold text-foreground/75 uppercase tracking-wide mb-1.5">Sub-judul / Deskripsi Pendahuluan</label>
        <textarea 
            rows="4"
            bind:value={form.subtitle}
            placeholder="Jelaskan ringkasan singkat target & capaian proyek..."
            class="w-full p-3 bg-foreground/5 border border-border rounded-xl text-sm focus:outline-none"
        ></textarea>
    </div>



    <div>
        <label class="block text-xs font-bold text-foreground/75 uppercase tracking-wide mb-1.5">Gambar Mockup Utama</label>
        
        <div class="flex items-center gap-4 mt-1">
            {#if localPreviewUrl || form.image_path}
                <div class="relative group rounded-xl overflow-hidden border border-border shrink-0 w-24 h-24">
                    <img src={localPreviewUrl || form.image_path} alt="Preview" class="w-full h-full object-cover" />
                    <button type="button" on:click={() => { form.image = null; form.image_path = ""; localPreviewUrl = null; }} class="absolute inset-0 bg-black/50 hover:bg-black/70 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity text-xs font-bold">Hapus</button>
                </div>
            {/if}

            <div class="flex flex-col gap-2 {localPreviewUrl || form.image_path ? 'flex-1' : 'w-full'}">
                <button 
                    type="button"
                    on:click={() => fileInput.click()}
                    class="px-4 py-2.5 bg-foreground/5 hover:bg-foreground/10 border border-border rounded-xl text-xs font-semibold uppercase text-center flex items-center justify-center gap-2 cursor-pointer transition-colors"
                >
                    <ImageIcon class="size-4 shrink-0" />
                    <span class="truncate">{localPreviewUrl || form.image_path ? 'Ganti File Gambar' : 'Pilih File Gambar'}</span>
                </button>
                <input 
                    type="file" 
                    accept="image/*"
                    bind:this={fileInput}
                    on:change={handleFileChange}
                    class="hidden"
                />
            </div>
        </div>
    </div>
</div>
