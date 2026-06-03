<script>
  import AdminLayout from "../../../Layouts/AdminLayout.svelte";
  import { Search, Trash2, Calendar, Clock } from "lucide-svelte";
  import { Link, router } from "@inertiajs/svelte";
  import AlertDialog from "../../../Components/ui/AlertDialog.svelte";
  import Pagination from "../../../Components/ui/Pagination.svelte";

  export let leads = { data: [], links: [], total: 0, current_page: 1, last_page: 1 };
  export let filters = { search: "" };

  let searchQuery = filters.search;

  $: filteredLeads = leads.data || [];

  function handleFilter() {
    router.get('/admin/leads', { 
      search: searchQuery
    }, { preserveState: true });
  }

  let searchTimeout;
  function handleSearchInput() {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
      handleFilter();
    }, 500);
  }

  let isDeleteDialogOpen = false;
  let leadToDelete = null;

  function confirmDelete(id) {
    leadToDelete = id;
    isDeleteDialogOpen = true;
  }

  function executeDelete() {
    if (leadToDelete) {
      router.delete(`/admin/leads/${leadToDelete}`, {
        preserveScroll: true,
        onFinish: () => {
          leadToDelete = null;
        }
      });
    }
  }

  function formatMeetingDate(dateStr) {
    if (!dateStr) return "-";
    const d = new Date(dateStr);
    return d.toLocaleDateString('id-ID', {day: 'numeric', month: 'short', year: 'numeric'});
  }
</script>

<AdminLayout title="Lead Management">
  <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
    <div>
      <h2 class="text-3xl font-display font-bold text-foreground">Inbound Leads</h2>
      <p class="text-foreground/60 text-sm mt-1">Manage consultation requests from potential clients.</p>
    </div>
  </div>

  <!-- Filters & Search -->
  <div class="bg-card border border-border rounded-2xl p-4 mb-6 flex flex-col sm:flex-row gap-4 justify-between items-center shadow-sm">
    <div class="flex items-center gap-2 w-full sm:w-auto">
      <div class="relative w-full sm:w-80">
        <Search class="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-foreground/40" />
        <input 
          type="text" 
          bind:value={searchQuery}
          on:input={handleSearchInput}
          placeholder="Search by name, company, or message..." 
          class="w-full pl-9 pr-4 py-2 bg-foreground/5 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" 
        />
      </div>
    </div>
  </div>

  <!-- Table Data -->
  <div class="bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
    <div class="overflow-x-auto">
      <table class="w-full text-left border-collapse">
        <thead>
          <tr class="border-b border-border bg-foreground/5 text-foreground/60 text-xs uppercase tracking-wider font-display">
            <th class="px-6 py-4 font-medium">Client Info</th>
            <th class="px-6 py-4 font-medium">Project Description</th>
            <th class="px-6 py-4 font-medium">Scheduled Meeting</th>
            <th class="px-6 py-4 font-medium">Date Submitted</th>
            <th class="px-6 py-4 font-medium text-right">Actions</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-border">
          {#if filteredLeads.length === 0}
            <tr>
              <td colspan="5" class="px-6 py-12 text-center text-foreground/50">
                Belum ada data leads yang ditemukan.
              </td>
            </tr>
          {/if}
          {#each filteredLeads as lead}
            <tr class="hover:bg-foreground/[0.02] transition-colors group">
              <td class="px-6 py-4">
                <p class="font-medium text-foreground">{lead.name}</p>
                <span class="text-xs text-foreground/60 block mt-0.5">{lead.company_name}</span>
              </td>
              <td class="px-6 py-4">
                <p class="text-sm text-foreground/70 max-w-[320px] line-clamp-3" title={lead.message}>
                  {lead.message}
                </p>
              </td>
              <td class="px-6 py-4">
                <div class="flex flex-col gap-1 text-sm text-foreground/70">
                  <span class="flex items-center gap-1.5"><Calendar class="size-3.5 text-primary-light" /> {formatMeetingDate(lead.meeting_date)}</span>
                  <span class="flex items-center gap-1.5"><Clock class="size-3.5 text-primary-light" /> {lead.meeting_time} WIB</span>
                </div>
              </td>
              <td class="px-6 py-4 text-sm text-foreground/70">
                {new Date(lead.created_at).toLocaleDateString('id-ID', {day: 'numeric', month: 'short', year: 'numeric'})}
              </td>
              <td class="px-6 py-4 text-right">
                <div class="flex items-center justify-end gap-2">
                  <button on:click={() => confirmDelete(lead.id)} class="p-1.5 text-foreground/50 hover:text-destructive transition-colors rounded-md hover:bg-destructive/10" title="Delete">
                    <Trash2 class="size-4" />
                  </button>
                </div>
              </td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
    
    <!-- Pagination Footer -->
    <Pagination data={leads} />
  </div>
</AdminLayout>

<AlertDialog 
    bind:isOpen={isDeleteDialogOpen}
    title="Hapus Data Lead?"
    description="Apakah Anda yakin ingin menghapus data lead ini? Tindakan ini tidak dapat dibatalkan dan semua pesan serta informasi kontak lead ini akan dihapus secara permanen."
    confirmText="Ya, Hapus"
    cancelText="Batal"
    confirmVariant="destructive"
    onConfirm={executeDelete}
/>
