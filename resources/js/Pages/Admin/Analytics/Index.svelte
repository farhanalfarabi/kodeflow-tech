<script>
    import AdminLayout from "../../../Layouts/AdminLayout.svelte";
    import { 
        Users, 
        Eye, 
        Clock, 
        Activity,
        TrendingUp, 
        TrendingDown, 
        ArrowUpRight, 
        Globe, 
        Laptop, 
        Smartphone, 
        Tablet,
        Monitor
    } from "lucide-svelte";
    import { router } from '@inertiajs/svelte';
    import Select from '@/Components/ui/Select.svelte';

    export let isConnected = false;
    export let errorMessage = null;
    export let hasError = false;
    export let currentPeriod = 7;
    export let deviceData = { mobile: 54, desktop: 42, tablet: 4 };

    const periodOptions = [
        { value: 7, label: "Last 7 Days" },
        { value: 30, label: "Last 30 Days" },
        { value: 365, label: "This Year" }
    ];

    function handlePeriodChange(e) {
        router.get('/admin/analytics', { period: e.detail }, {
            preserveState: true,
            preserveScroll: true
        });
    }

    // Mock data for display (used as fallback if API fails)
    export let stats = [
        { title: "Total Visitors", value: "124,592", trend: "+12.5%", isUp: true, icon: Users, color: "text-blue-500", bg: "bg-blue-500/10" },
        { title: "Page Views", value: "482,901", trend: "+24.1%", isUp: true, icon: Eye, color: "text-primary", bg: "bg-primary/10" },
        { title: "Bounce Rate", value: "42.3%", trend: "-2.4%", isUp: true, icon: Activity, color: "text-emerald-500", bg: "bg-emerald-500/10" },
        { title: "Avg. Session Duration", value: "2m 45s", trend: "-0.5%", isUp: false, icon: Clock, color: "text-amber-500", bg: "bg-amber-500/10" }
    ];

    export let topPages = [
        { path: "/", views: "145K", percentage: "35%" },
        { path: "/services", views: "82K", percentage: "20%" },
        { path: "/about", views: "45K", percentage: "11%" },
        { path: "/blogs/best-frameworks-2026", views: "32K", percentage: "8%" },
        { path: "/contact", views: "21K", percentage: "5%" }
    ];

    export let trafficSources = [
        { name: "Organic Search", users: "65%", color: "bg-primary" },
        { name: "Direct", users: "20%", color: "bg-blue-500" },
        { name: "Social Media", users: "10%", color: "bg-emerald-500" },
        { name: "Referral", users: "5%", color: "bg-amber-500" }
    ];

    // Additional GA4 Reports Props
    export let topCountries = [
        { country: "Indonesia", views: "95K", percentage: "76%" },
        { country: "Singapore", views: "15K", percentage: "12%" },
        { country: "United States", views: "8K", percentage: "6%" },
        { country: "Malaysia", views: "4K", percentage: "3%" },
        { country: "Japan", views: "3K", percentage: "3%" }
    ];

    export let topBrowsers = [
        { browser: "Chrome", views: "85K", percentage: "68%" },
        { browser: "Safari", views: "25K", percentage: "20%" },
        { browser: "Edge", views: "8K", percentage: "6%" },
        { browser: "Firefox", views: "5K", percentage: "4%" },
        { browser: "Other", views: "2K", percentage: "2%" }
    ];

    export let topOperatingSystems = [
        { os: "Windows", views: "55K", percentage: "44%" },
        { os: "Android", views: "35K", percentage: "28%" },
        { os: "iOS", views: "20K", percentage: "16%" },
        { os: "macOS", views: "12K", percentage: "10%" },
        { os: "Linux", views: "3K", percentage: "2%" }
    ];

    let activeTab = "countries";

    // Mock chart data (heights for bars in percentage)
    export let chartData = [
        { day: 'Mon', visitors: 1500, pageViews: 3800, visitorsHeight: 30, pageViewsHeight: 76 },
        { day: 'Tue', visitors: 1800, pageViews: 4200, visitorsHeight: 36, pageViewsHeight: 84 },
        { day: 'Wed', visitors: 1200, pageViews: 3100, visitorsHeight: 24, pageViewsHeight: 62 },
        { day: 'Thu', visitors: 2200, pageViews: 4900, visitorsHeight: 44, pageViewsHeight: 98 },
        { day: 'Fri', visitors: 1900, pageViews: 4000, visitorsHeight: 38, pageViewsHeight: 80 },
        { day: 'Sat', visitors: 800, pageViews: 1800, visitorsHeight: 16, pageViewsHeight: 36 },
        { day: 'Sun', visitors: 1000, pageViews: 2200, visitorsHeight: 20, pageViewsHeight: 44 }
    ];
    const statIcons = {
        'Users': Users,
        'Eye': Eye,
        'Activity': Activity,
        'Clock': Clock
    };
</script>

<AdminLayout title="Analytics Overview">
    <div class="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
            <h2 class="text-3xl font-display font-bold text-foreground">Analytics Overview</h2>
            <p class="text-foreground/60 text-sm mt-1">
                Monitor your website's performance. 
            </p>
        </div>
        
        {#if isConnected}
            <div class="flex items-center gap-2 bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 px-4 py-2 rounded-xl text-sm shadow-sm">
                <span class="size-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span class="font-medium">Connected to Google Analytics</span>
            </div>
        {:else}
            <div class="flex items-center gap-2 bg-rose-500/10 text-rose-600 border border-rose-500/20 px-4 py-2 rounded-xl text-sm shadow-sm max-w-sm">
                <span class="size-2 rounded-full bg-rose-500 shrink-0"></span>
                <span class="font-medium text-xs leading-tight">
                    {errorMessage || 'Not connected. Using mock data.'}
                </span>
            </div>
        {/if}
    </div>

    <!-- Stats Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {#each stats as stat}
            <div class="bg-card border border-border rounded-2xl p-5 shadow-sm hover:shadow-md transition-all group">
                <div class="flex items-start justify-between mb-4">
                    <div class="p-3 rounded-xl {stat.bg} {stat.color} transition-transform group-hover:scale-110">
                        <svelte:component this={statIcons[stat.icon]} class="size-5" />
                    </div>
                    <div class="flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full {stat.isUp ? 'text-emerald-500 bg-emerald-500/10' : 'text-rose-500 bg-rose-500/10'}">
                        {#if stat.isUp}
                            <TrendingUp class="size-3" />
                        {:else}
                            <TrendingDown class="size-3" />
                        {/if}
                        {stat.trend}
                    </div>
                </div>
                <div>
                    <h3 class="text-foreground/60 text-sm font-medium mb-1">{stat.title}</h3>
                    <p class="text-2xl font-display font-bold text-foreground">{stat.value}</p>
                </div>
            </div>
        {/each}
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <!-- Main Chart -->
        <div class="lg:col-span-2 bg-card border border-border rounded-2xl p-6 shadow-sm flex flex-col justify-between">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                <div>
                    <h3 class="text-lg font-display font-bold">Traffic Overview</h3>
                    <p class="text-sm text-foreground/50">Visitors vs page views</p>
                </div>
                <div class="flex items-center gap-6">
                    <!-- Legend -->
                    <div class="flex items-center gap-4 text-xs font-medium">
                        <div class="flex items-center gap-1.5">
                            <span class="size-2 rounded-full bg-blue-500"></span>
                            <span class="text-foreground/60">Visitors</span>
                        </div>
                        <div class="flex items-center gap-1.5">
                            <span class="size-2 rounded-full bg-primary"></span>
                            <span class="text-foreground/60">Page Views</span>
                        </div>
                    </div>
                    <!-- Period Select -->
                    <div class="w-36 z-20">
                        <Select 
                            options={periodOptions} 
                            value={currentPeriod} 
                            on:change={handlePeriodChange} 
                        />
                    </div>
                </div>
            </div>
            
            <!-- Grouped Bar Chart -->
            <div class="flex-1 min-h-[250px] flex items-end justify-between gap-2 pt-10 relative">
                <!-- Y-axis lines -->
                <div class="absolute inset-0 flex flex-col justify-between pointer-events-none text-xs text-foreground/30 pb-6">
                    <div class="border-b border-border border-dashed w-full flex-1 flex items-start"></div>
                    <div class="border-b border-border border-dashed w-full flex-1 flex items-start"></div>
                    <div class="border-b border-border border-dashed w-full flex-1 flex items-start"></div>
                    <div class="w-full flex-1 flex items-start"></div>
                </div>
                
                {#each chartData as data}
                    <div class="flex flex-col items-center gap-2 flex-1 z-10 group cursor-pointer relative h-full justify-end">
                        <!-- Premium Dual Tooltip Card -->
                        <div class="absolute -top-16 opacity-0 group-hover:opacity-100 transition-all duration-200 scale-95 group-hover:scale-100 bg-background/95 backdrop-blur-md border border-border p-2.5 rounded-xl shadow-lg pointer-events-none z-30 flex flex-col gap-1 text-xs min-w-[120px]">
                            <span class="font-bold text-foreground mb-0.5">{data.day}</span>
                            <div class="flex items-center justify-between gap-4">
                                <span class="flex items-center gap-1 text-foreground/60">
                                    <span class="size-1.5 rounded-full bg-blue-500"></span>
                                    Visitors
                                </span>
                                <span class="font-bold text-foreground">{data.visitors.toLocaleString()}</span>
                            </div>
                            <div class="flex items-center justify-between gap-4">
                                <span class="flex items-center gap-1 text-foreground/60">
                                    <span class="size-1.5 rounded-full bg-primary"></span>
                                    Views
                                </span>
                                <span class="font-bold text-foreground">{data.pageViews.toLocaleString()}</span>
                            </div>
                        </div>

                        <!-- Grouped Bars container -->
                        <div class="flex items-end gap-1 w-full max-w-[50px] h-full justify-center">
                            <!-- Visitors Bar -->
                            <div class="w-2.5 bg-blue-500/5 hover:bg-blue-500/10 rounded-t-full relative h-full flex items-end transition-colors">
                                <div class="w-full bg-blue-500 rounded-t-full transition-all duration-500 hover:bg-blue-400" style="height: {data.visitorsHeight}%"></div>
                            </div>
                            <!-- Page Views Bar -->
                            <div class="w-2.5 bg-primary/5 hover:bg-primary/10 rounded-t-full relative h-full flex items-end transition-colors">
                                <div class="w-full bg-primary rounded-t-full transition-all duration-500 hover:bg-primary/80" style="height: {data.pageViewsHeight}%"></div>
                            </div>
                        </div>

                        <span class="text-xs font-semibold text-foreground/60 mt-1">{data.day}</span>
                    </div>
                {/each}
            </div>
        </div>

        <!-- Traffic Sources -->
        <div class="bg-card border border-border rounded-2xl p-6 shadow-sm flex flex-col">
            <h3 class="text-lg font-display font-bold mb-1">Traffic Sources</h3>
            <p class="text-sm text-foreground/50 mb-6">Where your users are coming from</p>
            
            <div class="flex flex-col gap-5 flex-1">
                {#each trafficSources as source}
                    <div>
                        <div class="flex justify-between text-sm mb-2">
                            <span class="font-medium text-foreground">{source.name}</span>
                            <span class="font-bold">{source.users}</span>
                        </div>
                        <div class="h-2 w-full bg-foreground/5 rounded-full overflow-hidden">
                            <div class="h-full rounded-full {source.color}" style="width: {source.users}"></div>
                        </div>
                    </div>
                {/each}
            </div>

            <div class="mt-8 pt-6 border-t border-border">
                <h4 class="text-sm font-bold mb-4">Device Breakdown</h4>
                <div class="grid grid-cols-1 gap-4">
                    <div class="flex items-center gap-3">
                        <div class="p-2 bg-blue-500/10 text-blue-500 rounded-lg">
                            <Smartphone class="size-5" />
                        </div>
                        <div class="flex flex-col">
                            <span class="text-xs font-medium text-foreground/60">Smartphone</span>
                            <span class="text-sm font-bold">{deviceData.mobile}%</span>
                        </div>
                    </div>
                    <div class="flex items-center gap-3">
                        <div class="p-2 bg-primary/10 text-primary rounded-lg">
                            <Laptop class="size-5" />
                        </div>
                        <div class="flex flex-col">
                            <span class="text-xs font-medium text-foreground/60">Laptop</span>
                            <span class="text-sm font-bold">{deviceData.desktop}%</span>
                        </div>
                    </div>
                    <div class="flex items-center gap-3">
                        <div class="p-2 bg-emerald-500/10 text-emerald-500 rounded-lg">
                            <Tablet class="size-5" />
                        </div>
                        <div class="flex flex-col">
                            <span class="text-xs font-medium text-foreground/60">Tablet</span>
                            <span class="text-sm font-bold">{deviceData.tablet}%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Bottom Balanced Layout: Most Visited Pages (Left) & Audience/Tech Tabs (Right) -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <!-- Top Pages Table -->
        <div class="bg-card border border-border rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between">
            <div>
                <div class="p-6 border-b border-border flex items-center justify-between">
                    <div>
                        <h3 class="text-lg font-display font-bold">Most Visited Pages</h3>
                        <p class="text-sm text-foreground/50">Pages with the highest traffic volume</p>
                    </div>
                </div>
                <div class="overflow-x-auto">
                    <table class="w-full text-left border-collapse">
                        <thead>
                            <tr class="bg-foreground/5 text-foreground/60 text-xs uppercase tracking-wider font-display">
                                <th class="px-6 py-4 font-medium">Page Path</th>
                                <th class="px-6 py-4 font-medium text-right">Page Views</th>
                                <th class="px-6 py-4 font-medium text-right">% of Total</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-border">
                            {#each topPages as page}
                                <tr class="hover:bg-foreground/[0.02] transition-colors group">
                                    <td class="px-6 py-4 flex items-center gap-2 max-w-[200px] truncate">
                                        <Globe class="size-4 text-foreground/40 shrink-0" />
                                        <a href={page.path} target="_blank" class="font-medium text-foreground hover:text-primary transition-colors truncate" title={page.path}>
                                            {page.path}
                                        </a>
                                    </td>
                                    <td class="px-6 py-4 text-right font-bold text-foreground/80">{page.views}</td>
                                    <td class="px-6 py-4 text-right">
                                        <div class="flex items-center justify-end gap-3">
                                            <span class="text-sm font-medium text-foreground/70">{page.percentage}</span>
                                        </div>
                                    </td>
                                </tr>
                            {/each}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <!-- Demographics & Tech Tabbed Widget -->
        <div class="bg-card border border-border rounded-2xl p-6 shadow-sm flex flex-col justify-between">
            <div>
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                    <div>
                        <h3 class="text-lg font-display font-bold">Audience Profile</h3>
                        <p class="text-sm text-foreground/50">Demographics & technology breakdowns</p>
                    </div>
                    <!-- Glassmorphic Tab triggers -->
                    <div class="flex bg-foreground/5 p-1 rounded-xl gap-1 self-start sm:self-auto border border-border">
                        <button 
                            class="px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer {activeTab === 'countries' ? 'bg-background text-foreground shadow-sm' : 'text-foreground/60 hover:text-foreground hover:bg-foreground/5'}"
                            on:click={() => activeTab = 'countries'}
                        >
                            Countries
                        </button>
                        <button 
                            class="px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer {activeTab === 'browsers' ? 'bg-background text-foreground shadow-sm' : 'text-foreground/60 hover:text-foreground hover:bg-foreground/5'}"
                            on:click={() => activeTab = 'browsers'}
                        >
                            Browsers
                        </button>
                        <button 
                            class="px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer {activeTab === 'os' ? 'bg-background text-foreground shadow-sm' : 'text-foreground/60 hover:text-foreground hover:bg-foreground/5'}"
                            on:click={() => activeTab = 'os'}
                        >
                            OS
                        </button>
                    </div>
                </div>

                <!-- Tab Contents -->
                <div class="flex flex-col gap-5">
                    {#if activeTab === 'countries'}
                        {#each topCountries as item}
                            <div class="flex flex-col gap-1.5 group">
                                <div class="flex justify-between text-sm">
                                    <span class="font-medium text-foreground flex items-center gap-2">
                                        <Globe class="size-4 text-blue-500/70 transition-transform group-hover:scale-110" />
                                        {item.country}
                                    </span>
                                    <div class="flex items-center gap-2">
                                        <span class="text-foreground/60 text-xs">{item.views} views</span>
                                        <span class="font-bold text-foreground">{item.percentage}</span>
                                    </div>
                                </div>
                                <div class="h-2 w-full bg-foreground/5 rounded-full overflow-hidden">
                                    <div class="h-full bg-blue-500 rounded-full transition-all duration-500" style="width: {item.percentage}"></div>
                                </div>
                            </div>
                        {/each}
                    {:else if activeTab === 'browsers'}
                        {#each topBrowsers as item}
                            <div class="flex flex-col gap-1.5 group">
                                <div class="flex justify-between text-sm">
                                    <span class="font-medium text-foreground flex items-center gap-2">
                                        <Globe class="size-4 text-emerald-500/70 transition-transform group-hover:scale-110" />
                                        {item.browser}
                                    </span>
                                    <div class="flex items-center gap-2">
                                        <span class="text-foreground/60 text-xs">{item.views} views</span>
                                        <span class="font-bold text-foreground">{item.percentage}</span>
                                    </div>
                                </div>
                                <div class="h-2 w-full bg-foreground/5 rounded-full overflow-hidden">
                                    <div class="h-full bg-emerald-500 rounded-full transition-all duration-500" style="width: {item.percentage}"></div>
                                </div>
                            </div>
                        {/each}
                    {:else if activeTab === 'os'}
                        {#each topOperatingSystems as item}
                            <div class="flex flex-col gap-1.5 group">
                                <div class="flex justify-between text-sm">
                                    <span class="font-medium text-foreground flex items-center gap-2">
                                        <Monitor class="size-4 text-purple-500/70 transition-transform group-hover:scale-110" />
                                        {item.os}
                                    </span>
                                    <div class="flex items-center gap-2">
                                        <span class="text-foreground/60 text-xs">{item.views} views</span>
                                        <span class="font-bold text-foreground">{item.percentage}</span>
                                    </div>
                                </div>
                                <div class="h-2 w-full bg-foreground/5 rounded-full overflow-hidden">
                                    <div class="h-full bg-purple-500 rounded-full transition-all duration-500" style="width: {item.percentage}"></div>
                                </div>
                            </div>
                        {/each}
                    {/if}
                </div>
            </div>
        </div>
    </div>
</AdminLayout>
