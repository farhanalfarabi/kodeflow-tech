<script>
    import AdminLayout from "../../../Layouts/AdminLayout.svelte";
    import {
        Plus,
        Search,
        Grid,
        List as ListIcon,
        Trash2,
        Copy,
        Check,
        UploadCloud,
        MoreVertical,
        X,
    } from "lucide-svelte";
    import { router } from "@inertiajs/svelte";
    import AlertDialog from "../../../Components/ui/AlertDialog.svelte";
    import Pagination from "../../../Components/ui/Pagination.svelte";

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

    let searchTimeout;
    function handleSearchInput() {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            router.get(
                "/admin/media",
                { search: searchQuery },
                { preserveState: true, preserveScroll: true },
            );
        }, 500);
    }

    function triggerFileInput() {
        fileInput.click();
    }

    function handleUpload(e) {
        const files = e.target.files;
        if (!files || files.length === 0) return;

        isUploading = true;
        let uploadPromises = [];

        // We upload each file as FormData via standard fetch to be fast, asynchronous, and reliable
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const formData = new FormData();
            formData.append("file", file);

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

    // Close context menu on click outside
    if (typeof window !== "undefined") {
        window.addEventListener("click", () => {
            activeMenuId = null;
        });
    }
</script>

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
        <div class="relative w-full md:flex-1 max-w-2xl">
            <Search
                class="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-foreground/40"
            />
            <input
                type="text"
                bind:value={searchQuery}
                on:input={handleSearchInput}
                placeholder="Cari gambar berdasarkan nama..."
                class="w-full pl-12 pr-4 py-3 bg-background border border-border rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all placeholder-foreground/30 text-foreground"
            />
        </div>

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
                    <div
                        class="group bg-card border border-border rounded-[24px] overflow-hidden shadow-sm hover:shadow-md transition-all relative flex flex-col h-full"
                    >
                        <!-- Thumbnail -->
                        <div
                            class="aspect-square w-full bg-foreground/[0.02] border-b border-border relative overflow-hidden flex items-center justify-center shrink-0"
                        >
                            <img
                                src={item.path}
                                alt={item.name}
                                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />

                            <!-- Quick Actions Overlay -->
                            <div class="absolute top-3 right-3 z-10">
                                <button
                                    on:click={(e) => toggleMenu(item.id, e)}
                                    class="w-8 h-8 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center shadow-md backdrop-blur-sm transition-colors cursor-pointer"
                                >
                                    <MoreVertical class="size-4" />
                                </button>

                                {#if activeMenuId === item.id}
                                    <div
                                        class="absolute right-0 mt-1 w-36 bg-card border border-border rounded-xl shadow-lg z-20 py-1.5 overflow-hidden"
                                    >
                                        <button
                                            on:click={() =>
                                                copyLink(item.id, item.path)}
                                            class="w-full text-left px-3 py-2 text-xs hover:bg-foreground/5 transition-colors flex items-center gap-2 text-foreground/80 font-medium"
                                        >
                                            <Copy class="size-3.5" />
                                            <span>Salin Tautan</span>
                                        </button>
                                        <button
                                            on:click={(e) =>
                                                startEditName(item, e)}
                                            class="w-full text-left px-3 py-2 text-xs hover:bg-foreground/5 transition-colors flex items-center gap-2 text-foreground/80 font-medium"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="14"
                                                height="14"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                class="size-3.5"
                                                ><path d="M12 20h9" /><path
                                                    d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"
                                                /></svg
                                            >
                                            <span>Ubah Nama</span>
                                        </button>
                                        <button
                                            on:click={() =>
                                                confirmDelete(item.id)}
                                            class="w-full text-left px-3 py-2 text-xs hover:bg-red-500/10 text-red-500 transition-colors flex items-center gap-2 font-medium"
                                        >
                                            <Trash2 class="size-3.5" />
                                            <span>Hapus</span>
                                        </button>
                                    </div>
                                {/if}
                            </div>

                            <!-- Copied Notification Toast -->
                            {#if copiedId === item.id}
                                <div
                                    class="absolute inset-0 bg-black/75 backdrop-blur-xs flex flex-col items-center justify-center text-white p-3 z-10 transition-all"
                                >
                                    <div
                                        class="size-10 rounded-full bg-green-500 flex items-center justify-center mb-2 shadow-lg shadow-green-500/20"
                                    >
                                        <Check class="size-5" />
                                    </div>
                                    <span class="text-xs font-semibold"
                                        >Tautan Disalin!</span
                                    >
                                </div>
                            {/if}
                        </div>

                        <!-- Meta Details -->
                        <div class="p-4 flex flex-col flex-1">
                            <span
                                class="font-display font-semibold text-foreground text-sm line-clamp-1 mb-1"
                                title={item.name}
                            >
                                {item.name}
                            </span>
                            <div
                                class="flex items-center justify-between text-[11px] text-foreground/45 mt-auto font-medium"
                            >
                                <span>{item.size_formatted}</span>
                                <span>{item.dimensions || "N/A"}</span>
                            </div>
                        </div>
                    </div>
                {/each}
            </div>
        {:else}
            <!-- LIST VIEW -->
            <div
                class="bg-card border border-border rounded-2xl overflow-hidden shadow-sm"
            >
                <div class="overflow-x-auto">
                    <table class="w-full text-left border-collapse">
                        <thead>
                            <tr
                                class="bg-foreground/[0.02] border-b border-border"
                            >
                                <th
                                    class="p-4 text-xs font-bold text-foreground/50 uppercase tracking-wider"
                                    >Preview</th
                                >
                                <th
                                    class="p-4 text-xs font-bold text-foreground/50 uppercase tracking-wider"
                                    >Nama File</th
                                >
                                <th
                                    class="p-4 text-xs font-bold text-foreground/50 uppercase tracking-wider"
                                    >Tipe</th
                                >
                                <th
                                    class="p-4 text-xs font-bold text-foreground/50 uppercase tracking-wider"
                                    >Ukuran</th
                                >
                                <th
                                    class="p-4 text-xs font-bold text-foreground/50 uppercase tracking-wider"
                                    >Dimensi</th
                                >
                                <th
                                    class="p-4 text-xs font-bold text-foreground/50 uppercase tracking-wider text-right"
                                    >Aksi</th
                                >
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-border/60">
                            {#each media.data as item (item.id)}
                                <tr
                                    class="hover:bg-foreground/[0.01] transition-colors group"
                                >
                                    <td class="p-4">
                                        <div
                                            class="size-12 rounded-lg border border-border overflow-hidden bg-background relative shrink-0"
                                        >
                                            <img
                                                src={item.path}
                                                alt={item.name}
                                                class="w-full h-full object-cover"
                                            />
                                        </div>
                                    </td>
                                    <td class="p-4">
                                        <span
                                            class="font-display font-semibold text-foreground text-sm block max-w-xs truncate"
                                            title={item.name}
                                        >
                                            {item.name}
                                        </span>
                                    </td>
                                    <td class="p-4 text-xs text-foreground/60"
                                        >{item.mime_type}</td
                                    >
                                    <td class="p-4 text-xs text-foreground/60"
                                        >{item.size_formatted}</td
                                    >
                                    <td class="p-4 text-xs text-foreground/60"
                                        >{item.dimensions || "N/A"}</td
                                    >
                                    <td class="p-4 text-right">
                                        <div
                                            class="flex items-center justify-end gap-2"
                                        >
                                            <button
                                                on:click={() =>
                                                    copyLink(
                                                        item.id,
                                                        item.path,
                                                    )}
                                                class="p-2 rounded-lg border border-border bg-card text-foreground/60 hover:text-primary hover:bg-primary/5 hover:border-primary/20 transition-all relative cursor-pointer"
                                                title="Salin Tautan"
                                            >
                                                {#if copiedId === item.id}
                                                    <Check
                                                        class="size-4 text-green-500"
                                                    />
                                                {:else}
                                                    <Copy class="size-4" />
                                                {/if}
                                            </button>
                                            <button
                                                on:click={(e) =>
                                                    startEditName(item, e)}
                                                class="p-2 rounded-lg border border-border bg-card text-foreground/60 hover:text-primary hover:bg-primary/5 hover:border-primary/20 transition-all cursor-pointer"
                                                title="Ubah Nama"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="16"
                                                    height="16"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    stroke-width="2"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    class="size-4"
                                                    ><path d="M12 20h9" /><path
                                                        d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"
                                                    /></svg
                                                >
                                            </button>
                                            <button
                                                on:click={() =>
                                                    confirmDelete(item.id)}
                                                class="p-2 rounded-lg border border-border bg-card text-foreground/60 hover:text-red-500 hover:bg-red-500/5 hover:border-red-500/20 transition-all cursor-pointer"
                                                title="Hapus"
                                            >
                                                <Trash2 class="size-4" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            {/each}
                        </tbody>
                    </table>
                </div>
            </div>
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

    {#if isEditModalOpen}
        <div
            class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm transition-all duration-300"
        >
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <div
                class="bg-card border border-border w-full max-w-md rounded-[24px] overflow-hidden shadow-2xl p-6 relative animate-in fade-in zoom-in-95 duration-200"
                on:click|stopPropagation
            >
                <div class="flex items-center justify-between mb-4">
                    <h3 class="font-display text-lg font-bold text-foreground">
                        Ubah Nama Media
                    </h3>
                    <button
                        on:click={closeEditModal}
                        class="p-2 rounded-xl border border-border hover:bg-foreground/5 text-foreground/50 transition-colors cursor-pointer"
                    >
                        <X class="size-4" />
                    </button>
                </div>

                <div class="space-y-4">
                    <div>
                        <label
                            for="media-name"
                            class="block text-xs font-semibold text-foreground/75 mb-2 uppercase tracking-wider"
                            >Nama File</label
                        >
                        <input
                            type="text"
                            id="media-name"
                            bind:value={newName}
                            class="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground placeholder-foreground/30 focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm transition-all"
                            placeholder="Masukkan nama baru..."
                        />
                    </div>

                    <div class="flex items-center justify-end gap-3 pt-2">
                        <button
                            on:click={closeEditModal}
                            class="px-5 py-2.5 rounded-xl border border-border hover:bg-foreground/5 font-semibold text-xs text-foreground/70 transition-all cursor-pointer"
                        >
                            Batal
                        </button>
                        <button
                            on:click={saveName}
                            disabled={isSavingName}
                            class="px-5 py-2.5 rounded-xl bg-primary hover:bg-primary/90 text-white font-semibold text-xs transition-all shadow-lg shadow-primary/20 disabled:opacity-50 disabled:shadow-none cursor-pointer"
                        >
                            {isSavingName ? "Menyimpan..." : "Simpan Perubahan"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    {/if}
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
