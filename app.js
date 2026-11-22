document.addEventListener("DOMContentLoaded", () => {
  const menuGrid = document.getElementById("menu-grid");
  const recipePanel = document.getElementById("recipe-panel");
  const searchInput = document.getElementById("search-input");
  const pills = document.querySelectorAll(".pill");
  const navBtns = document.querySelectorAll(".nav-btn");
  const viewSections = document.querySelectorAll(".view-section");
  const themeToggle = document.getElementById("theme-toggle");
  const themeIcon = document.getElementById("theme-icon");
  const themeLabel = document.getElementById("theme-label");

  let currentSpirit = "All";
  let searchTerm = "";

  // Fallback SVG when image fails
  window.buildFallbackCard = function(imgEl, name, category, base, rgb) {
    const [r, g, b] = rgb || [180, 120, 70];
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#1a1512"/>
          <stop offset="100%" stop-color="rgb(${Math.round(r*0.4)},${Math.round(g*0.4)},${Math.round(b*0.4)})"/>
        </linearGradient>
      </defs>
      <rect width="800" height="600" fill="url(#bg)"/>
      <rect x="30" y="30" width="740" height="540" fill="none" stroke="#d4af73" stroke-width="2"/>
      <circle cx="200" cy="300" r="110" fill="rgb(${r},${g},${b})" stroke="#d4af73" stroke-width="3"/>
      <polygon points="145,255 255,255 215,310 185,310" fill="#f6f1eb"/>
      <rect x="196" y="310" width="8" height="55" fill="#f6f1eb"/>
      <rect x="168" y="365" width="64" height="6" fill="#f6f1eb"/>
      <text x="340" y="230" fill="#d4af73" font-family="sans-serif" font-size="16" font-weight="bold">${(category || "").toUpperCase()}</text>
      <text x="340" y="290" fill="#ffffff" font-family="sans-serif" font-size="32" font-weight="bold">${name}</text>
      <line x1="340" y1="320" x2="740" y2="320" stroke="#d4af73" stroke-width="1.5"/>
      <text x="340" y="365" fill="#e5ddd3" font-family="sans-serif" font-size="20">Nền: ${base || ""}</text>
    </svg>`;
    imgEl.onerror = null;
    imgEl.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
  };

  function renderCards() {
    const query = searchTerm.trim().toLowerCase();
    const list = COCKTAIL_DATA.filter(c => {
      const matchSpirit = currentSpirit === "All" || c.spirit === currentSpirit || (currentSpirit === "Mocktail" && (c.abv === "0%" || c.abv.includes("0%")));
      const matchQuery = !query ||
        c.name.toLowerCase().includes(query) ||
        (c.base && c.base.toLowerCase().includes(query)) ||
        (c.desc && c.desc.toLowerCase().includes(query)) ||
        (c.ingredients && c.ingredients.some(ing => ing.toLowerCase().includes(query)));
      return matchSpirit && matchQuery;
    });

    if (list.length === 0) {
      menuGrid.innerHTML = `<p class="empty-msg">Không tìm thấy công thức nào phù hợp.</p>`;
      return;
    }

    menuGrid.innerHTML = list.map(c => `
      <article class="card" data-id="${c.id}">
        <div class="card-media">
          <img
            src="images/${c.id}.webp"
            alt="${c.name}"
            loading="lazy"
            onerror="buildFallbackCard(this, '${c.name.replace(/'/g, "\\'")}', '${c.category}', '${c.base}', [${(c.color || [180,120,70]).join(',')}])"
          >
        </div>
        <div class="card-body">
          <div class="card-tag">${c.category}</div>
          <h3 class="card-title">${c.name}</h3>
          <p class="card-desc">${c.desc || ""}</p>
          <div class="card-meta">
            <span>${c.base} • ${c.glass || ""}</span>
            <strong>Xem công thức →</strong>
          </div>
        </div>
      </article>
    `).join("");

    menuGrid.querySelectorAll(".card").forEach(card => {
      card.addEventListener("click", () => {
        const item = COCKTAIL_DATA.find(c => c.id === card.dataset.id);
        if (item) showRecipe(item);
      });
    });
  }

  function showRecipe(c) {
    recipePanel.innerHTML = `
      <div class="recipe-detail">
        <div class="recipe-image">
          <img
            src="images/${c.id}.webp"
            alt="${c.name}"
            onerror="buildFallbackCard(this, '${c.name.replace(/'/g, "\\'")}', '${c.category}', '${c.base}', [${(c.color || [180,120,70]).join(',')}])"
          >
        </div>
        <div class="recipe-info">
          <div class="card-tag">${c.category}</div>
          <h2>${c.name}</h2>
          <div class="spec-pills">
            <span class="spec-pill">Nền: ${c.base}</span>
            <span class="spec-pill">Kỹ thuật: ${c.method || "-"}</span>
            <span class="spec-pill">Ly: ${c.glass || "-"}</span>
            <span class="spec-pill">${c.abv || ""}</span>
          </div>
          <p class="recipe-desc">${c.desc || ""}</p>
          ${c.tip ? `<p class="recipe-tip"><strong>Bí quyết:</strong> ${c.tip}</p>` : ""}
          <div class="recipe-layout">
            <div>
              <h4>Nguyên liệu</h4>
              <ul>
                ${(c.ingredients || []).map(i => `<li>${i}</li>`).join("")}
              </ul>
            </div>
            <div>
              <h4>Cách pha</h4>
              <ol>
                ${(c.steps || []).map(s => `<li>${s}</li>`).join("")}
              </ol>
            </div>
          </div>
        </div>
      </div>
    `;
    recipePanel.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  // Filters
  pills.forEach(pill => {
    pill.addEventListener("click", () => {
      pills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      currentSpirit = pill.dataset.spirit;
      renderCards();
      recipePanel.innerHTML = "";
    });
  });

  // Search
  if (searchInput) {
    searchInput.addEventListener("input", e => {
      searchTerm = e.target.value;
      renderCards();
    });
  }

  // Tabs
  navBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      navBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const target = btn.dataset.view;
      viewSections.forEach(sec => {
        sec.classList.toggle("active", sec.id === target);
      });
    });
  });

  // Theme toggle
  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    if (themeIcon) themeIcon.textContent = theme === "dark" ? "☀️" : "🌙";
    if (themeLabel) themeLabel.textContent = theme === "dark" ? "Sáng" : "Tối";
    localStorage.setItem("lamb-theme", theme);
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme") || "dark";
      applyTheme(current === "dark" ? "light" : "dark");
    });
    const saved = localStorage.getItem("lamb-theme");
    if (saved) applyTheme(saved);
  }

  // Lab calculators
  const calcAbvBtn = document.getElementById("calc-abv-btn");
  const abvResult = document.getElementById("abv-result");
  if (calcAbvBtn && abvResult) {
    calcAbvBtn.addEventListener("click", () => {
      const spiritVol = parseFloat(document.getElementById("spirit-vol").value) || 0;
      const spiritAbv = parseFloat(document.getElementById("spirit-abv").value) || 0;
      const liqueurVol = parseFloat(document.getElementById("liqueur-vol")?.value) || 0;
      const liqueurAbv = parseFloat(document.getElementById("liqueur-abv")?.value) || 0;
      const mixerVol = parseFloat(document.getElementById("mixer-vol").value) || 0;
      const method = document.getElementById("dilution-method").value;
      const dilutionRate = method === "shake" ? 0.28 : method === "stir" ? 0.22 : 0.12;

      const pureAlcohol = (spiritVol * spiritAbv / 100) + (liqueurVol * liqueurAbv / 100);
      const totalBeforeDilution = spiritVol + liqueurVol + mixerVol;
      const waterFromIce = totalBeforeDilution * dilutionRate;
      const finalVolume = totalBeforeDilution + waterFromIce;
      const finalAbv = finalVolume > 0 ? (pureAlcohol / finalVolume) * 100 : 0;

      abvResult.innerHTML = `<strong>${finalAbv.toFixed(1)}% ABV</strong><br><small>Thể tích cuối ≈ ${finalVolume.toFixed(0)} ml (đã tính nước đá tan)</small>`;
    });
  }

  const calcBatchBtn = document.getElementById("calc-batch-btn");
  const batchResult = document.getElementById("batch-result");
  if (calcBatchBtn && batchResult) {
    calcBatchBtn.addEventListener("click", () => {
      const servings = parseFloat(document.getElementById("batch-servings").value) || 1;
      const spirit = parseFloat(document.getElementById("batch-spirit").value) || 0;
      const mod = parseFloat(document.getElementById("batch-mod").value) || 0;
      const citrus = parseFloat(document.getElementById("batch-citrus").value) || 0;
      const waterPct = parseFloat(document.getElementById("batch-water").value) || 0;

      const totalSpirit = spirit * servings;
      const totalMod = mod * servings;
      const totalCitrus = citrus * servings;
      const totalBase = totalSpirit + totalMod + totalCitrus;
      const waterToAdd = totalBase * (waterPct / 100);

      batchResult.innerHTML = `
        <strong>Tổng cho ${servings} ly:</strong><br>
        Rượu nền: ${totalSpirit.toFixed(0)} ml<br>
        Rượu mùi / Syrup: ${totalMod.toFixed(0)} ml<br>
        Citrus / Juice: ${totalCitrus.toFixed(0)} ml<br>
        Nước lọc bù: ${waterToAdd.toFixed(0)} ml
      `;
    });
  }

  // Initial render
  renderCards();
});

  // Academy curriculum tabs
  const currTabs = document.querySelectorAll(".curr-tab");
  const moduleCards = document.querySelectorAll(".module-card");
  currTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      currTabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      const mod = tab.dataset.module;
      moduleCards.forEach(card => {
        if (mod === "all" || card.dataset.module === mod) {
          card.style.display = "";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
