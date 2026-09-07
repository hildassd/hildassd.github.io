(() => {
  const selector = [
    ".nav-link",
    ".button",
    ".map-toolbar button",
    ".map-zoom-controls button"
  ].join(",");

  const addGlow = () => {
    document.querySelectorAll(selector).forEach((el) => {
      el.classList.add("glow-target");

      el.addEventListener("pointermove", (event) => {
        const rect = el.getBoundingClientRect();
        el.style.setProperty("--glow-x", `${event.clientX - rect.left}px`);
        el.style.setProperty("--glow-y", `${event.clientY - rect.top}px`);
      });

      el.addEventListener("pointerleave", () => {
        el.style.removeProperty("--glow-x");
        el.style.removeProperty("--glow-y");
      });
    });
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", addGlow);
  } else {
    addGlow();
  }
})();
