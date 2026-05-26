<script>
    import { Layers, ImageIcon, BookOpen, HelpCircle, Check } from "lucide-svelte";
    
    // Svelte 5 props
    let { 
        form, 
        activeSection = $bindable(), 
        localPreviewUrl 
    } = $props();

    // Compute section completeness locally using $derived for reliable reactivity
    // Uses AND (&&) logic: ALL fields must be filled for a section to be "Ready"
    let isSectionComplete = $derived({
        hero: !!(form.title && form.category && form.slug && form.subtitle && (form.image || form.image_path)),
        summary: !!(form.summary?.importance && form.summary?.context && form.summary?.result && form.summary.result[0]),
        validation: !!(form.validation && form.validation.length > 0 && form.validation.every(v => v.metric && v.title)),
        challenge: !!(form.challenge_short && form.solution_short && form.tech_stack && form.tech_stack.length > 0),
        gallery: !!(form.gallery && form.gallery.length > 0 && form.gallery.some(g => g.url || g.file)),
        deepdive: !!(form.deep_dive?.content),
        faq: !!(form.faqs && form.faqs.length > 0 && form.faqs[0]?.q && form.faqs[0]?.a)
    });
</script>

<!-- Visual interactive wireframe sidebar -->
<div class="order-2 xl:col-span-4 xl:order-2 sticky top-6 space-y-4 max-h-[calc(100vh-100px)] overflow-y-auto pr-1">
    <div class="text-[10px] font-bold font-display uppercase tracking-widest text-foreground/45 flex items-center justify-between px-1">
        <span>Wireframe Preview</span>
        <span class="text-primary-light text-[9px]">Click blocks to edit</span>
    </div>

    <!-- The Mockup Frame container (smaller paddings since it's 4 columns) -->
    <div class="border border-border/80 bg-background/50 rounded-2xl p-4 relative noise overflow-hidden shadow-xl">
        <div class="absolute top-0 right-0 w-80 h-80 bg-primary/5 blur-[100px] rounded-full pointer-events-none"></div>

        <!-- Fake Public Navbar Placeholder -->
        <div class="h-10 border-b border-border/30 rounded-lg bg-card/20 backdrop-blur-xs flex items-center justify-between px-4 mb-6 select-none opacity-40">
            <span class="text-[10px] font-bold text-foreground/50 tracking-wider">KODEFLOW TECH</span>
            <div class="flex gap-2.5 text-[8px] font-bold text-foreground/40">
                <span>SERVICES</span>
                <span>PORTFOLIO</span>
            </div>
        </div>


        <!-- WIREFRAME BLOCK: HERO / HEADER SECTION -->
        <button
            type="button"
            on:click={() => activeSection = 'hero'}
            class="w-full text-left p-5 rounded-2xl border transition-all duration-300 relative group cursor-pointer mb-4
                {activeSection === 'hero' ? 'bg-primary/5 border-primary shadow-lg shadow-primary/5 ring-1 ring-primary/30' : 'bg-card/30 border-border/50 hover:border-foreground/20'}"
        >
            <div class="absolute top-4 right-4 z-10">
                <span class="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded
                    {isSectionComplete.hero ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'}">
                    {isSectionComplete.hero ? "Ready" : "Incomplete"}
                </span>
            </div>

            <div class="max-w-full">
                <!-- Category outline -->
                <span class="text-[10px] font-bold text-primary-light tracking-widest uppercase mb-1.5 block">
                    {form.category || "CATEGORY PREVIEW"}
                </span>
                
                <!-- Title outline -->
                <h1 class="font-display text-lg font-extrabold leading-tight uppercase mb-2 text-foreground line-clamp-2">
                    {form.title || "[ JUDUL BESAR PORTFOLIO ]"}
                </h1>

                <!-- Subtitle outline -->
                <p class="font-body text-xs text-foreground/60 leading-relaxed mb-4 line-clamp-2">
                    {form.subtitle || "[ Sub-judul deskriptif menarik ]"}
                </p>

                <!-- Mockup Image Container -->
                <div class="rounded-xl border border-dashed border-border p-2 text-center bg-foreground/[0.02] relative aspect-video flex flex-col justify-center items-center overflow-hidden">
                    {#if localPreviewUrl}
                        <img src={localPreviewUrl} alt="Preview Mockup" class="absolute inset-0 w-full h-full object-cover opacity-60" />
                    {:else if form.image_path}
                        <img src={form.image_path} alt="Preview Mockup" class="absolute inset-0 w-full h-full object-cover opacity-60" />
                    {/if}
                    <div class="relative z-10 p-2.5 bg-black/60 border border-white/10 rounded-lg backdrop-blur-xs max-w-xs text-center flex flex-col items-center">
                        <ImageIcon class="size-4.5 text-primary-light mb-1" />
                        <span class="text-[8px] font-bold tracking-wider text-white uppercase">[ MOCKUP UTAMA ]</span>

                    </div>
                </div>
            </div>
        </button>

        <!-- WIREFRAME BLOCK: QUICK SUMMARY SECTION -->
        <button
            type="button"
            on:click={() => activeSection = 'summary'}
            class="w-full text-left p-5 rounded-2xl border transition-all duration-300 relative group cursor-pointer mb-4
                {activeSection === 'summary' ? 'bg-primary/5 border-primary shadow-lg shadow-primary/5 ring-1 ring-primary/30' : 'bg-card/30 border-border/50 hover:border-foreground/20'}"
        >
            <div class="absolute top-4 right-4 z-10">
                <span class="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded
                    {isSectionComplete.summary ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'}">
                    {isSectionComplete.summary ? "Ready" : "Incomplete"}
                </span>
            </div>

            <h3 class="font-display text-xs font-bold mb-4 tracking-wider uppercase border-b border-border/10 pb-2 text-foreground/80">
                RINGKASAN CEPAT
            </h3>

            <div class="grid grid-cols-1 gap-3">
                <div class="p-3 rounded-lg bg-card border border-border/60 flex flex-col">
                    <span class="text-[9px] font-bold uppercase text-primary-light tracking-wider mb-1">Pentingnya Kasus</span>
                    <p class="text-[10px] text-foreground/60 line-clamp-2 leading-relaxed font-body">
                        {form.summary.importance || "[ Klik untuk mengisi ]"}
                    </p>
                </div>
                <div class="p-3 rounded-lg bg-card border border-border/60 flex flex-col">
                    <span class="text-[9px] font-bold uppercase text-primary-light tracking-wider mb-1">Konteks & Klien</span>
                    <p class="text-[10px] text-foreground/60 line-clamp-2 leading-relaxed font-body">
                        {form.summary.context || "[ Klik untuk mengisi ]"}
                    </p>
                </div>
                <div class="p-3 rounded-lg bg-card border border-border/60 flex flex-col overflow-hidden">
                    <span class="text-[9px] font-bold uppercase text-primary-light tracking-wider mb-1">Hasil Nyata</span>
                    <ul class="text-[9px] text-foreground/60 space-y-0.5">
                        {#each form.summary.result as res, i}
                            {#if res}
                                <li class="truncate flex items-center gap-1"><Check class="size-2.5 text-emerald-400 shrink-0" /> {res}</li>
                            {/if}
                        {/each}
                        {#if !form.summary.result[0]}
                            <li class="text-foreground/30 italic">Belum ada...</li>
                        {/if}
                    </ul>
                </div>
            </div>
        </button>

        <!-- WIREFRAME BLOCK: VALIDATION METRICS -->
        <button
            type="button"
            on:click={() => activeSection = 'validation'}
            class="w-full text-left p-5 rounded-2xl border transition-all duration-300 relative group cursor-pointer mb-4
                {activeSection === 'validation' ? 'bg-primary/5 border-primary shadow-lg shadow-primary/5 ring-1 ring-primary/30' : 'bg-card/30 border-border/50 hover:border-foreground/20'}"
        >
            <div class="absolute top-4 right-4 z-10">
                <span class="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded
                    {isSectionComplete.validation ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'}">
                    {isSectionComplete.validation ? "Ready" : "Incomplete"}
                </span>
            </div>

            <h3 class="font-display text-[10px] font-bold text-center tracking-widest text-foreground/60 uppercase mb-4">
                VALIDASI PERFORMA
            </h3>

            <div class="grid grid-cols-1 gap-2.5">
                {#each form.validation as val, i}
                    <div class="p-3 rounded-xl bg-primary/5 border border-primary/10 text-center flex flex-col items-center justify-center min-h-[70px]">
                        <span class="font-display text-lg font-black text-primary-light mb-0.5">
                            {val.metric || `-`}
                        </span>
                        <span class="text-[9px] font-bold uppercase text-foreground mb-0.5">
                            {val.title || "Tulis Target"}
                        </span>
                    </div>
                {/each}
            </div>
        </button>

        <!-- WIREFRAME BLOCK: CHALLENGES & SOLUTION -->
        <button
            type="button"
            on:click={() => activeSection = 'challenge'}
            class="w-full text-left p-5 rounded-2xl border transition-all duration-300 relative group cursor-pointer mb-4
                {activeSection === 'challenge' ? 'bg-primary/5 border-primary shadow-lg shadow-primary/5 ring-1 ring-primary/30' : 'bg-card/30 border-border/50 hover:border-foreground/20'}"
        >
            <div class="absolute top-4 right-4 z-10">
                <span class="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded
                    {isSectionComplete.challenge ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'}">
                    {isSectionComplete.challenge ? "Ready" : "Incomplete"}
                </span>
            </div>

            <div class="grid grid-cols-1 gap-3">
                <div class="p-3 rounded-lg border border-rose-500/10 bg-rose-500/5">
                    <span class="text-[8px] font-mono font-bold text-rose-400 tracking-wider block mb-1">Tantangan Utama</span>
                    <p class="text-[10px] text-foreground/75 leading-relaxed line-clamp-2">
                        {form.challenge_short || "[ Klik untuk menulis ]"}
                    </p>
                </div>
                <div class="p-3 rounded-lg border border-emerald-500/10 bg-emerald-500/5">
                    <span class="text-[8px] font-mono font-bold text-emerald-400 tracking-wider block mb-1">Solusi Kodeflow</span>
                    <p class="text-[10px] text-foreground/75 leading-relaxed line-clamp-2 mb-2">
                        {form.solution_short || "[ Klik untuk menulis ]"}
                    </p>
                    <div class="flex flex-wrap gap-1">
                        {#each form.tech_stack.slice(0, 3) as tech}
                            <span class="px-1.5 py-0.5 rounded text-[8px] font-bold bg-card border border-border text-primary-light">{tech}</span>
                        {/each}
                        {#if form.tech_stack.length > 3}
                            <span class="text-[8px] text-foreground/40 font-bold">+{form.tech_stack.length - 3}</span>
                        {/if}
                    </div>
                </div>
            </div>
        </button>

        <!-- WIREFRAME BLOCK: PROCESS GALLERY -->
        <button
            type="button"
            on:click={() => activeSection = 'gallery'}
            class="w-full text-left p-5 rounded-2xl border transition-all duration-300 relative group cursor-pointer mb-4
                {activeSection === 'gallery' ? 'bg-primary/5 border-primary shadow-lg shadow-primary/5 ring-1 ring-primary/30' : 'bg-card/30 border-border/50 hover:border-foreground/20'}"
        >
            <div class="absolute top-4 right-4 z-10">
                <span class="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded
                    {isSectionComplete.gallery ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'}">
                    {isSectionComplete.gallery ? "Ready" : "Empty"}
                </span>
            </div>

            <h3 class="font-display text-xs font-bold mb-3 tracking-wider uppercase border-b border-border/10 pb-2 text-foreground/80">
                GALERI PROSES
            </h3>

            <div class="grid grid-cols-1 gap-2.5 mb-2">
                {#each form.gallery.slice(0, 2) as gal, i}
                    <div class="p-2 rounded-lg border border-dashed border-border bg-foreground/[0.01] flex flex-col justify-center items-center h-20 relative overflow-hidden">
                        {#if gal.preview || gal.url}
                            <img src={gal.preview || gal.url} alt="Gallery" class="absolute inset-0 w-full h-full object-cover opacity-35" />
                        {/if}
                        <div class="relative z-10 text-center">
                            <ImageIcon class="size-3.5 mx-auto text-primary-light mb-0.5" />
                            <span class="text-[8px] font-bold text-white bg-black/60 px-1.5 py-0.5 rounded uppercase">Image {i+1}</span>
                        </div>
                    </div>
                {/each}
            </div>
        </button>

        <!-- WIREFRAME BLOCK: CASE STUDY DEEP DIVE ACCORDION -->
        <button
            type="button"
            on:click={() => activeSection = 'deepdive'}
            class="w-full text-left p-5 rounded-2xl border transition-all duration-300 relative group cursor-pointer mb-4
                {activeSection === 'deepdive' ? 'bg-primary/5 border-primary shadow-lg shadow-primary/5 ring-1 ring-primary/30' : 'bg-card/30 border-border/50 hover:border-foreground/20'}"
        >
            <div class="absolute top-4 right-4 z-10">
                <span class="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded
                    {isSectionComplete.deepdive ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'}">
                    {isSectionComplete.deepdive ? "Ready" : "Incomplete"}
                </span>
            </div>

            <div class="flex items-center gap-3">
                <div class="p-2.5 bg-primary/10 text-primary-light rounded-lg shrink-0">
                    <BookOpen class="size-4.5" />
                </div>
                <div>
                    <h4 class="font-display text-xs font-bold uppercase tracking-wider text-foreground">
                        CASE DEEP DIVE
                    </h4>
                    <p class="text-[9px] text-foreground/50 mt-0.5 leading-snug line-clamp-2">
                        {form.deep_dive.content ? form.deep_dive.content.replace(/<[^>]+>/g, '').substring(0, 100) + '...' : 'Konten lengkap studi kasus...'}
                    </p>
                </div>
            </div>
        </button>

        <!-- WIREFRAME BLOCK: PROJECT FAQ -->
        <button
            type="button"
            on:click={() => activeSection = 'faq'}
            class="w-full text-left p-5 rounded-2xl border transition-all duration-300 relative group cursor-pointer
                {activeSection === 'faq' ? 'bg-primary/5 border-primary shadow-lg shadow-primary/5 ring-1 ring-primary/30' : 'bg-card/30 border-border/50 hover:border-foreground/20'}"
        >
            <div class="absolute top-4 right-4 z-10">
                <span class="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded
                    {isSectionComplete.faq ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'}">
                    {isSectionComplete.faq ? "Ready" : "Empty"}
                </span>
            </div>

            <div class="flex items-center gap-3">
                <div class="p-2.5 bg-foreground/5 text-foreground/40 rounded-lg shrink-0">
                    <HelpCircle class="size-4.5" />
                </div>
                <div>
                    <h4 class="font-display text-xs font-bold uppercase tracking-wider text-foreground">
                        TANYA JAWAB (FAQ)
                    </h4>
                    <p class="text-[9px] text-foreground/50 mt-0.5 leading-snug line-clamp-2">
                        {#if form.faqs && form.faqs[0] && form.faqs[0].q}
                            Q: {form.faqs[0].q}
                        {:else}
                            Pertanyaan & Jawaban Kasus.
                        {/if}
                    </p>
                </div>
            </div>
        </button>
    </div>
</div>
