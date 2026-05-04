<script>
  import AdminLayout from "../../../Layouts/AdminLayout.svelte";
  import { Plus, Search, Edit2, Trash2, MoreVertical, Eye } from "lucide-svelte";
  import { Link } from "@inertiajs/svelte";

  // Mock Data (Reusing structure from frontend)
  let articles = [
    { id: 1, title: "Checklist Lengkap: Cara Pilih Vendor Software yang Bisa Dipercaya", category: "Panduan & Tips", author: "Farhan Alfarabi", date: "12 Apr 2025", status: "Published", views: 1240 },
    { id: 2, title: "Apa Itu IT Outsourcing dan Kapan Bisnis Anda Membutuhkannya?", category: "IT untuk Bisnis", author: "Rizky Firmansyah", date: "10 Apr 2025", status: "Published", views: 890 },
    { id: 3, title: "ERP Custom vs Spreadsheet: Tanda Sistem IT Perlu Diganti", category: "IT untuk Bisnis", author: "Ayu Lestari", date: "05 Apr 2025", status: "Draft", views: 0 },
    { id: 4, title: "Mengapa 70% Proyek IT Mengalami Keterlambatan?", category: "Insight Industri", author: "Farhan Alfarabi", date: "28 Mar 2025", status: "Published", views: 2100 },
  ];

  let searchQuery = "";
</script>

<AdminLayout title="Blog Management">
  <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
    <div>
      <h2 class="text-2xl font-display font-bold text-foreground">All Articles</h2>
      <p class="text-foreground/60 text-sm mt-1">Manage your blog posts, categories, and publications.</p>
    </div>
    <Link href="/admin/blogs/create" class="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-5 py-2.5 rounded-xl font-medium transition-all shadow-lg shadow-primary/20 whitespace-nowrap">
      <Plus class="size-4" />
      Create New Blog
    </Link>
  </div>

  <!-- Filters & Search -->
  <div class="bg-card border border-border rounded-2xl p-4 mb-6 flex flex-col sm:flex-row gap-4 justify-between items-center shadow-sm">
    <div class="flex items-center gap-2 w-full sm:w-auto">
      <div class="relative w-full sm:w-80">
        <Search class="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-foreground/40" />
        <input 
          type="text" 
          bind:value={searchQuery}
          placeholder="Search articles..." 
          class="w-full pl-9 pr-4 py-2 bg-foreground/5 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" 
        />
      </div>
      <button class="px-4 py-2 border border-border rounded-lg text-sm font-medium text-foreground/70 hover:bg-foreground/5 transition-colors whitespace-nowrap">
        Filter
      </button>
    </div>
    
    <div class="flex items-center gap-2 text-sm text-foreground/60">
      <span>Showing <span class="font-bold text-foreground">4</span> articles</span>
    </div>
  </div>

  <!-- Table Data -->
  <div class="bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
    <div class="overflow-x-auto">
      <table class="w-full text-left border-collapse">
        <thead>
          <tr class="border-b border-border bg-foreground/5 text-foreground/60 text-xs uppercase tracking-wider font-display">
            <th class="px-6 py-4 font-medium">Title</th>
            <th class="px-6 py-4 font-medium">Category</th>
            <th class="px-6 py-4 font-medium">Author</th>
            <th class="px-6 py-4 font-medium">Date</th>
            <th class="px-6 py-4 font-medium">Status</th>
            <th class="px-6 py-4 font-medium text-right">Actions</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-border">
          {#each articles as article}
            <tr class="hover:bg-foreground/[0.02] transition-colors group">
              <td class="px-6 py-4">
                <p class="font-medium text-foreground line-clamp-1">{article.title}</p>
                <div class="flex items-center gap-2 mt-1 text-xs text-foreground/50">
                  <Eye class="size-3" /> {article.views} views
                </div>
              </td>
              <td class="px-6 py-4 text-sm text-foreground/70">
                <span class="inline-flex px-2.5 py-1 rounded-md bg-foreground/5 border border-border text-xs font-medium">
                  {article.category}
                </span>
              </td>
              <td class="px-6 py-4 text-sm text-foreground/70">{article.author}</td>
              <td class="px-6 py-4 text-sm text-foreground/70">{article.date}</td>
              <td class="px-6 py-4">
                <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border {article.status === 'Published' ? 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20' : 'bg-amber-500/10 text-amber-500 border-amber-500/20'}">
                  <span class="size-1.5 rounded-full {article.status === 'Published' ? 'bg-emerald-500' : 'bg-amber-500'}"></span>
                  {article.status}
                </span>
              </td>
              <td class="px-6 py-4 text-right">
                <div class="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button class="p-1.5 text-foreground/50 hover:text-primary transition-colors rounded-md hover:bg-primary/10" title="Edit">
                    <Edit2 class="size-4" />
                  </button>
                  <button class="p-1.5 text-foreground/50 hover:text-destructive transition-colors rounded-md hover:bg-destructive/10" title="Delete">
                    <Trash2 class="size-4" />
                  </button>
                  <button class="p-1.5 text-foreground/50 hover:text-foreground transition-colors rounded-md hover:bg-foreground/10">
                    <MoreVertical class="size-4" />
                  </button>
                </div>
              </td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
    
    <!-- Pagination Footer -->
    <div class="p-4 border-t border-border flex items-center justify-between bg-foreground/[0.01]">
      <button class="px-4 py-2 border border-border rounded-lg text-sm font-medium text-foreground/50 cursor-not-allowed">
        Previous
      </button>
      <div class="flex items-center gap-1">
        <button class="size-8 flex items-center justify-center rounded-md bg-primary text-primary-foreground text-sm font-bold">1</button>
      </div>
      <button class="px-4 py-2 border border-border rounded-lg text-sm font-medium text-foreground/70 hover:bg-foreground/5 transition-colors">
        Next
      </button>
    </div>
  </div>
</AdminLayout>
