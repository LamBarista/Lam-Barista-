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
  let currentUnit = localStorage.getItem("lamb-unit") || "ml";
  let favorites = JSON.parse(localStorage.getItem("lamb-favorites") || "[]");

  function saveFavorites() {
    localStorage.setItem("lamb-favorites", JSON.stringify(favorites));
  }

  function isFav(id) {
    return favorites.includes(id);
  }

  function toggleFav(id) {
    if (isFav(id)) {
      favorites = favorites.filter(f => f !== id);
    } else {
      favorites.push(id);
    }
    saveFavorites();
    renderCards();
  }

  // Convert ml numbers in text to oz (1 oz ≈ 30 ml)
  function convertText(text, toOz) {
    if (!toOz) return text;
    return text.replace(/(\d+(?:\.\d+)?)\s*ml/gi, (match, num) => {
      const ml = parseFloat(num);
      const oz = ml / 30;
      const formatted = oz % 1 === 0 ? oz.toFixed(0) : oz.toFixed(2).replace(/\.?0+$/, "");
      return `${formatted} oz`;
    });
  }

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
      <text x="340" y="290" fill="#ffffff" font-family="sans-serif" font-size="28" font-weight="bold">${name}</text>
      <text x="340" y="340" fill="#d4af73" font-family="sans-serif" font-size="18">${base || ""}</text>
    </svg>`;
    imgEl.onerror = null;
    imgEl.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
  };

  function renderCards() {
    const query = searchTerm.trim().toLowerCase();
    const list = COCKTAIL_DATA.filter(c => {
      let matchSpirit = true;
      if (currentSpirit === "Favorites") {
        matchSpirit = isFav(c.id);
      } else if (currentSpirit !== "All") {
        matchSpirit = c.spirit === currentSpirit || (currentSpirit === "Mocktail" && (
          c.spirit === "Mocktail" ||
          (c.abv && (c.abv.startsWith("0%") || c.abv.includes("Non-Alcoholic") || c.abv.includes("Mocktail")))
        ));
      }
      const matchQuery = !query ||
        c.name.toLowerCase().includes(query) ||
        (c.base && c.base.toLowerCase().includes(query)) ||
        (c.desc && c.desc.toLowerCase().includes(query)) ||
        (c.ingredients && c.ingredients.some(ing => ing.toLowerCase().includes(query)));
      return matchSpirit && matchQuery;
    });

    if (currentSpirit === "Favorites" && list.length > 0) {
      const shareBar = document.createElement("div");
      shareBar.className = "share-bar";
      shareBar.innerHTML = `<button type="button" class="btn-icon" id="shareFavBtn">📤 Chia sẻ / Gửi danh sách yêu thích</button>`;
      menuGrid.parentNode.insertBefore(shareBar, menuGrid);
      document.getElementById("shareFavBtn").onclick = shareFavorites;
    } else {
      document.querySelectorAll(".share-bar").forEach(el => el.remove());
    }

    if (list.length === 0) {
      menuGrid.innerHTML = `<p class="empty-msg">${currentSpirit === "Favorites" ? "Bạn chưa có món yêu thích nào. Hãy bấm ☆ trên các thẻ để thêm." : "Không tìm thấy công thức nào phù hợp."}</p>`;
      return;
    }

    menuGrid.innerHTML = list.map(c => `
      <article class="card" data-id="${c.id}">
        <button class="fav-btn ${isFav(c.id) ? "active" : ""}" data-id="${c.id}" title="Yêu thích">
          ${isFav(c.id) ? "★" : "☆"}
        </button>
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

    // Card click
    menuGrid.querySelectorAll(".card").forEach(card => {
      card.addEventListener("click", (e) => {
        if (e.target.closest(".fav-btn")) return;
        const item = COCKTAIL_DATA.find(c => c.id === card.dataset.id);
        if (item) showRecipe(item);
      });
    });

    // Fav buttons
    menuGrid.querySelectorAll(".fav-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        toggleFav(btn.dataset.id);
      });
    });
  }

  function showRecipe(c) {
    const useOz = currentUnit === "oz";
    const ingredientsHtml = (c.ingredients || []).map(i => `<li>${convertText(i, useOz)}</li>`).join("");

    recipePanel.innerHTML = `
      <button class="back-to-menu" id="backToMenu">← Quay lại danh mục</button>
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
          <div class="recipe-actions">
            <div class="unit-toggle">
              <button type="button" class="${currentUnit === "ml" ? "active" : ""}" data-unit="ml">ml</button>
              <button type="button" class="${currentUnit === "oz" ? "active" : ""}" data-unit="oz">oz</button>
            </div>
            <button type="button" class="btn-icon" id="copyRecipeBtn">📋 Copy công thức</button>
            <button type="button" class="btn-icon fav-toggle" data-id="${c.id}">
              ${isFav(c.id) ? "★ Bỏ yêu thích" : "☆ Thêm yêu thích"}
            </button>
          </div>
          <p class="recipe-desc">${c.desc || ""}</p>
          ${c.tip ? `<p class="recipe-tip"><strong>Bí quyết:</strong> ${c.tip}</p>` : ""}
          <div class="recipe-layout">
            <div>
              <h4>Nguyên liệu</h4>
              <ul id="ingredientsList">
                ${ingredientsHtml}
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

    // Back button
    document.getElementById("backToMenu").addEventListener("click", () => {
      recipePanel.innerHTML = "";
      menuGrid.scrollIntoView({ behavior: "smooth", block: "start" });
    });

    // Unit toggle
    recipePanel.querySelectorAll(".unit-toggle button").forEach(btn => {
      btn.addEventListener("click", () => {
        currentUnit = btn.dataset.unit;
        localStorage.setItem("lamb-unit", currentUnit);
        showRecipe(c); // re-render
      });
    });

    // Copy
    document.getElementById("copyRecipeBtn").addEventListener("click", () => {
      const useOz = currentUnit === "oz";
      const ings = (c.ingredients || []).map(i => "- " + convertText(i, useOz)).join("\n");
      const steps = (c.steps || []).map((s, i) => `${i+1}. ${s}`).join("\n");
      const text = `${c.name}\n\nNguyên liệu:\n${ings}\n\nCách pha:\n${steps}`;
      navigator.clipboard.writeText(text).then(() => {
        const btn = document.getElementById("copyRecipeBtn");
        const orig = btn.textContent;
        btn.textContent = "✓ Đã copy";
        setTimeout(() => btn.textContent = orig, 1500);
      });
    });

    // Fav toggle in recipe
    recipePanel.querySelector(".fav-toggle").addEventListener("click", () => {
      toggleFav(c.id);
      showRecipe(c);
    });

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

  // Lab calculators — upgraded
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
      const totalBefore = spiritVol + liqueurVol + mixerVol;
      const waterFromIce = totalBefore * dilutionRate;
      const finalVolume = totalBefore + waterFromIce;
      const finalAbv = finalVolume > 0 ? (pureAlcohol / finalVolume) * 100 : 0;

      // Standard drink ≈ 14g pure alcohol ≈ 17.7 ml pure alcohol
      const standardDrinks = pureAlcohol / 17.7;

      abvResult.innerHTML = `
        <strong>${finalAbv.toFixed(1)}% ABV</strong><br>
        <small>Thể tích cuối ≈ ${finalVolume.toFixed(0)} ml</small><br>
        <span class="lab-extra">≈ ${standardDrinks.toFixed(1)} đơn vị cồn chuẩn (1 đơn vị ≈ 14g cồn nguyên chất)</span>
      `;
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
      const totalVolume = totalBase + waterToAdd;

      // Recommend bottle size with ~15% headspace
      const withHeadspace = totalVolume * 1.15;
      let bottleSuggestion = "1 chai 750 ml";
      if (withHeadspace > 750) bottleSuggestion = "2 chai 750 ml hoặc 1 chai 1.5L";
      if (withHeadspace > 1500) bottleSuggestion = "2–3 chai 1L hoặc bình lớn hơn";

      batchResult.innerHTML = `
        <strong>Tổng cho ${servings} ly:</strong><br>
        Rượu nền: ${totalSpirit.toFixed(0)} ml<br>
        Rượu mùi / Syrup: ${totalMod.toFixed(0)} ml<br>
        Citrus / Juice: ${totalCitrus.toFixed(0)} ml<br>
        Nước lọc bù: ${waterToAdd.toFixed(0)} ml<br>
        <strong>Tổng thể tích: ${totalVolume.toFixed(0)} ml</strong>
        <div class="lab-extra">
          Gợi ý bình/chai: ${bottleSuggestion} (đã tính ~15% khoảng trống)<br>
          Chi phí ước tính: bạn có thể nhân với giá nguyên liệu/ml của mình để kiểm soát ngân sách tiệc.
        </div>
      `;
    });
  }

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


  function shareFavorites() {
    const favItems = COCKTAIL_DATA.filter(c => isFav(c.id));
    if (favItems.length === 0) {
      alert("Bạn chưa có món yêu thích nào.");
      return;
    }
    const names = favItems.map(c => c.name).join(", ");
    const text = `Danh sách yêu thích của tôi tại Lam's Barista:\n${names}\n\nXem thêm tại trang công thức.`;
    const encoded = encodeURIComponent(text);

    const modal = document.createElement("div");
    modal.className = "share-modal";
    modal.innerHTML = `
      <div class="share-box">
        <h3>Chia sẻ danh sách yêu thích</h3>
        <textarea id="shareText" readonly rows="5">${text}</textarea>
        <div class="share-actions">
          <button type="button" class="btn-icon" id="copyShare">📋 Copy</button>
          <a class="btn-icon" href="mailto:?subject=Danh sách cocktail yêu thích&body=${encoded}">✉️ Email</a>
          <button type="button" class="btn-icon" id="openZalo">💬 Mở Zalo</button>
          <a class="btn-icon" href="https://docs.google.com/forms/d/e/FORM_ID/viewform?usp=pp_url&entry.XXXX=${encodeURIComponent(names)}" target="_blank" rel="noopener">📝 Gửi form</a>
        </div>
        <p class="share-note">Nút Zalo sẽ copy nội dung và mở ứng dụng Zalo (trên điện thoại). Bạn chỉ cần dán vào ô chat.</p>
        <button type="button" class="btn-icon" id="closeShare">Đóng</button>
      </div>
    `;
    document.body.appendChild(modal);

    document.getElementById("copyShare").onclick = () => {
      navigator.clipboard.writeText(text);
      document.getElementById("copyShare").textContent = "✓ Đã copy";
    };

    document.getElementById("openZalo").onclick = () => {
      navigator.clipboard.writeText(text).then(() => {
        // Try deep link first (works on mobile with Zalo installed)
        window.location.href = "zalo://";
        // Fallback: open Zalo web after a short delay if deep link fails
        setTimeout(() => {
          window.open("https://chat.zalo.me/", "_blank");
        }, 800);
      });
    };
    document.getElementById("closeShare").onclick = () => modal.remove();
    modal.onclick = (e) => { if (e.target === modal) modal.remove(); };
  }

  // Initial render
  renderCards();
});
