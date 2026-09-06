(() => {
  const KEY = "shanmao-theme";

  function applyTheme(theme) {
    const value = theme === "dark" ? "dark" : "light";
    document.documentElement.dataset.theme = value;

    document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
      button.textContent = value === "light" ? "☾" : "☀";
      button.setAttribute(
        "aria-label",
        value === "light" ? "切换到夜晚模式" : "切换到白天模式"
      );
      button.setAttribute("title", value === "light" ? "夜晚模式" : "白天模式");
    });

    try { localStorage.setItem(KEY, value); } catch {}
    window.dispatchEvent(new CustomEvent("site-theme-change", { detail:{theme:value} }));
  }

  window.siteTheme = () => document.documentElement.dataset.theme || "light";

  // Apply immediately to reduce flashing.
  let saved = "light";
  try {
    saved = localStorage.getItem(KEY) ||
      (window.matchMedia?.("(prefers-color-scheme: dark)")?.matches ? "dark" : "light");
  } catch {}
  document.documentElement.dataset.theme = saved === "dark" ? "dark" : "light";

  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
      button.addEventListener("click", () => {
        applyTheme(window.siteTheme() === "light" ? "dark" : "light");
      });
    });

    applyTheme(window.siteTheme());
  });
})();
