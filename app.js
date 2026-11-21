const FAV_KEY = "lambarista_favorites_v1";

function getFavorites() {
  try {
    return JSON.parse(localStorage.getItem(FAV_KEY)) || [];
  } catch {
    return [];
  }
}

function toggleFavorite(event, id) {
  event.stopPropagation();
  const favs = new Set(getFavorites());
  if (favs.has(id)) {
    favs.delete(id);
  } else {
    favs.add(id);
  }
  localStorage.setItem(FAV_KEY, JSON.stringify([...favs]));
  rerenderCurrentView();
}

function renderStrength(str) {
  if (str === 0) return "Không cồn";
  return `${"●".repeat(str)}${"○".repeat(5 - str)} (${str}/5)`;
}

function getStrengthBucket(str) {
  if (str === 0) return "0/5 — Không cồn (Mocktail)";
  if (str <= 2) return "1–2/5 — Nhẹ nhàng, sảng khoái";
  if (str === 3) return "3/5 — Cân bằng, vừa vặn";
  return "4–5/5 — Mạnh & đậm vị";
}

function buildCardHTML(r, favs) {
  const isSaved = favs.has(r.id);
  const mediaHTML = r.img
    ? `<img src="${r.img}" alt="${r.name}" loading="lazy">`
    : `<div class="card-placeholder">
         <span class="ph-base">${r.base}</span>
         <span class="ph-title">${r.name}</span>
         <span class="ph-glass">${r.glass || ""}</span>
       </div>`;

  return `
    <div class="card" onclick="show('${r.id}')">
      <div class="card-img-wrap">
        <span class="rarity-badge">${r.rarity || "Kinh điển"}</span>
        ${mediaHTML}
      </div>
      <div class="card-content">
        <div class="card-top">
          <h3>${r.name}</h3>
          <button type="button" class="fav-btn ${isSaved ? "saved" : ""}" onclick="toggleFavorite(event, '${r.id}')">
            ${isSaved ? "♥ Đã lưu" : "♡ Lưu"}
          </button>
        </div>
        <div class="tags">${r.tags.map(t => `<span class="tag">${t}</span>`).join("")}</div>
        <p class="card-desc">${r.desc}</p>
        <div class="meta">
          <span>${r.base} • ${r.diff}</span>
          <span>${renderStrength(r.str)}</span>
        </div>
      </div>
    </div>
  `;
}

function renderCards(list, target) {
  const el = document.getElementById(target);
  if (!el) return;
  const favs = new Set(getFavorites());

  if (!list.length) {
    el.innerHTML = `<p style="color:var(--muted)">Không tìm thấy công thức phù hợp. Hãy thử từ khóa hoặc bộ lọc khác.</p>`;
    return;
  }
  el.innerHTML = list.map(r => buildCardHTML(r, favs)).join("");
}

function ensureDetailContainer() {
  let detailEl = document.getElementById("detail");
  if (!detailEl) {
    const mainSection = document.querySelector("section.section .wrap") || document.body;
    detailEl = document.createElement("div");
    detailEl.id = "detail";
    mainSection.appendChild(detailEl);
  }
  return detailEl;
}

function show(id) {
  const r = recipes.find(x => x.id === id);
  if (!r) return;
  const detailEl = ensureDetailContainer();
  const isSaved = new Set(getFavorites()).has(r.id);

  detailEl.innerHTML = `
    <div class="detail">
      <div style="display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;">
        <h2>${r.name}</h2>
        <button type="button" class="fav-btn ${isSaved ? "saved" : ""}" onclick="toggleFavorite(event, '${r.id}')">
          ${isSaved ? "♥ Đã lưu vào danh sách" : "♡ Lưu công thức"}
        </button>
      </div>
      <p style="color:var(--muted);margin-top:6px;">
        Rượu nền: <strong>${r.base}</strong> · Phân loại: <strong>${r.rarity || "Kinh điển"}</strong> · Độ mạnh: <strong>${renderStrength(r.str)}</strong> · Ly: <strong>${r.glass || "Tùy chọn"}</strong>
      </p>
      ${r.img ? `<img src="${r.img}" alt="${r.name}">` : ""}
      <p style="color:var(--muted);margin:14px 0 16px;">${r.desc}</p>
      <h3>Nguyên liệu</h3>
      <ul style="margin:10px 0 20px 22px;">${r.ings.map(i => `<li>${i}</li>`).join("")}</ul>
      <h3>Cách pha chế</h3>
      <ol style="margin:10px 0 24px 22px;">${r.steps.map(s => `<li style="margin-bottom:8px;">${s}</li>`).join("")}</ol>
      <button type="button" onclick="document.getElementById('detail').innerHTML=''" class="btn btn-ghost btn-sm">Đóng chi tiết</button>
    </div>
  `;
  detailEl.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

let rerenderCurrentView = () => {};

// Homepage: Base spirit shortcuts + Featured cards
if (document.getElementById("baseSummary")) {
  const bases = ["Whiskey", "Gin", "Rum", "Tequila", "Vodka", "Brandy", "Không cồn"];
  document.getElementById("baseSummary").innerHTML = bases.map(b => {
    const count = recipes.filter(r => r.base === b).length;
    return `
      <a class="base-pill" href="recipes.html?base=${encodeURIComponent(b)}">
        <strong>${b}</strong>
        <span>${count} công thức →</span>
      </a>
    `;
  }).join("");
}

if (document.getElementById("featured")) {
  const featuredIds = ["old-fashioned", "negroni", "mojito", "margarita", "espresso-martini", "virgin-mojito"];
  const featuredList = featuredIds.map(id => recipes.find(r => r.id === id)).filter(Boolean);
  const renderFeatured = () => renderCards(featuredList, "featured");
  rerenderCurrentView = renderFeatured;
  renderFeatured();
}

// Recipes library page
if (document.getElementById("gridContainer")) {
  let rarityFilter = "all";

  // Pre-select base spirit if passed via URL (?base=Gin)
  const params = new URLSearchParams(window.location.search);
  const initialBase = params.get("base");
  if (initialBase && document.getElementById("baseFilter")) {
    document.getElementById("baseFilter").value = initialBase;
    if (document.getElementById("groupMode")) {
      document.getElementById("groupMode").value = "flat";
    }
  }

  function update() {
    let list = recipes.slice();
    const favSet = new Set(getFavorites());
    const q = (document.getElementById("q")?.value || "").trim().toLowerCase();
    const baseVal = document.getElementById("baseFilter")?.value || "all";
    const strVal = document.getElementById("strFilter")?.value || "all";
    const groupMode = document.getElementById("groupMode")?.value || "flat";
    const sortVal = document.getElementById("sort")?.value || "name";

    if (q) {
      list = list.filter(r =>
        r.name.toLowerCase().includes(q) ||
        r.desc.toLowerCase().includes(q) ||
        r.base.toLowerCase().includes(q) ||
        (r.rarity || "").toLowerCase().includes(q) ||
        r.tags.some(t => t.toLowerCase().includes(q)) ||
        r.ings.some(i => i.toLowerCase().includes(q))
      );
    }

    if (baseVal !== "all") {
      list = list.filter(r => r.base === baseVal);
    }

    if (strVal !== "all") {
      if (strVal === "0") list = list.filter(r => r.str === 0);
      else if (strVal === "light") list = list.filter(r => r.str >= 1 && r.str <= 2);
      else if (strVal === "medium") list = list.filter(r => r.str === 3);
      else if (strVal === "strong") list = list.filter(r => r.str >= 4);
    }

    if (rarityFilter === "fav") {
      list = list.filter(r => favSet.has(r.id));
    } else if (rarityFilter !== "all") {
      list = list.filter(r => r.rarity === rarityFilter);
    }

    if (sortVal === "str-desc") {
      list.sort((a, b) => b.str - a.str || a.name.localeCompare(b.name, "vi"));
    } else if (sortVal === "str-asc") {
      list.sort((a, b) => a.str - b.str || a.name.localeCompare(b.name, "vi"));
    } else {
      list.sort((a, b) => a.name.localeCompare(b.name, "vi"));
    }

    const countBadge = document.getElementById("countBadge");
    if (countBadge) countBadge.textContent = `${list.length} công thức`;

    const container = document.getElementById("gridContainer");
    if (!list.length) {
      container.innerHTML = `<p style="color:var(--muted)">Không tìm thấy công thức phù hợp. Hãy thử xóa bớt bộ lọc hoặc nhập từ khóa khác.</p>`;
      return;
    }

    if (groupMode === "base") {
      const baseOrder = ["Whiskey", "Gin", "Rum", "Tequila", "Vodka", "Brandy", "Không cồn"];
      const groups = baseOrder
        .map(b => ({ title: b === "Không cồn" ? "Không cồn (Mocktail)" : `Nhóm ${b}`, items: list.filter(r => r.base === b) }))
        .filter(g => g.items.length > 0);

      container.innerHTML = groups.map(g => `
        <div class="group-block">
          <div class="group-header">
            <h3>${g.title}</h3>
            <span>${g.items.length} món</span>
          </div>
          <div class="cards">${g.items.map(r => buildCardHTML(r, favSet)).join("")}</div>
        </div>
      `).join("");
    } else if (groupMode === "strength") {
      const strengthOrder = [
        "4–5/5 — Mạnh & đậm vị",
        "3/5 — Cân bằng, vừa vặn",
        "1–2/5 — Nhẹ nhàng, sảng khoái",
        "0/5 — Không cồn (Mocktail)"
      ];
      const groups = strengthOrder
        .map(label => ({ title: label, items: list.filter(r => getStrengthBucket(r.str) === label) }))
        .filter(g => g.items.length > 0);

      container.innerHTML = groups.map(g => `
        <div class="group-block">
          <div class="group-header">
            <h3>Độ mạnh: ${g.title}</h3>
            <span>${g.items.length} món</span>
          </div>
          <div class="cards">${g.items.map(r => buildCardHTML(r, favSet)).join("")}</div>
        </div>
      `).join("");
    } else {
      container.innerHTML = `<div class="cards">${list.map(r => buildCardHTML(r, favSet)).join("")}</div>`;
    }
  }

  rerenderCurrentView = update;

  ["q", "baseFilter", "strFilter", "groupMode", "sort"].forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener(id === "q" ? "input" : "change", update);
    }
  });

  document.querySelectorAll(".chip").forEach(c => {
    c.onclick = () => {
      document.querySelectorAll(".chip").forEach(x => x.classList.remove("on"));
      c.classList.add("on");
      rarityFilter = c.dataset.t;
      update();
    };
  });

  update();
}
