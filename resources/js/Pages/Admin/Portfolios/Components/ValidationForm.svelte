<script>
    // Svelte 5 props
    let { form } = $props();
</script>

<div class="space-y-5">
    <span class="text-xs text-foreground/50 block">Tambahkan tepat 3 kartu validasi performa kuantitatif:</span>
    {#each form.validation as val, index}
        <div class="p-4 border border-border bg-foreground/[0.02] rounded-xl space-y-3 relative">
            <span class="absolute top-2 right-3 text-[10px] font-mono text-primary-light font-bold uppercase">Metric #{index+1}</span>
            <div>
                <label class="block text-[10px] font-bold text-foreground/70 uppercase mb-1">Highlight Angka / Metric</label>
                <input 
                    type="text" 
                    bind:value={val.metric}
                    placeholder="Contoh: 42% atau ZERO"
                    class="w-full px-3 py-1.5 bg-foreground/5 border border-border rounded-lg text-xs focus:outline-none"
                />
            </div>
            <div>
                <label class="block text-[10px] font-bold text-foreground/70 uppercase mb-1">Target Validasi</label>
                <input 
                    type="text" 
                    bind:value={val.title}
                    placeholder="Contoh: Efisiensi Operasional"
                    class="w-full px-3 py-1.5 bg-foreground/5 border border-border rounded-lg text-xs focus:outline-none"
                />
            </div>
            <div>
                <label class="block text-[10px] font-bold text-foreground/70 uppercase mb-1">Penjelasan Singkat Dampak</label>
                <textarea 
                    rows="2"
                    bind:value={val.desc}
                    placeholder="Kapasitas produksi pabrik naik dari..."
                    class="w-full p-2.5 bg-foreground/5 border border-border rounded-lg text-xs focus:outline-none"
                ></textarea>
            </div>
        </div>
    {/each}
</div>
