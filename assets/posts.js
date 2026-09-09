(() => {
  const posts = Array.isArray(window.BLOG_POSTS)
    ? [...window.BLOG_POSTS].sort((a, b) => b.date.localeCompare(a.date))
    : [];

  const escapeHtml = (value) => String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

  const joinPath = (root, path) => `${root === "." ? "" : `${root}/`}${path}`;
  const tagUrl = (root, tag) => `${joinPath(root, "blog.html")}?tag=${encodeURIComponent(tag)}`;

  function renderPost(post, root) {
    const tags = post.tags
      .map((tag) => `<a class="post-tag" href="${escapeHtml(tagUrl(root, tag))}">#${escapeHtml(tag)}</a>`)
      .join("");
    const featured = post.featured ? '<span class="featured">Featured</span>' : "";

    return `
      <article class="post-card">
        <div class="post-hitarea">
          <div class="post-meta"><time datetime="${escapeHtml(post.date)}">${escapeHtml(post.displayDate)}</time>${featured}</div>
          <h2><a class="post-title-link" href="${escapeHtml(joinPath(root, post.path))}">${escapeHtml(post.title)}</a></h2>
          <p>${escapeHtml(post.description)}</p>
          <div class="post-bottom"><div class="tag-row">${tags}</div><span class="arrow" aria-hidden="true">↗</span></div>
        </div>
      </article>`;
  }

  function allTags() {
    const counts = new Map();
    posts.forEach((post) => post.tags.forEach((tag) => counts.set(tag, (counts.get(tag) || 0) + 1)));
    return [...counts.entries()];
  }

  function selectedTag() {
    return new URLSearchParams(window.location.search).get("tag") || "";
  }

  function renderPostLists() {

    document.querySelectorAll("[data-post-list]").forEach((list) => {
      const root = list.dataset.root || ".";
      const limit = Number.parseInt(list.dataset.postLimit || "0", 10);
      const activeTag = list.dataset.enableTagFilter === "true" ? selectedTag() : "";
      let visiblePosts = activeTag
        ? posts.filter((post) => post.tags.includes(activeTag))
        : posts;

      if (limit > 0) visiblePosts = visiblePosts.slice(0, limit);

      list.innerHTML = visiblePosts.length
        ? visiblePosts.map((post) => renderPost(post, root)).join("")
        : `<p class="empty-posts">没有找到带有 #${escapeHtml(activeTag)} 标签的文章。</p>`;
    });
  }

  function renderFilters() {
    const container = document.querySelector("[data-tag-filters]");
    if (!container) return;

    const root = container.dataset.root || ".";
    const activeTag = selectedTag();
    const filters = allTags().map(([tag]) => {
      const activeClass = tag === activeTag ? " active" : "";
      const current = tag === activeTag ? ' aria-current="page"' : "";
      return `<a class="filter-tab${activeClass}"${current} href="${escapeHtml(tagUrl(root, tag))}">#${escapeHtml(tag)}</a>`;
    });
    const allActiveClass = activeTag ? "" : " active";
    const allCurrent = activeTag ? "" : ' aria-current="page"';

    container.innerHTML = `
      <span>FILTER:</span>
      <a class="filter-tab${allActiveClass}"${allCurrent} href="${escapeHtml(joinPath(root, "blog.html"))}">全部文章</a>
      ${filters.join("")}
      <a class="filter-tab all-tags-link" href="${escapeHtml(joinPath(root, "tags.html"))}">ALL TAGS →</a>`;

    const summary = document.querySelector("[data-filter-summary]");
    if (summary) {
      const count = activeTag ? posts.filter((post) => post.tags.includes(activeTag)).length : posts.length;
      summary.textContent = activeTag ? `#${activeTag} · ${count} 篇文章` : `全部文章 · ${count} 篇`;
    }
  }

  function renderTagIndex() {
    const container = document.querySelector("[data-tag-index]");
    if (!container) return;

    const root = container.dataset.root || ".";
    container.innerHTML = allTags().map(([tag, count]) => `
      <a class="filter-tab" href="${escapeHtml(tagUrl(root, tag))}">
        <span>#${escapeHtml(tag)}</span>
        <small>${count} 篇文章</small>
      </a>`).join("");
  }

  function makeArticleTagsClickable() {
    document.querySelectorAll(".article-tags a").forEach((link) => {
      const tag = link.textContent.trim().replace(/^#/, "");
      if (tag) link.href = tagUrl("..", tag);
    });
  }

  renderPostLists();
  renderFilters();
  renderTagIndex();
  makeArticleTagsClickable();
})();
