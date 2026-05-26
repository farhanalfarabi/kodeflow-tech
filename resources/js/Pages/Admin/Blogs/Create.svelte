<script>
    import AdminLayout from "../../../Layouts/AdminLayout.svelte";
    import {
        ArrowLeft,
        Save,
        Image as ImageIcon,
        CheckCircle,
        Bold,
        Italic,
        Link as LinkIcon,
        List,
        UploadCloud,
        X,
        Calendar,
        User,
        Hash,
        Search,
        Target,
    } from "lucide-svelte";
    import { Link, page, router } from "@inertiajs/svelte";
    import Tiptap from "../../../Components/ui/Tiptap.svelte";
    import Combobox from "@/Components/ui/Combobox.svelte";
    import SelectMultiple from "@/Components/ui/SelectMultiple.svelte";
    import MediaLibraryModal from "../../../Components/MediaLibraryModal.svelte";

    export let existingCategories = [];
    export let existingTags = [];
    export let authors = [];
    export let blogsList = [];
    export let blog = null; // Jika ada isinya, berarti mode Edit

    let title = blog?.title || "";
    let category = blog?.category?.name || "Panduan & Tips";
    let content = blog?.content || "";
    let aiSummary = blog?.ai_summary || "";
    let slug = blog?.slug || "";
    let desc = blog?.desc || "";
    let readTime = blog?.read_time || 5;
    let isFeatured = blog?.is_featured || false;
    let relatedBlogs = blog?.related_blogs || [];
    let authorId = blog?.author_id || page.props.auth.user?.id || 1;

    let featuredImage = null;
    let featuredImagePreview = blog?.image_path || null;
    let selectedImagePath = blog?.image_path || null;
    let isMediaModalOpen = false;

    let isSubmitting = false;

    // SEO fields
    let metaTitle = blog?.meta_title || "";
    let metaDescription = blog?.meta_description || "";
    let focusKeywords = blog?.focus_keywords || [];
    let keywordInput = "";

    function submit() {
        if (!title || !content || !category) {
            alert("Judul, Konten, dan Kategori wajib diisi!");
            return;
        }

        isSubmitting = true;

        let payload = {
            title,
            category_name: category,
            desc,
            content,
            ai_summary: aiSummary,
            read_time: readTime,
            is_featured: isFeatured,
            publish_date: publishDate,
            tags,
            image: featuredImage,
            image_path: selectedImagePath,
            author_id: authorId,
            related_blogs: relatedBlogs.length > 0 ? relatedBlogs : null,
            status: isFeatured ? "published" : "draft",
            meta_title: metaTitle || null,
            meta_description: metaDescription || null,
            focus_keywords: focusKeywords.length > 0 ? focusKeywords : null,
        };

        if (blog) {
            router.post(`/admin/blogs/${blog.slug}`, payload, {
                forceFormData: true,
                onFinish: () => (isSubmitting = false),
                onError: (errors) => {
                    alert(
                        "Gagal menyimpan: " + Object.values(errors).join(", "),
                    );
                },
            });
        } else {
            router.post("/admin/blogs", payload, {
                forceFormData: true,
                onFinish: () => (isSubmitting = false),
                onError: (errors) => {
                    alert(
                        "Gagal menyimpan: " + Object.values(errors).join(", "),
                    );
                },
            });
        }
    }

    let tags = blog?.tags?.map((t) => t.name) || [];

    function removeTag(tagToRemove) {
        tags = tags.filter((tag) => tag !== tagToRemove);
    }

    let publishDate = blog?.publish_date
        ? new Date(blog.publish_date).toISOString().slice(0, 16)
        : "";

    function handleImageUpload(e) {
        const file = e.target.files[0];
        if (file) {
            featuredImage = file;
            featuredImagePreview = URL.createObjectURL(file);
            selectedImagePath = null;
        }
    }

    function handleMediaSelect(item) {
        featuredImage = null;
        selectedImagePath = item.path;
        featuredImagePreview = item.path;
    }

    $: slug = title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)+/g, "");

    function addKeyword(e) {
        if (e.key === "Enter" && keywordInput.trim() !== "") {
            e.preventDefault();
            if (!focusKeywords.includes(keywordInput.trim().toLowerCase())) {
                focusKeywords = [
                    ...focusKeywords,
                    keywordInput.trim().toLowerCase(),
                ];
            }
            keywordInput = "";
        }
    }

    function removeKeyword(kw) {
        focusKeywords = focusKeywords.filter((k) => k !== kw);
    }
</script>

<AdminLayout title={blog ? "Edit Blog" : "Create New Blog"}>
    <!-- Header & Actions -->
    <div
        class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8"
    >
        <div class="flex items-center gap-4">
            <Link
                href="/admin/blogs"
                class="p-2 rounded-lg border border-border bg-card text-foreground/60 hover:text-foreground hover:bg-foreground/5 transition-colors"
            >
                <ArrowLeft class="size-4" />
            </Link>
            <div>
                <h1 class="font-display text-3xl font-bold text-foreground">
                    {blog ? "Edit Blog" : "Create New Blog"}
                </h1>
                <p class="text-foreground/60 text-sm mt-1">
                    {blog
                        ? "Perbarui konten artikel Anda."
                        : "Write and publish a new article for Kodeflow Tech."}
                </p>
            </div>
        </div>

        <div class="flex items-center gap-3">
            <button
                disabled={isSubmitting}
                on:click={() => submit()}
                class="px-5 py-2.5 rounded-xl bg-primary hover:bg-primary/90 text-white text-sm font-medium transition-colors shadow-lg shadow-primary/20 flex items-center gap-2"
            >
                <CheckCircle class="size-4" />
                {isSubmitting
                    ? "Loading..."
                    : blog
                      ? "Update Article"
                      : "Publish Article"}
            </button>
        </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Main Content Form -->
        <div class="lg:col-span-2 flex flex-col gap-6">
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
                    bind:value={title}
                    placeholder="e.g. Cara Memilih Vendor Software Terbaik..."
                    class="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground placeholder-foreground/30 focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm font-medium transition-all"
                />

                <div class="mt-4 flex items-center gap-2 text-sm mb-6">
                    <span class="text-foreground/50">Slug:</span>
                    <span
                        class="text-primary font-mono bg-primary/5 px-2 py-0.5 rounded border border-primary/10"
                    >
                        {slug ? slug : "auto-generated-slug"}
                    </span>
                </div>

                <label
                    for="desc"
                    class="block text-sm font-semibold text-foreground mb-2"
                    >Short Description (Excerpt)</label
                >
                <textarea 
                    id="desc"
                    bind:value={desc}
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
                        {#each tags as tag}
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
                        bind:selectedValues={tags}
                        multiple={true}
                        placeholder="Pilih atau ketik tag..."
                        addLabel="Tambah Tag:"
                        showSelectedInButton={false}
                    />
                </div>
            </div>

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

                {#if selectedImagePath}
                    <div
                        class="text-[11px] text-primary bg-primary/5 border border-primary/10 rounded-lg p-2.5 flex items-center justify-between"
                    >
                        <span class="truncate font-medium"
                            >Terpilih dari pustaka: {selectedImagePath
                                .split("/")
                                .pop()}</span
                        >
                        <button
                            type="button"
                            on:click={() => {
                                selectedImagePath = null;
                                featuredImagePreview = null;
                            }}
                            class="text-destructive hover:underline font-semibold ml-2"
                            >Batal Pilih</button
                        >
                    </div>
                {/if}
            </div>

            <!-- Editor Area -->
            <div class="bg-card border border-border rounded-2xl p-6 shadow-sm">
                <h3 class="font-display text-foreground mb-4">Main Content</h3>
                <Tiptap bind:content />
            </div>

            <!-- AI Summary Area -->
            <div class="bg-card border border-border rounded-2xl p-6 shadow-sm">
                <h3 class="font-display text-foreground mb-4">AI Summary</h3>
                <Tiptap bind:content={aiSummary} />
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
                        bind:values={relatedBlogs}
                        placeholder="Pilih artikel terkait..."
                    />
                </div>
            </div>
        </div>

        <!-- Sidebar Options -->
        <div class="flex flex-col gap-6">
            <!-- Publish Info -->
            <div class="bg-card border border-border rounded-2xl p-6 shadow-sm">
                <h3 class="font-display text-foreground mb-4">
                    Publish Settings
                </h3>

                <div class="space-y-4">
                    <div>
                        <label
                            class="block text-xs font-medium text-foreground/60 mb-1.5 uppercase tracking-wider"
                            >Category</label
                        >
                        <div class="relative">
                            <Combobox
                                items={existingCategories.length > 0
                                    ? existingCategories
                                    : [
                                          "Panduan & Tips",
                                          "IT untuk Bisnis",
                                          "Insight Industri",
                                          "Studi Kasus",
                                          "Dari Kodeflow",
                                      ]}
                                bind:selectedValue={category}
                                multiple={false}
                                placeholder="Pilih kategori..."
                                addLabel="Buat Kategori:"
                            />
                        </div>
                        <p class="text-[10px] text-foreground/50 mt-1.5">
                            Pilih dari list atau buat kategori baru.
                        </p>
                    </div>

                    <div class="flex gap-4">
                        <div class="flex-1">
                            <label
                                class="block text-xs font-medium text-foreground/60 mb-1.5 uppercase tracking-wider"
                                >Read Time (Mins)</label
                            >
                            <input
                                type="number"
                                bind:value={readTime}
                                min="1"
                                class="w-full bg-background border border-border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
                            />
                        </div>
                        <div class="flex-1 flex flex-col justify-end pb-2.5">
                            <label
                                class="flex items-center gap-2 cursor-pointer group"
                            >
                                <div class="relative flex items-center">
                                    <input
                                        type="checkbox"
                                        bind:checked={isFeatured}
                                        class="sr-only peer"
                                    />
                                    <div
                                        class="w-10 h-5 bg-foreground/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-border after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"
                                    ></div>
                                </div>
                                <span
                                    class="text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors"
                                >
                                    {isFeatured ? "Published" : "Draft"}
                                </span>
                            </label>
                        </div>
                    </div>

                    <div>
                        <label
                            class="block text-xs font-medium text-foreground/60 mb-1.5 uppercase tracking-wider"
                            >Author</label
                        >
                        <div class="relative">
                            <select
                                bind:value={authorId}
                                class="w-full bg-background border border-border rounded-lg pl-10 pr-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground appearance-none cursor-pointer"
                            >
                                {#if authors}
                                    {#each authors as author}
                                        <option value={author.id}
                                            >{author.name}</option
                                        >
                                    {/each}
                                {:else}
                                    <option
                                        value={page.props.auth.user?.id || 1}
                                        >{page.props.auth.user?.name ||
                                            "Admin Kodeflow"}</option
                                    >
                                {/if}
                            </select>
                            <div
                                class="absolute inset-y-0 left-3 flex items-center pointer-events-none text-foreground/50"
                            >
                                <User class="size-4" />
                            </div>
                            <div
                                class="absolute inset-y-0 right-3 flex items-center pointer-events-none text-foreground/50"
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
                                    ><path d="m6 9 6 6 6-6" /></svg
                                >
                            </div>
                        </div>
                    </div>

                    <div>
                        <label
                            class="block text-xs font-medium text-foreground/60 mb-1.5 uppercase tracking-wider"
                            >Publish Date (Schedule)</label
                        >
                        <div class="relative">
                            <input
                                type="datetime-local"
                                bind:value={publishDate}
                                class="w-full bg-background border border-border rounded-lg pl-10 pr-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground [color-scheme:dark]"
                            />
                            <div
                                class="absolute inset-y-0 left-3 flex items-center pointer-events-none text-foreground/50"
                            >
                                <Calendar class="size-4" />
                            </div>
                        </div>
                        <p class="text-[10px] text-foreground/50 mt-1.5">
                            Biarkan kosong untuk publish segera.
                        </p>
                    </div>
                </div>
            </div>

            <!-- SEO Settings -->
            <div class="bg-card border border-border rounded-2xl p-6 shadow-sm">
                <div class="flex items-center gap-2 mb-5">
                    <div class="p-1.5 rounded-lg bg-emerald-500/10">
                        <Search class="size-4 text-emerald-500" />
                    </div>
                    <h3 class="font-display text-foreground">
                        SEO Settings
                    </h3>
                </div>

                <div class="space-y-5">
                    <!-- URL Slug -->
                    <div>
                        <label
                            class="block text-xs font-medium text-foreground/60 mb-1.5 uppercase tracking-wider"
                            >URL Slug</label
                        >
                        <div class="relative">
                            <input
                                type="text"
                                bind:value={slug}
                                placeholder="article-url-slug"
                                class="w-full bg-background border border-border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 text-foreground font-mono"
                            />
                        </div>
                    </div>

                    <!-- Meta Title -->
                    <div>
                        <div class="flex items-center justify-between mb-1.5">
                            <label
                                class="block text-xs font-medium text-foreground/60 uppercase tracking-wider"
                                >Meta Title</label
                            >
                            <span
                                class="text-[10px] font-mono {metaTitle.length >
                                60
                                    ? 'text-destructive'
                                    : metaTitle.length >= 50
                                      ? 'text-emerald-500'
                                      : 'text-foreground/40'}"
                            >
                                {metaTitle.length} / 60
                            </span>
                        </div>
                        <textarea
                            bind:value={metaTitle}
                            rows="2"
                            placeholder="The Ultimate Guide to Santorini, Greece"
                            class="w-full bg-background border border-border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 text-foreground resize-y min-h-[40px]"
                        ></textarea>
                        <p class="text-[10px] text-foreground/40 mt-1.5">
                            Optimal length: 50-60 characters
                        </p>
                    </div>

                    <!-- Meta Description -->
                    <div>
                        <div class="flex items-center justify-between mb-1.5">
                            <label
                                class="block text-xs font-medium text-foreground/60 uppercase tracking-wider"
                                >Meta Description</label
                            >
                            <span
                                class="text-[10px] font-mono {metaDescription.length >
                                160
                                    ? 'text-destructive'
                                    : metaDescription.length >= 150
                                      ? 'text-emerald-500'
                                      : 'text-foreground/40'}"
                            >
                                {metaDescription.length} / 160
                            </span>
                        </div>
                        <textarea
                            bind:value={metaDescription}
                            maxlength="160"
                            rows="3"
                            placeholder="Discover everything you need to know for the perfect Greek island escape."
                            class="w-full bg-background border border-border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 text-foreground resize-y min-h-[60px]"
                        ></textarea>
                        <p class="text-[10px] text-foreground/40 mt-1.5">
                            Optimal length: 150-160 characters
                        </p>
                    </div>

                    <!-- Focus Keywords -->
                    <div>
                        <label
                            class="block text-xs font-medium text-foreground/60 mb-1.5 uppercase tracking-wider"
                            >Focus Keywords</label
                        >
                        {#if focusKeywords.length > 0}
                            <div class="flex flex-wrap gap-1.5 mb-2.5">
                                {#each focusKeywords as kw}
                                    <span
                                        class="inline-flex items-center gap-1 px-2.5 py-1 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 rounded-lg text-xs font-medium"
                                    >
                                        {kw}
                                        <button
                                            type="button"
                                            on:click={() => removeKeyword(kw)}
                                            class="hover:text-destructive hover:bg-destructive/10 rounded-full p-0.5 transition-colors"
                                        >
                                            <X class="size-3" />
                                        </button>
                                    </span>
                                {/each}
                            </div>
                        {/if}
                        <input
                            type="text"
                            bind:value={keywordInput}
                            on:keydown={addKeyword}
                            placeholder="Add keywords..."
                            class="w-full bg-background border border-border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 text-foreground"
                        />
                        <p class="text-[10px] text-foreground/40 mt-1.5">
                            Target keywords. Press Enter to add.
                        </p>
                    </div>
                </div>
            </div>

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
                            {title || "Judul Artikel Anda"}
                        </h4>
                        <p
                            class="text-xs text-foreground/60 line-clamp-2 leading-relaxed"
                        >
                            {desc ||
                                "Deskripsi singkat artikel akan muncul di sini sebagai cuplikan konten saat link dibagikan."}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <MediaLibraryModal
        bind:isOpen={isMediaModalOpen}
        onSelect={handleMediaSelect}
    />
</AdminLayout>
