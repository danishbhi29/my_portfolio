export function usePointerTilt(ref, strength = 8) {
  const move = (event) => {
    const element = ref.current;
    if (!element || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const box = element.getBoundingClientRect();
    const x = (event.clientX - box.left) / box.width - 0.5;
    const y = (event.clientY - box.top) / box.height - 0.5;
    element.style.setProperty('--tilt-x', `${-y * strength}deg`);
    element.style.setProperty('--tilt-y', `${x * strength}deg`);
  };
  const reset = () => {
    if (!ref.current) return;
    ref.current.style.setProperty('--tilt-x', '0deg');
    ref.current.style.setProperty('--tilt-y', '0deg');
  };
  return { onPointerMove: move, onPointerLeave: reset };
}

export function useReveal() {
  const ref = (node) => {
    if (!node || !('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        node.classList.add('is-visible');
        observer.disconnect();
      }
    }, { threshold: 0.12 });
    observer.observe(node);
  };
  return ref;
}
