(() => {
  const STORAGE_KEY = "shanmao-language";
  const translations = new Map([["首页", "Home"], ["文章", "Writing"], ["项目", "Projects"], ["足迹", "Travel"], ["此刻", "Now"], ["赞助", "Support"], ["关于", "About"], ["标签", "Tags"], ["关于我", "About me"], ["友链", "Links"], ["最近发布", "Recently published"], ["所有标签", "All tags"], ["筛选", "Filter"], ["全部", "All"], ["收款码", "Payment QR"], ["扫码赞助", "Scan to support"], ["赞助会用在哪里？", "Where will the support go?"], ["所在地", "Location"], ["最近专注", "Current focus"], ["正在读", "Reading"], ["最近状态", "Status"], ["此刻想说", "Current note"], ["最后更新：", "Last updated:"], ["最近", "Recently"], ["更新方式", "How to update"], ["真实地图 · 地级行政区", "Real map · Prefectures"], ["选择省份", "Choose province"], ["搜索", "Search"], ["全国", "China"], ["已点亮", "Lit"], ["当前地区", "Current region"], ["地级行政区", "Prefectures"], ["当前列表", "Current list"], ["选择一个省份", "Choose a province"], ["点亮状态保存在当前浏览器。", "Lit status is saved in this browser."], ["请联网后刷新页面；GitHub Pages 部署后可正常使用。", "Connect to the internet and refresh. It works best after deployment to GitHub Pages."], ["地图需要联网", "Map requires internet"], ["正在加载真实地图……", "Loading real map…"], ["若要发布默认足迹，请编辑", "To publish default travel history, edit"], ["返回全国", "Back to China"], ["省级地区", "Provinces"], ["进入", "Open"], ["点亮", "Light up"], ["地级行政区边界加载失败。", "Prefecture boundaries failed to load."], ["行政区边界加载失败，请检查网络。", "Boundary data failed to load. Check your connection."], ["点击地图区域或右侧列表即可点亮。", "Click the map or the list to light up a prefecture."], ["点击省份进入地级行政区。", "Click a province to view prefectures."], ["真实地图组件加载失败。", "The real map component failed to load."], ["点击点亮", "Click to light up"], ["点击进入省内地级行政区", "Click to view prefectures"], ["该地区边界加载失败。", "Boundary data for this region failed to load."], ["全国 / 选择省份", "China / Choose province"], ["这里可以替换成你自己的横幅图片", "Replace this with your own banner image"], ["建议横向图片，比例约 3:1 ～ 4:1", "Recommended landscape ratio: about 3:1 to 4:1"], ["记录。", "Record."], ["探索。", "Explore."], ["保持好奇。", "Stay curious."], ["这里放技术、旅行、项目和一些长期想留下来的文字。", "A place for technology, travel, projects, and writing worth keeping."], ["把这里替换成你的头像与一句简短自我介绍", "Replace this with your avatar and a short introduction"], ["这里可以写一段简短的个人介绍。比如你目前在做什么、主要关注哪些方向， 以及这个博客会记录什么内容。保持两三句话就足够了。", "Write a short introduction here: what you are doing, what you care about, and what this site records. Two or three sentences are enough."], ["这里可以写一段简短的个人介绍。比如你目前在做什么、主要关注哪些方向，以及这个博客会记录什么内容。保持两三句话就足够了。", "Write a short introduction here: what you are doing, what you care about, and what this site records. Two or three sentences are enough."], ["放一些你经常访问、喜欢阅读，或者朋友的个人网站。", "A few sites you often visit, enjoy reading, or that belong to friends."], ["朋友的网站简介", "A short description of your friend's site"], ["另一个值得关注的网站", "Another site worth following"], ["也可以不是朋友，而是长期收藏的网站", "It can also be a long-time favorite, not necessarily a friend's site."], ["更多关于我 →", "More about me →"], ["旅行地图 →", "Travel map →"], ["查看全部文章 →", "View all posts →"], ["最近发布。", "Recently published."], ["技术、设计、学习，以及一些值得慢慢想清楚的事情。", "Technology, design, learning, and things worth thinking through slowly."], ["你好，这是我的数字花园", "Hello, this is my digital garden"], ["为什么我要建立一个属于自己的个人网站，以及我希望在这里留下些什么。", "Why I built a personal website of my own, and what I hope to leave here."], ["用 Astro 与 GitHub Pages 搭建个人博客", "Build a personal blog with Astro and GitHub Pages"], ["把网站设计和文章内容分开：界面高度自定义，文章继续使用 Markdown。", "Separate site design from article content: keep the interface fully customizable while writing in Markdown."], ["设计个人网站时，我在意的五件事", "Five things I care about when designing a personal website"], ["从排版、留白、颜色到内容层级：让个人网站既有性格，又不会妨碍阅读。", "From typography and whitespace to color and hierarchy: give a personal site character without hurting readability."], ["随笔", "Essays"], ["#随笔", "#Essays"], ["1 篇文章", "1 post"], ["← 所有标签", "← All tags"], ["把这里替换成你的真实项目、开源仓库、课程作品或长期实验。", "Replace these with your real projects, open-source repositories, course work, or long-term experiments."], ["一个用于整理阅读、研究与长期笔记的个人知识系统。这里可以替换成你的真实项目。", "A personal knowledge system for organizing reading, research, and long-term notes. Replace this with your real project."], ["一些关于网页交互、视觉设计和前端体验的小实验。适合展示你的小型 side projects。", "Small experiments in web interaction, visual design, and front-end experience—ideal for showcasing side projects."], ["关于 AI 工具、工作流与实践的持续记录。你可以把这里替换成自己的研究或作品。", "Ongoing notes on AI tools, workflows, and practice. Replace this with your own research or work."], ["人与作品，", "People and work,"], ["都在持续迭代。", "are always evolving."], ["你好，我是一名喜欢技术与创作的人。这个网站既是我的数字花园，也是我的个人作品。你可以在 Writing 里读到文章，在 Projects 里看到我正在做的项目。", "Hi, I am someone who enjoys technology and making things. This site is both my digital garden and my personal work. Read my writing under Writing and see what I am building under Projects."], ["请猫虫", "Buy Catworm"], ["吃点好的。", "something nice."], ["如果这里的文章、项目或旅行记录对你有帮助，可以请我喝杯咖啡。 当然，阅读本身就已经很感谢了。", "If the writing, projects, or travel notes here have been useful, you can buy me a coffee. Reading is already deeply appreciated."], ["当前放的是占位图。你之后只需要把", "This is currently a placeholder. Later, simply replace"], ["替换成自己的收款码图片，并保持文件名不变即可。", "with your own payment QR image while keeping the same file name."], ["域名、托管和网站维护", "Domain, hosting, and site maintenance"], ["书籍、课程和工具订阅", "Books, courses, and tool subscriptions"], ["旅行记录与地图整理", "Travel notes and map organization"], ["继续写一些值得留下来的东西", "Keep writing things worth preserving"], ["把去过的地方", "Light up the places"], ["逐个点亮。", "you have visited."], ["使用 OpenStreetMap 真实地图作为底图，并叠加地级行政区边界。 选择省份后即可点击具体地级市、自治州、地区或盟。", "Uses OpenStreetMap as the real basemap with prefecture-level boundaries. Choose a province, then click a prefecture-level city, autonomous prefecture, region, or league."], ["正在发生的", "What is"], ["一些事情。", "happening now."], ["不做时间线，也不做社交动态。这里只保留我当前的状态。", "No timeline and no social feed. This page only keeps my current state."], ["这个页面没有前台输入框。所有公开内容统一编辑", "There is no front-end editor. All public content is edited in"], ["， 然后提交到 GitHub。", "and then committed to GitHub."], ["杭州 / 小和山", "Hangzhou / Xiaohe Mountain"], ["个人网站、写作与一些长期项目", "Personal website, writing, and long-term projects"], ["把这里改成你最近在读的东西", "Replace this with what you are currently reading"], ["保持推进，也留一点空白", "Keep moving, while leaving some room to breathe"], ["最近在重新整理这个网站，希望它更像一个长期住下来的地方，而不是一次性的作品集。", "I have been reorganizing this site so it feels more like a place to live in for the long term than a one-off portfolio."], ["目前主要在写东西、整理旅行足迹，也会把一些以前搁置的项目慢慢捡回来。", "Right now I am mostly writing, organizing travel history, and slowly picking up projects I had set aside."], ["这里的内容不追求高频更新，只在状态真的发生变化时修改。", "This page is not meant for frequent updates. I only change it when my actual state changes."], ["正在做", "Doing"], ["个人博客 / 地图 / 长期笔记", "Personal blog / maps / long-term notes"], ["正在学", "Learning"], ["把这里替换成你最近在学的内容", "Replace this with what you are learning"], ["最近喜欢", "Recently enjoying"], ["一首歌、一部电影、一个地方……", "A song, a film, a place…"], ["下一件事", "Next"], ["把这里写成近期最想完成的一件事", "Write the one thing you most want to finish next"], ["互联网越来越像一组租来的房间，而我想要一个真正属于自己的角落。", "The internet increasingly feels like a collection of rented rooms, and I wanted a corner that truly belongs to me."], ["所以我做了这个网站。", "So I built this website."], ["我想在这里写什么？", "What do I want to write here?"], ["暂时没有严格的边界。可能会包括：", "There are no strict boundaries for now. It may include:"], ["正在学习的技术；", "Technologies I am learning;"], ["一个项目从想法到落地的过程；", "The process of taking a project from idea to reality;"], ["对工具、产品和设计的观察；", "Observations about tools, products, and design;"], ["读书笔记；", "Reading notes;"], ["偶尔的一些生活记录。", "Occasional notes about life."], ["我希望文章首先对未来的自己有用，其次才是对其他人有用。", "I hope these articles are useful to my future self first, and to other people second."], ["为什么不用现成博客平台？", "Why not use an existing blogging platform?"], ["现成平台当然更省事，但自己的网站有一种很特别的自由：", "Existing platforms are certainly easier, but a site of your own offers a special kind of freedom:"], ["页面长什么样、内容如何组织、哪些东西值得保留，都由自己决定。", "You decide how the pages look, how content is organized, and what is worth preserving."], ["而且网站本身也会变成一个持续迭代的项目。", "The website itself also becomes an ongoing project."], ["下一步", "Next step"], ["这个版本还很简单。之后我可能会加入搜索、RSS、项目详情页，以及更多实验性的交互。", "This version is still simple. Later I may add search, RSS, project detail pages, and more experimental interactions."], ["但现在，先从写下第一篇文章开始。", "For now, I will start by writing the first article."], ["做个人博客时，我想同时保留两种自由：", "When building a personal blog, I wanted to keep two kinds of freedom:"], ["网站界面可以完全由自己设计；", "The interface can be designed entirely by me;"], ["写文章时不要重复维护 HTML。", "Writing articles should not require maintaining HTML by hand."], ["Astro 很适合这个需求。", "Astro fits this need very well."], ["网站和内容分层", "Separate site and content"], ["这个项目把代码大致分成四层：", "This project roughly divides the code into four layers:"], ["网站的布局、动画和视觉由", "The layout, animation, and visuals are controlled by"], ["与 CSS 控制，而正文留在 Markdown。", "and CSS, while the article body stays in Markdown."], ["日常更新流程", "Daily publishing workflow"], ["以后发布文章只需要新建一个文件：", "Publishing a new article only requires creating one file:"], ["然后写正文并提交：", "Then write the article and commit it:"], ["GitHub Actions 会自动构建并发布。", "GitHub Actions will build and deploy automatically."], ["保持简单", "Keep it simple"], ["一个个人网站最重要的不是拥有最多功能，而是让你愿意持续使用它。", "The most important thing about a personal website is not having the most features, but making you want to keep using it."], ["把复杂度留给设计，把写作流程保持简单。", "Let the design hold the complexity, and keep the writing workflow simple."], ["高度自定义并不意味着每个地方都要特别。", "High customization does not mean every part has to be special."], ["真正让我在意的是：网站有没有一种一致的节奏。", "What matters to me is whether the site has a consistent rhythm."], ["1. 先决定排版，而不是颜色", "1. Decide typography before color"], ["字体大小、行高、内容宽度，会比渐变和阴影更直接地影响阅读感受。", "Font size, line height, and content width affect reading more directly than gradients and shadows."], ["2. 建立少量设计变量", "2. Establish a small set of design variables"], ["把颜色、圆角、页面宽度集中成 CSS Variables。以后重新设计时，就不需要逐个文件修改。", "Centralize color, radius, and page width as CSS variables so future redesigns do not require editing every file."], ["3. 留白是一种结构", "3. Whitespace is structure"], ["留白不是“什么都没放”，它负责告诉读者：哪些内容属于同一组，哪些内容应该被分开。", "Whitespace is not 'nothing.' It tells readers which content belongs together and which content should be separated."], ["4. 动画应该帮助理解", "4. Animation should aid understanding"], ["按钮反馈、页面进入、主题切换都可以有动画，但它们不应该成为阅读的障碍。", "Buttons, page transitions, and style switches can animate, but they should never get in the way of reading."], ["5. 内容永远优先", "5. Content always comes first"], ["最终，人们回来不是为了再看一次背景渐变，而是因为这里有值得读的东西。", "In the end, people return not to see the background gradient again, but because there is something worth reading here."], ["北京市", "Beijing"], ["天津市", "Tianjin"], ["河北省", "Hebei"], ["山西省", "Shanxi"], ["内蒙古自治区", "Inner Mongolia"], ["辽宁省", "Liaoning"], ["吉林省", "Jilin"], ["黑龙江省", "Heilongjiang"], ["上海市", "Shanghai"], ["江苏省", "Jiangsu"], ["浙江省", "Zhejiang"], ["安徽省", "Anhui"], ["福建省", "Fujian"], ["江西省", "Jiangxi"], ["山东省", "Shandong"], ["河南省", "Henan"], ["湖北省", "Hubei"], ["湖南省", "Hunan"], ["广东省", "Guangdong"], ["广西壮族自治区", "Guangxi"], ["海南省", "Hainan"], ["重庆市", "Chongqing"], ["四川省", "Sichuan"], ["贵州省", "Guizhou"], ["云南省", "Yunnan"], ["西藏自治区", "Tibet"], ["陕西省", "Shaanxi"], ["甘肃省", "Gansu"], ["青海省", "Qinghai"], ["宁夏回族自治区", "Ningxia"], ["新疆维吾尔自治区", "Xinjiang"], ["台湾省", "Taiwan"], ["香港特别行政区", "Hong Kong"], ["澳门特别行政区", "Macao"]]);
  const titleTranslations = new Map([["赞助 · 小和山猫虫阁", "Support · Xiaohe Mountain Catworm Cabinet"], ["足迹 · 小和山猫虫阁", "Travel · Xiaohe Mountain Catworm Cabinet"], ["此刻 · 小和山猫虫阁", "Now · Xiaohe Mountain Catworm Cabinet"], ["小和山猫虫阁", "Xiaohe Mountain Catworm Cabinet"], ["Home · YOUR NAME", "Home · YOUR NAME"], ["Writing · YOUR NAME", "Writing · YOUR NAME"], ["Projects · YOUR NAME", "Projects · YOUR NAME"], ["Tags · YOUR NAME", "Tags · YOUR NAME"], ["About · YOUR NAME", "About · YOUR NAME"], ["你好，这是我的数字花园 · YOUR NAME", "Hello, this is my digital garden · YOUR NAME"], ["用 Astro 与 GitHub Pages 搭建个人博客 · YOUR NAME", "Build a personal blog with Astro and GitHub Pages · YOUR NAME"], ["设计个人网站时，我在意的五件事 · YOUR NAME", "Five things I care about when designing a personal website · YOUR NAME"], ["#随笔 · YOUR NAME", "#Essays · YOUR NAME"]]);
  
// Additional system UI introduced by the editorial redesign.
const editorialTranslations = new Map([
  ["记录，构建，行走，", "Record, build, travel,"],
  ["然后继续向前。", "then keep moving."],
  ["抵达页尾，也不是结束。", "Reaching the end of the page is not the end."],
  ["页面艺术收尾", "Artistic page ending"],
  ["切换到夜晚模式", "Switch to night mode"],
  ["切换到白天模式", "Switch to day mode"],
  ["夜晚模式", "Night mode"],
  ["白天模式", "Day mode"]
]);

editorialTranslations.forEach((value,key) => translations.set(key,value));

const galleryTranslations = new Map([
  ["记录","Record"],
  ["探索","Explore"],
  ["保持好奇","Stay curious"],
  ["读文章","Read writing"],
  ["看看此刻","See now"],
  ["最近的画面","Recent frames"],
  ["旅行、日常和一些想留下来的瞬间。","Travel, daily life, and moments worth keeping."],
  ["把这里换成你的照片","Replace this with your photo"],
  ["旅行中的一个瞬间","A moment from a journey"],
  ["普通但值得记住的一天","An ordinary day worth remembering"],
  ["城市里的光和影","Light and shadow in the city"],
  ["留给之后再看的画面","A frame to revisit later"],
  ["拖动、滚轮或使用左右按钮浏览。","Drag, scroll, or use the arrows to browse."],
  ["相册控制","Album controls"],
  ["向左浏览","Browse left"],
  ["向右浏览","Browse right"],
  ["横向照片相册","Horizontal photo album"]
]);
galleryTranslations.forEach((value,key) => translations.set(key,value));

const friendHeroTranslations = new Map([
  ["个人主页","Personal homepage"],
  ["记录。","Record."],
  ["探索。","Explore."],
  ["保持好奇。","Stay curious."],
  ["正在把技术、旅行、项目与长期写作，慢慢整理成属于自己的数字空间。",
    "I am slowly turning technology, travel, projects, and long-form writing into a digital space of my own."],
  ["读文章","Read writing"],
  ["看看此刻","See now"],
  ["一些朋友、长期关注的网站和我愿意反复访问的角落。",
    "Friends, long-followed sites, and corners of the web I keep returning to."],
  ["这里放朋友的网站简介，也可以写你为什么推荐这个网站。",
    "Add a short description of your friend's site and why you recommend it."],
  ["可以放个人博客、作品集、摄影站或者你经常阅读的地方。",
    "Use this for personal blogs, portfolios, photography sites, or places you read often."],
  ["友链不一定只放朋友，也可以放长期收藏并愿意推荐的网站。",
    "Friend links do not have to be friends only; long-time favorites work too."],
  ["继续添加卡片即可，数量多了也不会把首页纵向拉得很长。",
    "Add more cards freely; even a long list will not make the homepage excessively tall."],
  ["访问网站 ↗","Visit site ↗"],
  ["拖动、滑动或使用左右按钮浏览。","Drag, swipe, or use the arrows to browse."],
  ["友链浏览控制","Friend-link controls"],
  ["向左浏览友链","Browse friend links left"],
  ["向右浏览友链","Browse friend links right"],
  ["横向友链卡片","Horizontal friend-link cards"]
]);
friendHeroTranslations.forEach((value,key) => translations.set(key,value));

const killerRabbitTranslations = new Map([
  ["杀手兔","Killer Rabbit"],
  ["正在把技术、项目、阅读与长期写作，慢慢整理成属于自己的数字空间。",
    "I am slowly turning technology, projects, reading, and long-form writing into a digital space of my own."],
  ["放一些你经常访问、喜欢阅读，或者朋友的个人网站。",
    "A few sites you visit often, enjoy reading, or that belong to friends."],
  ["查看 →","View →"],
  ["长期收藏的网站","A long-time favorite"],
  ["点击任意友链，查看完整卡片。","Click any friend link to view the full card."],
  ["关闭友链卡片","Close friend-link card"],
  ["关闭","Close"],
  ["友链头像","Friend-link avatar"],
  ["这里显示友链简介。","The friend-link description appears here."],
  ["疯狂星期四","Crazy Thursday"],
  ["疯狂星期四 vivo50","Crazy Thursday · V me 50"],
  ["这里专门留给一个不会过时的互联网仪式感。",
    "A small space reserved for an internet ritual that never gets old."],
  ["肯德基老爷爷 Logo","KFC Colonel logo"],
  ["如果这里的文章、项目或笔记对你有帮助，可以请我喝杯咖啡。",
    "If the writing, projects, or notes here have been useful, you can buy me a coffee."],
  ["网站内容与长期整理","Site content and long-term organization"]
]);
killerRabbitTranslations.forEach((value,key) => translations.set(key,value));

const socialTranslations = new Map([
  ["来打个招呼","Say hello"],
  ["无论是代码、想法、照片，还是一个有趣的兔子洞，这些地方都能找到我。",
    "Whether it is code, ideas, photos, or an interesting rabbit hole, you can find me in these places."],
  ["我的不同账号","My accounts"],
  ["邮箱","Email"],
  ["知乎","Zhihu"],
  ["哔哩哔哩","Bilibili"],
  ["记录，构建，行走，","Record, build, travel,"],
  ["然后继续向前。","then keep moving."],
  ["KFC Colonel Sanders 官方主标识","Official KFC Colonel Sanders primary logo"],
  ["KFC 官方 Brand Assets","Official KFC Brand Assets"]
]);
socialTranslations.forEach((value,key) => translations.set(key,value));





  const originals = new WeakMap();
  let applying = false;

  const placeholderTranslations = new Map([
    ["杭州 / 成都 / 呼和浩特","Hangzhou / Chengdu / Hohhot"],
    ["杭州 / 成都","Hangzhou / Chengdu"],
    ["例如：杭州 / 成都","e.g. Hangzhou / Chengdu"]
  ]);

  const ariaTranslations = new Map([
    ["主要导航","Main navigation"],
    ["页脚导航","Footer navigation"],
    ["切换到蓝白灰风格","Switch to blue-white-gray style"],
    ["切换到绿色风格","Switch to green style"],
    ["顶部横幅图片区域","Top banner image area"],
    ["真实旅行地图","Real travel map"]
  ]);

  function remember(node) {
    if (!originals.has(node)) originals.set(node, node.nodeValue);
  }

  function translateTextNode(node, lang) {
    if (!node || !node.parentElement) return;
    if (["SCRIPT","STYLE","CODE","TEXTAREA"].includes(node.parentElement.tagName)) return;

    remember(node);
    const original = originals.get(node);

    if (lang === "zh") {
      node.nodeValue = original;
      return;
    }

    const trimmed = original.trim();
    if (!trimmed) return;

    let translated = translations.get(trimmed);

    if (!translated) {
      // Translate common composed fragments without changing source code blocks.
      translated = trimmed;
      for (const [zh,en] of translations) {
        if (zh.length >= 4 && translated.includes(zh)) {
          translated = translated.split(zh).join(en);
        }
      }
      if (translated === trimmed) return;
    }

    const leading = original.match(/^\s*/)?.[0] || "";
    const trailing = original.match(/\s*$/)?.[0] || "";
    node.nodeValue = leading + translated + trailing;
  }

  function translateTree(root, lang) {
    if (!root) return;

    if (root.nodeType === Node.TEXT_NODE) {
      translateTextNode(root,lang);
      return;
    }

    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach((node) => translateTextNode(node,lang));
  }

  function translateAttributes(lang) {
    document.querySelectorAll("[placeholder]").forEach((el) => {
      if (!el.dataset.originalPlaceholder) {
        el.dataset.originalPlaceholder = el.getAttribute("placeholder") || "";
      }
      const original = el.dataset.originalPlaceholder;
      el.setAttribute(
        "placeholder",
        lang === "en" ? (placeholderTranslations.get(original) || original) : original
      );
    });

    document.querySelectorAll("[aria-label]").forEach((el) => {
      if (!el.dataset.originalAriaLabel) {
        el.dataset.originalAriaLabel = el.getAttribute("aria-label") || "";
      }
      const original = el.dataset.originalAriaLabel;
      el.setAttribute(
        "aria-label",
        lang === "en" ? (ariaTranslations.get(original) || translations.get(original) || original) : original
      );
    });

    document.querySelectorAll("[alt]").forEach((el) => {
      if (!el.dataset.originalAlt) {
        el.dataset.originalAlt = el.getAttribute("alt") || "";
      }
      const original = el.dataset.originalAlt;
      el.setAttribute("alt", lang === "en" ? (translations.get(original) || original) : original);
    });
  }

  function translateTitle(lang) {
    if (!document.documentElement.dataset.originalTitle) {
      document.documentElement.dataset.originalTitle = document.title;
    }
    const original = document.documentElement.dataset.originalTitle;
    document.title = lang === "en"
      ? (titleTranslations.get(original) || translations.get(original) || original)
      : original;
  }

  function updateLanguageToggle(lang) {
    document.querySelectorAll("[data-language-toggle]").forEach((button) => {
      button.textContent = lang === "zh" ? "EN" : "中";
      button.setAttribute(
        "aria-label",
        lang === "zh" ? "Switch to English" : "切换到中文"
      );
    });
  }

  function applyLanguage(lang) {
    const value = lang === "en" ? "en" : "zh";
    if (applying) return;
    applying = true;

    document.documentElement.dataset.lang = value;
    document.documentElement.lang = value === "en" ? "en" : "zh-CN";

    translateTree(document.body,value);
    translateAttributes(value);
    translateTitle(value);
    updateLanguageToggle(value);

    try { localStorage.setItem(STORAGE_KEY,value); } catch {}
    applying = false;

    window.dispatchEvent(new CustomEvent("site-language-change",{detail:{lang:value}}));
  }

  window.siteLang = () => document.documentElement.dataset.lang || "zh";
  window.applySiteLanguage = applyLanguage;

  document.addEventListener("DOMContentLoaded", () => {
    let saved = "zh";
    try { saved = localStorage.getItem(STORAGE_KEY) || "zh"; } catch {}

    document.querySelectorAll("[data-language-toggle]").forEach((button) => {
      button.addEventListener("click", () => {
        applyLanguage(window.siteLang() === "zh" ? "en" : "zh");
      });
    });

    const observer = new MutationObserver((mutations) => {
      if (applying) return;
      const current = window.siteLang();
      if (current !== "en") return;

      for (const mutation of mutations) {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.TEXT_NODE || node.nodeType === Node.ELEMENT_NODE) {
            translateTree(node,"en");
          }
        });
      }
    });

    observer.observe(document.body,{childList:true,subtree:true});
    applyLanguage(saved);
  });
})();
