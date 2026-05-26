<script>
    import AdminLayout from "../../../Layouts/AdminLayout.svelte";
    import { useForm, Link } from "@inertiajs/svelte";
    import { Save, ArrowLeft, AlertTriangle } from "lucide-svelte";
    
    // Import modular components
    import WireframePreview from "./Components/WireframePreview.svelte";
    import HeroForm from "./Components/HeroForm.svelte";
    import SummaryForm from "./Components/SummaryForm.svelte";
    import ValidationForm from "./Components/ValidationForm.svelte";
    import ChallengeForm from "./Components/ChallengeForm.svelte";
    import GalleryForm from "./Components/GalleryForm.svelte";
    import DeepDiveForm from "./Components/DeepDiveForm.svelte";
    import FaqForm from "./Components/FaqForm.svelte";
    import Select from "../../../Components/ui/Select.svelte";

    let { 
        isEdit = false, 
        portfolio = null, 
        categories = [] 
    } = $props();

    // Default empty structure to bind form
    const defaultData = {
        slug: "",
        category: "",
        title: "",
        subtitle: "",
        summary: {
            importance: "",
            context: "",
            result: ["", ""],
            modules: ["", ""],
            targetReader: ["", ""]
        },
        validation: [
            { metric: "", title: "", desc: "" },
            { metric: "", title: "", desc: "" },
            { metric: "", title: "", desc: "" }
        ],
        challenge_short: "",
        solution_short: "",
        tech_stack: [],
        gallery: [
            { url: "", caption: "" }
        ],
        deep_dive: {
            content: ""
        },
        faqs: [
            { q: "", a: "" }
        ],
        status: "draft",
        image: null,
        image_path: ""
    };

    // Deep merge function to safely pre-populate form in edit mode
    function deepMerge(target, source) {
        if (!source) return target;
        const output = { ...target };
        for (const key of Object.keys(target)) {
            if (source[key] !== undefined) {
                if (typeof target[key] === 'object' && target[key] !== null && !Array.isArray(target[key])) {
                    output[key] = deepMerge(target[key], source[key]);
                } else if (Array.isArray(target[key])) {
                    output[key] = Array.isArray(source[key]) ? [...source[key]] : target[key];
                } else {
                    output[key] = source[key];
                }
            }
        }
        // Special mapping for database columns
        if (source.image && typeof source.image === 'string') {
            output.image_path = source.image;
            output.image = null; // Clear the file input payload
        }
        return output;
    }

    const initialFormData = isEdit 
        ? deepMerge(defaultData, portfolio) 
        : defaultData;

    const form = useForm(initialFormData);

    // Active Section in wireframe drawer editor
    let activeSection = $state("hero"); // 'hero', 'summary', 'validation', 'challenge', 'gallery', 'deepdive', 'faq'

    // Local preview URL for uploaded image (passes bindable to HeroForm)
    let localPreviewUrl = $state(null);

    // Explicit reactivity for Svelte 5 (Inertia useForm nested reactivity fallback)
    let isProcessing = $state(false);
    let formHasErrors = $state(false);
    let formErrorsList = $state({});

    function handleSubmit() {
        const sanitizePayload = (data) => {
            if (data.summary) {
                data.summary.result = data.summary.result.filter(i => i && i.trim() !== '');
                data.summary.modules = data.summary.modules.filter(i => i && i.trim() !== '');
                data.summary.targetReader = data.summary.targetReader.filter(i => i && i.trim() !== '');
            }
            if (data.tech_stack) data.tech_stack = data.tech_stack.filter(i => i && i.trim() !== '');
            if (data.validation) data.validation = data.validation.filter(v => (v.metric && v.metric.trim() !== '') || (v.title && v.title.trim() !== ''));
            if (data.faqs) data.faqs = data.faqs.filter(f => (f.q && f.q.trim() !== '') || (f.a && f.a.trim() !== ''));
            if (data.gallery) data.gallery = data.gallery.filter(g => g.file || (g.url && g.url.trim() !== ''));
            return data;
        };

        const submitOptions = {
            preserveScroll: true,
            onStart: () => { isProcessing = true; formHasErrors = false; formErrorsList = {}; },
            onFinish: () => { isProcessing = false; },
            onError: (errors) => {
                formHasErrors = true;
                formErrorsList = errors;
            },
            onSuccess: () => {
                formHasErrors = false;
                formErrorsList = {};
            }
        };

        if (isEdit) {
            form.transform((data) => ({
                ...sanitizePayload(data)
            })).post(`/admin/portfolios/${portfolio.slug}`, submitOptions);
        } else {
            form.transform((data) => sanitizePayload(data)).post("/admin/portfolios", submitOptions);
        }
    }
</script>

<AdminLayout title={isEdit ? "Edit Portofolio" : "Buat Portofolio Baru"}>
    <!-- Top Nav Action Bar -->
    <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-border pb-5">
        <div class="flex items-center gap-3">
            <Link
                href="/admin/portfolios"
                class="p-2 border border-border bg-card hover:bg-foreground/5 rounded-xl transition-all"
            >
                <ArrowLeft class="size-4" />
            </Link>
            <div>
                <h2 class="text-2xl font-display font-bold text-foreground">
                    {isEdit ? `Edit: ${portfolio.title || 'Case Study'}` : "Buat Studi Kasus Baru"}
                </h2>
                <p class="text-xs text-foreground/50">
                    Gunakan editor visual untuk membangun halaman studi kasus Anda dengan klik langsung pada wireframe.
                </p>
            </div>
        </div>
        
        <div class="flex items-center gap-3">
            <div class="w-40 shrink-0">
                <Select 
                    options={[
                        { value: 'draft', label: 'Draft Mode' },
                        { value: 'published', label: 'Publish Live' }
                    ]}
                    bind:value={form.status}
                />
            </div>

            <button
                on:click={handleSubmit}
                disabled={isProcessing}
                class="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition-all shadow-lg shadow-primary/20 cursor-pointer disabled:opacity-50"
            >
                <Save class="size-4" />
                <span>{isProcessing ? "Menyimpan..." : "Simpan Halaman"}</span>
            </button>
        </div>
    </div>

    <!-- Errors alert -->
    {#if formHasErrors}
        <div class="p-4 bg-destructive/10 border border-destructive/20 rounded-xl mb-6 flex gap-3 text-sm text-destructive">
            <AlertTriangle class="size-5 shrink-0" />
            <div>
                <span class="font-bold">Gagal Menyimpan!</span> Silakan periksa kolom input drawer yang masih bermasalah berikut:
                <ul class="list-disc list-inside mt-2 font-mono text-xs">
                    {#each Object.keys(formErrorsList) as err}
                        <li>{err}: {formErrorsList[err]}</li>
                    {/each}
                </ul>
            </div>
        </div>
    {/if}

    <!-- Visual Editor Columns -->
    <div class="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
        <!-- 1. LEFT: DYNAMIC SETTINGS DRAWER & FIELD EDITOR (now 8 columns visually on the left) -->
        <div class="order-1 xl:col-span-8 xl:order-1">
            <div class="bg-card border border-border rounded-3xl p-8 relative noise shadow-xl">
                <!-- Glowing tab background -->
                <div class="absolute -top-3 left-6 px-3 py-1 bg-primary text-white text-[10px] font-bold uppercase tracking-wider rounded-md shadow-md shadow-primary/10 flex items-center gap-1.5">
                    <span class="size-1.5 rounded-full bg-white animate-pulse"></span>
                    Section Editor: {activeSection.toUpperCase()}
                </div>

                <div class="space-y-6 mt-3">
                    
                    <!-- DRAWER TABS SELECTOR FOR CONVENIENCE -->
                    <div class="grid grid-cols-4 sm:grid-cols-7 gap-1.5 border-b border-border/30 pb-4">
                        <button on:click={() => activeSection = 'hero'} class="py-1.5 rounded text-[10px] font-bold uppercase text-center cursor-pointer transition-colors {activeSection === 'hero' ? 'bg-primary text-white' : 'bg-foreground/5 text-foreground/60 hover:bg-foreground/10'}">Hero</button>
                        <button on:click={() => activeSection = 'summary'} class="py-1.5 rounded text-[10px] font-bold uppercase text-center cursor-pointer transition-colors {activeSection === 'summary' ? 'bg-primary text-white' : 'bg-foreground/5 text-foreground/60 hover:bg-foreground/10'}">Summary</button>
                        <button on:click={() => activeSection = 'validation'} class="py-1.5 rounded text-[10px] font-bold uppercase text-center cursor-pointer transition-colors {activeSection === 'validation' ? 'bg-primary text-white' : 'bg-foreground/5 text-foreground/60 hover:bg-foreground/10'}">Metrics</button>
                        <button on:click={() => activeSection = 'challenge'} class="py-1.5 rounded text-[10px] font-bold uppercase text-center cursor-pointer transition-colors {activeSection === 'challenge' ? 'bg-primary text-white' : 'bg-foreground/5 text-foreground/60 hover:bg-foreground/10'}">Challenge</button>
                        <button on:click={() => activeSection = 'gallery'} class="py-1.5 rounded text-[10px] font-bold uppercase text-center cursor-pointer transition-colors {activeSection === 'gallery' ? 'bg-primary text-white' : 'bg-foreground/5 text-foreground/60 hover:bg-foreground/10'}">Gallery</button>
                        <button on:click={() => activeSection = 'deepdive'} class="py-1.5 rounded text-[10px] font-bold uppercase text-center cursor-pointer transition-colors {activeSection === 'deepdive' ? 'bg-primary text-white' : 'bg-foreground/5 text-foreground/60 hover:bg-foreground/10'}">DeepDive</button>
                        <button on:click={() => activeSection = 'faq'} class="py-1.5 rounded text-[10px] font-bold uppercase text-center cursor-pointer transition-colors {activeSection === 'faq' ? 'bg-primary text-white' : 'bg-foreground/5 text-foreground/60 hover:bg-foreground/10'}">FAQ</button>
                    </div>

                    <!-- Sub-form Router Switched Reactively -->
                    {#if activeSection === 'hero'}
                        <div id="section-hero" class="p-6">
                            <HeroForm {form} {categories} bind:localPreviewUrl />
                        </div>
                    {:else if activeSection === 'summary'}
                        <SummaryForm {form} />
                    {:else if activeSection === 'validation'}
                        <ValidationForm {form} />
                    {:else if activeSection === 'challenge'}
                        <ChallengeForm {form} />
                    {:else if activeSection === 'gallery'}
                        <GalleryForm {form} />
                    {:else if activeSection === 'deepdive'}
                        <DeepDiveForm {form} />
                    {:else if activeSection === 'faq'}
                        <FaqForm {form} />
                    {/if}
                </div>
            </div>
        </div>

        <!-- 2. RIGHT: THE INTERACTIVE WIREFRAME PREVIEW PANEL (4 columns) -->
        <WireframePreview 
            bind:activeSection 
            {form} 
            {localPreviewUrl} 
        />
    </div>
</AdminLayout>
