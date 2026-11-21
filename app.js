document.addEventListener("DOMContentLoaded", () => {
  const drinkGrid = document.getElementById("drinkGrid");
  const filterTabs = document.getElementById("filterTabs");
  const searchInput = document.getElementById("searchInput");
  const moduleGrid = document.getElementById("moduleGrid");
  const modal = document.getElementById("recipeModal");
  const modalBody = document.getElementById("modalBody");
  const closeModal = document.getElementById("closeModal");

  let activeCategory = "Tất cả";
  let searchQuery = "";

  // Extract unique categories
  const categories = ["Tất cả", ...new Set(BARISTA_DATA.map(d => d.category))];

  function renderTabs() {
    filterTabs.innerHTML = categories.map(cat => `
      <button class="tab-btn ${cat === activeCategory ? 'active' : ''}" data-cat="${cat}">
        ${cat}
      </button>
    `).join("");

    filterTabs.querySelectorAll(".tab-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        activeCategory = btn.dataset.cat;
        renderTabs();
        renderDrinks();
      });
    });
  }

  function renderDrinks() {
    const filtered = BARISTA_DATA.filter(drink => {
      const matchCat = activeCategory === "Tất cả" || drink.category === activeCategory;
      const matchSearch = drink.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          drink.desc.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchSearch;
    });

    drinkGrid.innerHTML = filtered.map(drink => `
      <article class="card" data-id="${drink.id}">
        <div class="card-img-wrap">
          <img src="images/${drink.id}.webp" alt="${drink.name}" loading="lazy" width="1200" height="900">
        </div>
        <div class="card-body">
          <div class="card-meta">
            <span>${drink.category}</span>
            <span>${drink.temp} • ${drink.prep}</span>
          </div>
          <h3 class="card-title">${drink.name}</h3>
          <p class="card-desc">${drink.desc}</p>
          <div class="card-footer">
            <span class="price">${drink.price}</span>
            <span>Xem công thức →</span>
          </div>
        </div>
      </article>
    `).join("");

    drinkGrid.querySelectorAll(".card").forEach(card => {
      card.addEventListener("click", () => {
        const drink = BARISTA_DATA.find(d => d.id === card.dataset.id);
        if (drink) openRecipeModal(drink);
      });
    });
  }

  function openRecipeModal(drink) {
    modalBody.innerHTML = `
      <img class="modal-img" src="images/${drink.id}.webp" alt="${drink.name}">
      <div class="card-meta">
        <span>${drink.category}</span>
        <span>${drink.temp} • ${drink.prep} • ${drink.price}</span>
      </div>
      <h2 style="color: var(--accent-gold); margin: 0.4rem 0;">${drink.name}</h2>
      <p style="color: var(--text-muted);">${drink.desc}</p>
      <div class="recipe-cols">
        <div>
          <h4>Định lượng Nguyên liệu</h4>
          <ul>
            ${drink.ingredients.map(item => `<li>${item}</li>`).join("")}
          </ul>
        </div>
        <div>
          <h4>Quy trình Pha chế Chuẩn</h4>
          <ol>
            ${drink.steps.map(step => `<li>${step}</li>`).join("")}
          </ol>
        </div>
      </div>
    `;
    modal.classList.add("open");
  }

  function renderCurriculum() {
    moduleGrid.innerHTML = CURRICULUM_MODULES.map(mod => `
      <div class="module-card">
        <h3>${mod.title}</h3>
        <p style="font-size: 0.9rem; color: var(--text-main);">${mod.summary}</p>
        <ul>
          ${mod.highlights.map(h => `<li>${h}</li>`).join("")}
        </ul>
      </div>
    `).join("");
  }

  searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value;
    renderDrinks();
  });

  closeModal.addEventListener("click", () => modal.classList.remove("open"));
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.classList.remove("open");
  });

  renderTabs();
  renderDrinks();
  renderCurriculum();
});
