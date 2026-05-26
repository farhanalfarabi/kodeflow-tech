<script>
    // Svelte 5 props
    let { form } = $props();

    let techInput = $state("");

    function addTech() {
        if (techInput.trim() && !form.tech_stack.includes(techInput.trim())) {
            form.tech_stack = [...form.tech_stack, techInput.trim()];
            techInput = "";
        }
    }
    function removeTech(index) {
        form.tech_stack = form.tech_stack.filter((_, i) => i !== index);
    }
</script>

<div class="space-y-4">
    <div>
        <label class="block text-xs font-bold text-foreground/75 uppercase tracking-wide mb-1.5">Tantangan Utama Operasional</label>
        <textarea 
            rows="4"
            bind:value={form.challenge_short}
            placeholder="Jelaskan masalah gudang manual..."
            class="w-full p-3 bg-foreground/5 border border-border rounded-xl text-sm focus:outline-none"
        ></textarea>
    </div>

    <div>
        <label class="block text-xs font-bold text-foreground/75 uppercase tracking-wide mb-1.5">Solusi Arsitektur Kodeflow</label>
        <textarea 
            rows="4"
            bind:value={form.solution_short}
            placeholder="Kami merancang sistem ERP FlowBiz terintegrasi..."
            class="w-full p-3 bg-foreground/5 border border-border rounded-xl text-sm focus:outline-none"
        ></textarea>
    </div>

    <!-- Tech Stack Input tags -->
    <div>
        <label class="block text-xs font-bold text-foreground/75 uppercase tracking-wide mb-1.5">Teknologi / Tech Stack</label>
        <div class="flex gap-2">
            <input 
                type="text" 
                bind:value={techInput}
                placeholder="Contoh: Svelte, Laravel 11"
                on:keydown={(e) => e.key === 'Enter' && (e.preventDefault(), addTech())}
                class="w-full px-3.5 py-1.5 bg-foreground/5 border border-border rounded-lg text-xs focus:outline-none"
            />
            <button type="button" on:click={addTech} class="px-3 bg-primary/10 text-primary-light hover:bg-primary/20 border border-primary/20 rounded-lg text-xs font-bold cursor-pointer">Add</button>
        </div>
        <div class="flex flex-wrap gap-1.5 mt-3">
            {#each form.tech_stack as tech, index}
                <span class="inline-flex items-center gap-1 text-[10px] font-semibold bg-foreground/5 border border-border px-2 py-0.5 rounded text-foreground/80">
                    {tech}
                    <button type="button" on:click={() => removeTech(index)} class="text-destructive font-bold text-xs hover:text-red-400 cursor-pointer">×</button>
                </span>
            {/each}
        </div>
    </div>
</div>
