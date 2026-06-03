<script>
    import { Link } from "@inertiajs/svelte";
    
    let { data = { current_page: 1, last_page: 1, total: 0, links: [] } } = $props();
</script>

{#if data && data.last_page > 1}
    <div class="flex flex-col sm:flex-row sm:items-center justify-between p-6 border-t border-border bg-foreground/[0.01] gap-4">
        <span class="text-sm text-foreground/50">
            Showing page {data.current_page} of {data.last_page} ({data.total} items)
        </span>
        <div class="flex flex-wrap items-center gap-2">
            {#each data.links as link}
                {#if link.url}
                    <Link
                        href={link.url}
                        preserveState
                        preserveScroll
                        class="px-4 py-2 border rounded-xl text-sm font-medium transition-all {link.active
                            ? 'bg-primary border-primary text-white shadow-md shadow-primary/10'
                            : 'bg-card border-border text-foreground/70 hover:bg-foreground/5'}"
                    >
                        {@html link.label}
                    </Link>
                {:else}
                    <span
                        class="px-4 py-2 border border-dashed border-border text-foreground/30 text-sm font-medium rounded-xl select-none"
                    >
                        {@html link.label}
                    </span>
                {/if}
            {/each}
        </div>
    </div>
{/if}
