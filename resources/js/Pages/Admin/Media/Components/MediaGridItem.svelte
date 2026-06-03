<script>
    import { MoreVertical, Copy, Trash2, Check } from "lucide-svelte";
    import { createEventDispatcher } from "svelte";

    export let item;
    export let activeMenuId = null;
    export let copiedId = null;

    const dispatch = createEventDispatcher();
</script>

<div class="group bg-card border border-border rounded-[24px] overflow-hidden shadow-sm hover:shadow-md transition-all relative flex flex-col h-full">
    <!-- Thumbnail -->
    <div class="aspect-square w-full bg-foreground/[0.02] border-b border-border relative overflow-hidden flex items-center justify-center shrink-0">
        <img
            src={item.path}
            alt={item.name}
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        <!-- Quick Actions Overlay -->
        <div class="absolute top-3 right-3 z-10">
            <button
                on:click={(e) => dispatch('toggleMenu', { id: item.id, event: e })}
                class="w-8 h-8 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center shadow-md backdrop-blur-sm transition-colors cursor-pointer"
            >
                <MoreVertical class="size-4" />
            </button>

            {#if activeMenuId === item.id}
                <div
                    class="absolute right-0 mt-1 w-36 bg-card border border-border rounded-xl shadow-lg z-20 py-1.5 overflow-hidden"
                >
                    <button
                        on:click={() => dispatch('copyLink', { id: item.id, path: item.path })}
                        class="w-full text-left px-3 py-2 text-xs hover:bg-foreground/5 transition-colors flex items-center gap-2 text-foreground/80 font-medium cursor-pointer"
                    >
                        <Copy class="size-3.5" />
                        <span>Salin Tautan</span>
                    </button>
                    <button
                        on:click={(e) => dispatch('startEditName', { item, event: e })}
                        class="w-full text-left px-3 py-2 text-xs hover:bg-foreground/5 transition-colors flex items-center gap-2 text-foreground/80 font-medium cursor-pointer"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-3.5"><path d="M12 20h9" /><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>
                        <span>Ubah Nama</span>
                    </button>
                    <button
                        on:click={() => dispatch('confirmDelete', item.id)}
                        class="w-full text-left px-3 py-2 text-xs hover:bg-red-500/10 text-red-500 transition-colors flex items-center gap-2 font-medium cursor-pointer"
                    >
                        <Trash2 class="size-3.5" />
                        <span>Hapus</span>
                    </button>
                </div>
            {/if}
        </div>

        <!-- Copied Notification Toast -->
        {#if copiedId === item.id}
            <div
                class="absolute inset-0 bg-black/75 backdrop-blur-xs flex flex-col items-center justify-center text-white p-3 z-10 transition-all"
            >
                <div
                    class="size-10 rounded-full bg-green-500 flex items-center justify-center mb-2 shadow-lg shadow-green-500/20"
                >
                    <Check class="size-5" />
                </div>
                <span class="text-xs font-semibold">Tautan Disalin!</span>
            </div>
        {/if}
    </div>

    <!-- Meta Details -->
    <div class="p-4 flex flex-col flex-1">
        <span
            class="font-display font-semibold text-foreground text-sm line-clamp-1 mb-1"
            title={item.name}
        >
            {item.name}
        </span>
        <div
            class="flex items-center justify-between text-[11px] text-foreground/45 mt-auto font-medium"
        >
            <span>{item.size_formatted}</span>
            <span>{item.dimensions || "N/A"}</span>
        </div>
    </div>
</div>
