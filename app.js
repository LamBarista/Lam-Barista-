document.addEventListener("DOMContentLoaded", () => {
  // Navigation between main tabs
  const navBtns = document.querySelectorAll(".nav-btn");
  const views = document.querySelectorAll(".view-section");

  navBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const target = btn.dataset.view;
      navBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      views.forEach(v => {
        v.classList.toggle("active", v.id === target);
      });
    });
  });

  // Cocktail Directory & Detail Viewer
  const menuGrid = document.getElementById("menu-grid");
  const filterPills = document.querySelectorAll(".pill");
  const searchInput = document.getElementById("search-input");
  const recipePanel = document.getElementById("recipe-panel");

  let activeSpirit = "All";
  let searchQuery = "";
  let selectedId = DRINKS[0].id;

  function renderDirectory() {
    const filtered = DRINKS.filter(d => {
      const matchSpirit = activeSpirit === "All" || d.spirit === activeSpirit;
      const q = searchQuery.trim().toLowerCase();
      const matchText = !q ||
        d.name.toLowerCase().includes(q) ||
        d.spirit.toLowerCase().includes(q) ||
        d.taste.toLowerCase().includes(q) ||
        d.ingredients.some(i => i.item.toLowerCase().includes(q));
      return matchSpirit && matchText;
    });

    if (filtered.length === 0) {
      menuGrid.innerHTML = `<div style="grid-column: 1/-1; padding: 2rem; text-align: center; color: var(--text-muted); background: var(--surface); border-radius: 14px; border: 1px solid var(--border);">Không tìm thấy công thức phù hợp với từ khóa của bạn.</div>`;
      return;
    }

    // Text-only clean directory cards (no thumbnail images in list view)
    menuGrid.innerHTML = filtered.map(d => `
      <button type="button" class="drink-card ${d.id === selectedId ? "selected" : ""}" data-id="${d.id}">
        <div>
          <div class="card-top">
            <span class="tag ${d.spirit === "Mocktail" ? "mocktail" : ""}">${d.spirit}</span>
            <span style="font-size:0.78rem; color:var(--text-muted);">${d.abv}</span>
          </div>
          <h3 class="drink-name">${d.name}</h3>
          <p class="drink-taste">${d.taste}</p>
        </div>
        <div class="card-footer">
          <span>${d.method} • ${d.glass}</span>
          <span class="card-cta">Xem công thức →</span>
        </div>
      </button>
    `).join("");

    document.querySelectorAll(".drink-card").forEach(card => {
      card.addEventListener("click", () => {
        selectedId = card.dataset.id;
        renderDirectory();
        renderRecipe(selectedId, true);
      });
    });
  }

  function renderRecipe(drinkId, shouldScroll = false) {
    const d = DRINKS.find(item => item.id === drinkId) || DRINKS[0];
    recipePanel.innerHTML = `
      <div class="recipe-layout">
        <div class="recipe-visual">
          <div>
            <div class="recipe-img-box">
              <img src="${d.image}" alt="Ly ${d.name}" loading="eager">
            </div>
            <p style="margin-top:0.75rem; font-size:0.8rem; color:var(--text-muted); text-align:center;">
              Minh họa phục vụ chuẩn: <strong style="color:var(--text);">${d.glass}</strong>
            </p>
          </div>
          <div class="visual-specs">
            <div class="spec-box">
              <span class="spec-label">Kỹ thuật</span>
              <span class="spec-val">${d.method}</span>
            </div>
            <div class="spec-box">
              <span class="spec-label">Độ cồn ước tính</span>
              <span class="spec-val">${d.abv}</span>
            </div>
            <div class="spec-box">
              <span class="spec-label">Loại đá</span>
              <span class="spec-val">${d.ice}</span>
            </div>
            <div class="spec-box">
              <span class="spec-label">Trang trí</span>
              <span class="spec-val">${d.garnish}</span>
            </div>
          </div>
        </div>

        <div class="recipe-body">
          <div class="recipe-header">
            <div>
              <span class="tag ${d.spirit === "Mocktail" ? "mocktail" : ""}">${d.spirit} • ${d.type}</span>
              <h2 class="recipe-title">${d.name}</h2>
            </div>
          </div>
          <p class="recipe-story">${d.story}</p>

          <div class="recipe-cols">
            <div>
              <h4 class="sub-heading">Định lượng nguyên liệu</h4>
              <ul class="ing-list">
                ${d.ingredients.map(ing => `
                  <li>
                    <span>${ing.item}</span>
                    <span class="ing-amt">${ing.amount}</span>
                  </li>
                `).join("")}
              </ul>
            </div>

            <div>
              <h4 class="sub-heading">Quy trình thực hiện</h4>
              <ol class="step-list">
                ${d.steps.map(st => `<li>${st}</li>`).join("")}
              </ol>
            </div>
          </div>

          <div class="bartender-tip">
            <strong style="color:var(--accent);">Bí quyết Bartender:</strong> ${d.tip}
          </div>
        </div>
      </div>
    `;

    if (shouldScroll) {
      recipePanel.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  filterPills.forEach(pill => {
    pill.addEventListener("click", () => {
      filterPills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      activeSpirit = pill.dataset.spirit;
      renderDirectory();
    });
  });

  searchInput.addEventListener("input", e => {
    searchQuery = e.target.value;
    renderDirectory();
  });

  renderDirectory();
  renderRecipe(selectedId, false);

  // Curriculum Filter Tabs (Học Pha Chế)
  const currTabs = document.querySelectorAll(".curr-tab");
  const modules = document.querySelectorAll(".module-card");

  currTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const mod = tab.dataset.module;
      currTabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      modules.forEach(m => {
        if (mod === "all" || m.dataset.module === mod) {
          m.style.display = "block";
        } else {
          m.style.display = "none";
        }
      });
    });
  });

  // Lab Calculators
  const abvBtn = document.getElementById("calc-abv-btn");
  if (abvBtn) {
    abvBtn.addEventListener("click", () => {
      const v1 = parseFloat(document.getElementById("spirit-vol").value) || 0;
      const a1 = parseFloat(document.getElementById("spirit-abv").value) || 0;
      const v2 = parseFloat(document.getElementById("liqueur-vol").value) || 0;
      const a2 = parseFloat(document.getElementById("liqueur-abv").value) || 0;
      const mixer = parseFloat(document.getElementById("mixer-vol").value) || 0;
      const method = document.getElementById("dilution-method").value;

      const dilutionRate = method === "stir" ? 0.22 : method === "shake" ? 0.28 : 0.12;
      const preVol = v1 + v2 + mixer;
      const pureAlcohol = (v1 * (a1 / 100)) + (v2 * (a2 / 100));
      const finalVol = preVol * (1 + dilutionRate);
      const finalAbv = finalVol > 0 ? (pureAlcohol / finalVol) * 100 : 0;

      document.getElementById("abv-result").innerHTML = `
        <div style="font-size:0.9rem; color:var(--text-muted);">Thể tích trước pha: <strong style="color:var(--text);">${preVol.toFixed(0)} ml</strong> → Sau tan đá (~${(dilutionRate*100).toFixed(0)}%): <strong style="color:var(--text);">${finalVol.toFixed(1)} ml</strong></div>
        <div style="font-size:1.25rem; margin-top:0.35rem; color:var(--accent); font-weight:700;">Nồng độ cồn thực tế trong ly: ${finalAbv.toFixed(1)}% ABV</div>
      `;
    });
  }

  const batchBtn = document.getElementById("calc-batch-btn");
  if (batchBtn) {
    batchBtn.addEventListener("click", () => {
      const servings = parseInt(document.getElementById("batch-servings").value, 10) || 1;
      const baseSpirit = parseFloat(document.getElementById("batch-spirit").value) || 0;
      const modifier = parseFloat(document.getElementById("batch-mod").value) || 0;
      const citrus = parseFloat(document.getElementById("batch-citrus").value) || 0;
      const waterPct = parseFloat(document.getElementById("batch-water").value) || 0;

      const totalBase = baseSpirit * servings;
      const totalMod = modifier * servings;
      const totalCitrus = citrus * servings;
      const subTotal = totalBase + totalMod + totalCitrus;
      const waterMl = subTotal * (waterPct / 100);
      const grandTotal = subTotal + waterMl;

      document.getElementById("batch-result").innerHTML = `
        <ul style="list-style:none; display:flex; flex-direction:column; gap:0.35rem; font-size:0.92rem;">
          <li>• Rượu nền: <strong style="color:var(--accent);">${totalBase.toFixed(0)} ml</strong></li>
          <li>• Rượu mùi / Syrup: <strong style="color:var(--accent);">${totalMod.toFixed(0)} ml</strong></li>
          <li>• Nước cốt chanh / Juice: <strong style="color:var(--accent);">${totalCitrus.toFixed(0)} ml</strong></li>
          <li>• Nước lọc bù độ loãng (${waterPct}%): <strong style="color:var(--accent);">${waterMl.toFixed(0)} ml</strong></li>
          <li style="margin-top:0.3rem; padding-top:0.4rem; border-top:1px solid rgba(255,255,255,0.1);">Tổng dung tích bình Batch: <strong style="color:var(--emerald); font-size:1.05rem;">${grandTotal.toFixed(0)} ml (${(grandTotal/1000).toFixed(2)} Lít)</strong></li>
        </ul>
      `;
    });
  }
});
