<script>
  import { onMount, onDestroy } from "svelte";
  import lottie from "lottie-web";

  export let src = "";
  export let loop = true;
  export let autoplay = true;
  export let speed = 1;
  export let classNames = "";

  let container;
  let animation;

  onMount(() => {
    if (container && src) {
      animation = lottie.loadAnimation({
        container: container,
        renderer: "svg", // Render as SVG for better crispness, canvas is also fine
        loop: loop,
        autoplay: autoplay,
        path: src, // The URL to the JSON file
      });
      
      animation.setSpeed(speed);
    }
  });

  onDestroy(() => {
    if (animation) {
      animation.destroy();
    }
  });
</script>

<div bind:this={container} class="{classNames} w-full h-full pointer-events-none flex items-center justify-center"></div>
