(() => {
  const track = document.querySelector("[data-film-track]");
  if (!track) return;

  const prev = document.querySelector("[data-film-prev]");
  const next = document.querySelector("[data-film-next]");

  function amount() {
    const frame = track.querySelector(".film-frame");
    if (!frame) return track.clientWidth * 0.7;
    const gap = parseFloat(getComputedStyle(track).gap || "0");
    return frame.getBoundingClientRect().width + gap;
  }

  prev?.addEventListener("click", () => {
    track.scrollBy({ left: -amount(), behavior: "smooth" });
  });

  next?.addEventListener("click", () => {
    track.scrollBy({ left: amount(), behavior: "smooth" });
  });

  track.addEventListener("wheel", (event) => {
    if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return;
    event.preventDefault();
    track.scrollBy({ left: event.deltaY * 1.1, behavior: "smooth" });
  }, { passive: false });

  let dragging = false;
  let startX = 0;
  let startScroll = 0;

  track.addEventListener("pointerdown", (event) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    dragging = true;
    startX = event.clientX;
    startScroll = track.scrollLeft;
    track.classList.add("is-dragging");
    track.setPointerCapture(event.pointerId);
  });

  track.addEventListener("pointermove", (event) => {
    if (!dragging) return;
    track.scrollLeft = startScroll - (event.clientX - startX);
  });

  const stop = (event) => {
    if (!dragging) return;
    dragging = false;
    track.classList.remove("is-dragging");
    try { track.releasePointerCapture(event.pointerId); } catch {}
  };

  track.addEventListener("pointerup", stop);
  track.addEventListener("pointercancel", stop);
})();
