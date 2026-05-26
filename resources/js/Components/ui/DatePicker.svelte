<script>
    import { onMount } from "svelte";
    import { fade } from "svelte/transition";

    export let value = ""; // Bindable value: YYYY-MM-DD
    export let placeholder = "-- Pilih tanggal --";
    export let label = "Pilih tanggal";
    export let error = "";

    let isDatePickerOpen = false;
    let dateContainer;
    
    // Dates/Calendar state
    let currentDate = new Date();
    let currentMonth = currentDate.getMonth();
    let currentYear = currentDate.getFullYear();
    
    const monthNames = [
        "Januari", "Februari", "Maret", "April", "Mei", "Juni",
        "Juli", "Agustus", "September", "Oktober", "November", "Desember"
    ];
    
    const dayNames = ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"];
    
    // Get calendar days for the current month and year
    $: daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    $: firstDayIndex = new Date(currentYear, currentMonth, 1).getDay();
    
    // Generate the array of days
    $: calendarDays = (() => {
        const days = [];
        // Empty slots for padding
        for (let i = 0; i < firstDayIndex; i++) {
            days.push({ day: null, dateStr: null, disabled: true });
        }
        // Current month days
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        
        for (let d = 1; d <= daysInMonth; d++) {
            const thisDate = new Date(currentYear, currentMonth, d);
            thisDate.setHours(0, 0, 0, 0);
            
            // Format string: YYYY-MM-DD
            const yr = currentYear;
            const mo = String(currentMonth + 1).padStart(2, '0');
            const dy = String(d).padStart(2, '0');
            const dateStr = `${yr}-${mo}-${dy}`;
            
            // Disable past dates
            const isDisabled = thisDate < today;
            
            days.push({
                day: d,
                dateStr,
                disabled: isDisabled
            });
        }
        return days;
    })();

    function selectDate(dateStr) {
        value = dateStr;
        isDatePickerOpen = false;
    }
    
    function prevMonth() {
        if (currentMonth === 0) {
            currentMonth = 11;
            currentYear--;
        } else {
            currentMonth--;
        }
    }
    
    function nextMonth() {
        if (currentMonth === 11) {
            currentMonth = 0;
            currentYear++;
        } else {
            currentMonth++;
        }
    }
    
    // Format human-readable date
    $: displayDate = (() => {
        if (!value) return placeholder;
        const [yr, mo, dy] = value.split('-');
        const d = new Date(parseInt(yr), parseInt(mo) - 1, parseInt(dy));
        return `${d.getDate()} ${monthNames[d.getMonth()]} ${d.getFullYear()}`;
    })();

    onMount(() => {
        const handleOutsideClick = (e) => {
            if (dateContainer && !dateContainer.contains(e.target)) {
                isDatePickerOpen = false;
            }
        };
        document.addEventListener("click", handleOutsideClick);
        return () => {
            document.removeEventListener("click", handleOutsideClick);
        };
    });
</script>

<div class="space-y-1.5 relative w-full" bind:this={dateContainer}>
    {#if label}
        <label class="block text-sm font-medium text-white/80">{label}</label>
    {/if}
    
    <button
        type="button"
        on:click={() => isDatePickerOpen = !isDatePickerOpen}
        class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-1 focus:ring-primary-light/50 transition-all text-sm flex items-center justify-between text-left cursor-pointer hover:bg-white/10"
    >
        <span class={value ? 'text-white' : 'text-white/30'}>
            {displayDate}
        </span>
        <!-- Calendar Icon -->
        <svg class="size-4 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
    </button>
    {#if error}
        <p class="text-red-400 text-xs mt-1">{error}</p>
    {/if}
    
    <!-- Calendar Popover Dropdown (Opens Upward: bottom-full mb-2) -->
    {#if isDatePickerOpen}
        <div class="absolute z-[100] bottom-full left-0 w-80 mb-2 bg-background/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] p-4 select-none" transition:fade={{ duration: 150 }}>
            <!-- Calendar Header -->
            <div class="flex items-center justify-between mb-4">
                <button type="button" on:click={prevMonth} class="p-1 hover:bg-white/10 rounded-lg text-white/60 hover:text-white transition-colors cursor-pointer">
                    <svg class="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <span class="text-sm font-semibold text-white font-display uppercase tracking-wider">
                    {monthNames[currentMonth]} {currentYear}
                </span>
                <button type="button" on:click={nextMonth} class="p-1 hover:bg-white/10 rounded-lg text-white/60 hover:text-white transition-colors cursor-pointer">
                    <svg class="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
            
            <!-- Weekdays -->
            <div class="grid grid-cols-7 gap-1 text-center text-[11px] font-bold text-white/40 uppercase mb-2">
                {#each dayNames as day}
                    <div>{day}</div>
                {/each}
            </div>
            
            <!-- Days Grid -->
            <div class="grid grid-cols-7 gap-1 text-center">
                {#each calendarDays as { day, dateStr, disabled }}
                    {#if day === null}
                        <div class="p-2"></div>
                    {:else}
                        <button
                            type="button"
                            disabled={disabled}
                            on:click={() => selectDate(dateStr)}
                            class="p-2 text-xs font-semibold rounded-lg transition-all cursor-pointer flex items-center justify-center
                                {disabled ? 'text-white/10 cursor-not-allowed' : 'text-white/80 hover:bg-white/10 hover:text-white'}
                                {value === dateStr ? 'bg-primary-light text-white font-bold shadow-[0_0_12px_rgba(247,37,134,0.4)]' : ''}"
                        >
                            {day}
                        </button>
                    {/if}
                {/each}
            </div>
        </div>
    {/if}
</div>
