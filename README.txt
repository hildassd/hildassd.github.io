# 静态 HTML 预览版

这个目录不需要 Node.js、不需要 npm，也不需要运行本地服务器。

## 直接预览

1. 解压 ZIP。
2. 找到根目录的 `index.html`。
3. 双击 `index.html`。
4. 浏览器会直接通过 `file://` 打开网站。

页面导航、CSS、深浅色切换和本地 SVG 图片都可以直接工作。

## 主要文件

```text
index.html              首页
about.html              About
projects.html           Projects
blog.html               Blog 列表
tags.html               标签总览

articles/
  hello-world.html
  building-with-astro.html
  designing-a-personal-site.html

tags/
  ...                    每个标签的静态页面

assets/
  styles.css             全站 CSS
  theme.js               深浅色切换
  images/                所有本地图片
```

## 这和 Astro 版本有什么区别？

这份是「静态快照」，适合：
- 双击快速预览设计；
- 学习最终 HTML 长什么样；
- 放在任何普通静态服务器上。

但它不会自动把 Markdown 转换成文章页面。

真正长期维护博客，仍然建议使用上一份 Astro 项目：
- 写 Markdown；
- `git push`；
- GitHub Actions 自动生成 HTML 并发布。

## 想直接修改这份静态版

可以直接编辑：
- `index.html`
- `about.html`
- `projects.html`
- `blog.html`
- `assets/styles.css`

修改后刷新浏览器即可看到效果。


本版本采用更克制的视觉风格，并移除了首页和页脚的大型联系 CTA。


## 首页个人信息与友链

首页 `index.html` 现在多了一块两栏区域：

- 左侧：个人简介、关注方向、所在地
- 右侧：友链

直接搜索：

```text
01 / PROFILE
02 / LINKS
```

即可修改。

## Travel 足迹地图

新页面：

```text
travel.html
```

地图数据统一放在：

```text
assets/travel.js
```

编辑文件顶部的：

```js
const VISITED_CITIES = [
  {
    city: "广州市",
    province: "广东省",
    lat: 23.1291,
    lng: 113.2644,
    year: 2026,
    note: "一句话备注"
  }
];
```

一条记录对应一个城市，因此可以按“地级市”作为最小记录单位。

地图使用 Leaflet + OpenStreetMap 在线底图：
- 双击 HTML 即可打开页面；
- 地图底图需要联网；
- 断网时，城市列表仍可以正常显示。


# 本次视觉改版

## 入口页

现在双击：

```text
index.html
```

首先看到的是科技感入口页。

中央按钮：

```text
点击进入小和山猫虫阁
```

点击后进入：

```text
home.html
```

## 卡片式页面

主要页面已改成卡片分区，不再使用细横线作为主要分隔方式。

## 旅行地图

`travel.html` 已改为完全离线的 SVG 矢量地图，不再依赖：
- Leaflet
- OpenStreetMap 在线瓦片
- CDN

因此双击 HTML 就能显示。

城市数据仍然编辑：

```text
assets/travel.js
```

每条记录以地级市作为最小单位。

注意：地图轮廓是用于个人旅行可视化的简化示意图，城市点根据经纬度投影显示。


# 中文导航、悬停高光与赞助页

## 导航

顶部选项卡现在统一为：

```text
首页 / 文章 / 项目 / 足迹 / 赞助 / 关于
```

## 主配色

```text
#EFF9FF
#47176D
#A5CC2E
```

## 鼠标高光

`assets/glow.js` 会在导航、卡片、按钮等元素上加入轻量的鼠标跟随高光。
如果不想要这个效果，删除 HTML 中对 `assets/glow.js` 的引用即可。

## 赞助

新增：

```text
sponsor.html
```

默认收款码占位图：

```text
assets/images/payment-qr-placeholder.svg
```

最简单的替换方式：
1. 把你的收款码图片放到 `assets/images/`
2. 命名为 `payment-qr-placeholder.svg`（如果你的图片不是 SVG，直接修改 sponsor.html 的 img src 即可）


# 本次更新

## 全站背景

主背景现在固定为：

```text
#A5CC2E
```

卡片主要使用：

```text
#EFF9FF
```

主要文字/强调色：

```text
#47176D
```

## 此刻

新增：

```text
now.html
```

公开状态数据：

```text
assets/now.js
```

修改 `NOW_PUBLIC` 后提交 GitHub，即可更新所有访问者看到的“此刻”。

页面中的“随手写”使用浏览器 localStorage：
- 可以直接输入并保存；
- 只保存在当前浏览器；
- 不会自动公开到 GitHub。

## 入口页

`index.html` 使用三种指定主色，并新增鼠标位置跟随：
- 网格轻微视差
- 光晕跟随鼠标
- 主面板轻微反向移动

对应脚本：

```text
assets/entry.js
```

## 旅行地图

已经不再使用手绘示意轮廓。
地图 SVG 根据 Natural Earth 真实经纬度地理数据生成，
城市点与地图轮廓使用相同经纬度投影。

旅行数据仍编辑：

```text
assets/travel.js
```


# 本次调整

## 主页

主页重新调整了三色层级：

- 全站背景：`#A5CC2E`
- 主阅读卡片：`#EFF9FF`
- 结构色 / 文字：`#47176D`

首页首屏使用紫色渐变，鼠标移动会带动局部绿色光晕；
卡片内部仍保留小范围鼠标高光。

对应脚本：

```text
assets/home-motion.js
```

## 此刻

已经删除前台“随手写”和 localStorage 编辑区。

以后只编辑：

```text
assets/now.js
```

里面的：

```js
const NOW_PUBLIC = { ... }
```

然后提交到 GitHub。

## 地级市点亮地图

足迹页现在是两级地图：

```text
全国省级地图
  ↓ 点击省份
省内地级行政区地图
  ↓ 点击
点亮 / 取消点亮
```

边界数据优先来自阿里云 DataV GeoAtlas，
失败时会尝试 jsDelivr 的 DataV GeoJSON 镜像。

临时点击状态保存在当前浏览器。

如果要把点亮状态永久发布给访客，
编辑：

```text
assets/travel.js
```

顶部：

```js
const DEFAULT_LIT_CITIES = [
  "330100", // 杭州
  "510100"  // 成都
];
```

注意：地级行政区详细边界是在线加载的；
加载失败时会保留本地中国轮廓和省份选择入口，不会整页空白。


# 本次视觉与交互更新

## 顶部横幅图片

主页最上方新增从左到右占满的图片位：

```text
assets/images/top-banner-placeholder.svg
```

最简单做法：
1. 把你的横幅图放进 `assets/images/`
2. 修改 `home.html` 中 `.top-image-slot img` 的 `src`

建议横向比例约 `3:1` 到 `4:1`。

## 头像

“关于我”卡片现在有头像位：

```text
assets/images/avatar-placeholder.svg
```

换成自己的 JPG / PNG / WEBP 即可。

## 友链

友链和“关于我”现在使用完全一致的浅蓝 / 白色渐变卡片。

## 导航火花

点击顶部选项卡时会有小型火花迸溅。
脚本：

```text
assets/sparks.js
```

## 夜间模式

夜间模式已改成普鲁士蓝风格：

```text
#071A2B
#0B2742
#0E3150
```

绿色 `#A5CC2E` 继续作为强调色。

## 地图

地级行政区地图新增：
- 鼠标滚轮缩放
- 鼠标 / 触摸拖拽
- `+ / - / 重置` 按钮
- 地级市搜索
- 全国 / 当前省份面包屑

地级行政区边界仍从行政区 GeoJSON 在线加载。


# 本次更新

## 悬停高亮

现在不是瞬间切换颜色，而是：
- 鼠标位置出现扩散光晕
- 导航使用扫光过渡
- 卡片阴影和位移同步渐变

对应脚本：

```text
assets/effects.js
```

## 鼠标拖尾

桌面端新增低密度鼠标拖尾和点击波纹。
触摸设备和 `prefers-reduced-motion` 下会自动关闭。

## 夜晚模式

夜间模式改为“普鲁士蓝 + 工业风”：

```text
#06131F
#081C2D
#0A2237
#0D2B45
```

搭配：
- 工业灰蓝边界
- 细网格背景
- 少量 `#A5CC2E` 荧光绿提示
- 金属感内描边

## 地图重构

之前所有地名同时显示会挤成一条线。
现在：

1. 全国层只显示省级标签
2. 进入省份后，地级行政区标签会进行简单碰撞避让
3. 地图只保留一部分不重叠标签
4. 完整地名始终显示在右侧列表
5. 地图悬停会同步高亮列表，列表悬停也会高亮地图


# 本次修改

## 夜晚模式

夜晚模式已经完全换色，不再沿用白 / 紫 / 绿三色体系。

新的夜间方向：
- `#080C11` / `#0D141C` 深黑蓝背景
- `#141B24` / `#1C2632` 金属灰蓝卡片
- `#E6ECF2` 主文字
- `#D5A24A` 黄铜色交互强调

## 卡片悬停

卡片不再跟随鼠标高亮，也不会悬浮。
动态效果只保留：
- 顶部导航
- 按钮
- 地图交互
- 鼠标拖尾

## 首页长句卡片

“A quiet place for useful ideas...” 区域已增加高度和上下留白，
避免大字号文字被截断。

## 顶部图片

横幅图与上方区域之间不再额外留白。

## 背景

白天背景改成绿色渐变：

```text
#96C628 → #B5D955 → #DCECAD
```

## 地图

地图已经再次重构：
- SVG 图面不再长期显示地名
- 鼠标悬停某区域时才显示名称浮层
- 所有完整名称固定放在右侧列表
- 全国显示省份；进入省份后显示地级行政区
- 地图和列表双向联动
- 保留缩放、拖拽、搜索、点亮


# 本次更新

## 中英文切换

顶部新增：

```text
EN / 中
```

脚本：

```text
assets/i18n.js
```

语言选择会保存在浏览器 `localStorage`。

目前会切换全站导航、常用界面文字和核心页面 UI。
文章正文仍然可以按你自己的需求分别准备中文版 / 英文版。

## 真实地图

足迹页面现在使用：

```text
OpenStreetMap 真实地图底图
+ 地级行政区 GeoJSON 边界
```

因此地图上会有真实道路、城市、河流与地名。

真实地图需要联网。

## 初始页面背景

入口页现在可以在两种模式间切换：

```text
科技背景
图片背景
```

图片背景占位文件：

```text
assets/images/entry-background-placeholder.svg
```

如果你要换成自己的图片，最简单的方法是在 `assets/styles.css` 中找到：

```css
.entry-photo-background
```

把 `url("images/entry-background-placeholder.svg")`
替换成自己的图片文件。

## 夜间模式

夜间模式重新换成了中等明度的 petrol / steel blue 配色，
不再使用浅色卡片，也不会压得过黑。

## 白天渐变

白天背景现在包含：
- 活泼绿色
- 青绿色
- 少量紫色

主页紫色首屏卡片也改成了更明显的紫色渐变。


# 本次调整

## 默认白天风格

默认白天风格的：
- 卡片
- 字体
- 紫色主页首屏
- 友链 / 关于我
- 按钮
- 内容布局

都保留原版本。

只修改了页面背景，变成绿色单色系渐变：

```text
#91BE2D → #A6CE43 → #CFE384
```

## 顶部导航

鼠标进入导航选项卡时，颜色会从底部向上铺满。

## 文章 FILTER

FILTER 标签也使用相同的“自下而上铺满”交互。

FILTER 卡片与下面文章列表之间增加了约 38px 的留白。

## 英文模式

英文模式现在会翻译当前网站里的全部可见文字，包括：
- 导航与按钮
- 首页文字
- About / Projects / Sponsor / Now
- 地图 UI 与动态提示
- 示例文章标题、摘要与正文
- 标签文字
- 页面 title / placeholder / aria-label

动态 JS 后插入的文字也会通过 MutationObserver 自动执行翻译。

如果未来你新写了中文内容，需要在：

```text
assets/i18n.js
```

中的翻译表里补一条对应英文，即可参与切换。


# 本次参考图视觉改版

## 部分宋体标题

大标题 / 分区标题现在优先使用系统宋体：

```css
"Songti SC", "STSong", "SimSun", "Noto Serif CJK SC", Georgia, serif
```

不需要额外下载字体。

## 白天模式

参考图方向：
- 浅蓝雾面背景
- 白 / 淡蓝 / 淡粉卡片
- 深海军蓝文字
- 玫红强调
- 少量薄荷绿 / 黄色点缀

## 夜晚模式

夜晚不是纯黑：

```text
背景：#263F50 → #2D4A5B → #394F5D
卡片：#355363 / #3C5B6B
文字：#E5ECEE
辅助文字：#B4C1C7
强调：#D97391 / #8BA8C6 / #C9A866
```

卡片不会变成浅色块。

## 自动滚动条

以下区域内容超出高度时会自动出现内部滚动条：

```text
首页「关于我」
Writing 页面文章列表
首页 Latest Writing 列表
地图右侧地区列表
```

内容不够多时不会显示滚动条。

## 页面末尾艺术区域

所有主要页面在 Footer 前增加了 `art-end` 艺术收尾区域。
包含：
- 宋体大标题
- 轨道圆
- 光束线
- 坐标文字
- 轻量慢速动态


# 本次更新

## 省级地区滚动条

地图右侧省级 / 地级行政区列表现在固定最大高度：
- 桌面端列表约 `560px`
- 手机端约 `410px`

内容多时只在列表内部滚动，不再把整个页面向下拉长。

## 艺术收尾

`art-end` 只保留在：

```text
home.html
```

其他页面已删除。

## 首页“记录 / 探索 / 保持好奇”

重新设计为三层编辑式主视觉：
- 01 记录 / RECORD
- 02 探索 / EXPLORE
- 03 保持好奇 / STAY CURIOUS

每一行配不同的细线色彩和轻微错位排版。

## 胶卷相册

首页新增胶卷样式相册：

```text
assets/images/gallery/
```

占位图：
- photo-01.svg
- photo-02.svg
- photo-03.svg
- photo-04.svg
- photo-05.svg

可以替换成自己的 JPG / PNG / WEBP，再修改 `home.html` 中对应的 `src`。

支持：
- 鼠标拖拽
- 触控滑动
- 滚轮横向浏览
- 左右按钮
- smooth scroll
- scroll snap


# 本次更新

## 首页主视觉

“记录 / 探索 / 保持好奇”重新设计为参考图风格：
- 顶部小号“个人主页”
- 超大宋体标题
- 粗体身份 / 方向说明
- 等宽英文副标题
- 三个圆角按钮
- 右下两条装饰线

## 友链横向卡片

友链区域现在是横向可滑动卡片：

```text
assets/images/friends/
```

默认头像：
- friend-01.svg
- friend-02.svg
- friend-03.svg
- friend-04.svg

每张卡片包含：
- 圆形头像
- 名字
- 简介
- 跳转按钮

支持：
- 鼠标拖动
- 触控滑动
- 滚轮横向浏览
- 左右按钮
- smooth scroll

对应逻辑：

```text
assets/friends.js
```

## 顶部导航文字颜色

顶部导航选项被悬停或选中后：
- 背景仍然自下而上铺满
- 文字颜色保持原色，不再变白


# 本次修改

## 地图删除

Travel / 地图页面和导航入口已经删除：

```text
travel.html
assets/travel.js
```

## 首页主标题

原来的：

```text
记录 / 探索 / 保持好奇
```

改为：

```text
杀手兔
```

## 友链

首页友链恢复成原来的简洁列表样式。

点击任意友链后，才会弹出完整卡片：
- 圆形头像
- 名称
- 简介
- “访问网站”按钮

逻辑文件：

```text
assets/friend-modal.js
```

## 疯狂星期四

Sponsor 页面末尾新增：

```text
疯狂星期四
vivo50
```

右侧放置可替换的老爷爷风格 SVG：

```text
assets/images/kfc-colonel.svg
```

## 此刻 / 最近

“最近”卡片的文字颜色加深，并略微增大字号。

## 选项卡滚动

以下区域超过最大尺寸后会出现可拖动滚动条：
- 顶部导航选项
- Blog FILTER / 标签
- Tags 页面选项
- 首页友链列表


# 本次更新

## 杀手兔标题

主页“杀手兔”最大字号已经从约 190px 降到约 124px，
移动端也同步缩小。

## 友链

友链保持简洁列表 + 点击弹出详细卡片的交互，
数量扩充到 8 个示例。

新增头像：

```text
assets/images/friends/friend-05.svg
assets/images/friends/friend-06.svg
assets/images/friends/friend-07.svg
assets/images/friends/friend-08.svg
```

## 最近的画面下方账号区

新增参考图风格的账号展示：

```text
06 / CONTACT
来打个招呼
```

默认放了：
- GitHub
- 邮箱
- Mastodon
- 知乎
- 哔哩哔哩
- X / Twitter
- Instagram
- YouTube

账号很多时会在区域内部显示滚动条。

## 主页艺术收尾

“记录，构建，行走，然后继续向前。”
改成两行错位宋体 + 渐变斜体，并加入浅色大字 `KEEP MOVING`
作为背景层。

## KFC Logo

Sponsor 页使用 KFC 官方 Brand Assets 的 Primary KFC Logo 在线图片：

```text
https://cdn.sanity.io/images/kbqq3e0r/production/afcc23c7797d1ad1d55bd0e200e2128cfe163eba-4096x3802.png?q=100&w=1200
```

如果网络加载失败，会自动回退到：

```text
assets/images/kfc-colonel.svg
```
