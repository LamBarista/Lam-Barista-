document.addEventListener("DOMContentLoaded", () => {
  const gridEl = document.getElementById("cocktailGrid");
  const filterGroupEl = document.getElementById("filterGroup");
  const searchInputEl = document.getElementById("searchInput");
  const standardsGridEl = document.getElementById("standardsGrid");
  const modalEl = document.getElementById("recipeModal");
  const modalContentEl = document.getElementById("modalContent");
  const closeModalBtn = document.getElementById("closeModalBtn");

  let selectedCategory = "Tất cả";
  let searchTerm = "";

  const categories = ["Tất cả", ...new Set(COCKTAIL_DATA.map(item => item.category))];

  window.buildFallbackCard = function(imgEl, name, category, base, rgb) {
    const [r, g, b] = rgb || [180, 120, 70];
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="900" viewBox="0 0 1200 900">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#181412"/>
          <stop offset="100%" stop-color="rgb(${Math.round(r*0.45)},${Math.round(g*0.45)},${Math.round(b*0.45)})"/>
        </linearGradient>
      </defs>
      <rect width="1200" height="900" fill="url(#bg)"/>
      <rect x="44" y="44" width="1112" height="812" fill="none" stroke="#d4af73" stroke-width="2"/>
      <circle cx="290" cy="450" r="165" fill="rgb(${r},${g},${b})" stroke="#d4af73" stroke-width="3"/>
      <polygon points="205,385 375,385 312,462 268,462" fill="#f6f1eb"/>
      <rect x="286" y="462" width="8" height="80" fill="#f6f1eb"/>
      <rect x="242" y="542" width="96" height="8" fill="#f6f1eb"/>
      <text x="515" y="340" fill="#d4af73" font-family="sans-serif" font-size="22" font-weight="bold">${category.toUpperCase()}</text>
      <text x="515" y="415" fill="#ffffff" font-family="sans-serif" font-size="44" font-weight="bold">${name}</text>
      <line x1="515" y1="450" x2="1080" y2="450" stroke="#d4af73" stroke-width="2"/>
      <text x="515" y="505" fill="#e5ddd3" font-family="sans-serif" font-size="26">Nền: ${base}</text>
    </svg>`;
    imgEl.onerror = null;
    imgEl.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
  };

  function renderCategories() {
    filterGroupEl.innerHTML = categories.map(cat => `
      <button class="filter-btn ${cat === selectedCategory ? 'active' : ''}" data-category="${cat}">
        ${cat}
      </button>
    `).join("");

    filterGroupEl.querySelectorAll(".filter-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        selectedCategory = btn.dataset.category;
        renderCategories();
        renderCocktails();
      });
    });
  }

  function renderCocktails() {
    const query = searchTerm.trim().toLowerCase();
    const list = COCKTAIL_DATA.filter(c => {
      const matchCategory = selectedCategory === "Tất cả" || c.category === selectedCategory;
      const matchQuery = !query ||
        c.name.toLowerCase().includes(query) ||
        c.base.toLowerCase().includes(query) ||
        c.ingredients.some(ing => ing.toLowerCase().includes(query));
      return matchCategory && matchQuery;
    });

    gridEl.innerHTML = list.map(c => `
      <article class="card" data-id="${c.id}">
        <div class="card-media">
          <img
            src="./images/${c.id}.webp"
            alt="${c.name}"
            width="1200"
            height="900"
            loading="lazy"
            onerror="buildFallbackCard(this, '${c.name.replace(/'/g, "\'")}', '${c.category}', '${c.base}', [${c.color.join(',')}])"
          >
        </div>
        <div class="card-body">
          <div class="card-tag">${c.category}</div>
          <h3 class="card-title">${c.name}</h3>
          <p class="card-desc">${c.desc}</p>
          <div class="card-meta">
            <span>${c.base} • ${c.glass}</span>
            <strong>Công thức →</strong>
          </div>
        </div>
      </article>
    `).join("");

    gridEl.querySelectorAll(".card").forEach(card => {
      card.addEventListener("click", () => {
        const item = COCKTAIL_DATA.find(c => c.id === card.dataset.id);
        if (item) openModal(item);
      });
    });
  }

  function openModal(c) {
    modalContentEl.innerHTML = `
      <img
        class="modal-hero-img"
        src="./images/${c.id}.webp"
        alt="${c.name}"
        onerror="buildFallbackCard(this, '${c.name.replace(/'/g, "\'")}', '${c.category}', '${c.base}', [${c.color.join(',')}])"
      >
      <div class="card-tag">${c.category}</div>
      <h2 style="font-size: 1.65rem; color: var(--text-primary); margin-top: 0.2rem;">${c.name}</h2>
      <div class="spec-pills">
        <span class="spec-pill">Nền: ${c.base}</span>
        <span class="spec-pill">Kỹ thuật: ${c.method}</span>
        <span class="spec-pill">Ly: ${c.glass}</span>
        <span class="spec-pill">${c.abv}</span>
      </div>
      <p style="color: var(--text-secondary); font-size: 0.94rem;">${c.desc}</p>
      <div class="recipe-layout">
        <div>
          <h4>Định lượng Nguyên liệu</h4>
          <ul>
            ${c.ingredients.map(i => `<li>${i}</li>`).join("")}
          </ul>
        </div>
        <div>
          <h4>Quy trình Pha chế</h4>
          <ol>
            ${c.steps.map(s => `<li>${s}</li>`).join("")}
          </ol>
        </div>
      </div>
    `;
    modalEl.classList.add("open");
  }

  function renderStandards() {
    standardsGridEl.innerHTML = MIXOLOGY_STANDARDS.map(std => `
      <div class="standard-card">
        <h3>${std.title}</h3>
        <p>${std.summary}</p>
        <ul>
          ${std.points.map(pt => `<li>${pt}</li>`).join("")}
        </ul>
      </div>
    `).join("");
  }

  searchInputEl.addEventListener("input", e => {
    searchTerm = e.target.value;
    renderCocktails();
  });

  closeModalBtn.addEventListener("click", () => modalEl.classList.remove("open"));
  modalEl.addEventListener("click", e => {
    if (e.target === modalEl) modalEl.classList.remove("open");
  });

  renderCategories();
  renderCocktails();
  renderStandards();
});
