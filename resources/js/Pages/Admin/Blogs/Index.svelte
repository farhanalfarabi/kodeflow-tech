<script>
    import AdminLayout from "../../../Layouts/AdminLayout.svelte";
    import { Plus, Search, Edit2, Trash2, Eye } from "lucide-svelte";
    import { Link, router } from "@inertiajs/svelte";
    import Select from "../../../Components/ui/Select.svelte";
    import AlertDialog from "../../../Components/ui/AlertDialog.svelte";
    import Pagination from "../../../Components/ui/Pagination.svelte";
    import SearchInput from "../../../Components/ui/SearchInput.svelte";

    export let blogs = { data: [], links: [], total: 0, current_page: 1, last_page: 1 };
    export let categories = [];
    export let authors = [];
    export let filters = {
        search: "",
        status: "all",
        category: "all",
        author: "all",
    };

    let searchQuery = filters.search;
    let statusFilter = filters.status;
    let categoryFilter = filters.category;
    let authorFilter = filters.author;

    $: filteredBlogs = blogs.data || [];

    function handleFilter() {
        router.get(
            "/admin/blogs",
            {
                search: searchQuery,
                status: statusFilter,
                category: categoryFilter,
                author: authorFilter,
            },
            { preserveState: true },
        );
    }

    let isDeleteDialogOpen = false;
    let articleToDelete = null;

    function confirmDelete(slug) {
        articleToDelete = slug;
        isDeleteDialogOpen = true;
    }

    function executeDelete() {
        if (articleToDelete) {
            router.delete(`/admin/blogs/${articleToDelete}`, {
                preserveScroll: true,
                onFinish: () => {
                    articleToDelete = null;
                }
            });
        }
    }
</script>

<AdminLayout title="Blog Management">
    <div
        class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8"
    >
        <div>
            <h2 class="text-3xl font-display font-bold text-foreground">
                All Articles
            </h2>
            <p class="text-foreground/60 text-sm mt-1">
                Manage your blog posts, categories, and publications.
            </p>
        </div>
        <Link
            href="/admin/blogs/create"
            class="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-xl font-medium text-sm transition-all shadow-lg shadow-primary/20 whitespace-nowrap cursor-pointer"
        >
            <Plus class="size-4" />
            Create New Blog
        </Link>
    </div>

    <!-- Filters & Search -->
    <div
        class="bg-card border border-border rounded-2xl p-4 mb-6 shadow-sm"
    >
        <div class="flex flex-col gap-3">
            <!-- Search bar row -->
            <div class="flex flex-col sm:flex-row sm:items-center gap-3">
                <SearchInput 
                    bind:value={searchQuery}
                    on:search={handleFilter}
                    placeholder="Search by title..."
                    class="flex-1"
                />
            </div>

            <!-- Filter selects row -->
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <Select
                    options={[
                        { value: 'all', label: 'All Categories' },
                        ...categories.map(cat => ({ value: cat.id, label: cat.name }))
                    ]}
                    bind:value={categoryFilter}
                    on:change={handleFilter}
                />

                <Select
                    options={[
                        { value: 'all', label: 'All Authors' },
                        ...authors.map(auth => ({ value: auth.id, label: auth.name }))
                    ]}
                    bind:value={authorFilter}
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
                        <th class="px-6 py-4 font-medium">Title</th>
                        <th class="px-6 py-4 font-medium">Category</th>
                        <th class="px-6 py-4 font-medium">Author</th>
                        <th class="px-6 py-4 font-medium">Date</th>
                        <th class="px-6 py-4 font-medium">Status</th>
                        <th class="px-6 py-4 font-medium text-right">Actions</th
                        >
                    </tr>
                </thead>
                <tbody class="divide-y divide-border">
                    {#if filteredBlogs.length === 0}
                        <tr>
                            <td
                                colspan="6"
                                class="px-6 py-12 text-center text-foreground/50"
                            >
                                Belum ada artikel yang ditemukan.
                            </td>
                        </tr>
                    {/if}
                    {#each filteredBlogs as article}
                        <tr
                            class="hover:bg-foreground/[0.02] transition-colors group"
                        >
                            <td class="px-6 py-4">
                                <p
                                    class="font-medium text-foreground line-clamp-1"
                                >
                                    {article.title}
                                </p>
                                <div
                                    class="flex items-center gap-2 mt-1 text-xs text-foreground/50"
                                >
                                    <Eye class="size-3" /> 0 views
                                </div>
                            </td>
                            <td class="px-6 py-4 text-sm text-foreground/70">
                                <span
                                    class="inline-flex px-2.5 py-1 rounded-md bg-foreground/5 border border-border text-xs font-medium"
                                >
                                    {article.category?.name || "Uncategorized"}
                                </span>
                            </td>
                            <td class="px-6 py-4 text-sm text-foreground/70"
                                >{article.author?.name || "Unknown"}</td
                            >
                            <td class="px-6 py-4 text-sm text-foreground/70">
                                {new Date(
                                    article.created_at,
                                ).toLocaleDateString("id-ID", {
                                    day: "numeric",
                                    month: "short",
                                    year: "numeric",
                                })}
                            </td>
                            <td class="px-6 py-4">
                                <span
                                    class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border {article.status ===
                                    'published'
                                        ? 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20'
                                        : 'bg-amber-500/10 text-amber-500 border-amber-500/20'} capitalize"
                                >
                                    <span
                                        class="size-1.5 rounded-full {article.status ===
                                        'published'
                                            ? 'bg-emerald-500'
                                            : 'bg-amber-500'}"
                                    ></span>
                                    {article.status}
                                </span>
                            </td>
                            <td class="px-6 py-4 text-right">
                                <div
                                    class="flex items-center justify-end gap-2"
                                >
                                    <Link
                                        href="/admin/blogs/{article.slug}/edit"
                                        class="p-1.5 text-foreground/50 hover:text-primary transition-colors rounded-md hover:bg-primary/10"
                                        title="Edit"
                                    >
                                        <Edit2 class="size-4" />
                                    </Link>
                                    <button
                                        on:click={() =>
                                            confirmDelete(article.slug)}
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
        <Pagination data={blogs} />
    </div>
</AdminLayout>

<AlertDialog 
    bind:isOpen={isDeleteDialogOpen}
    title="Hapus Artikel?"
    description="Apakah Anda yakin ingin menghapus artikel ini? Tindakan ini tidak dapat dibatalkan dan artikel akan dihapus secara permanen."
    confirmText="Ya, Hapus"
    cancelText="Batal"
    confirmVariant="destructive"
    onConfirm={executeDelete}
/>
