<script>
  export let href = "#";
  export let text = "Button";
  export let size = "md"; // 'md' or 'lg'
  export let target = undefined;
  
  export let variant = "outline"; // 'outline' or 'solid'
  
  // Ring/Shadow is always present
  $: baseClass = variant === 'outline' 
    ? "group flex items-center rounded-full bg-white hover:bg-primary text-black hover:text-white transition-all duration-300 border border-primary/20 hover:border-primary ring-[6px] ring-white/10"
    : "group flex items-center rounded-full bg-primary hover:bg-primary/90 text-white transition-all duration-300 ring-[6px] ring-primary/10 shadow-[0_10px_30px_rgba(var(--primary),0.3)]";
    
  $: iconBg = variant === 'outline'
    ? "bg-primary group-hover:bg-white text-white group-hover:text-primary"
    : "bg-white/20 group-hover:bg-white text-white group-hover:text-primary";
  
  let sizeClass = size === 'lg' ? 'pl-5 md:pl-8 pr-1.5 md:pr-2 py-1.5 md:py-2 text-[15px] md:text-lg' : 'pl-6 pr-1.5 py-1.5 text-[15px]';
  let iconContainerSize = size === 'lg' ? 'w-10 h-10 md:w-12 md:h-12' : 'w-8 h-8';
  let iconSize = size === 'lg' ? 'size-5 md:size-6' : 'size-4';
  let spacingClass = size === 'lg' ? 'mr-4 md:mr-6' : 'mr-4';
</script>

<a {href} {target} class="{baseClass} {sizeClass} {$$props.class || ''}" on:click>
  <span class="{spacingClass} font-bold transition-colors duration-300">{text}</span>
  <div class="{iconContainerSize} rounded-full {iconBg} flex items-center justify-center shadow-md transition-colors duration-300">
    <svg class="{iconSize}" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M5 12h14"/>
      <path d="m12 5 7 7-7 7"/>
    </svg>
  </div>
</a>
