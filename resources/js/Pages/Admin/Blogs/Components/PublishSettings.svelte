<script>
    import { Calendar, User } from "lucide-svelte";
    import Combobox from "@/Components/ui/Combobox.svelte";

    let { form, existingCategories = [], authors = [], defaultAuthorId } = $props();

</script>

<!-- Publish Info -->
<div class="bg-card border border-border rounded-2xl p-6 shadow-sm">
    <h3 class="font-display text-foreground mb-4">
        Publish Settings
    </h3>

    <div class="space-y-4">
        <div>
            <label
                class="block text-xs font-medium text-foreground/60 mb-1.5 uppercase tracking-wider"
                >Category</label
            >
            <div class="relative">
                <Combobox
                    items={existingCategories.length > 0
                        ? existingCategories
                        : [
                                "Panduan & Tips",
                                "IT untuk Bisnis",
                                "Insight Industri",
                                "Studi Kasus",
                                "Dari Kodeflow",
                            ]}
                    bind:selectedValue={form.category_name}
                    multiple={false}
                    placeholder="Pilih kategori..."
                    addLabel="Buat Kategori:"
                />
            </div>
            <p class="text-[10px] text-foreground/50 mt-1.5">
                Pilih dari list atau buat kategori baru.
            </p>
        </div>

        <div class="flex gap-4">
            <div class="flex-1">
                <label
                    class="block text-xs font-medium text-foreground/60 mb-1.5 uppercase tracking-wider"
                    >Read Time (Mins)</label
                >
                <input
                    type="number"
                    bind:value={form.read_time}
                    min="1"
                    class="w-full bg-background border border-border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
                />
            </div>
            <div class="flex-1 flex flex-col justify-end pb-2.5">
                <label
                    class="flex items-center gap-2 cursor-pointer group"
                >
                    <div class="relative flex items-center">
                        <input
                            type="checkbox"
                            bind:checked={form.is_featured}
                            class="sr-only peer"
                        />
                        <div
                            class="w-10 h-5 bg-foreground/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-border after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"
                        ></div>
                    </div>
                    <span
                        class="text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors"
                    >
                        {form.is_featured ? "Featured" : "Regular"}
                    </span>
                </label>
            </div>
        </div>

        <div>
            <label
                class="block text-xs font-medium text-foreground/60 mb-1.5 uppercase tracking-wider"
                >Author</label
            >
            <div class="relative">
                <select
                    bind:value={form.author_id}
                    class="w-full bg-background border border-border rounded-lg pl-10 pr-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground appearance-none cursor-pointer"
                >
                    {#if authors && authors.length > 0}
                        {#each authors as author}
                            <option value={author.id}
                                >{author.name}</option
                            >
                        {/each}
                    {:else}
                        <option value={defaultAuthorId}>Admin Kodeflow</option>
                    {/if}
                </select>
                <div
                    class="absolute inset-y-0 left-3 flex items-center pointer-events-none text-foreground/50"
                >
                    <User class="size-4" />
                </div>
                <div
                    class="absolute inset-y-0 right-3 flex items-center pointer-events-none text-foreground/50"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        ><path d="m6 9 6 6 6-6" /></svg
                    >
                </div>
            </div>
        </div>

        <div>
            <label
                class="block text-xs font-medium text-foreground/60 mb-1.5 uppercase tracking-wider"
                >Publish Date (Schedule)</label
            >
            <div class="relative">
                <input
                    type="datetime-local"
                    bind:value={form.publish_date}
                    class="w-full bg-background border border-border rounded-lg pl-10 pr-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground [color-scheme:dark]"
                />
                <div
                    class="absolute inset-y-0 left-3 flex items-center pointer-events-none text-foreground/50"
                >
                    <Calendar class="size-4" />
                </div>
            </div>
            <p class="text-[10px] text-foreground/50 mt-1.5">
                Biarkan kosong untuk publish segera.
            </p>
        </div>
    </div>
</div>
