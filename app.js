function renderCards(list, target) {
  const el = document.getElementById(target);
  if (!el) return;
  el.innerHTML = list.map(r => `
    <div class="card" onclick="show('${r.id}')">
      ${r.img ? `<img src="${r.img}" alt="${r.name}" loading="lazy">` : ''}
      <div class="card-content">
        <h3>${r.name}</h3>
        <div class="tags">${r.tags.map(t=>`<span class="tag">${t}</span>`).join('')}</div>
        <p style="color:var(--muted);font-size:.95rem">${r.desc}</p>
        <div class="meta"><span>${r.base}</span><span>${'●'.repeat(r.str)}${'○'.repeat(5-r.str)}</span></div>
      </div>
    </div>
  `).join('');
}

function show(id) {
  const r = recipes.find(x => x.id === id);
  if (!r) return;
  document.getElementById('detail').innerHTML = `
    <div class="detail">
      <h2>${r.name}</h2>
      ${r.img?`<img src="${r.img}" alt="">`:''}
      <p style="color:var(--muted);margin-bottom:16px">${r.desc}</p>
      <h3>Nguyên liệu</h3>
      <ul style="margin:12px 0 20px 20px">${r.ings.map(i=>`<li>${i}</li>`).join('')}</ul>
      <h3>Cách làm</h3>
      <ol style="margin:12px 0 20px 20px">${r.steps.map(s=>`<li style="margin-bottom:8px">${s}</li>`).join('')}</ol>
      <button onclick="document.getElementById('detail').innerHTML=''" class="btn btn-ghost">Đóng</button>
    </div>
  `;
  document.getElementById('detail').scrollIntoView({behavior:'smooth'});
}

// Featured on homepage
if (document.getElementById('featured')) {
  renderCards(recipes.slice(0,3), 'featured');
}

// Recipes page
if (document.getElementById('grid')) {
  let type = 'all';
  function update() {
    let list = recipes.slice();
    const q = document.getElementById('q').value.toLowerCase();
    if (q) list = list.filter(r => r.name.toLowerCase().includes(q) || r.desc.toLowerCase().includes(q));
    if (type !== 'all') list = list.filter(r => r.type === type);
    const s = document.getElementById('sort').value;
    if (s === 'str') list.sort((a,b) => b.str - a.str);
    else list.sort((a,b) => a.name.localeCompare(b.name));
    renderCards(list, 'grid');
  }
  document.getElementById('q').oninput = update;
  document.getElementById('sort').onchange = update;
  document.querySelectorAll('.chip').forEach(c => c.onclick = () => {
    document.querySelectorAll('.chip').forEach(x => x.classList.remove('on'));
    c.classList.add('on');
    type = c.dataset.t;
    update();
  });
  update();
}
