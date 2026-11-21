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

function renderCards(list, target) {
  const el = document.getElementById(target);
  if (!el) return;
  const favs = new Set(getFavorites());

  if (!list.length) {
    el.innerHTML = `<p style="color:var(--muted)">Không tìm thấy công thức phù hợp. Hãy thử từ khóa hoặc bộ lọc khác.</p>`;
    return;
  }

  el.innerHTML = list.map(r => {
    const isSaved = favs.has(r.id);
    return `
      <div class="card" onclick="show('${r.id}')">
        <div class="card-img-wrap">
          ${r.img ? `<img src="${r.img}" alt="${r.name}" loading="lazy">` : ""}
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
  }).join("");
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
        Nền: <strong>${r.base}</strong> · Độ khó: <strong>${r.diff}</strong> · Ly đề xuất: <strong>${r.glass || "Tùy chọn"}</strong>
      </p>
      ${r.img ? `<img src="${r.img}" alt="${r.name}">` : ""}
      <p style="color:var(--muted);margin-bottom:16px;">${r.desc}</p>
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

if (document.getElementById("featured")) {
  const renderFeatured = () => renderCards(recipes.slice(0, 3), "featured");
  rerenderCurrentView = renderFeatured;
  renderFeatured();
}

if (document.getElementById("grid")) {
  let type = "all";

  function update() {
    let list = recipes.slice();
    const favSet = new Set(getFavorites());
    const qInput = document.getElementById("q");
    const sortSelect = document.getElementById("sort");
    const q = qInput ? qInput.value.trim().toLowerCase() : "";

    if (q) {
      list = list.filter(r =>
        r.name.toLowerCase().includes(q) ||
        r.desc.toLowerCase().includes(q) ||
        r.base.toLowerCase().includes(q) ||
        r.tags.some(t => t.toLowerCase().includes(q)) ||
        r.ings.some(i => i.toLowerCase().includes(q))
      );
    }
    if (type === "fav") {
      list = list.filter(r => favSet.has(r.id));
    } else if (type !== "all") {
      list = list.filter(r => r.type === type);
    }
    const s = sortSelect ? sortSelect.value : "name";
    if (s === "str") {
      list.sort((a, b) => b.str - a.str);
    } else {
      list.sort((a, b) => a.name.localeCompare(b.name, "vi"));
    }
    renderCards(list, "grid");
  }

  rerenderCurrentView = update;

  if (document.getElementById("q")) document.getElementById("q").oninput = update;
  if (document.getElementById("sort")) document.getElementById("sort").onchange = update;
  document.querySelectorAll(".chip").forEach(c => {
    c.onclick = () => {
      document.querySelectorAll(".chip").forEach(x => x.classList.remove("on"));
      c.classList.add("on");
      type = c.dataset.t;
      update();
    };
  });
  update();
}
