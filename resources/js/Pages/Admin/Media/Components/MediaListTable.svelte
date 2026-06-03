<script>
    import { Copy, Check, Trash2 } from "lucide-svelte";
    import { createEventDispatcher } from "svelte";

    export let mediaData = [];
    export let copiedId = null;

    const dispatch = createEventDispatcher();
</script>

<div class="bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
    <div class="overflow-x-auto">
        <table class="w-full text-left border-collapse">
            <thead>
                <tr class="bg-foreground/[0.02] border-b border-border">
                    <th class="p-4 text-xs font-bold text-foreground/50 uppercase tracking-wider">Preview</th>
                    <th class="p-4 text-xs font-bold text-foreground/50 uppercase tracking-wider">Nama File</th>
                    <th class="p-4 text-xs font-bold text-foreground/50 uppercase tracking-wider">Tipe</th>
                    <th class="p-4 text-xs font-bold text-foreground/50 uppercase tracking-wider">Ukuran</th>
                    <th class="p-4 text-xs font-bold text-foreground/50 uppercase tracking-wider">Dimensi</th>
                    <th class="p-4 text-xs font-bold text-foreground/50 uppercase tracking-wider text-right">Aksi</th>
                </tr>
            </thead>
            <tbody class="divide-y divide-border/60">
                {#each mediaData as item (item.id)}
                    <tr class="hover:bg-foreground/[0.01] transition-colors group">
                        <td class="p-4">
                            <div class="size-12 rounded-lg border border-border overflow-hidden bg-background relative shrink-0">
                                <img src={item.path} alt={item.name} class="w-full h-full object-cover" />
                            </div>
                        </td>
                        <td class="p-4">
                            <span class="font-display font-semibold text-foreground text-sm block max-w-xs truncate" title={item.name}>
                                {item.name}
                            </span>
                        </td>
                        <td class="p-4 text-xs text-foreground/60">{item.mime_type}</td>
                        <td class="p-4 text-xs text-foreground/60">{item.size_formatted}</td>
                        <td class="p-4 text-xs text-foreground/60">{item.dimensions || "N/A"}</td>
                        <td class="p-4 text-right">
                            <div class="flex items-center justify-end gap-2">
                                <button
                                    on:click={() => dispatch('copyLink', { id: item.id, path: item.path })}
                                    class="p-2 rounded-lg border border-border bg-card text-foreground/60 hover:text-primary hover:bg-primary/5 hover:border-primary/20 transition-all relative cursor-pointer"
                                    title="Salin Tautan"
                                >
                                    {#if copiedId === item.id}
                                        <Check class="size-4 text-green-500" />
                                    {:else}
                                        <Copy class="size-4" />
                                    {/if}
                                </button>
                                <button
                                    on:click={(e) => dispatch('startEditName', { item, event: e })}
                                    class="p-2 rounded-lg border border-border bg-card text-foreground/60 hover:text-primary hover:bg-primary/5 hover:border-primary/20 transition-all cursor-pointer"
                                    title="Ubah Nama"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-4"><path d="M12 20h9" /><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>
                                </button>
                                <button
                                    on:click={() => dispatch('confirmDelete', item.id)}
                                    class="p-2 rounded-lg border border-border bg-card text-foreground/60 hover:text-red-500 hover:bg-red-500/5 hover:border-red-500/20 transition-all cursor-pointer"
                                    title="Hapus"
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
</div>
