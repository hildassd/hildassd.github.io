(() => {
  const KEY = "shanmao-style-mode";

  function labelFor(mode) {
    const en = window.siteLang?.() === "en";
    if (mode === "steel") return en ? "GREEN" : "绿色";
    return en ? "BLUE" : "蓝白灰";
  }

  function applyStyle(mode) {
    const value = mode === "steel" ? "steel" : "light";
    document.documentElement.dataset.styleMode = value;

    document.querySelectorAll("[data-style-toggle]").forEach((button) => {
      button.textContent = labelFor(value);
      button.setAttribute(
        "aria-label",
        value === "steel"
          ? (window.siteLang?.() === "en" ? "Switch to green style" : "切换到绿色风格")
          : (window.siteLang?.() === "en" ? "Switch to blue-white-gray style" : "切换到蓝白灰风格")
      );
    });

    try { localStorage.setItem(KEY, value); } catch {}
    window.dispatchEvent(new CustomEvent("site-style-change", { detail:{mode:value} }));
  }

  window.siteStyleMode = () => document.documentElement.dataset.styleMode || "light";

  document.addEventListener("DOMContentLoaded", () => {
    let saved = "light";
    try { saved = localStorage.getItem(KEY) || "light"; } catch {}

    document.querySelectorAll("[data-style-toggle]").forEach((button) => {
      button.addEventListener("click", () => {
        applyStyle(window.siteStyleMode() === "light" ? "steel" : "light");
      });
    });

    window.addEventListener("site-language-change", () => applyStyle(window.siteStyleMode()));
    applyStyle(saved);
  });
})();
