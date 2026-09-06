/*
  “此刻”页面公开内容
  ==================
  只需要修改 NOW_PUBLIC，然后 git commit / git push。
*/
const NOW_PUBLIC = {
  location: "杭州 / 小和山",
  focus: "数学建模，ros2，网站重建，水群",
  reading: "希望读一本关于康波周期的书",
  mood: "保持推进，但是需要一点时间思考",
  updated: "2026-09-06",

  note: [
    "最近在重新整理这个网站，希望它更像一个长期住下来的地方，而不是一次性的作品集。",
    "目前主要在写东西、整理旅行足迹，也会把一些以前搁置的项目慢慢捡回来。",
    "这里的内容不追求高频更新，只在状态真的发生变化时修改。"
  ],

  current: [
    ["📚正在做", "个人博客 / 数学建模竞赛 / 寻书"],
    ["🖊️正在学", "ros2"],
    ["❤️最近喜欢", "最近挺喜欢听'talktalk'，虽然这首音乐上个学期保存下来基本没听，不过暑假在学校里，莫名其妙喜欢听了"],
    ["📅下一件事", "尝试混入某种大佬圈子。。。"]
  ]
};

function escapeHTML(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("now-location").textContent = NOW_PUBLIC.location;
  document.getElementById("now-focus").textContent = NOW_PUBLIC.focus;
  document.getElementById("now-reading").textContent = NOW_PUBLIC.reading;
  document.getElementById("now-mood").textContent = NOW_PUBLIC.mood;
  document.getElementById("now-updated").textContent = NOW_PUBLIC.updated;

  document.getElementById("now-public-note").innerHTML =
    NOW_PUBLIC.note
      .map((paragraph) => `<p>${escapeHTML(paragraph)}</p>`)
      .join("");

  document.getElementById("now-current-list").innerHTML =
    NOW_PUBLIC.current
      .map(([label, value]) => `
        <div class="now-current-item">
          <span>${escapeHTML(label)}</span>
          <strong>${escapeHTML(value)}</strong>
        </div>
      `)
      .join("");
});
