<script>
    import AdminLayout from "../../../Layouts/AdminLayout.svelte";
    import {
        Plus,
        Grid,
        List as ListIcon,
        UploadCloud,
    } from "lucide-svelte";
    import { router } from "@inertiajs/svelte";
    import AlertDialog from "../../../Components/ui/AlertDialog.svelte";
    import Pagination from "../../../Components/ui/Pagination.svelte";
    import SearchInput from "../../../Components/ui/SearchInput.svelte";
    import MediaGridItem from "./Components/MediaGridItem.svelte";
    import MediaListTable from "./Components/MediaListTable.svelte";
    import MediaEditModal from "./Components/MediaEditModal.svelte";
    import imageCompression from 'browser-image-compression';

    export let media = {
        data: [],
        links: [],
        total: 0,
        current_page: 1,
        last_page: 1,
    };
    export let filters = { search: "" };

    let searchQuery = filters.search || "";
    let isGridView = true;
    let isUploading = false;
    let fileInput;
    let activeMenuId = null;
    let copiedId = null;

    let isEditModalOpen = false;
    let editingItem = null;
    let newName = "";
    let isSavingName = false;

    function handleFilter() {
        router.get(
            "/admin/media",
            { search: searchQuery },
            { preserveState: true, preserveScroll: true },
        );
    }

    function triggerFileInput() {
        fileInput.click();
    }

    async function handleUpload(e) {
        const files = e.target.files;
        if (!files || files.length === 0) return;

        isUploading = true;
        let uploadPromises = [];

        const options = {
            maxSizeMB: 2,
            maxWidthOrHeight: 1920,
            useWebWorker: true,
        };

        // We upload each file as FormData via standard fetch to be fast, asynchronous, and reliable
        for (let i = 0; i < files.length; i++) {
            let file = files[i];

            // Compress image if larger than 2MB
            if (file.type.startsWith("image/") && file.size > 2 * 1024 * 1024) {
                try {
                    file = await imageCompression(file, options);
                } catch (error) {
                    console.error("Gagal mengkompresi gambar:", error);
                }
            }

            const formData = new FormData();
            formData.append("file", file, file.name);

            const promise = fetch("/admin/media?api=1", {
                method: "POST",
                body: formData,
                headers: {
                    "X-Requested-With": "XMLHttpRequest",
                    // Get CSRF Token from meta tag
                    "X-CSRF-TOKEN":
                        document
                            .querySelector('meta[name="csrf-token"]')
                            ?.getAttribute("content") || "",
                },
            });
            uploadPromises.push(promise);
        }

        Promise.all(uploadPromises)
            .then(() => {
                isUploading = false;
                // Reset file input
                if (fileInput) fileInput.value = "";
                // Refresh page data
                router.reload({ preserveScroll: true });
            })
            .catch((err) => {
                isUploading = false;
                console.error("Gagal mengunggah beberapa file:", err);
                alert(
                    "Gagal mengunggah media. Pastikan berkas adalah gambar dan kurang dari 10MB.",
                );
                router.reload({ preserveScroll: true });
            });
    }

    let isDeleteDialogOpen = false;
    let mediaToDelete = null;

    function confirmDelete(id) {
        mediaToDelete = id;
        isDeleteDialogOpen = true;
    }

    function executeDelete() {
        if (mediaToDelete) {
            router.delete(`/admin/media/${mediaToDelete}`, {
                preserveScroll: true,
                onFinish: () => {
                    mediaToDelete = null;
                }
            });
        }
    }

    function copyLink(id, path) {
        const fullUrl = window.location.origin + path;
        navigator.clipboard.writeText(fullUrl).then(() => {
            copiedId = id;
            activeMenuId = null;
            setTimeout(() => {
                copiedId = null;
            }, 2000);
        });
    }

    function toggleMenu(id, e) {
        e.stopPropagation();
        activeMenuId = activeMenuId === id ? null : id;
    }

    function startEditName(item, e) {
        if (e) e.stopPropagation();
        editingItem = item;
        newName = item.name;
        isEditModalOpen = true;
        activeMenuId = null;
    }

    function closeEditModal() {
        isEditModalOpen = false;
        editingItem = null;
        newName = "";
    }

    function saveName() {
        if (!newName.trim()) {
            alert("Nama tidak boleh kosong!");
            return;
        }

        isSavingName = true;
        router.put(
            `/admin/media/${editingItem.id}`,
            { name: newName },
            {
                preserveScroll: true,
                onSuccess: () => {
                    isSavingName = false;
                    closeEditModal();
                },
                onError: (errors) => {
                    isSavingName = false;
                    alert(
                        "Gagal merubah nama: " +
                            Object.values(errors).join(", "),
                    );
                },
            },
        );
    }

</script>

<svelte:window on:click={() => activeMenuId = null} />

<AdminLayout title="Pustaka Media">
    <div
        class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8"
    >
        <div>
            <h2 class="text-3xl font-display font-bold text-foreground">
                Pustaka Media
            </h2>
            <p class="text-foreground/60 text-sm mt-1">
                Urus dan pantau semua aset visual perniagaan anda
            </p>
        </div>

        <!-- Upload Button -->
        <button
            on:click={triggerFileInput}
            disabled={isUploading}
            class="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-xl font-medium text-sm transition-all shadow-lg shadow-primary/20 whitespace-nowrap cursor-pointer disabled:opacity-75"
        >
            {#if isUploading}
                <div
                    class="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin"
                ></div>
                <span>Mengunggah...</span>
            {:else}
                <UploadCloud class="size-4" />
                <span>Upload Gambar</span>
            {/if}
        </button>
        <input
            type="file"
            bind:this={fileInput}
            on:change={handleUpload}
            accept="image/*"
            multiple
            class="hidden"
        />
    </div>

    <!-- Search & View Toggles -->
    <div
        class="bg-card border border-border rounded-2xl p-6 mb-8 flex flex-col md:flex-row gap-4 justify-between items-center shadow-sm"
    >
        <!-- Search bar -->
        <SearchInput 
            bind:value={searchQuery}
            on:search={handleFilter}
            placeholder="Cari gambar berdasarkan nama..."
            class="w-full md:flex-1 max-w-2xl"
        />

        <!-- Toggle Layout Buttons -->
        <div class="flex items-center gap-2 shrink-0 self-end md:self-auto">
            <button
                on:click={() => (isGridView = true)}
                class="w-10 h-10 flex items-center justify-center rounded-lg border transition-all {isGridView
                    ? 'bg-primary/10 border-primary text-primary'
                    : 'border-border text-foreground/50 hover:bg-foreground/5'}"
                title="Grid View"
            >
                <Grid class="size-5" />
            </button>
            <button
                on:click={() => (isGridView = false)}
                class="w-10 h-10 flex items-center justify-center rounded-lg border transition-all {!isGridView
                    ? 'bg-primary/10 border-primary text-primary'
                    : 'border-border text-foreground/50 hover:bg-foreground/5'}"
                title="List View"
            >
                <ListIcon class="size-5" />
            </button>
        </div>
    </div>

    <!-- Media Display Area -->
    {#if media.data && media.data.length > 0}
        {#if isGridView}
            <!-- GRID VIEW -->
            <div
                class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
            >
                {#each media.data as item (item.id)}
                    <MediaGridItem 
                        {item}
                        {activeMenuId}
                        {copiedId}
                        on:toggleMenu={(e) => toggleMenu(e.detail.id, e.detail.event)}
                        on:copyLink={(e) => copyLink(e.detail.id, e.detail.path)}
                        on:startEditName={(e) => startEditName(e.detail.item, e.detail.event)}
                        on:confirmDelete={(e) => confirmDelete(e.detail)}
                    />
                {/each}
            </div>
        {:else}
            <!-- LIST VIEW -->
            <MediaListTable 
                mediaData={media.data}
                {copiedId}
                on:copyLink={(e) => copyLink(e.detail.id, e.detail.path)}
                on:startEditName={(e) => startEditName(e.detail.item, e.detail.event)}
                on:confirmDelete={(e) => confirmDelete(e.detail)}
            />
        {/if}

        <!-- Pagination -->
        <Pagination data={media} />
    {:else}
        <div
            class="bg-card border border-border rounded-2xl p-16 flex flex-col items-center justify-center text-center shadow-sm"
        >
            <div
                class="p-4 rounded-full bg-primary/5 border border-primary/15 text-primary mb-4"
            >
                <UploadCloud class="size-10" />
            </div>
            <h3 class="text-lg font-bold font-display text-foreground mb-1">
                Pustaka Media Kosong
            </h3>
            <p class="text-foreground/50 text-sm max-w-md mb-6 leading-relaxed">
                Mulai unggah aset visual perniagaan Anda seperti foto tim,
                produk, pemandangan, atau ilustrasi artikel dengan mengeklik
                tombol di atas.
            </p>
            <button
                on:click={triggerFileInput}
                class="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-xl font-medium text-sm transition-all shadow-lg shadow-primary/20 cursor-pointer"
            >
                <Plus class="size-4" />
                <span>Unggah Media Pertama</span>
            </button>
        </div>
    {/if}

    <MediaEditModal 
        isOpen={isEditModalOpen}
        item={editingItem}
        bind:newName
        {isSavingName}
        on:close={closeEditModal}
        on:save={saveName}
    />
</AdminLayout>

<AlertDialog 
    bind:isOpen={isDeleteDialogOpen}
    title="Hapus Media?"
    description="Apakah Anda yakin ingin menghapus media ini? File fisik di server juga akan dihapus dan tautan yang digunakan mungkin akan rusak."
    confirmText="Ya, Hapus"
    cancelText="Batal"
    confirmVariant="destructive"
    onConfirm={executeDelete}
/>
