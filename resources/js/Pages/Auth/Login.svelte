<script>
    import { useForm } from "@inertiajs/svelte";
    import Button from "../../Components/ui/Button.svelte";
    import { Mail, Lock, LogIn, ArrowLeft, Eye, EyeOff } from "lucide-svelte";

    export let errors = {};

    let showPassword = false;

    let form = useForm({
        email: "",
        password: "",
        remember: false,
    });

    function submit() {
        form.post("/login", {
            onFinish: () => form.reset("password"),
        });
    }
</script>

<svelte:head>
    <title>Login - Kodeflow Tech</title>
</svelte:head>

<div
    class="min-h-screen bg-background text-foreground relative overflow-hidden noise"
>
    <!-- Decorative background elements -->
    <div
        class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0"
    >
        <div
            class="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-primary/20 rounded-full blur-[120px] mix-blend-screen opacity-50 animate-pulse"
        ></div>
        <div
            class="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-secondary/30 rounded-full blur-[140px] mix-blend-screen opacity-40"
        ></div>
        <div
            class="absolute top-[30%] left-[20%] w-[30vw] h-[30vw] bg-primary/10 rounded-full blur-[100px] mix-blend-screen opacity-60"
        ></div>
    </div>

    <div
        class="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl min-h-screen flex flex-col"
    >
        <!-- Top Navigation Area -->
        <div class="py-6 sm:py-8 shrink-0 flex items-center">
            <a
                href="/"
                class="inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-white/10 transition-all group backdrop-blur-sm"
            >
                <ArrowLeft
                    class="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1"
                />
                Kembali ke Beranda
            </a>
        </div>

        <!-- Centered Content Area -->
        <div
            class="flex-1 flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-24 pb-12"
        >
            <!-- Left side: Branding / Visual -->
            <div
                class="hidden md:flex flex-col items-start justify-center max-w-md w-full"
                style="animation: fade-up 0.8s ease-out forwards;"
            >
                <div class="inline-flex items-center mb-8">
                    <img
                        src="/assets/logopng.png"
                        alt="Kodeflow Tech"
                        class="h-12 w-auto object-contain"
                    />
                </div>
                <h1
                    class="text-4xl lg:text-5xl font-display font-bold leading-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/70"
                >
                    Selamat Datang Kembali
                </h1>
                <p class="text-muted-foreground text-lg mb-8 leading-relaxed">
                    Akses dashboard admin Anda untuk mengelola konten, layanan,
                    dan analitik secara real-time.
                </p>
            </div>

            <!-- Right side: Login Form -->
            <div
                class="w-full max-w-md"
                style="animation: fade-up 1s ease-out 0.2s forwards; opacity: 0;"
            >
                <div
                    class="liquid-glass-strong rounded-3xl p-8 sm:p-10 w-full backdrop-blur-xl border border-white/10 shadow-2xl"
                >
                    <div
                        class="md:hidden flex flex-col items-center text-center mb-8"
                    >
                        <img
                            src="/assets/logopng.png"
                            alt="Kodeflow Tech"
                            class="h-10 w-auto object-contain mb-6"
                        />
                        <h2 class="text-3xl font-display font-bold">
                            Masuk ke Sistem
                        </h2>
                    </div>

                    <form on:submit|preventDefault={submit} class="space-y-6">
                        <div class="space-y-2">
                            <label
                                for="email"
                                class="text-sm font-medium text-foreground/80 pl-1"
                                >Email / Alamat Surel</label
                            >
                            <div class="relative group">
                                <div
                                    class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-muted-foreground group-focus-within:text-primary transition-colors"
                                >
                                    <Mail class="w-5 h-5" />
                                </div>
                                <input
                                    id="email"
                                    type="email"
                                    bind:value={form.email}
                                    class="w-full pl-11 pr-4 py-3.5 bg-black/20 border border-white/10 rounded-xl text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                    placeholder="admin@kodeflow.com"
                                    required
                                    autofocus
                                />
                            </div>
                            {#if errors.email || form.errors.email}
                                <p class="text-destructive text-sm mt-1 pl-1">
                                    {errors.email || form.errors.email}
                                </p>
                            {/if}
                        </div>

                        <div class="space-y-2">
                            <div class="flex items-center justify-between pl-1">
                                <label
                                    for="password"
                                    class="text-sm font-medium text-foreground/80"
                                    >Kata Sandi</label
                                >
                            </div>
                            <div class="relative group">
                                <div
                                    class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-muted-foreground group-focus-within:text-primary transition-colors"
                                >
                                    <Lock class="w-5 h-5" />
                                </div>
                                <input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    bind:value={form.password}
                                    class="w-full pl-11 pr-12 py-3.5 bg-black/20 border border-white/10 rounded-xl text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                    placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
                                    required
                                />
                                <button
                                    type="button"
                                    class="absolute inset-y-0 right-0 pr-4 flex items-center text-muted-foreground hover:text-foreground focus:outline-none transition-colors"
                                    on:click={() =>
                                        (showPassword = !showPassword)}
                                >
                                    {#if showPassword}
                                        <EyeOff class="w-5 h-5" />
                                    {:else}
                                        <Eye class="w-5 h-5" />
                                    {/if}
                                </button>
                            </div>
                            {#if errors.password || form.errors.password}
                                <p class="text-destructive text-sm mt-1 pl-1">
                                    {errors.password || form.errors.password}
                                </p>
                            {/if}
                        </div>

                        <div class="flex items-center">
                            <label
                                class="flex items-center cursor-pointer group"
                            >
                                <div
                                    class="relative flex items-center justify-center"
                                >
                                    <input
                                        type="checkbox"
                                        bind:checked={form.remember}
                                        class="sr-only peer"
                                    />
                                    <div
                                        class="w-5 h-5 rounded border border-white/20 bg-black/20 peer-checked:bg-primary peer-checked:border-primary transition-colors flex items-center justify-center"
                                    >
                                        <svg
                                            class="w-3.5 h-3.5 text-primary-foreground transition-opacity {form.remember
                                                ? 'opacity-100'
                                                : 'opacity-0'}"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="3"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            ><polyline points="20 6 9 17 4 12"
                                            ></polyline></svg
                                        >
                                    </div>
                                </div>
                                <span
                                    class="ml-3 text-sm text-foreground/80 group-hover:text-foreground transition-colors"
                                    >Ingat Saya</span
                                >
                            </label>
                        </div>

                        <div class="pt-2">
                            <button
                                type="submit"
                                disabled={form.processing}
                                class="w-full relative group overflow-hidden bg-primary text-primary-foreground rounded-xl px-6 py-4 text-base font-bold tracking-wide transition-all duration-300 shadow-[0_0_30px_rgba(var(--primary),0.3)] hover:shadow-[0_0_40px_rgba(var(--primary),0.5)] hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                            >
                                <div
                                    class="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"
                                ></div>
                                <span
                                    class="relative flex items-center justify-center gap-2"
                                >
                                    {#if form.processing}
                                        <svg
                                            class="animate-spin -ml-1 mr-2 h-5 w-5 text-current"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <circle
                                                class="opacity-25"
                                                cx="12"
                                                cy="12"
                                                r="10"
                                                stroke="currentColor"
                                                stroke-width="4"
                                            ></circle>
                                            <path
                                                class="opacity-75"
                                                fill="currentColor"
                                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                            ></path>
                                        </svg>
                                        Memproses...
                                    {:else}
                                        <LogIn class="w-5 h-5" />
                                        Masuk
                                    {/if}
                                </span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
