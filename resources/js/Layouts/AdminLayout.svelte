<script>
  import { Link, page } from "@inertiajs/svelte";
  import { LayoutDashboard, FileText, Settings, LogOut, Search, Bell } from "lucide-svelte";

  export let title = "Dashboard";

  const menuItems = [
    { icon: LayoutDashboard, label: "Overview", href: "/admin" },
    { icon: FileText, label: "Blogs", href: "/admin/blogs" },
    { icon: Settings, label: "Settings", href: "/admin/settings" },
  ];
</script>

<svelte:head>
  <title>{title} — Kodeflow Admin</title>
</svelte:head>

<div class="min-h-screen bg-background text-foreground flex overflow-hidden font-body">
  
  <!-- Sidebar -->
  <aside class="w-64 border-r border-border bg-card/50 backdrop-blur-xl flex flex-col hidden md:flex shrink-0">
    <div class="h-16 flex items-center px-6 border-b border-border">
      <img src="/assets/logopng.png" alt="Kodeflow Admin" class="h-6 w-auto" />
    </div>

    <nav class="flex-1 py-6 px-4 flex flex-col gap-2">
      <span class="text-xs font-display font-bold text-foreground/40 uppercase tracking-widest px-2 mb-2">Management</span>
      
      {#each menuItems as item}
        <Link 
          href={item.href}
          class="flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all font-medium text-sm {page.url === item.href || (page.url.startsWith(item.href) && item.href !== '/admin') ? 'bg-primary text-primary-foreground shadow-md shadow-primary/20' : 'text-foreground/70 hover:bg-foreground/5 hover:text-foreground'}"
        >
          <svelte:component this={item.icon} class="size-4" />
          {item.label}
        </Link>
      {/each}
    </nav>

    <div class="p-4 border-t border-border">
      <button class="flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all font-medium text-sm text-destructive hover:bg-destructive/10 w-full">
        <LogOut class="size-4" />
        Logout
      </button>
    </div>
  </aside>

  <!-- Main Content Area -->
  <div class="flex-1 flex flex-col max-w-full overflow-hidden">
    
    <!-- Topbar -->
    <header class="h-16 border-b border-border bg-card/50 backdrop-blur-xl flex items-center justify-between px-6 shrink-0 z-10 sticky top-0">
      <div class="flex items-center gap-4">
        <!-- Mobile menu toggle (placeholder) -->
        <button class="md:hidden text-foreground/70">
          <svg class="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </button>
        <h1 class="font-display text-lg font-bold text-foreground">{title}</h1>
      </div>
      
      <div class="flex items-center gap-4">
        <div class="relative hidden md:block">
          <Search class="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-foreground/40" />
          <input type="text" placeholder="Search..." class="pl-9 pr-4 py-2 bg-foreground/5 border border-border rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 w-64 transition-all" />
        </div>
        
        <button class="size-9 rounded-full bg-foreground/5 border border-border flex items-center justify-center text-foreground/70 hover:text-foreground transition-colors relative">
          <Bell class="size-4" />
          <span class="absolute top-0 right-0 size-2.5 bg-primary rounded-full border-2 border-background"></span>
        </button>
        
        <div class="flex items-center gap-3 pl-4 border-l border-border">
          <img src="https://i.pravatar.cc/100?img=11" alt="Admin" class="size-8 rounded-full border border-border" />
          <div class="hidden lg:flex flex-col">
            <span class="text-sm font-semibold leading-tight">Admin Farhan</span>
            <span class="text-[10px] text-foreground/50">Superadmin</span>
          </div>
        </div>
      </div>
    </header>

    <!-- Page Content -->
    <main class="flex-1 overflow-y-auto p-6 md:p-8 bg-background/50 relative">
      <!-- Background decorative glow -->
      <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[100px] rounded-full pointer-events-none -z-10"></div>
      
      <slot />
    </main>
  </div>
</div>
