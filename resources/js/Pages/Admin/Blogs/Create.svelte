<script>
    import AdminLayout from "../../../Layouts/AdminLayout.svelte";
    import { ArrowLeft, Save, AlertTriangle, CheckCircle } from "lucide-svelte";
    import { Link, page, useForm } from "@inertiajs/svelte";

    // Import modular components
    import MainContentForm from "./Components/MainContentForm.svelte";
    import FeaturedImageForm from "./Components/FeaturedImageForm.svelte";
    import SocialPreviewForm from "./Components/SocialPreviewForm.svelte";
    import PublishSettings from "./Components/PublishSettings.svelte";
    import SeoSettings from "./Components/SeoSettings.svelte";

    let {
        existingCategories = [],
        existingTags = [],
        authors = [],
        blogsList = [],
        blog = null
    } = $props();

    let isEdit = !!blog;

    // Default empty structure
    const defaultData = {
        title: "",
        slug: "",
        desc: "",
        content: "",
        ai_summary: "",
        tags: [],
        category_name: "Panduan & Tips",
        read_time: 5,
        is_featured: false,
        author_id: page.props.auth.user?.id || 1,
        publish_date: "",
        related_blogs: [],
        status: "draft",
        image: null,
        image_path: "",
        meta_title: "",
        meta_description: "",
        focus_keywords: [],
    };

    function deepMerge(target, source) {
        if (!source) return target;
        const output = { ...target };
        for (const key of Object.keys(target)) {
            if (source[key] !== undefined && source[key] !== null) {
                // Special mapping for tags from relation
                if (key === 'tags' && Array.isArray(source.tags)) {
                    if (source.tags.length > 0 && typeof source.tags[0] === 'object') {
                        output[key] = source.tags.map(t => t.name);
                    } else {
                        output[key] = source.tags;
                    }
                    continue;
                }
                
                // Special mapping for category_name from relation
                if (key === 'category' && source.category) {
                    output['category_name'] = source.category.name;
                    continue;
                }

                if (typeof target[key] === 'object' && target[key] !== null && !Array.isArray(target[key])) {
                    output[key] = deepMerge(target[key], source[key]);
                } else if (Array.isArray(target[key])) {
                    output[key] = Array.isArray(source[key]) ? [...source[key]] : target[key];
                } else {
                    output[key] = source[key];
                }
            }
        }
        
        // Date format adjustment
        if (source.publish_date) {
            output.publish_date = new Date(source.publish_date).toISOString().slice(0, 16);
        }

        // Special mapping for database columns
        if (source.image_path && typeof source.image_path === 'string') {
            output.image_path = source.image_path;
            output.image = null; 
        }
        return output;
    }

    const initialFormData = isEdit 
        ? deepMerge(defaultData, blog) 
        : defaultData;

    const form = useForm(initialFormData);

    let isProcessing = $state(false);
    let formHasErrors = $state(false);
    let formErrorsList = $state({});
    
    // Pass bindable preview down to MediaForm
    let featuredImagePreview = $state(isEdit ? blog.image_path : null);

    function handleSubmit(status = null) {
        if (status) {
            form.status = status;
        }

        const sanitizePayload = (data) => {
            if (!data.slug) {
                data.slug = data.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");
            }
            return data;
        };

        const submitOptions = {
            forceFormData: true,
            preserveScroll: true,
            onStart: () => { isProcessing = true; formHasErrors = false; formErrorsList = {}; },
            onFinish: () => { isProcessing = false; },
            onError: (errors) => {
                formHasErrors = true;
                formErrorsList = errors;
                // Scroll to top to see errors
                window.scrollTo({ top: 0, behavior: 'smooth' });
            },
            onSuccess: () => {
                formHasErrors = false;
                formErrorsList = {};
            }
        };

        if (isEdit) {
            form.transform((data) => ({
                ...sanitizePayload(data)
            })).post(`/admin/blogs/${blog.slug}`, submitOptions);
        } else {
            form.transform((data) => sanitizePayload(data)).post("/admin/blogs", submitOptions);
        }
    }
</script>

<AdminLayout title={isEdit ? "Edit Blog" : "Create New Blog"}>
    <!-- Top Nav Action Bar -->
    <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 border-b border-border pb-5">
        <div class="flex items-center gap-4">
            <Link
                href="/admin/blogs"
                class="p-2 rounded-lg border border-border bg-card text-foreground/60 hover:text-foreground hover:bg-foreground/5 transition-colors"
            >
                <ArrowLeft class="size-4" />
            </Link>
            <div>
                <h1 class="font-display text-3xl font-bold text-foreground">
                    {isEdit ? "Edit Blog" : "Create New Blog"}
                </h1>
                <p class="text-foreground/60 text-sm mt-1">
                    {isEdit
                        ? "Perbarui konten artikel Anda."
                        : "Write and publish a new article for Kodeflow Tech."}
                </p>
            </div>
        </div>

        <div class="flex items-center gap-3">
            <button
                disabled={isProcessing}
                on:click={() => handleSubmit(isEdit ? null : 'draft')}
                class="px-5 py-2.5 rounded-xl border border-border bg-card hover:bg-foreground/5 text-sm font-medium transition-colors flex items-center gap-2"
            >
                <Save class="size-4" />
                {isProcessing ? "Menyimpan..." : (isEdit ? "Update Article" : "Save Draft")}
            </button>
            {#if !isEdit || form.status !== 'published'}
                <button
                    disabled={isProcessing}
                    on:click={() => handleSubmit('published')}
                    class="px-5 py-2.5 rounded-xl bg-primary hover:bg-primary/90 text-white text-sm font-medium transition-colors shadow-lg shadow-primary/20 flex items-center gap-2"
                >
                    <CheckCircle class="size-4" />
                    {isProcessing ? "Loading..." : "Publish Article"}
                </button>
            {/if}
        </div>
    </div>

    <!-- Errors alert -->
    {#if formHasErrors}
        <div class="p-4 bg-destructive/10 border border-destructive/20 rounded-xl mb-6 flex gap-3 text-sm text-destructive">
            <AlertTriangle class="size-5 shrink-0" />
            <div>
                <span class="font-bold">Gagal Menyimpan!</span> Silakan periksa kolom input yang masih bermasalah berikut:
                <ul class="list-disc list-inside mt-2 font-mono text-xs">
                    {#each Object.keys(formErrorsList) as err}
                        <li>{err}: {formErrorsList[err]}</li>
                    {/each}
                </ul>
            </div>
        </div>
    {/if}

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <!-- Main Content Column (Left - 2 Cols) -->
        <div class="lg:col-span-2 flex flex-col gap-6">
            <FeaturedImageForm {form} bind:featuredImagePreview />
            <MainContentForm {form} {existingTags} {blogsList} />
        </div>

        <!-- Sidebar Settings Column (Right - 1 Col) -->
        <div class="flex flex-col gap-6">
            <PublishSettings {form} {existingCategories} {authors} defaultAuthorId={page.props.auth.user?.id || 1} />
            <SeoSettings {form} />
            <SocialPreviewForm {form} {featuredImagePreview} />
        </div>
    </div>
</AdminLayout>
