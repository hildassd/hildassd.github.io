(() => {
  // Keep this endpoint public and read-only. Never put a GoatCounter API key here.
  const config = Object.assign({
    endpoint: "",
    locale: "zh-CN",
    timezone: "Asia/Shanghai"
  }, window.SITE_STATS_CONFIG || {});

  const nodes = {
    visitors: document.querySelector("[data-site-stat=visitors]"),
    pageviews: document.querySelector("[data-site-stat=pageviews]"),
    updatedAt: document.querySelector("[data-site-stat=updated-at]"),
    posts: document.querySelector("[data-site-stat=posts]")
  };

  if (!nodes.visitors && !nodes.pageviews && !nodes.updatedAt && !nodes.posts) return;

  const formatNumber = (value) => {
    const number = Number(value);
    return Number.isFinite(number)
      ? new Intl.NumberFormat(config.locale).format(number)
      : "—";
  };

  const formatDate = (value) => {
    if (!value) return "—";
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return String(value);
    return new Intl.DateTimeFormat(config.locale, {
      timeZone: config.timezone,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit"
    }).format(date);
  };

  const set = (node, value) => {
    if (node) node.textContent = value;
  };

  // The article count is always available locally and cannot be blocked by an API error.
  set(nodes.posts, formatNumber(Array.isArray(window.BLOG_POSTS) ? window.BLOG_POSTS.length : 0));

  if (!config.endpoint) return;

  fetch(config.endpoint, { headers: { Accept: "application/json" } })
    .then((response) => {
      if (!response.ok) throw new Error(`Stats request failed: ${response.status}`);
      return response.json();
    })
    .then((payload) => {
      // Expected shape: { visitors, pageviews, updatedAt }.
      // Also supports the current Worker shape:
      // { success, visits, events, totalUtc, since, updatedAt }.
      const stats = payload?.stats || payload || {};
      set(nodes.visitors, formatNumber(
        stats.visitors ??
        stats.uniqueVisitors ??
        stats.unique_visitors ??
        stats.visits
      ));
      set(nodes.pageviews, formatNumber(
        stats.pageviews ??
        stats.page_views ??
        stats.views ??
        stats.total ??
        stats.totalUtc ??
        stats.visits
      ));
      set(nodes.updatedAt, formatDate(stats.updatedAt ?? stats.updated_at ?? stats.timestamp));
    })
    .catch((error) => {
      console.warn("Homepage statistics are unavailable.", error);
    });
})();
