<script>
    import { X } from "lucide-svelte";
    import { createEventDispatcher } from "svelte";

    export let isOpen = false;
    export let item = null;
    export let newName = "";
    export let isSavingName = false;

    const dispatch = createEventDispatcher();
</script>

{#if isOpen}
    <div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm transition-all duration-300">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div
            class="bg-card border border-border w-full max-w-md rounded-[24px] overflow-hidden shadow-2xl p-6 relative animate-in fade-in zoom-in-95 duration-200"
            on:click|stopPropagation
        >
            <div class="flex items-center justify-between mb-4">
                <h3 class="font-display text-lg font-bold text-foreground">
                    Ubah Nama Media
                </h3>
                <button
                    on:click={() => dispatch('close')}
                    class="p-2 rounded-xl border border-border hover:bg-foreground/5 text-foreground/50 transition-colors cursor-pointer"
                >
                    <X class="size-4" />
                </button>
            </div>

            {#if item}
                <div class="mb-5 w-full aspect-video rounded-xl border border-border bg-foreground/[0.02] flex items-center justify-center overflow-hidden">
                    <img src={item.path} alt={item.name} class="w-full h-full object-contain" />
                </div>
            {/if}

            <div class="space-y-4">
                <div>
                    <label
                        for="media-name"
                        class="block text-xs font-semibold text-foreground/75 mb-2 uppercase tracking-wider"
                    >Nama File</label>
                    <input
                        type="text"
                        id="media-name"
                        bind:value={newName}
                        class="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground placeholder-foreground/30 focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm transition-all"
                        placeholder="Masukkan nama baru..."
                    />
                </div>

                <div class="flex items-center justify-end gap-3 pt-2">
                    <button
                        on:click={() => dispatch('close')}
                        class="px-5 py-2.5 rounded-xl border border-border hover:bg-foreground/5 font-semibold text-xs text-foreground/70 transition-all cursor-pointer"
                    >
                        Batal
                    </button>
                    <button
                        on:click={() => dispatch('save')}
                        disabled={isSavingName}
                        class="px-5 py-2.5 rounded-xl bg-primary hover:bg-primary/90 text-white font-semibold text-xs transition-all shadow-lg shadow-primary/20 disabled:opacity-50 disabled:shadow-none cursor-pointer"
                    >
                        {isSavingName ? "Menyimpan..." : "Simpan Perubahan"}
                    </button>
                </div>
            </div>
        </div>
    </div>
{/if}
