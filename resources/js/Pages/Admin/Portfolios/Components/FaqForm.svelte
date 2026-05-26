<script>
    import { Plus, Trash2 } from "lucide-svelte";

    // Svelte 5 props
    let { form } = $props();

    // FAQ helpers
    function addFaq() {
        form.faqs = [...form.faqs, { q: "", a: "" }];
    }
    function removeFaq(index) {
        if (form.faqs.length > 1) {
            form.faqs = form.faqs.filter((_, i) => i !== index);
        }
    }
</script>

<div class="space-y-4">
    <div class="flex justify-between items-center mb-3">
        <span class="text-xs font-bold text-foreground/75 uppercase tracking-wide">Pertanyaan FAQ</span>
        <button type="button" on:click={addFaq} class="p-1 rounded bg-primary/10 text-primary-light hover:bg-primary/20 text-xs cursor-pointer"><Plus class="size-3" /></button>
    </div>
    <div class="space-y-4">
        {#each form.faqs as faq, index}
            <div class="p-3 bg-foreground/[0.02] border border-border rounded-xl space-y-2 relative">
                <button type="button" on:click={() => removeFaq(index)} class="absolute top-2 right-2 p-1 text-destructive bg-destructive/10 hover:bg-destructive/20 rounded cursor-pointer"><Trash2 class="size-3" /></button>
                <span class="text-[9px] font-mono text-foreground/40 block">Tanya Jawab #{index+1}</span>
                <div>
                    <label class="block text-[9px] font-bold text-foreground/60 uppercase mb-0.5">Pertanyaan (Question)</label>
                    <input 
                        type="text" 
                        bind:value={faq.q}
                        placeholder="Contoh: Apakah sistem ERP ini bisa offline?..."
                        class="w-full px-2.5 py-1 bg-foreground/5 border border-border rounded-lg text-xs focus:outline-none font-semibold"
                    />
                </div>
                <div>
                    <label class="block text-[9px] font-bold text-foreground/60 uppercase mb-0.5">Jawaban (Answer)</label>
                    <textarea 
                        rows="3"
                        bind:value={faq.a}
                        placeholder="Ya, tentu. Kami merancang..."
                        class="w-full p-2 bg-foreground/5 border border-border rounded-lg text-xs focus:outline-none"
                    ></textarea>
                </div>
            </div>
        {/each}
    </div>
</div>
