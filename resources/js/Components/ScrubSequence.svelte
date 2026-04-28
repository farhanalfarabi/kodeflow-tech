<script>
  import { onMount } from "svelte";

  export let framesPath;
  export let frameCount;
  export let ext = "jpg";
  let className = "";
  export { className as class };
  export let scrollTargetRef = null;

  let canvas;
  let images = [];
  let rafId;
  let visible = true;
  let prefersReduced = false;

  const pad4 = (n) => String(n).padStart(4, "0");

  onMount(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      prefersReduced = true;
    }

    // Preload
    let imgs = [];
    const urls = Array.from({ length: frameCount }, (_, i) => `${framesPath}/frame_${pad4(i + 1)}.${ext}`);
    
    const first = new Image();
    first.src = urls[0];
    first.fetchPriority = "high";
    imgs[0] = first;

    urls.slice(1).forEach((src, i) => {
      const img = new Image();
      img.src = src;
      imgs[i + 1] = img;
    });
    images = imgs;

    const resize = () => {
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = "100%";
      canvas.style.height = "100%";
      drawFrame(currentIndex());
    };
    resize();
    window.addEventListener("resize", resize);

    const tick = () => {
      if (visible && !prefersReduced) {
        drawFrame(currentIndex());
      }
      rafId = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(rafId);
    };
  });

  const currentIndex = () => {
    if (!scrollTargetRef) return 0;
    const rect = scrollTargetRef.getBoundingClientRect();
    const total = scrollTargetRef.offsetHeight - window.innerHeight;
    const progress = total > 0 ? Math.min(1, Math.max(0, -rect.top / total)) : 0;
    return Math.min(frameCount - 1, Math.floor(progress * (frameCount - 1)));
  };

  const drawFrame = (idx) => {
    const img = images[idx];
    if (img && img.complete && img.naturalWidth > 0) drawImage(img);
  };

  const drawImage = (img) => {
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const cw = canvas.width;
    const ch = canvas.height;
    const iw = img.naturalWidth;
    const ih = img.naturalHeight;
    const scale = Math.max(cw / iw, ch / ih);
    const dw = iw * scale;
    const dh = ih * scale;
    const dx = (cw - dw) / 2;
    const dy = (ch - dh) / 2;
    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, dx, dy, dw, dh);
  };
</script>

<canvas
  bind:this={canvas}
  class={className}
  style="transform: translateZ(0); will-change: contents;"
  aria-hidden="true"
></canvas>
