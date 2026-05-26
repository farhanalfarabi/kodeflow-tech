<script>
    import { onMount } from "svelte";
    import { Link, page, router } from "@inertiajs/svelte";
    import {
        LayoutDashboard,
        FileText,
        Settings,
        LogOut,
        Search,
        Bell,
        Sun,
        Moon,
        Users,
        Image as ImageIcon,
        Globe,
        Briefcase,
        ChevronLeft,
        ChevronRight,
    } from "lucide-svelte";

    export let title = "Dashboard";

    let isSidebarCollapsed = typeof window !== "undefined" ? localStorage.getItem("sidebarCollapsed") === "true" : false;

    const menuItems = [
        { icon: LayoutDashboard, label: "Analytics", href: "/admin/analytics" },
        { icon: FileText, label: "Blogs", href: "/admin/blogs" },
        { icon: Briefcase, label: "Portofolio", href: "/admin/portfolios" },
        { icon: ImageIcon, label: "Pustaka Media", href: "/admin/media" },
        { icon: Users, label: "Leads", href: "/admin/leads" },
        { icon: Settings, label: "Settings", href: "/admin/settings" },
    ];

    let isDarkMode = true;
    let isMobileMenuOpen = false;

    onMount(() => {
        if (localStorage.theme === "light") {
            isDarkMode = false;
            document.documentElement.setAttribute("data-theme", "light");
        } else {
            isDarkMode = true;
            document.documentElement.removeAttribute("data-theme");
        }
    });

    function toggleSidebar() {
        isSidebarCollapsed = !isSidebarCollapsed;
        localStorage.sidebarCollapsed = isSidebarCollapsed.toString();
    }

    function toggleTheme() {
        isDarkMode = !isDarkMode;
        if (isDarkMode) {
            document.documentElement.removeAttribute("data-theme");
            localStorage.theme = "dark";
        } else {
            document.documentElement.setAttribute("data-theme", "light");
            localStorage.theme = "light";
        }
    }
</script>

<svelte:head>
    <title>{title} — Kodeflow Admin</title>
</svelte:head>

<div
    class="h-screen bg-background text-foreground flex overflow-hidden font-body"
>
    <!-- Sidebar -->
    <aside
        class="h-full border-r border-border bg-card/50 backdrop-blur-xl flex flex-col hidden md:flex shrink-0 overflow-y-auto transition-all duration-300 {isSidebarCollapsed
            ? 'w-20'
            : 'w-64'}"
    >
        <div
            class="h-16 flex items-center justify-between border-b border-border shrink-0 {isSidebarCollapsed
                ? 'px-4'
                : 'px-6'}"
        >
            {#if !isSidebarCollapsed}
                <img
                    src={isDarkMode
                        ? "/assets/logopng.png"
                        : "/assets/logo&teks.png"}
                    alt="Kodeflow Admin"
                    class="w-auto transition-all {isDarkMode ? 'h-6' : 'h-8'}"
                />
            {:else}
                <img src="/assets/k.png" alt="K" class="w-auto h-6 shrink-0" />
            {/if}
            <button
                on:click={toggleSidebar}
                class="text-foreground/50 hover:text-foreground transition-colors p-1.5 rounded-md hover:bg-foreground/5 cursor-pointer shrink-0"
                title={isSidebarCollapsed
                    ? "Expand Sidebar"
                    : "Collapse Sidebar"}
            >
                {#if isSidebarCollapsed}
                    <ChevronRight class="size-5" />
                {:else}
                    <ChevronLeft class="size-5" />
                {/if}
            </button>
        </div>

        <nav
            class="flex-1 py-6 flex flex-col gap-2 {isSidebarCollapsed
                ? 'px-3'
                : 'px-4'}"
        >
            <span
                class="text-xs font-display font-bold text-foreground/40 uppercase tracking-widest px-2 mb-2 transition-all {isSidebarCollapsed
                    ? 'text-center text-[10px] opacity-50'
                    : ''}"
            >
                {isSidebarCollapsed ? "Menu" : "Management"}
            </span>

            {#each menuItems as item}
                <Link
                    href={item.href}
                    title={isSidebarCollapsed ? item.label : undefined}
                    class="flex items-center gap-3 py-2.5 rounded-xl transition-all font-medium text-sm overflow-hidden {isSidebarCollapsed
                        ? 'px-0 justify-center'
                        : 'px-3'} {page.url === item.href ||
                    (page.url.startsWith(item.href) && item.href !== '/admin')
                        ? 'bg-primary text-white shadow-md shadow-primary/20'
                        : 'text-foreground/70 hover:bg-foreground/5 hover:text-foreground'}"
                >
                    <svelte:component
                        this={item.icon}
                        class="size-5 shrink-0"
                    />
                    {#if !isSidebarCollapsed}
                        <span class="truncate">{item.label}</span>
                    {/if}
                </Link>
            {/each}
        </nav>

        <div
            class="border-t border-border flex flex-col gap-2 {isSidebarCollapsed
                ? 'p-3'
                : 'p-4'}"
        >
            <Link
                href="/"
                title={isSidebarCollapsed ? "Back to Website" : undefined}
                class="flex items-center gap-3 py-2.5 rounded-xl transition-all font-medium text-sm text-foreground/70 hover:bg-foreground/5 hover:text-foreground w-full mb-1 overflow-hidden {isSidebarCollapsed
                    ? 'px-0 justify-center'
                    : 'px-3'}"
            >
                <Globe class="size-5 shrink-0" />
                {#if !isSidebarCollapsed}
                    <span class="truncate">Back to Website</span>
                {/if}
            </Link>
            <button
                on:click={toggleTheme}
                title={isSidebarCollapsed
                    ? isDarkMode
                        ? "Switch to Light Mode"
                        : "Switch to Dark Mode"
                    : undefined}
                class="flex items-center gap-3 py-2.5 rounded-xl transition-all font-medium text-sm text-foreground/70 hover:bg-foreground/5 hover:text-foreground w-full cursor-pointer overflow-hidden {isSidebarCollapsed
                    ? 'px-0 justify-center'
                    : 'px-3'}"
            >
                {#if isDarkMode}
                    <Sun class="size-5 shrink-0" />
                    {#if !isSidebarCollapsed}<span class="truncate"
                            >Light Mode</span
                        >{/if}
                {:else}
                    <Moon class="size-5 shrink-0" />
                    {#if !isSidebarCollapsed}<span class="truncate"
                            >Dark Mode</span
                        >{/if}
                {/if}
            </button>

            <div
                class="flex items-center justify-between rounded-xl bg-foreground/5 border border-border/50 {isSidebarCollapsed
                    ? 'p-1.5 flex-col gap-2'
                    : 'p-2 mt-2'}"
            >
                <div
                    class="flex items-center gap-3 overflow-hidden {isSidebarCollapsed
                        ? 'w-full justify-center'
                        : ''}"
                >
                    <img
                        src={`https://ui-avatars.com/api/?name=${encodeURIComponent(page.props.auth.user?.name || "Admin")}&background=random&color=fff`}
                        alt="Admin"
                        class="size-8 rounded-full border border-border shrink-0"
                    />
                    {#if !isSidebarCollapsed}
                        <div class="flex flex-col truncate">
                            <span
                                class="text-sm font-semibold leading-tight truncate"
                                >{page.props.auth.user?.name || "Admin"}</span
                            >
                            <span
                                class="text-[10px] text-foreground/50 truncate"
                                >{page.props.auth.user?.email ||
                                    "Superadmin"}</span
                            >
                        </div>
                    {/if}
                </div>
                <button
                    on:click={() => router.post("/logout")}
                    class="p-2 text-destructive hover:bg-destructive/10 rounded-lg transition-colors shrink-0 cursor-pointer {isSidebarCollapsed
                        ? 'w-full flex justify-center'
                        : ''}"
                    title="Logout"
                >
                    <LogOut class="size-5" />
                </button>
            </div>
        </div>
    </aside>

    <!-- Mobile Menu Drawer (Premium Sliding Design) -->
    {#if isMobileMenuOpen}
        <div
            class="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 md:hidden transition-all duration-300"
            on:click={() => (isMobileMenuOpen = false)}
        ></div>

        <aside
            class="fixed inset-y-0 left-0 w-64 bg-card/95 backdrop-blur-xl border-r border-border z-50 flex flex-col md:hidden transition-all duration-300 shadow-2xl animate-fade-in"
        >
            <div
                class="h-16 flex items-center justify-between px-6 border-b border-border"
            >
                <img
                    src={isDarkMode
                        ? "/assets/logopng.png"
                        : "/assets/logo&teks.png"}
                    alt="Kodeflow Admin"
                    class="w-auto transition-all {isDarkMode ? 'h-6' : 'h-8'}"
                />
                <button
                    on:click={() => (isMobileMenuOpen = false)}
                    class="text-foreground/70 hover:text-foreground cursor-pointer"
                >
                    <svg
                        class="size-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
            </div>

            <nav class="flex-1 py-6 px-4 flex flex-col gap-2">
                <span
                    class="text-xs font-display font-bold text-foreground/40 uppercase tracking-widest px-2 mb-2"
                    >Management</span
                >

                {#each menuItems as item}
                    <Link
                        href={item.href}
                        on:click={() => (isMobileMenuOpen = false)}
                        class="flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all font-medium text-sm {page.url ===
                            item.href ||
                        (page.url.startsWith(item.href) &&
                            item.href !== '/admin')
                            ? 'bg-primary text-white shadow-md shadow-primary/20'
                            : 'text-foreground/70 hover:bg-foreground/5 hover:text-foreground'}"
                    >
                        <svelte:component this={item.icon} class="size-4" />
                        {item.label}
                    </Link>
                {/each}
            </nav>

            <div class="p-4 border-t border-border flex flex-col gap-2">
                <button
                    on:click={toggleTheme}
                    class="flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all font-medium text-sm text-foreground/70 hover:bg-foreground/5 hover:text-foreground w-full cursor-pointer"
                >
                    {#if isDarkMode}
                        <Sun class="size-4" />
                        Switch to Light Mode
                    {:else}
                        <Moon class="size-4" />
                        Switch to Dark Mode
                    {/if}
                </button>

                <Link
                    href="/"
                    on:click={() => (isMobileMenuOpen = false)}
                    class="flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all font-medium text-sm text-foreground/70 hover:bg-foreground/5 hover:text-foreground w-full mb-2"
                >
                    <Globe class="size-4" />
                    Back to Website
                </Link>

                <div
                    class="flex items-center justify-between p-2 rounded-xl bg-foreground/5 border border-border/50"
                >
                    <div class="flex items-center gap-3 overflow-hidden">
                        <img
                            src={`https://ui-avatars.com/api/?name=${encodeURIComponent(page.props.auth.user?.name || "Admin")}&background=random&color=fff`}
                            alt="Admin"
                            class="size-8 rounded-full border border-border shrink-0"
                        />
                        <div class="flex flex-col truncate">
                            <span
                                class="text-sm font-semibold leading-tight truncate"
                                >{page.props.auth.user?.name || "Admin"}</span
                            >
                            <span
                                class="text-[10px] text-foreground/50 truncate"
                                >{page.props.auth.user?.email ||
                                    "Superadmin"}</span
                            >
                        </div>
                    </div>
                    <button
                        on:click={() => {
                            isMobileMenuOpen = false;
                            router.post("/logout");
                        }}
                        class="p-2 text-destructive hover:bg-destructive/10 rounded-lg transition-colors shrink-0 cursor-pointer"
                        title="Logout"
                    >
                        <LogOut class="size-4" />
                    </button>
                </div>
            </div>
        </aside>
    {/if}

    <!-- Main Content Area -->
    <div class="flex-1 flex flex-col max-w-full overflow-hidden h-full">
        <!-- Mobile Topbar -->
        <header
            class="md:hidden h-16 border-b border-border bg-card/50 backdrop-blur-xl flex items-center justify-between px-6 shrink-0 z-10 sticky top-0"
        >
            <div class="flex items-center gap-4">
                <!-- Mobile menu toggle -->
                <button
                    on:click={() => (isMobileMenuOpen = true)}
                    class="text-foreground/70 hover:text-foreground cursor-pointer"
                    aria-label="Open sidebar"
                >
                    <svg
                        class="size-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        ><path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        ></path></svg
                    >
                </button>
                <h1 class="font-display text-lg font-bold text-foreground">
                    {title}
                </h1>
            </div>
        </header>

        <!-- Page Content -->
        <main
            class="flex-1 overflow-y-auto p-6 md:p-8 bg-background/50 relative"
        >
            <!-- Background decorative glow -->
            <div
                class="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[100px] rounded-full pointer-events-none -z-10"
            ></div>

            <slot />
        </main>
    </div>
</div>
