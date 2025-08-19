 const ITEMS = [
      {
        name: "Laptop Lenovo IdeaPad 3",
        price: 485000,
        img: "games (1).jpg"
      },
      {
        name: "External Hard Drive Disk 1TB",
        price: 30000,
        img: "hdd 1tb 1.jpeg"
      },
      {
        name: "App probook i5",
        price: 450000,
        img: "laptop (2).jpeg"
      },
      {
        name: "HP Probook i7",
        price: 28000,
        img: "laptop (2).jpeg"
      },
      {
        name: "External Hard Drive Disk 1TB",
        price: 28000,
        img: "hdd 1tb original.jpeg"
      },
      {
        name: "Positivo BGH",
        price: 340000,
        img: "laptop (7).jpeg"
      },
      {
        name: "Dell i5",
        price: 470000,
        img: "laptop (5).jpeg"
      }
    ];
    

    const fmtRWF = n => new Intl.NumberFormat('rw-RW', { style:'currency', currency:'RWF', maximumFractionDigits:0 }).format(n);

    const wrap = document.getElementById('products');
    wrap.innerHTML = ITEMS.map((p, i) => `
      <article class="card">
        <div class="img-wrap">
          <img src="${p.img}" alt="${p.name}" loading="lazy" />
        </div>
        <div class="content">
          <div class="title">${p.name}</div>
          <div class="price">${fmtRWF(p.price)}</div>
          <button class="btn buy" data-name="${encodeURIComponent(p.name)}" data-price="${p.price}" data-img="${encodeURIComponent(p.img)}">
          
            🛒 Buy Now
          </button>
        </div>
      </article>
    `).join('');

    document.addEventListener('click', (e) => {
      const btn = e.target.closest('.buy');
      if(!btn) return;
      const name = btn.dataset.name;
      const price = btn.dataset.price;
      const img = btn.dataset.img;
      const url = `check.html?name=${name}&price=${price}&img=${img}`;
      window.location.href = url;
    });

    document.getElementById('yr').textContent = new Date().getFullYear();