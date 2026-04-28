import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function inview(node, params = {}) {
  let observer;
  const handleIntersect = (e) => {
    if (e[0].isIntersecting) {
      node.dispatchEvent(new CustomEvent('enter'));
      if (params.once !== false) {
        observer.unobserve(node);
      }
    }
  };

  observer = new IntersectionObserver(handleIntersect, {
    root: null,
    rootMargin: "0px",
    threshold: params.threshold || 0.3
  });

  observer.observe(node);

  return {
    destroy() {
      if (observer) observer.disconnect();
    }
  };
}
