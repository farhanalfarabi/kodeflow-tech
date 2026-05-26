<script>
    import { X, AlertTriangle } from "lucide-svelte";
    import { fade, fly } from "svelte/transition";
    import { cubicOut } from "svelte/easing";

    let {
        isOpen = $bindable(false),
        title = "Apakah Anda Yakin?",
        description = "Tindakan ini tidak dapat dibatalkan. Ini akan menghapus data secara permanen.",
        confirmText = "Ya, Hapus",
        cancelText = "Batal",
        confirmVariant = "destructive", // 'destructive', 'primary', etc.
        onConfirm,
        onCancel
    } = $props();

    function handleConfirm() {
        if (onConfirm) onConfirm();
        isOpen = false;
    }

    function handleCancel() {
        if (onCancel) onCancel();
        isOpen = false;
    }
</script>

{#if isOpen}
    <div class="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-0">
        <!-- Backdrop -->
        <button
            class="fixed inset-0 bg-background/80 backdrop-blur-sm transition-opacity border-none cursor-default"
            transition:fade={{ duration: 200 }}
            onclick={handleCancel}
            onkeydown={(e) => e.key === 'Escape' && handleCancel()}
            aria-label="Close modal"
        ></button>

        <!-- Dialog Box -->
        <div
            class="relative bg-card border border-border shadow-2xl rounded-2xl w-full max-w-lg p-6 sm:p-8 overflow-hidden"
            transition:fly={{ y: 20, duration: 300, easing: cubicOut }}
        >
            <!-- Decorative Icon -->
            <div class="mb-5 flex items-center justify-center size-12 rounded-full bg-destructive/10 text-destructive border border-destructive/20">
                <AlertTriangle class="size-6" />
            </div>

            <!-- Content -->
            <h3 class="text-xl font-display font-bold text-foreground mb-2">
                {title}
            </h3>
            <p class="text-sm text-foreground/70 font-body mb-8 leading-relaxed">
                {description}
            </p>

            <!-- Actions -->
            <div class="flex flex-col-reverse sm:flex-row sm:justify-end gap-3">
                <button
                    class="px-5 py-2.5 rounded-xl text-sm font-semibold text-foreground/80 hover:text-foreground hover:bg-foreground/5 transition-colors border border-border/50 sm:border-transparent sm:hover:border-border"
                    onclick={handleCancel}
                >
                    {cancelText}
                </button>
                <button
                    class="px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all shadow-md shadow-destructive/20 hover:shadow-lg hover:shadow-destructive/30 flex items-center justify-center {confirmVariant === 'destructive' ? 'bg-destructive hover:bg-destructive/90' : 'bg-primary hover:bg-primary/90'}"
                    onclick={handleConfirm}
                >
                    {confirmText}
                </button>
            </div>

            <!-- Close Button (Top Right) -->
            <button
                class="absolute top-4 right-4 text-foreground/50 hover:text-foreground transition-colors p-2 rounded-lg hover:bg-foreground/5"
                onclick={handleCancel}
            >
                <X class="size-5" />
            </button>
        </div>
    </div>
{/if}
