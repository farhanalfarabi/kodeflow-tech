<script>
  import AdminLayout from "../../../Layouts/AdminLayout.svelte";
  import { Save, ExternalLink } from "lucide-svelte";
  import { useForm, page } from "@inertiajs/svelte";

  export let settings = {};

  const form = useForm({
    whatsapp: settings.whatsapp || '',
    facebook: settings.facebook || '',
    instagram: settings.instagram || '',
    threads: settings.threads || '',
    youtube: settings.youtube || '',
  });

  function handleSubmit(e) {
    e.preventDefault();
    form.post('/admin/settings', {
      preserveScroll: true,
      onSuccess: () => {
        // success handled via flash message usually, or local state
      }
    });
  }
</script>

<AdminLayout title="Settings">
  <div>
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
      <div>
        <h2 class="text-3xl font-display font-bold text-foreground">Manajemen Link & WhatsApp</h2>
        <p class="text-foreground/60 text-sm mt-1">Urus link media sosial dan nombor WhatsApp untuk paparan di situs website</p>
      </div>
    </div>

    <!-- Title Divider -->
    <div class="flex items-center gap-3 mb-6">
      <div class="w-1.5 h-6 bg-primary rounded-full"></div>
      <h3 class="text-xl font-bold font-display text-foreground/90">Konfigurasi Link Sosial</h3>
    </div>

    <!-- Main Card -->
    <div class="bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
      
      {#if page.props.flash.success}
        <div class="p-4 mx-6 mt-6 bg-green-500/10 border border-green-500/20 text-green-600 rounded-xl font-medium text-sm">
          {page.props.flash.success}
        </div>
      {/if}

      <form on:submit={handleSubmit}>
        <div class="p-6 md:p-8 space-y-8">
          
          <div>
            <h4 class="font-bold text-lg mb-1">Link & Kontak</h4>
            <p class="text-sm text-foreground/50 mb-6">Link ini akan muncul pada footer dan tombol melayang (WhatsApp).</p>

            <div class="space-y-6">
              <!-- WhatsApp -->
              <div class="space-y-2">
                <label class="flex items-center gap-2 text-sm font-medium text-foreground/80">
                  <svg class="size-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                  WhatsApp Number
                </label>
                <div class="flex items-center gap-3">
                  <input 
                    type="text" 
                    bind:value={form.whatsapp}
                    placeholder="Masukkan angka saja (e.g. 62812345678)"
                    class="flex-1 px-4 py-2.5 bg-background border border-border rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all"
                  />
                  {#if form.whatsapp}
                    <a href={`https://wa.me/${form.whatsapp}`} target="_blank" class="w-11 h-11 flex items-center justify-center border border-border rounded-xl hover:bg-foreground/5 transition-colors text-foreground/60 shrink-0">
                      <ExternalLink class="size-4" />
                    </a>
                  {/if}
                </div>
                {#if form.errors.whatsapp}
                  <p class="text-xs text-red-500">{form.errors.whatsapp}</p>
                {/if}
                <p class="text-xs text-foreground/40 italic">Masukkan angka saja dengan kode negara (e.g. 6281234567890).</p>
              </div>

              <!-- Facebook -->
              <div class="space-y-2">
                <label class="flex items-center gap-2 text-sm font-medium text-foreground/80">
                  <svg class="size-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg>
                  Facebook URL
                </label>
                <div class="flex items-center gap-3">
                  <input 
                    type="url" 
                    bind:value={form.facebook}
                    placeholder="https://www.facebook.com/..."
                    class="flex-1 px-4 py-2.5 bg-background border border-border rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all"
                  />
                  {#if form.facebook}
                    <a href={form.facebook} target="_blank" class="w-11 h-11 flex items-center justify-center border border-border rounded-xl hover:bg-foreground/5 transition-colors text-foreground/60 shrink-0">
                      <ExternalLink class="size-4" />
                    </a>
                  {/if}
                </div>
                {#if form.errors.facebook}
                  <p class="text-xs text-red-500">{form.errors.facebook}</p>
                {/if}
              </div>

              <!-- Instagram -->
              <div class="space-y-2">
                <label class="flex items-center gap-2 text-sm font-medium text-foreground/80">
                  <svg class="size-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                  Instagram URL
                </label>
                <div class="flex items-center gap-3">
                  <input 
                    type="url" 
                    bind:value={form.instagram}
                    placeholder="https://www.instagram.com/..."
                    class="flex-1 px-4 py-2.5 bg-background border border-border rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all"
                  />
                  {#if form.instagram}
                    <a href={form.instagram} target="_blank" class="w-11 h-11 flex items-center justify-center border border-border rounded-xl hover:bg-foreground/5 transition-colors text-foreground/60 shrink-0">
                      <ExternalLink class="size-4" />
                    </a>
                  {/if}
                </div>
                {#if form.errors.instagram}
                  <p class="text-xs text-red-500">{form.errors.instagram}</p>
                {/if}
              </div>

              <!-- Threads -->
              <div class="space-y-2">
                <label class="flex items-center gap-2 text-sm font-medium text-foreground/80">
                  <span class="text-primary font-bold text-lg leading-none shrink-0">#</span>
                  Threads URL
                </label>
                <div class="flex items-center gap-3">
                  <input 
                    type="url" 
                    bind:value={form.threads}
                    placeholder="https://www.threads.net/..."
                    class="flex-1 px-4 py-2.5 bg-background border border-border rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all"
                  />
                  {#if form.threads}
                    <a href={form.threads} target="_blank" class="w-11 h-11 flex items-center justify-center border border-border rounded-xl hover:bg-foreground/5 transition-colors text-foreground/60 shrink-0">
                      <ExternalLink class="size-4" />
                    </a>
                  {/if}
                </div>
                {#if form.errors.threads}
                  <p class="text-xs text-red-500">{form.errors.threads}</p>
                {/if}
              </div>

              <!-- YouTube -->
              <div class="space-y-2">
                <label class="flex items-center gap-2 text-sm font-medium text-foreground/80">
                  <svg class="size-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.33 29 29 0 00-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
                  YouTube URL
                </label>
                <div class="flex items-center gap-3">
                  <input 
                    type="url" 
                    bind:value={form.youtube}
                    placeholder="https://www.youtube.com/..."
                    class="flex-1 px-4 py-2.5 bg-background border border-border rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all"
                  />
                  {#if form.youtube}
                    <a href={form.youtube} target="_blank" class="w-11 h-11 flex items-center justify-center border border-border rounded-xl hover:bg-foreground/5 transition-colors text-foreground/60 shrink-0">
                      <ExternalLink class="size-4" />
                    </a>
                  {/if}
                </div>
                {#if form.errors.youtube}
                  <p class="text-xs text-red-500">{form.errors.youtube}</p>
                {/if}
              </div>

            </div>
          </div>

        </div>

        <div class="bg-foreground/[0.02] border-t border-border p-6 flex items-center justify-between">
          <p class="text-xs text-foreground/40 italic">Pengaturan disimpan secara otomatis ke dalam tabel database MySQL.</p>
          
          <button 
            type="submit" 
            disabled={form.processing}
            class="bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-xl font-medium text-sm flex items-center gap-2 transition-all shadow-lg shadow-primary/20 disabled:opacity-70 cursor-pointer"
          >
            {#if form.processing}
              <div class="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
            {:else}
              <Save class="size-4" />
            {/if}
            Simpan Perubahan
          </button>
        </div>
      </form>
    </div>
  </div>
</AdminLayout>
