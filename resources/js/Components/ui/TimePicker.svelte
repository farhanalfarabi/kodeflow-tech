<script>
    import { onMount } from "svelte";
    import { fade } from "svelte/transition";

    export let value = ""; // Bindable value: HH.MM
    export let placeholder = "-- Pilih jam --";
    export let label = "Pilih jam (07.00 - 23.00)";
    export let error = "";

    let isTimePickerOpen = false;
    let timeContainer;
    
    const timeSlots = Array.from({ length: 17 }, (_, i) => {
        const hour = i + 7;
        return String(hour).padStart(2, '0') + '.00';
    });
    
    function selectTime(timeStr) {
        value = timeStr;
        isTimePickerOpen = false;
    }

    onMount(() => {
        const handleOutsideClick = (e) => {
            if (timeContainer && !timeContainer.contains(e.target)) {
                isTimePickerOpen = false;
            }
        };
        document.addEventListener("click", handleOutsideClick);
        return () => {
            document.removeEventListener("click", handleOutsideClick);
        };
    });
</script>

<div class="space-y-1.5 relative w-full" bind:this={timeContainer}>
    {#if label}
        <label class="block text-sm font-medium text-white/80">{label}</label>
    {/if}
    
    <button
        type="button"
        on:click={() => isTimePickerOpen = !isTimePickerOpen}
        class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-1 focus:ring-primary-light/50 transition-all text-sm flex items-center justify-between text-left cursor-pointer hover:bg-white/10"
    >
        <span class={value ? 'text-white' : 'text-white/30'}>
            {value ? value : placeholder}
        </span>
        <!-- Clock Icon -->
        <svg class="size-4 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    </button>
    {#if error}
        <p class="text-red-400 text-xs mt-1">{error}</p>
    {/if}
    
    <!-- Time Popover Dropdown (Opens Upward: bottom-full mb-2) -->
    {#if isTimePickerOpen}
        <div class="absolute z-[100] bottom-full right-0 w-48 mb-2 bg-background/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] p-2" transition:fade={{ duration: 150 }}>
            <div class="grid grid-cols-2 gap-1 max-h-56 overflow-y-auto pr-1 custom-scrollbar">
                {#each timeSlots as slot}
                    <button
                        type="button"
                        on:click={() => selectTime(slot)}
                        class="px-2 py-2 text-xs font-semibold rounded-lg text-left transition-all cursor-pointer flex items-center justify-between
                            {value === slot ? 'bg-primary-light text-white font-bold shadow-[0_0_12px_rgba(247,37,134,0.4)]' : 'text-white/70 hover:bg-white/10 hover:text-white'}"
                    >
                        <span>{slot}</span>
                    </button>
                {/each}
            </div>
        </div>
    {/if}
</div>

<style>
    /* Styling scrollbar custom */
    .custom-scrollbar::-webkit-scrollbar {
        width: 4px;
    }
    .custom-scrollbar::-webkit-scrollbar-track {
        background: rgba(255, 255, 255, 0.05);
        border-radius: 4px;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb {
        background: rgba(255, 255, 255, 0.2);
        border-radius: 4px;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
        background: rgba(255, 255, 255, 0.4);
    }
</style>
