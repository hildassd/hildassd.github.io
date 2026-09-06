(() => {
  const hero = document.querySelector(".card-hero");
  if (!hero) return;

  let tx = 68;
  let ty = 32;
  let x = tx;
  let y = ty;

  hero.addEventListener("pointermove", (event) => {
    const rect = hero.getBoundingClientRect();
    tx = ((event.clientX - rect.left) / rect.width) * 100;
    ty = ((event.clientY - rect.top) / rect.height) * 100;
  });

  hero.addEventListener("pointerleave", () => {
    tx = 68;
    ty = 32;
  });

  const frame = () => {
    x += (tx - x) * 0.08;
    y += (ty - y) * 0.08;
    hero.style.setProperty("--home-x", `${x}%`);
    hero.style.setProperty("--home-y", `${y}%`);
    requestAnimationFrame(frame);
  };

  frame();
})();
