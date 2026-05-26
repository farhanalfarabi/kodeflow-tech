<script>
    import { Plus, Trash2 } from "lucide-svelte";

    // Svelte 5 props
    let { form } = $props();

    // Dynamic Lists helpers (Summary Results, Summary Modules, summary targetReader)
    function addSummaryItem(type) {
        form.summary[type] = [...form.summary[type], ""];
    }
    function removeSummaryItem(type, index) {
        if (form.summary[type].length > 1) {
            form.summary[type] = form.summary[type].filter((_, i) => i !== index);
        }
    }
</script>

<div class="space-y-4">
    <div>
        <label class="block text-xs font-bold text-foreground/75 uppercase tracking-wide mb-1.5">Mengapa Kasus Penting?</label>
        <textarea 
            rows="3"
            bind:value={form.summary.importance}
            placeholder="Jelaskan kendala manual PT Indo Woodworks..."
            class="w-full p-3 bg-foreground/5 border border-border rounded-xl text-sm focus:outline-none"
        ></textarea>
    </div>

    <div>
        <label class="block text-xs font-bold text-foreground/75 uppercase tracking-wide mb-1.5">Konteks Industri & Klien</label>
        <textarea 
            rows="3"
            bind:value={form.summary.context}
            placeholder="Furniture Kayu Ekspor dengan 450+ karyawan..."
            class="w-full p-3 bg-foreground/5 border border-border rounded-xl text-sm focus:outline-none"
        ></textarea>
    </div>

    <!-- Dynamic Lists: Results -->
    <div>
        <div class="flex justify-between items-center mb-1.5">
            <label class="text-xs font-bold text-foreground/75 uppercase tracking-wide">Dampak Hasil Langsung (List)</label>
            <button type="button" on:click={() => addSummaryItem('result')} class="p-1 rounded bg-primary/10 text-primary-light hover:bg-primary/20 text-xs cursor-pointer"><Plus class="size-3" /></button>
        </div>
        <div class="space-y-2">
            {#each form.summary.result as item, index}
                <div class="flex gap-2 items-center">
                    <input 
                        type="text" 
                        bind:value={form.summary.result[index]}
                        placeholder="Hasil nyata..."
                        class="w-full px-3 py-1.5 bg-foreground/5 border border-border rounded-lg text-xs focus:outline-none"
                    />
                    <button type="button" on:click={() => removeSummaryItem('result', index)} class="p-1.5 text-destructive bg-destructive/10 rounded hover:bg-destructive/20 cursor-pointer"><Trash2 class="size-3.5" /></button>
                </div>
            {/each}
        </div>
    </div>

    <!-- Dynamic Lists: Modules -->
    <div>
        <div class="flex justify-between items-center mb-1.5">
            <label class="text-xs font-bold text-foreground/75 uppercase tracking-wide">Modul Inti Dibangun (List)</label>
            <button type="button" on:click={() => addSummaryItem('modules')} class="p-1 rounded bg-primary/10 text-primary-light hover:bg-primary/20 text-xs cursor-pointer"><Plus class="size-3" /></button>
        </div>
        <div class="space-y-2">
            {#each form.summary.modules as item, index}
                <div class="flex gap-2 items-center">
                    <input 
                        type="text" 
                        bind:value={form.summary.modules[index]}
                        placeholder="Nama modul..."
                        class="w-full px-3 py-1.5 bg-foreground/5 border border-border rounded-lg text-xs focus:outline-none"
                    />
                    <button type="button" on:click={() => removeSummaryItem('modules', index)} class="p-1.5 text-destructive bg-destructive/10 rounded hover:bg-destructive/20 cursor-pointer"><Trash2 class="size-3.5" /></button>
                </div>
            {/each}
        </div>
    </div>

    <!-- Dynamic Lists: Readers -->
    <div>
        <div class="flex justify-between items-center mb-1.5">
            <label class="text-xs font-bold text-foreground/75 uppercase tracking-wide">Pembaca Target Relevan (List)</label>
            <button type="button" on:click={() => addSummaryItem('targetReader')} class="p-1 rounded bg-primary/10 text-primary-light hover:bg-primary/20 text-xs cursor-pointer"><Plus class="size-3" /></button>
        </div>
        <div class="space-y-2">
            {#each form.summary.targetReader as item, index}
                <div class="flex gap-2 items-center">
                    <input 
                        type="text" 
                        bind:value={form.summary.targetReader[index]}
                        placeholder="Pembaca sasaran..."
                        class="w-full px-3 py-1.5 bg-foreground/5 border border-border rounded-lg text-xs focus:outline-none"
                    />
                    <button type="button" on:click={() => removeSummaryItem('targetReader', index)} class="p-1.5 text-destructive bg-destructive/10 rounded hover:bg-destructive/20 cursor-pointer"><Trash2 class="size-3.5" /></button>
                </div>
            {/each}
        </div>
    </div>
</div>
