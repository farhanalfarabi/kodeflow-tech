<script>
    import AdminLayout from "../../../Layouts/AdminLayout.svelte";
    import { Plus, Search, Edit2, Trash2, Globe, Folder } from "lucide-svelte";
    import { Link, router } from "@inertiajs/svelte";
    import Select from "../../../Components/ui/Select.svelte";
    import AlertDialog from "../../../Components/ui/AlertDialog.svelte";
    import Pagination from "../../../Components/ui/Pagination.svelte";

    export let portfolios = { data: [], links: [], total: 0, current_page: 1, last_page: 1 };
    export let categories = [];
    export let filters = {
        search: "",
        status: "all",
        category: "all",
    };

    let searchQuery = filters.search;
    let statusFilter = filters.status;
    let categoryFilter = filters.category;

    $: listItems = portfolios.data || [];

    $: categoryOptions = [
        { value: 'all', label: 'All Categories' },
        ...categories
    ];

    function handleFilter() {
        router.get(
            "/admin/portfolios",
            {
                search: searchQuery,
                status: statusFilter,
                category: categoryFilter,
            },
            { preserveState: true },
        );
    }

    let searchTimeout;
    function handleSearchInput() {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            handleFilter();
        }, 500);
    }

    let isDeleteDialogOpen = false;
    let portfolioToDelete = null;

    function confirmDelete(slug) {
        portfolioToDelete = slug;
        isDeleteDialogOpen = true;
    }

    function executeDelete() {
        if (portfolioToDelete) {
            router.delete(`/admin/portfolios/${portfolioToDelete}`, {
                preserveScroll: true,
                onFinish: () => {
                    portfolioToDelete = null;
                }
            });
        }
    }
</script>

<AdminLayout title="Portfolio Management">
    <div
        class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8"
    >
        <div>
            <h2 class="text-3xl font-display font-bold text-foreground">
                All Case Studies
            </h2>
            <p class="text-foreground/60 text-sm mt-1">
                Manage your digital product solutions and visual wireframe page builders.
            </p>
        </div>
        <Link
            href="/admin/portfolios/create"
            class="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-xl font-medium text-sm transition-all shadow-lg shadow-primary/20 whitespace-nowrap cursor-pointer"
        >
            <Plus class="size-4" />
            Create Case Study
        </Link>
    </div>

    <!-- Filters & Search -->
    <div
        class="bg-card border border-border rounded-2xl p-4 mb-6 shadow-sm"
    >
        <div class="flex flex-col gap-3">
            <div class="flex flex-col sm:flex-row sm:items-center gap-3">
                <div class="relative flex-1">
                    <Search
                        class="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-foreground/40"
                    />
                    <input
                        type="text"
                        bind:value={searchQuery}
                        on:input={handleSearchInput}
                        placeholder="Search by title, category..."
                        class="w-full pl-9 pr-4 py-2 bg-foreground/5 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    />
                </div>
            </div>

            <div class="grid grid-cols-2 gap-2">
                <Select
                    options={categoryOptions}
                    bind:value={categoryFilter}
                    on:change={handleFilter}
                />
                <Select
                    options={[
                        { value: 'all', label: 'All Status' },
                        { value: 'published', label: 'Published' },
                        { value: 'draft', label: 'Draft' }
                    ]}
                    bind:value={statusFilter}
                    on:change={handleFilter}
                />
            </div>
        </div>
    </div>

    <!-- Table Data -->
    <div
        class="bg-card border border-border rounded-2xl overflow-hidden shadow-sm"
    >
        <div class="overflow-x-auto">
            <table class="w-full text-left border-collapse">
                <thead>
                    <tr
                        class="border-b border-border bg-foreground/5 text-foreground/60 text-xs uppercase tracking-wider font-display"
                    >
                        <th class="px-6 py-4 font-medium">Project</th>
                        <th class="px-6 py-4 font-medium">Category</th>
                        <th class="px-6 py-4 font-medium">Status</th>
                        <th class="px-6 py-4 font-medium">Created</th>
                        <th class="px-6 py-4 font-medium text-right">Actions</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-border">
                    {#if listItems.length === 0}
                        <tr>
                            <td
                                colspan="5"
                                class="px-6 py-12 text-center text-foreground/50"
                            >
                                Belum ada studi kasus portofolio yang ditemukan.
                            </td>
                        </tr>
                    {/if}
                    {#each listItems as item (item.id)}
                        <tr
                            class="hover:bg-foreground/[0.02] transition-colors group"
                        >
                            <td class="px-6 py-4">
                                <div class="flex items-center gap-3">
                                    {#if item.image}
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            class="size-10 rounded-lg object-cover border border-border bg-muted shrink-0"
                                        />
                                    {:else}
                                        <div class="size-10 rounded-lg bg-foreground/5 border border-border flex items-center justify-center shrink-0">
                                            <Folder class="size-5 text-foreground/40" />
                                        </div>
                                    {/if}
                                    <div class="flex flex-col truncate max-w-sm">
                                        <p class="font-semibold text-foreground truncate leading-snug">
                                            {item.title}
                                        </p>
                                    </div>
                                </div>
                            </td>
                            <td class="px-6 py-4 text-sm text-foreground/70">
                                <div class="flex flex-col gap-1 items-start">
                                    <span class="inline-flex px-2.5 py-1 rounded-md bg-foreground/5 border border-border text-xs font-semibold text-foreground/80">
                                        {item.category?.name || '-'}
                                    </span>
                                </div>
                            </td>

                            <td class="px-6 py-4">
                                <span
                                    class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border {item.status === 'published'
                                        ? 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20'
                                        : 'bg-amber-500/10 text-amber-500 border-amber-500/20'} capitalize"
                                >
                                    <span
                                        class="size-1.5 rounded-full {item.status === 'published'
                                            ? 'bg-emerald-500'
                                            : 'bg-amber-500'}"
                                    ></span>
                                    {item.status}
                                </span>
                            </td>
                            <td class="px-6 py-4 text-xs text-foreground/50">
                                {#if item.created_at}
                                    {new Date(item.created_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })}
                                {:else}
                                    -
                                {/if}
                            </td>
                            <td class="px-6 py-4 text-right">
                                <div
                                    class="flex items-center justify-end gap-2"
                                >
                                    <Link
                                        href="/admin/portfolios/{item.slug}/edit"
                                        class="p-1.5 text-foreground/50 hover:text-primary transition-colors rounded-md hover:bg-primary/10"
                                        title="Edit Case Study"
                                    >
                                        <Edit2 class="size-4" />
                                    </Link>
                                    <button
                                        on:click={() => confirmDelete(item.slug)}
                                        class="p-1.5 text-foreground/50 hover:text-destructive transition-colors rounded-md hover:bg-destructive/10"
                                        title="Delete"
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

        <!-- Pagination Footer -->
        <Pagination data={portfolios} />
    </div>
</AdminLayout>

<AlertDialog 
    bind:isOpen={isDeleteDialogOpen}
    title="Hapus Portofolio?"
    description="Apakah Anda yakin ingin menghapus portofolio ini? Semua data studi kasus, gambar galeri, dan teks terkait akan dihapus secara permanen dan tidak dapat dikembalikan."
    confirmText="Ya, Hapus"
    cancelText="Batal"
    confirmVariant="destructive"
    onConfirm={executeDelete}
/>
