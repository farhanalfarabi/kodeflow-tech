<script>
    import { page } from "@inertiajs/svelte";
    import { CheckCircle, AlertCircle, X } from "lucide-svelte";
    import { onDestroy } from "svelte";

    let visible = $state(false);
    let message = $state("");
    let type = $state("success");
    let timeout;

    // Monitor Inertia's page props for flash messages
    $effect(() => {
        const success = page.props.flash?.success;
        const error = page.props.flash?.error;
        
        // Cek page.url sebagai dependency tambahan agar effect berjalan saat navigasi
        const url = page.url; 

        if (success) {
            showToast(success, "success");
            // Mutate prop locally to prevent re-triggering if effect runs for other reasons
            page.props.flash.success = null;
        } else if (error) {
            showToast(error, "error");
            page.props.flash.error = null;
        }
    });

    function showToast(msg, t) {
        message = msg;
        type = t;
        visible = true;
        
        if (timeout) clearTimeout(timeout);
        timeout = setTimeout(() => {
            visible = false;
        }, 4000);
    }
    
    onDestroy(() => {
        if (timeout) clearTimeout(timeout);
    });
</script>

{#if visible}
    <div class="fixed top-6 right-6 z-[100] flex items-center gap-3 px-4 py-3 rounded-xl shadow-xl border bg-card/95 backdrop-blur-md animate-in slide-in-from-top-5 fade-in duration-300 {type === 'success' ? 'border-emerald-500/20' : 'border-destructive/20'}">
        {#if type === 'success'}
            <CheckCircle class="size-5 text-emerald-500" />
        {:else}
            <AlertCircle class="size-5 text-destructive" />
        {/if}
        <p class="text-sm font-medium text-foreground">{message}</p>
        <button on:click={() => visible = false} class="ml-2 p-1 hover:bg-foreground/5 rounded-md text-foreground/50 hover:text-foreground transition-colors cursor-pointer">
            <X class="size-4" />
        </button>
    </div>
{/if}
