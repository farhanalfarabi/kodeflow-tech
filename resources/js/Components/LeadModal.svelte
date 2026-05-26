<script>
    import { fade, fly } from "svelte/transition";
    import { X } from "lucide-svelte";
    import { useForm } from "@inertiajs/svelte";
    import { isLeadModalOpen } from "@/lib/stores";
    import DatePicker from "./ui/DatePicker.svelte";
    import TimePicker from "./ui/TimePicker.svelte";

    let show = false;

    $: show = $isLeadModalOpen;

    // Lock body scroll when modal is open
    $: if (typeof document !== "undefined") {
        if (show) {
            document.documentElement.style.overflow = "hidden";
            document.body.style.overflow = "hidden";
        } else {
            document.documentElement.style.overflow = "";
            document.body.style.overflow = "";
        }
    }

    function closeModal() {
        isLeadModalOpen.set(false);
    }

    function handleBackdropClick(e) {
        if (e.target === e.currentTarget) {
            closeModal();
        }
    }

    const form = useForm({
        name: "",
        company_name: "",
        message: "",
        meeting_date: "",
        meeting_time: "",
    });

    let successMessage = "";

    function handleSubmit(e) {
        e.preventDefault();

        form.post("/leads", {
            preserveScroll: true,
            onSuccess: () => {
                successMessage =
                    "Terima kasih! Pesan Anda telah terkirim. Kami akan segera menghubungi Anda.";
                form.reset();
                setTimeout(() => {
                    successMessage = "";
                    closeModal();
                }, 3000);
            },
        });
    }
</script>

{#if show}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div
        class="lead-modal-backdrop"
        transition:fade={{ duration: 200 }}
        on:click={handleBackdropClick}
    >
        <div
            class="lead-modal-container"
            transition:fly={{ y: 40, duration: 300, opacity: 0 }}
        >
            <!-- Decorative Glow (contained inside overflow-hidden) -->
            <div class="lead-modal-glow"></div>

            <!-- Close Button -->
            <button
                on:click={closeModal}
                class="lead-modal-close"
                aria-label="Close Modal"
            >
                <X class="w-5 h-5" />
            </button>

            <!-- Scrollable inner content -->
            <div class="lead-modal-scroll">
                <!-- Header -->
                <div class="lead-modal-header">
                    <span class="lead-modal-badge">KONSULTASI GRATIS</span>
                    <h3 class="lead-modal-title">Mulai Sekarang</h3>
                    <p class="lead-modal-subtitle">
                        Isi form di bawah — tim kami akan konfirmasi dalam 1
                        jam.
                    </p>
                </div>

                {#if successMessage}
                    <div class="lead-modal-success">
                        {successMessage}
                    </div>
                {/if}

                <!-- Form -->
                <form on:submit={handleSubmit} class="lead-modal-form">
                    <div class="lead-form-group">
                        <label for="lead-name" class="lead-form-label"
                            >Nama lengkap</label
                        >
                        <input
                            type="text"
                            id="lead-name"
                            bind:value={form.name}
                            required
                            placeholder="Nama Anda"
                            class="lead-form-input"
                        />
                        {#if form.errors.name}
                            <p class="lead-form-error">{form.errors.name}</p>
                        {/if}
                    </div>

                    <div class="lead-form-group">
                        <label for="lead-company" class="lead-form-label"
                            >Nama perusahaan</label
                        >
                        <input
                            type="text"
                            id="lead-company"
                            bind:value={form.company_name}
                            required
                            placeholder="PT / CV / nama bisnis Anda"
                            class="lead-form-input"
                        />
                        {#if form.errors.company_name}
                            <p class="lead-form-error">
                                {form.errors.company_name}
                            </p>
                        {/if}
                    </div>

                    <div class="lead-form-group">
                        <label for="lead-message" class="lead-form-label"
                            >Sistem apa yang ingin dibangun / kebutuhan IT
                            Anda?</label
                        >
                        <textarea
                            id="lead-message"
                            bind:value={form.message}
                            rows="3"
                            required
                            placeholder="Contoh: Kami butuh sistem ERP untuk operasional 3 gudang..."
                            class="lead-form-textarea"
                        ></textarea>
                        {#if form.errors.message}
                            <p class="lead-form-error">
                                {form.errors.message}
                            </p>
                        {/if}
                    </div>

                    <!-- Section: Pilih Jadwal Meeting -->
                    <div class="lead-meeting-section">
                        <h4 class="lead-meeting-title">Pilih jadwal meeting</h4>
                        <hr class="lead-meeting-divider" />

                        <div class="lead-meeting-grid">
                            <DatePicker
                                bind:value={form.meeting_date}
                                label="Pilih tanggal"
                                error={form.errors.meeting_date}
                            />

                            <TimePicker
                                bind:value={form.meeting_time}
                                label="Pilih jam (07.00 - 23.00)"
                                error={form.errors.meeting_time}
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={form.processing}
                        class="lead-form-submit"
                    >
                        {#if form.processing}
                            <div class="lead-submit-spinner"></div>
                            <span>Mengirim...</span>
                        {:else}
                            <span>Kirim Pesan</span>
                        {/if}
                    </button>
                </form>
            </div>
        </div>
    </div>
{/if}

<style>
    /* ── Backdrop ── */
    .lead-modal-backdrop {
        position: fixed;
        inset: 0;
        z-index: 50;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 16px;
        background: rgba(0, 0, 0, 0.65);
        backdrop-filter: blur(4px);
        -webkit-backdrop-filter: blur(4px);
        overflow: hidden;
    }

    /* ── Modal Container ── */
    .lead-modal-container {
        position: relative;
        width: 100%;
        max-width: 420px;
        max-height: 85vh;
        overflow: hidden;
        background: hsla(287, 58%, 9%, 0.96);
        backdrop-filter: blur(40px);
        -webkit-backdrop-filter: blur(40px);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 28px;
        box-shadow: 0 20px 80px rgba(247, 37, 134, 0.12),
            0 0 0 1px rgba(255, 255, 255, 0.05);
    }

    /* ── Decorative Glow ── */
    .lead-modal-glow {
        position: absolute;
        top: -80px;
        right: -80px;
        width: 200px;
        height: 200px;
        background: rgba(247, 37, 134, 0.15);
        border-radius: 50%;
        filter: blur(80px);
        pointer-events: none;
    }

    /* ── Close Button ── */
    .lead-modal-close {
        position: absolute;
        top: 16px;
        right: 16px;
        width: 36px;
        height: 36px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.1);
        color: rgba(255, 255, 255, 0.5);
        cursor: pointer;
        transition: all 0.2s;
        z-index: 10;
    }

    .lead-modal-close:hover {
        color: white;
        background: rgba(255, 255, 255, 0.1);
    }

    /* ── Scrollable Content ── */
    .lead-modal-scroll {
        overflow-y: auto;
        overflow-x: hidden;
        max-height: 85vh;
        padding: 24px;
    }

    .lead-modal-scroll::-webkit-scrollbar {
        width: 5px;
    }

    .lead-modal-scroll::-webkit-scrollbar-track {
        background: rgba(255, 255, 255, 0.02);
        border-radius: 5px;
    }

    .lead-modal-scroll::-webkit-scrollbar-thumb {
        background: rgba(255, 255, 255, 0.12);
        border-radius: 5px;
    }

    .lead-modal-scroll::-webkit-scrollbar-thumb:hover {
        background: rgba(255, 255, 255, 0.25);
    }

    /* ── Header ── */
    .lead-modal-header {
        margin-bottom: 20px;
        position: relative;
        z-index: 1;
    }

    .lead-modal-badge {
        display: inline-block;
        padding: 4px 12px;
        margin-bottom: 12px;
        font-size: 11px;
        font-weight: 600;
        letter-spacing: 0.08em;
        color: #f72586;
        border: 1px solid rgba(247, 37, 134, 0.3);
        border-radius: 999px;
        background: rgba(247, 37, 134, 0.08);
    }

    .lead-modal-title {
        font-family: var(--font-display);
        font-size: 28px;
        font-weight: 700;
        color: white;
        margin: 0 0 6px 0;
        letter-spacing: -0.02em;
        line-height: 1.15;
    }

    .lead-modal-subtitle {
        font-family: var(--font-body);
        font-size: 13px;
        color: rgba(255, 255, 255, 0.55);
        margin: 0;
        line-height: 1.5;
    }

    /* ── Success Message ── */
    .lead-modal-success {
        margin-bottom: 16px;
        padding: 12px 16px;
        border-radius: 12px;
        background: rgba(34, 197, 94, 0.08);
        border: 1px solid rgba(34, 197, 94, 0.2);
        color: #4ade80;
        font-size: 13px;
        font-weight: 500;
    }

    /* ── Form ── */
    .lead-modal-form {
        display: flex;
        flex-direction: column;
        gap: 14px;
        position: relative;
        z-index: 1;
    }

    .lead-form-group {
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    .lead-form-label {
        font-size: 13px;
        font-weight: 500;
        color: rgba(255, 255, 255, 0.75);
    }

    .lead-form-input,
    .lead-form-textarea {
        width: 100%;
        padding: 10px 14px;
        background: rgba(255, 255, 255, 0.04);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 12px;
        color: white;
        font-size: 14px;
        font-family: var(--font-body);
        outline: none;
        transition: border-color 0.2s, box-shadow 0.2s;
        box-sizing: border-box;
    }

    .lead-form-input::placeholder,
    .lead-form-textarea::placeholder {
        color: rgba(255, 255, 255, 0.25);
    }

    .lead-form-input:focus,
    .lead-form-textarea:focus {
        border-color: rgba(247, 37, 134, 0.4);
        box-shadow: 0 0 0 2px rgba(247, 37, 134, 0.1);
    }

    .lead-form-textarea {
        resize: none;
        min-height: 80px;
    }

    .lead-form-error {
        font-size: 11px;
        color: #f87171;
        margin: 0;
    }

    /* ── Meeting Section ── */
    .lead-meeting-section {
        display: flex;
        flex-direction: column;
        gap: 12px;
        padding-top: 6px;
    }

    .lead-meeting-title {
        font-size: 15px;
        font-weight: 600;
        color: white;
        margin: 0;
    }

    .lead-meeting-divider {
        border: none;
        border-top: 1px solid rgba(255, 255, 255, 0.08);
        margin: 0;
    }

    .lead-meeting-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 14px;
        position: relative;
    }

    @media (min-width: 420px) {
        .lead-meeting-grid {
            grid-template-columns: 1fr 1fr;
            gap: 16px;
        }
    }

    /* ── Submit Button ── */
    .lead-form-submit {
        width: 100%;
        height: 50px;
        margin-top: 10px;
        background: white;
        color: black;
        border: none;
        border-radius: 14px;
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        transition: all 0.2s;
        box-shadow: 0 0 20px rgba(255, 255, 255, 0.15);
    }

    .lead-form-submit:hover {
        background: rgba(255, 255, 255, 0.92);
    }

    .lead-form-submit:disabled {
        opacity: 0.65;
        cursor: not-allowed;
    }

    .lead-submit-spinner {
        width: 18px;
        height: 18px;
        border: 2px solid rgba(0, 0, 0, 0.15);
        border-top-color: black;
        border-radius: 50%;
        animation: spin 0.6s linear infinite;
    }

    @keyframes spin {
        to {
            transform: rotate(360deg);
        }
    }

    /* ── Responsive adjustments ── */
    @media (min-width: 640px) {
        .lead-modal-backdrop {
            padding: 24px;
        }

        .lead-modal-scroll {
            padding: 28px 32px;
        }

        .lead-modal-title {
            font-size: 32px;
        }

        .lead-modal-close {
            top: 20px;
            right: 20px;
            width: 40px;
            height: 40px;
        }

        .lead-form-submit {
            height: 56px;
            font-size: 17px;
        }
    }
</style>
