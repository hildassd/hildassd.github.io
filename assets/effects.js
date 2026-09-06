(() => {
  const INTERACTIVE_SELECTOR = [
    ".nav-link",
    ".button",
    ".map-toolbar button",
    ".map-zoom-controls button",
    ".prefecture-item",
    ".province-item"
  ].join(",");

  function setupInteractiveGlow() {
    document.querySelectorAll(INTERACTIVE_SELECTOR).forEach((el) => {
      el.classList.add("fx-hover");

      el.addEventListener("pointerenter", (event) => {
        const rect = el.getBoundingClientRect();
        el.style.setProperty("--fx-x", `${event.clientX - rect.left}px`);
        el.style.setProperty("--fx-y", `${event.clientY - rect.top}px`);
        requestAnimationFrame(() => el.classList.add("is-hovered"));
      });

      el.addEventListener("pointermove", (event) => {
        const rect = el.getBoundingClientRect();
        el.style.setProperty("--fx-x", `${event.clientX - rect.left}px`);
        el.style.setProperty("--fx-y", `${event.clientY - rect.top}px`);
      });

      el.addEventListener("pointerleave", () => {
        el.classList.remove("is-hovered");
      });
    });
  }

  function setupCursorTrail() {
    const fine = window.matchMedia?.("(pointer:fine)")?.matches;
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    if (!fine || reduce) return;

    const layer = document.createElement("div");
    layer.className = "cursor-trail-layer";
    document.body.appendChild(layer);

    const pool = [];
    const COUNT = 14;

    for (let i = 0; i < COUNT; i++) {
      const dot = document.createElement("i");
      dot.className = "cursor-trail-dot";
      layer.appendChild(dot);
      pool.push({
        el: dot,
        x: -100,
        y: -100,
        scale: 1 - i * 0.04,
        alpha: 1 - i / COUNT
      });
    }

    let mouseX = -100;
    let mouseY = -100;
    let visible = false;

    window.addEventListener("pointermove", (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      visible = true;
    }, { passive: true });

    document.addEventListener("mouseleave", () => {
      visible = false;
    });

    const tick = () => {
      let px = mouseX;
      let py = mouseY;

      pool.forEach((p, index) => {
        const ease = index === 0 ? .34 : .20;
        p.x += (px - p.x) * ease;
        p.y += (py - p.y) * ease;

        p.el.style.transform =
          `translate3d(${p.x}px,${p.y}px,0) translate(-50%,-50%) scale(${p.scale})`;
        p.el.style.opacity = visible ? String(Math.max(.02, p.alpha * .34)) : "0";

        px = p.x;
        py = p.y;
      });

      requestAnimationFrame(tick);
    };

    tick();
  }

  function setupPointerPulse() {
    const fine = window.matchMedia?.("(pointer:fine)")?.matches;
    if (!fine) return;

    window.addEventListener("pointerdown", (event) => {
      const pulse = document.createElement("div");
      pulse.className = "pointer-pulse";
      pulse.style.left = `${event.clientX}px`;
      pulse.style.top = `${event.clientY}px`;
      document.body.appendChild(pulse);
      setTimeout(() => pulse.remove(), 520);
    });
  }

  const start = () => {
    setupInteractiveGlow();
    setupCursorTrail();
    setupPointerPulse();
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();
