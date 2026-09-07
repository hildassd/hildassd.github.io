(() => {
  const screen = document.getElementById("entry-screen");
  if (!screen) return;

  const BG_KEY = "shanmao-entry-background";
  let targetX = 50;
  let targetY = 50;
  let currentX = 50;
  let currentY = 50;

  function setBackground(mode) {
    screen.dataset.backgroundMode = mode;
    const button = document.querySelector("[data-entry-background]");
    if (button) {
      const en = window.siteLang?.() === "en";
      button.textContent =
        mode === "photo"
          ? (en ? "Tech background" : "科技背景")
          : (en ? "Photo background" : "图片背景");
    }
    try { localStorage.setItem(BG_KEY, mode); } catch {}
  }

  function setupBackgroundToggle() {
    let mode = "tech";
    try { mode = localStorage.getItem(BG_KEY) || "tech"; } catch {}
    setBackground(mode);

    document.querySelector("[data-entry-background]")?.addEventListener("click", () => {
      setBackground(screen.dataset.backgroundMode === "photo" ? "tech" : "photo");
    });

    window.addEventListener("site-language-change", () => {
      setBackground(screen.dataset.backgroundMode || "tech");
    });
  }

  screen.addEventListener("pointermove", (event) => {
    const rect = screen.getBoundingClientRect();
    targetX = ((event.clientX - rect.left) / rect.width) * 100;
    targetY = ((event.clientY - rect.top) / rect.height) * 100;
  });

  screen.addEventListener("pointerleave", () => {
    targetX = 50;
    targetY = 50;
  });

  const tick = () => {
    currentX += (targetX - currentX) * 0.08;
    currentY += (targetY - currentY) * 0.08;

    screen.style.setProperty("--entry-x", `${currentX}%`);
    screen.style.setProperty("--entry-y", `${currentY}%`);
    screen.style.setProperty("--entry-parallax-x", `${(currentX - 50) * 0.16}px`);
    screen.style.setProperty("--entry-parallax-y", `${(currentY - 50) * 0.16}px`);

    requestAnimationFrame(tick);
  };

  setupBackgroundToggle();
  tick();
})();
