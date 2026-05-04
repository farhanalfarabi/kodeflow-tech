<script>
  import AdminLayout from "../../../Layouts/AdminLayout.svelte";
  import { ArrowLeft, Save, Image as ImageIcon, CheckCircle, Bold, Italic, Link as LinkIcon, List } from "lucide-svelte";
  import { Link } from "@inertiajs/svelte";

  let title = "";
  let category = "Panduan & Tips";
  let content = "";
  let slug = "";

  $: slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
</script>

<AdminLayout title="Create New Blog">
  
  <div class="flex items-center gap-4 mb-6">
    <Link href="/admin/blogs" class="p-2 rounded-lg border border-border bg-card text-foreground/60 hover:text-foreground hover:bg-foreground/5 transition-colors">
      <ArrowLeft class="size-4" />
    </Link>
    <div>
      <h2 class="text-2xl font-display font-bold text-foreground">Write an Article</h2>
      <p class="text-foreground/60 text-sm mt-1">Fill out the details below to publish a new blog post.</p>
    </div>
    
    <div class="ml-auto flex items-center gap-3">
      <button class="px-5 py-2.5 rounded-xl font-medium text-sm border border-border bg-card hover:bg-foreground/5 transition-colors text-foreground">
        Save Draft
      </button>
      <button class="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-5 py-2.5 rounded-xl font-medium transition-all shadow-lg shadow-primary/20">
        <CheckCircle class="size-4" />
        Publish
      </button>
    </div>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
    
    <!-- Main Content Form -->
    <div class="lg:col-span-2 flex flex-col gap-6">
      
      <!-- Title Input -->
      <div class="bg-card border border-border rounded-2xl p-6 shadow-sm">
        <label for="title" class="block text-sm font-semibold text-foreground mb-2">Article Title</label>
        <input 
          type="text" 
          id="title"
          bind:value={title}
          placeholder="e.g. Cara Memilih Vendor Software Terbaik..."
          class="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground placeholder-foreground/30 focus:outline-none focus:ring-2 focus:ring-primary/50 text-lg font-medium transition-all"
        />
        
        <div class="mt-4 flex items-center gap-2 text-sm">
          <span class="text-foreground/50">Slug:</span>
          <span class="text-primary font-mono bg-primary/5 px-2 py-0.5 rounded border border-primary/10">
            {slug ? slug : 'auto-generated-slug'}
          </span>
        </div>
      </div>

      <!-- Editor Area -->
      <div class="bg-card border border-border rounded-2xl flex flex-col shadow-sm overflow-hidden min-h-[500px]">
        <div class="flex items-center gap-1 p-2 border-b border-border bg-foreground/[0.02]">
          <button class="p-2 rounded hover:bg-foreground/10 text-foreground/70 transition-colors" title="Bold"><Bold class="size-4" /></button>
          <button class="p-2 rounded hover:bg-foreground/10 text-foreground/70 transition-colors" title="Italic"><Italic class="size-4" /></button>
          <div class="w-px h-4 bg-border mx-2"></div>
          <button class="p-2 rounded hover:bg-foreground/10 text-foreground/70 transition-colors" title="Link"><LinkIcon class="size-4" /></button>
          <button class="p-2 rounded hover:bg-foreground/10 text-foreground/70 transition-colors" title="List"><List class="size-4" /></button>
          <div class="w-px h-4 bg-border mx-2"></div>
          <button class="p-2 rounded hover:bg-foreground/10 text-foreground/70 transition-colors text-sm font-medium px-3">H2</button>
          <button class="p-2 rounded hover:bg-foreground/10 text-foreground/70 transition-colors text-sm font-medium px-3">H3</button>
        </div>
        
        <textarea 
          bind:value={content}
          placeholder="Write your article content here... (Markdown supported)"
          class="flex-1 w-full p-6 bg-transparent border-none focus:outline-none resize-none font-body text-foreground/80 leading-relaxed"
        ></textarea>
      </div>
      
    </div>

    <!-- Sidebar Options -->
    <div class="flex flex-col gap-6">
      
      <!-- Publish Info -->
      <div class="bg-card border border-border rounded-2xl p-6 shadow-sm">
        <h3 class="font-display font-semibold text-foreground mb-4">Publish Settings</h3>
        
        <div class="space-y-4">
          <div>
            <label class="block text-xs font-medium text-foreground/60 mb-1.5 uppercase tracking-wider">Category</label>
            <select bind:value={category} class="w-full bg-background border border-border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground appearance-none">
              <option>Panduan & Tips</option>
              <option>IT untuk Bisnis</option>
              <option>Insight Industri</option>
              <option>Studi Kasus</option>
              <option>Dari Kodeflow</option>
            </select>
          </div>
          
          <div>
            <label class="block text-xs font-medium text-foreground/60 mb-1.5 uppercase tracking-wider">Author</label>
            <div class="flex items-center gap-3 p-3 rounded-lg border border-border bg-foreground/5">
              <img src="https://i.pravatar.cc/100?img=11" alt="Farhan" class="size-8 rounded-full" />
              <span class="text-sm font-medium">Farhan Alfarabi</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Featured Image -->
      <div class="bg-card border border-border rounded-2xl p-6 shadow-sm">
        <h3 class="font-display font-semibold text-foreground mb-4">Featured Image</h3>
        
        <button class="w-full aspect-video rounded-xl border-2 border-dashed border-border hover:border-primary/50 hover:bg-primary/5 transition-all flex flex-col items-center justify-center gap-3 text-foreground/50 hover:text-primary group">
          <div class="p-3 rounded-full bg-foreground/5 group-hover:bg-primary/10 transition-colors">
            <ImageIcon class="size-6" />
          </div>
          <div class="text-center">
            <span class="block text-sm font-medium">Click to upload image</span>
            <span class="block text-xs opacity-70 mt-1">SVG, PNG, JPG or GIF (max. 5MB)</span>
          </div>
        </button>
      </div>

      <!-- SEO Meta -->
      <div class="bg-card border border-border rounded-2xl p-6 shadow-sm">
        <h3 class="font-display font-semibold text-foreground mb-4">SEO Metadata</h3>
        
        <div class="space-y-4">
          <div>
            <label class="block text-xs font-medium text-foreground/60 mb-1.5 uppercase tracking-wider">Meta Description</label>
            <textarea 
              rows="3"
              placeholder="Brief description for search engines..."
              class="w-full bg-background border border-border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground resize-none"
            ></textarea>
          </div>
        </div>
      </div>

    </div>

  </div>
</AdminLayout>
