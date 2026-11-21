document.addEventListener("DOMContentLoaded", () => {
  const navBtns = document.querySelectorAll(".nav-btn[data-view]");
  const viewSections = document.querySelectorAll(".view-section");

  const filterPills = document.querySelectorAll(".pill[data-spirit]");
  const searchInput = document.getElementById("search-input");
  const menuGrid = document.getElementById("menu-grid");
  const recipePanel = document.getElementById("recipe-panel");

  const currTabs = document.querySelectorAll(".curr-tab[data-module]");
  const moduleCards = document.querySelectorAll(".module-card[data-module]");

  let activeSpirit = "All";
  let queryText = "";
  let selectedId = COCKTAIL_DATA[0]?.id || null;

  navBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const targetId = btn.dataset.view;
      navBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      viewSections.forEach(sec => {
        sec.classList.toggle("active", sec.id === targetId);
      });
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

  currTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const mod = tab.dataset.module;
      currTabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      moduleCards.forEach(card => {
        if (mod === "all" || card.dataset.module === mod) {
          card.classList.remove("hidden-mod");
        } else {
          card.classList.add("hidden-mod");
        }
      });
    });
  });

  window.renderFallbackImg = function(imgEl, item) {
    const [r, g, b] = item.color || [158, 103, 40];
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="900" viewBox="0 0 1200 900">
      <rect width="1200" height="900" fill="#1d1815"/>
      <rect x="44" y="44" width="1112" height="812" fill="none" stroke="#c89b5c" stroke-width="2"/>
      <circle cx="290" cy="450" r="160" fill="rgb(${r},${g},${b})" stroke="#c89b5c" stroke-width="3"/>
      <text x="515" y="340" fill="#c89b5c" font-family="sans-serif" font-size="22" font-weight="bold">${item.category.toUpperCase()}</text>
      <text x="515" y="405" fill="#ffffff" font-family="sans-serif" font-size="42" font-weight="bold">${item.name}</text>
      <text x="515" y="465" fill="#e8dfd3" font-family="sans-serif" font-size="25">Ly: ${item.glass}</text>
      <text x="515" y="510" fill="#e8dfd3" font-family="sans-serif" font-size="25">Kỹ thuật: ${item.method}</text>
    </svg>`;
    imgEl.onerror = null;
    imgEl.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
  };

  function getFilteredCocktails() {
    const q = queryText.trim().toLowerCase();
    return COCKTAIL_DATA.filter(item => {
      const matchSpirit = activeSpirit === "All" || item.spirit === activeSpirit;
      const matchQuery = !q ||
        item.name.toLowerCase().includes(q) ||
        item.base.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        item.ingredients.some(i => i.toLowerCase().includes(q));
      return matchSpirit && matchQuery;
    });
  }

  function renderMenuGrid() {
    const list = getFilteredCocktails();
    if (!list.length) {
      menuGrid.innerHTML = `<p style="grid-column:1/-1; color:var(--text-muted);">Không tìm thấy công thức phù hợp.</p>`;
      recipePanel.innerHTML = "";
      return;
    }

    if (!list.some(item => item.id === selectedId)) {
      selectedId = list[0].id;
    }

    menuGrid.innerHTML = list.map(item => {
      const globalIdx = String(COCKTAIL_DATA.indexOf(item) + 1).padStart(2, "0");
      const isSel = item.id === selectedId ? "selected" : "";
      return `
        <button type="button" class="menu-item ${isSel}" data-id="${item.id}">
          <span class="menu-num">#${globalIdx} • ${item.spirit}</span>
          <span class="menu-name">${item.name}</span>
          <span class="menu-meta">${item.glass}</span>
        </button>
      `;
    }).join("");

    menuGrid.querySelectorAll(".menu-item").forEach(btn => {
      btn.addEventListener("click", () => {
        selectedId = btn.dataset.id;
        renderMenuGrid();
        renderRecipePanel(selectedId);
        recipePanel.scrollIntoView({ behavior: "smooth", block: "nearest" });
      });
    });

    renderRecipePanel(selectedId);
  }

  function renderRecipePanel(id) {
    const item = COCKTAIL_DATA.find(c => c.id === id);
    if (!item) return;

    const safeJson = encodeURIComponent(JSON.stringify(item));
    recipePanel.innerHTML = `
      <div class="panel-top">
        <img
          class="panel-img"
          src="./images/${item.id}.webp"
          alt="${item.name}"
          onerror="renderFallbackImg(this, JSON.parse(decodeURIComponent('${safeJson}')))"
        >
        <div>
          <span class="panel-eyebrow">${item.category}</span>
          <h2 class="panel-title">${item.name}</h2>
          <p class="panel-desc">${item.desc}</p>
          <div class="spec-row">
            <span class="spec-badge">Nền: ${item.base}</span>
            <span class="spec-badge">Ly: ${item.glass}</span>
            <span class="spec-badge">Kỹ thuật: ${item.method}</span>
            <span class="spec-badge">Độ cồn: ${item.abv}</span>
          </div>
          <div class="tip-box">
            <strong>Bí quyết pha chế:</strong> ${item.tip}
          </div>
        </div>
      </div>
      <div class="panel-columns">
        <div>
          <h3>Nguyên Liệu & Định Lượng</h3>
          <ul>
            ${item.ingredients.map(ing => `<li>${ing}</li>`).join("")}
          </ul>
        </div>
        <div>
          <h3>Các Bước Thực Hiện</h3>
          <ol>
            ${item.steps.map(st => `<li>${st}</li>`).join("")}
          </ol>
        </div>
      </div>
    `;
  }

  filterPills.forEach(pill => {
    pill.addEventListener("click", () => {
      activeSpirit = pill.dataset.spirit;
      filterPills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      renderMenuGrid();
    });
  });

  searchInput.addEventListener("input", e => {
    queryText = e.target.value;
    renderMenuGrid();
  });

  document.getElementById("calc-abv-btn")?.addEventListener("click", () => {
    const sVol = parseFloat(document.getElementById("spirit-vol").value) || 0;
    const sAbv = parseFloat(document.getElementById("spirit-abv").value) || 0;
    const lVol = parseFloat(document.getElementById("liqueur-vol").value) || 0;
    const lAbv = parseFloat(document.getElementById("liqueur-abv").value) || 0;
    const mVol = parseFloat(document.getElementById("mixer-vol").value) || 0;
    const method = document.getElementById("dilution-method").value;

    const rateMap = { shake: 0.28, stir: 0.22, build: 0.12 };
    const rate = rateMap[method] || 0.25;
    const baseTotal = sVol + lVol + mVol;
    const meltWater = baseTotal * rate;
    const finalVol = baseTotal + meltWater;
    const pureAlcohol = (sVol * (sAbv / 100)) + (lVol * (lAbv / 100));
    const finalAbv = finalVol > 0 ? (pureAlcohol / finalVol) * 100 : 0;

    document.getElementById("abv-result").innerHTML = `
      <strong>ABV ước tính sau pha chế: ~${finalAbv.toFixed(1)}%</strong><br>
      Thể tích trước đá tan: ${baseTotal.toFixed(0)} ml • Nước đá tan (~${Math.round(rate * 100)}%): +${meltWater.toFixed(1)} ml • Tổng thành phẩm: <strong>${finalVol.toFixed(0)} ml</strong>.
    `;
  });

  document.getElementById("calc-batch-btn")?.addEventListener("click", () => {
    const servings = Math.max(1, parseInt(document.getElementById("batch-servings").value, 10) || 1);
    const spirit = (parseFloat(document.getElementById("batch-spirit").value) || 0) * servings;
    const mod = (parseFloat(document.getElementById("batch-mod").value) || 0) * servings;
    const citrus = (parseFloat(document.getElementById("batch-citrus").value) || 0) * servings;
    const waterPct = (parseFloat(document.getElementById("batch-water").value) || 0) / 100;

    const liquidBeforeWater = spirit + mod + citrus;
    const waterToAdd = liquidBeforeWater * waterPct;
    const totalBatch = liquidBeforeWater + waterToAdd;

    document.getElementById("batch-result").innerHTML = `
      <strong>Tổng bình cho ${servings} ly: ${totalBatch.toFixed(0)} ml</strong><br>
      • Rượu nền: <strong>${spirit.toFixed(0)} ml</strong><br>
      • Rượu mùi & Syrup: <strong>${mod.toFixed(0)} ml</strong><br>
      • Chanh / Juice: <strong>${citrus.toFixed(0)} ml</strong><br>
      • Nước lọc bù độ loãng: <strong>${waterToAdd.toFixed(0)} ml</strong>
    `;
  });

  renderMenuGrid();
});
