<script>
  import { onMount } from "svelte";
  import { X, Search, Check, UploadCloud, Grid, ImageIcon } from "lucide-svelte";

  export let isOpen = false;
  export let onSelect = (mediaItem) => {};
  export let onClose = () => {};

  let searchQuery = "";
  let mediaList = [];
  let pagination = { current_page: 1, last_page: 1 };
  let selectedItem = null;
  let isUploading = false;
  let fileInput;
  let isLoading = false;

  $: if (isOpen) {
    fetchMedia();
    selectedItem = null;
  }

  function fetchMedia(page = 1) {
    isLoading = true;
    const url = `/admin/media?api=1&page=${page}&search=${encodeURIComponent(searchQuery)}`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        mediaList = data.data || [];
        pagination = {
          current_page: data.current_page || 1,
          last_page: data.last_page || 1
        };
        isLoading = false;
      })
      .catch(err => {
        console.error("Gagal mengambil media:", err);
        isLoading = false;
      });
  }

  let searchTimeout;
  function handleSearchInput() {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
      fetchMedia(1);
    }, 400);
  }

  function selectItem(item) {
    selectedItem = selectedItem?.id === item.id ? null : item;
  }

  function handleConfirm() {
    if (selectedItem) {
      onSelect(selectedItem);
      closeModal();
    }
  }

  function closeModal() {
    isOpen = false;
    onClose();
  }

  function triggerUpload() {
    fileInput.click();
  }

  function handleUpload(e) {
    const file = e.target.files[0];
    if (!file) return;

    isUploading = true;
    const formData = new FormData();
    formData.append('file', file);

    fetch('/admin/media?api=1', {
      method: 'POST',
      body: formData,
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || ''
      }
    })
      .then(res => res.json())
      .then(data => {
        isUploading = false;
        if (data.success && data.media) {
          // Add newly uploaded file to list and select it
          mediaList = [data.media, ...mediaList];
          selectedItem = data.media;
          if (fileInput) fileInput.value = "";
        } else {
          alert("Gagal mengunggah gambar.");
        }
      })
      .catch(err => {
        isUploading = false;
        console.error(err);
        alert("Terjadi kesalahan saat mengunggah.");
      });
  }
</script>

{#if isOpen}
  <div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm transition-all duration-300">
    
    <!-- Modal Container -->
    <div 
      class="bg-card border border-border w-full max-w-4xl rounded-[28px] overflow-hidden shadow-2xl flex flex-col max-h-[85vh] relative"
      on:click|stopPropagation
    >
      
      <!-- Modal Header -->
      <div class="p-6 border-b border-border flex items-center justify-between bg-foreground/[0.01]">
        <div class="flex items-center gap-2.5">
          <div class="p-2 rounded-lg bg-[#9c27b0]/10 border border-[#9c27b0]/10 text-[#9c27b0]">
            <ImageIcon class="size-5" />
          </div>
          <div>
            <h3 class="font-display text-lg font-bold text-foreground">Pilih dari Pustaka Media</h3>
            <p class="text-xs text-foreground/50 mt-0.5">Pilih aset visual yang sudah ada atau unggah yang baru.</p>
          </div>
        </div>
        <button 
          on:click={closeModal}
          class="p-2 rounded-xl border border-border hover:bg-foreground/5 hover:text-foreground transition-colors text-foreground/50 cursor-pointer"
        >
          <X class="size-4" />
        </button>
      </div>

      <!-- Toolbar: Search & Quick Upload -->
      <div class="p-6 border-b border-border bg-foreground/[0.005] flex flex-col sm:flex-row gap-4 items-center justify-between">
        
        <!-- Search bar -->
        <div class="relative w-full sm:flex-1 max-w-md">
          <Search class="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-foreground/45" />
          <input 
            type="text" 
            bind:value={searchQuery}
            on:input={handleSearchInput}
            placeholder="Cari gambar berdasarkan nama..." 
            class="w-full pl-10 pr-4 py-2.5 bg-background border border-border rounded-xl text-xs focus:outline-none focus:border-[#9c27b0] focus:ring-1 focus:ring-[#9c27b0] transition-all text-foreground" 
          />
        </div>

        <!-- Quick Upload -->
        <button 
          on:click={triggerUpload}
          disabled={isUploading}
          class="inline-flex items-center gap-2 bg-[#9c27b0] hover:bg-[#8a1a9e] text-white px-4 py-2.5 rounded-xl font-medium text-xs transition-all shadow-md shadow-purple-500/10 whitespace-nowrap cursor-pointer disabled:opacity-75"
        >
          {#if isUploading}
            <div class="w-3.5 h-3.5 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
            <span>Mengunggah...</span>
          {:else}
            <UploadCloud class="size-3.5" />
            <span>Unggah Baru</span>
          {/if}
        </button>
        <input 
          type="file" 
          bind:this={fileInput} 
          on:change={handleUpload} 
          accept="image/*" 
          class="hidden" 
        />
      </div>

      <!-- Media Grid (Scrollable) -->
      <div class="flex-1 overflow-y-auto p-6 bg-background/30">
        {#if isLoading}
          <div class="h-60 flex flex-col items-center justify-center text-foreground/40 gap-3">
            <div class="w-8 h-8 border-2 border-primary/20 border-t-primary rounded-full animate-spin"></div>
            <span class="text-xs font-medium">Memuat pustaka media...</span>
          </div>
        {:else if mediaList.length > 0}
          <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
            {#each mediaList as item (item.id)}
              <!-- svelte-ignore a11y-click-events-have-key-events -->
              <div 
                on:click={() => selectItem(item)}
                class="group aspect-square rounded-2xl border overflow-hidden relative cursor-pointer transition-all shadow-sm {selectedItem?.id === item.id ? 'border-[#9c27b0] ring-2 ring-[#9c27b0]/20' : 'border-border hover:border-foreground/20'}"
              >
                <img 
                  src={item.path} 
                  alt={item.name} 
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />

                <!-- Selected Indicator Badge -->
                {#if selectedItem?.id === item.id}
                  <div class="absolute top-2 right-2 size-5 rounded-full bg-[#9c27b0] border border-white/20 text-white flex items-center justify-center shadow-lg transition-transform scale-100">
                    <Check class="size-3" />
                  </div>
                {/if}

                <!-- Hover Name Overlay -->
                <div class="absolute inset-x-0 bottom-0 bg-black/60 p-1.5 text-[9px] text-white truncate text-center opacity-0 group-hover:opacity-100 transition-opacity">
                  {item.name}
                </div>
              </div>
            {/each}
          </div>
        {:else}
          <div class="h-60 flex flex-col items-center justify-center text-center p-8 border border-dashed border-border rounded-2xl">
            <div class="p-3 rounded-full bg-foreground/5 text-foreground/30 mb-3">
              <Grid class="size-6" />
            </div>
            <h4 class="text-sm font-semibold text-foreground mb-1">Gambar Tidak Ditemukan</h4>
            <p class="text-xs text-foreground/45 max-w-xs leading-relaxed">Coba cari dengan kata kunci lain atau unggah gambar baru di atas.</p>
          </div>
        {/if}
      </div>

      <!-- Pagination Footer -->
      {#if pagination.last_page > 1}
        <div class="px-6 py-3 border-t border-border flex items-center justify-between bg-foreground/[0.005]">
          <span class="text-[10px] text-foreground/45">Page {pagination.current_page} of {pagination.last_page}</span>
          <div class="flex gap-1.5">
            <button 
              disabled={pagination.current_page <= 1} 
              on:click={() => fetchMedia(pagination.current_page - 1)}
              class="px-2.5 py-1 text-[11px] font-medium border border-border rounded-lg bg-card hover:bg-foreground/5 disabled:opacity-50 cursor-pointer"
            >
              Sebelumnya
            </button>
            <button 
              disabled={pagination.current_page >= pagination.last_page} 
              on:click={() => fetchMedia(pagination.current_page + 1)}
              class="px-2.5 py-1 text-[11px] font-medium border border-border rounded-lg bg-card hover:bg-foreground/5 disabled:opacity-50 cursor-pointer"
            >
              Selanjutnya
            </button>
          </div>
        </div>
      {/if}

      <!-- Actions Footer -->
      <div class="p-6 border-t border-border flex items-center justify-between bg-foreground/[0.01]">
        <div class="text-xs text-foreground/50 font-medium">
          {#if selectedItem}
            Selected: <span class="text-foreground/80 font-bold max-w-[200px] truncate inline-block align-bottom">{selectedItem.name}</span>
          {:else}
            Pilih satu gambar di atas
          {/if}
        </div>
        <div class="flex items-center gap-3">
          <button 
            on:click={closeModal}
            class="px-5 py-2.5 rounded-xl border border-border hover:bg-foreground/5 font-medium text-xs text-foreground/70 transition-all cursor-pointer"
          >
            Batal
          </button>
          <button 
            on:click={handleConfirm}
            disabled={!selectedItem}
            class="px-5 py-2.5 rounded-xl bg-[#9c27b0] hover:bg-[#8a1a9e] text-white font-semibold text-xs transition-all shadow-md shadow-purple-500/10 disabled:opacity-50 disabled:shadow-none cursor-pointer"
          >
            Pilih Gambar
          </button>
        </div>
      </div>

    </div>
  </div>
{/if}
