(() => {
  const modal = document.querySelector("[data-friend-modal]");
  if (!modal) return;

  const image = modal.querySelector("[data-friend-modal-image]");
  const label = modal.querySelector("[data-friend-modal-label]");
  const name = modal.querySelector("[data-friend-modal-name]");
  const description = modal.querySelector("[data-friend-modal-description]");
  const link = modal.querySelector("[data-friend-modal-link]");

  function openModal(button) {
    image.src = button.dataset.image || "";
    image.alt = `${button.dataset.name || "Friend"} 头像`;
    label.textContent = button.dataset.label || "LINK";
    name.textContent = button.dataset.name || "Friend";
    description.textContent = button.dataset.description || "";
    link.href = button.dataset.url || "#";

    modal.hidden = false;
    document.documentElement.classList.add("friend-modal-open");
    requestAnimationFrame(() => modal.classList.add("is-open"));
  }

  function closeModal() {
    modal.classList.remove("is-open");
    document.documentElement.classList.remove("friend-modal-open");
    setTimeout(() => { modal.hidden = true; }, 180);
  }

  document.querySelectorAll("[data-friend-open]").forEach((button) => {
    button.addEventListener("click", () => openModal(button));
  });

  modal.querySelectorAll("[data-friend-close]").forEach((button) => {
    button.addEventListener("click", closeModal);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !modal.hidden) closeModal();
  });
})();
