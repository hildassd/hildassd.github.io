(() => {
  const colors = ["#EFF9FF", "#A5CC2E", "#47176D"];

  function burst(element, event) {
    const rect = element.getBoundingClientRect();
    const x = event?.clientX ?? (rect.left + rect.width / 2);
    const y = event?.clientY ?? (rect.top + rect.height / 2);

    const layer = document.createElement("div");
    layer.className = "spark-layer";
    layer.style.left = `${x}px`;
    layer.style.top = `${y}px`;
    document.body.appendChild(layer);

    const count = 9;
    for (let i = 0; i < count; i++) {
      const spark = document.createElement("i");
      spark.className = "nav-spark";
      spark.style.setProperty("--spark-color", colors[i % colors.length]);

      const angle = (Math.PI * 2 * i) / count + Math.random() * 0.28;
      const distance = 16 + Math.random() * 18;
      spark.style.setProperty("--spark-x", `${Math.cos(angle) * distance}px`);
      spark.style.setProperty("--spark-y", `${Math.sin(angle) * distance}px`);
      spark.style.animationDelay = `${Math.random() * 35}ms`;

      layer.appendChild(spark);
    }

    setTimeout(() => layer.remove(), 480);
  }

  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", (event) => {
        if (
          event.defaultPrevented ||
          event.button !== 0 ||
          event.metaKey ||
          event.ctrlKey ||
          event.shiftKey ||
          event.altKey
        ) return;

        const href = link.getAttribute("href");
        if (!href || href.startsWith("#")) return;

        event.preventDefault();
        burst(link, event);
        setTimeout(() => {
          window.location.href = href;
        }, 150);
      });
    });

    const active = document.querySelector(".nav-link.active");
    if (active) {
      setTimeout(() => burst(active), 180);
    }
  });
})();
