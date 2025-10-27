document.addEventListener('DOMContentLoaded', () => {
	// Try to auto-discover images inside the img/ folder by fetching the folder index (works if directory listing is enabled).
	// If that fails, fallbackProducts will be used — edit that array to add any missing images manually.
	const fallbackProducts = [
        { id: 'ip17pm', src: 'img/ip 17 pro max.png', name: 'iPhone 17 Pro Max', brand: 'Apple', price: '₱109,990', desc: 'Brushed metal, tactile keys' },
        { id: 'ip17p', src: 'img/ip 17 pro.png', name: 'iPhone 17 Pro', brand: 'Apple', price: '₱99,990', desc: 'Brushed metal, tactile keys' },
        { id: 'ip17', src: 'img/ip 17.png', name: 'iPhone 17', brand: 'Apple', price: '₱84,990', desc: 'Brushed metal, tactile keys' },
        { id: 'ip16pm', src: 'img/ip 16 pro max.png', name: 'iPhone 16 Pro Max', brand: 'Apple', price: '₱94,990', desc: 'Brushed metal, tactile keys' },
        { id: 'ip16', src: 'img/ip 16.png', name: 'iPhone 16', brand: 'Apple', price: '₱79,990', desc: 'Brushed metal, tactile keys' },
        { id: 'ip15pm', src: 'img/ip 15 pro max.png', name: 'iPhone 15 Pro Max', brand: 'Apple', price: '₱89,990', desc: 'Brushed metal, tactile keys' },
        { id: 'ip15', src: 'img/ip 15.png', name: 'iPhone 15', brand: 'Apple', price: '₱69,990', desc: 'Brushed metal, tactile keys' },
        { id: 'ip14pm', src: 'img/ip 14 pro max.png', name: 'iPhone 14 Pro Max', brand: 'Apple', price: '₱79,990', desc: 'Brushed metal, tactile keys' },
        { id: 'ip14', src: 'img/ip 14.png', name: 'iPhone 14', brand: 'Apple', price: '₱59,990', desc: 'Brushed metal, tactile keys' },
        { id: 'ip13pm', src: 'img/ip 13 pro max.png', name: 'iPhone 13 Pro Max', brand: 'Apple', price: '₱64,990', desc: 'Brushed metal, tactile keys' },
        { id: 'ip13', src: 'img/ip 13.png', name: 'iPhone 13', brand: 'Apple', price: '₱49,990', desc: 'Brushed metal, tactile keys' },
        { id: 'ip12pm', src: 'img/ip 12 pro max.png', name: 'iPhone 12 Pro Max', brand: 'Apple', price: '₱54,990', desc: 'Brushed metal, tactile keys' },
        { id: 'ip12', src: 'img/ip 12.png', name: 'iPhone 12', brand: 'Apple', price: '₱44,990', desc: 'Brushed metal, tactile keys' },
        { id: 'ip11', src: 'img/ip 11.png', name: 'iPhone 11', brand: 'Apple', price: '₱32,990', desc: 'Brushed metal, tactile keys' },
        { id: 'ipair', src: 'img/ip air.png', name: 'iPhone Air', brand: 'Apple', price: '₱56,990', desc: 'Brushed metal, tactile keys' },

        { id: 's25u', src: 'img/samsung s25 ultra.png', name: 'Samsung S25 Ultra', brand: 'Samsung', price: '₱82,990', desc: 'Sleek matte finish' },
        { id: 's25fe', src: 'img/samsung s25 fe.png', name: 'Samsung S25 FE', brand: 'Samsung', price: '₱49,990', desc: 'Sleek matte finish' },
        { id: 's25', src: 'img/samsung s25.png', name: 'Samsung S25', brand: 'Samsung', price: '₱62,990', desc: 'Sleek matte finish' },
        { id: 's24u', src: 'img/samsung s24 ultra.png', name: 'Samsung S24 Ultra', brand: 'Samsung', price: '₱72,990', desc: 'Sleek matte finish' },
        { id: 's24fe', src: 'img/smasung s24 fe.png', name: 'Samsung S24 FE', brand: 'Samsung', price: '₱42,990', desc: 'Sleek matte finish' },
        { id: 's23u', src: 'img/samsung s23 ultra.png', name: 'Samsung S23 Ultra', brand: 'Samsung', price: '₱58,990', desc: 'Sleek matte finish' },
        { id: 's22u5g', src: 'img/samsung s22 ultra 5g.png', name: 'Samsung S22 Ultra 5G', brand: 'Samsung', price: '₱49,990', desc: 'Sleek matte finish' },
        { id: 'a56', src: 'img/samsung a56.png', name: 'Samsung A56', brand: 'Samsung', price: '₱28,990', desc: 'Sleek matte finish' },
        { id: 'a55', src: 'img/samsung a55.png', name: 'Samsung A55', brand: 'Samsung', price: '₱25,990', desc: 'Sleek matte finish' },
        { id: 'a36', src: 'img/samsung a36.png', name: 'Samsung A36', brand: 'Samsung', price: '₱19,990', desc: 'Sleek matte finish' },
        { id: 'a35', src: 'img/samsung a35.png', name: 'Samsung A35', brand: 'Samsung', price: '₱17,990', desc: 'Sleek matte finish' },

        { id: 'v60', src: 'img/vivo v60.png', name: 'Vivo V60', brand: 'Vivo', price: '₱45,990', desc: 'Premium accents and packaging' },
        { id: 'iqooneo10', src: 'img/vivo iqoo neo 10.png', name: 'Vivo IQOO Neo 10', brand: 'Vivo', price: '₱32,990', desc: 'Premium accents and packaging' },
        { id: 'iqoo15', src: 'img/vivo iqoo 15.png', name: 'Vivo IQOO 15', brand: 'Vivo', price: '₱36,990', desc: 'Premium accents and packaging' },
        { id: 'iqoo13', src: 'img/vivo iqoo 13.png', name: 'Vivo IQOO 13', brand: 'Vivo', price: '₱29,990', desc: 'Premium accents and packaging' },
        { id: 'iqooz10x', src: 'img/vivo iqoo z10x.png', name: 'Vivo IQOO Z10x', brand: 'Vivo', price: '₱21,990', desc: 'Premium accents and packaging' },
        { id: 'iqooz10t', src: 'img/vivo iqoo z10 turbo+.png', name: 'Vivo IQOO Z10 Turbo+', brand: 'Vivo', price: '₱24,990', desc: 'Premium accents and packaging' },
        { id: 'iqooz10', src: 'img/vivo iqoo z10.png', name: 'Vivo IQOO Z10', brand: 'Vivo', price: '₱20,990', desc: 'Premium accents and packaging' },
        { id: 't40p', src: 'img/vivo t40 pro.png', name: 'Vivo T40 Pro', brand: 'Vivo', price: '₱27,990', desc: 'Premium accents and packaging' },
        { id: 'x300p', src: 'img/vivo x300 pro.png', name: 'Vivo X300 Pro', brand: 'Vivo', price: '₱59,990', desc: 'Premium accents and packaging' },
        { id: 'x300', src: 'img/vivo x300.png', name: 'Vivo X300', brand: 'Vivo', price: '₱49,990', desc: 'Premium accents and packaging' },
        { id: 'x200p', src: 'img/vivo x200 pro.png', name: 'Vivo X200 Pro', brand: 'Vivo', price: '₱47,990', desc: 'Premium accents and packaging' },
        { id: 'x200fe', src: 'img/vivo x200 fe.png', name: 'Vivo X200 FE', brand: 'Vivo', price: '₱39,990', desc: 'Premium accents and packaging' },
        { id: 'y400', src: 'img/vivo y400.png', name: 'Vivo Y400', brand: 'Vivo', price: '₱17,990', desc: 'Premium accents and packaging' },
        { id: 'y31', src: 'img/vivo y31.png', name: 'Vivo Y31', brand: 'Vivo', price: '₱11,990', desc: 'Premium accents and packaging' },
        { id: 'y29', src: 'img/vivo y29.png', name: 'Vivo Y29', brand: 'Vivo', price: '₱9,990', desc: 'Premium accents and packaging' },
        { id: 'y20', src: 'img/vivo y20.png', name: 'Vivo Y20', brand: 'Vivo', price: '₱7,990', desc: 'Premium accents and packaging' },

        { id: 'k90pm', src: 'img/Xiaomiredmik90promax.png', name: 'Xiaomi Redmi K90 Pro Max', brand: 'Xiaomi', price: '₱39,990', desc: 'kath' },
        { id: 'rk80u', src: 'img/Xiaomi k80 Ultra.png', name: 'Xiaomi Redmi K80 Ultra', brand: 'Xiaomi', price: '₱36,990', desc: 'kath' },
        { id: '17pm', src: 'img/Xiaomi17promax.png', name: 'Xiaomi 17 Pro Max', brand: 'Xiaomi', price: '₱42,990', desc: 'kath' },
        { id: '15u', src: 'img/Xiaomi 15 ultra.png', name: 'Xiaomi 15 Ultra', brand: 'Xiaomi', price: '₱37,990', desc: 'kath' },
        { id: '15tp', src: 'img/Xiaomi15tpro.png', name: 'Xiaomi 15T Pro', brand: 'Xiaomi', price: '₱35,990', desc: 'kath' },
        { id: 'r154g', src: 'img/Xiaomi redmi 15 4g.png', name: 'Xiaomi Redmi 15 4G', brand: 'Xiaomi', price: '₱10,990', desc: 'kath' },
        { id: 'r15c', src: 'img/Xiaomi redmi15c.png', name: 'Xiaomi Redmi 15C', brand: 'Xiaomi', price: '₱8,990', desc: 'kath' },
        { id: 'r13x', src: 'img/Xiaomi redmi 13x.png', name: 'Xiaomi Redmi 13x', brand: 'Xiaomi', price: '₱11,990', desc: 'kath' },
        { id: 'rn15p+', src: 'img/Xiaomi redmi note 15 pro+.png', name: 'Xiaomi Redmi Note 15 Pro+', brand: 'Xiaomi', price: '₱19,990', desc: 'kath' },
        { id: 'rn15p', src: 'img/Xiaomi redmi note 15 pro.png', name: 'Xiaomi Redmi Note 15 Pro', brand: 'Xiaomi', price: '₱17,990', desc: 'kath' },
        { id: 'rn15', src: 'img/Xiaomi redmi note 15.png', name: 'Xiaomi Redmi Note 15', brand: 'Xiaomi', price: '₱14,990', desc: 'kath' },
        { id: 'pm74g', src: 'img/Xiaomi poco m7 4g.png', name: 'Xiaomi Poco M7 4G', brand: 'Xiaomi', price: '₱9,990', desc: 'kath' },
        { id: 'pm7', src: 'img/Xiaomi poco m7.png', name: 'Xiaomi Poco M7', brand: 'Xiaomi', price: '₱10,990', desc: 'kath' },
        { id: 'pf7', src: 'img/Xiaomi poco f7.png', name: 'Xiaomi Poco F7', brand: 'Xiaomi', price: '₱19,990', desc: 'kath' },
        { id: 'pc854g', src: 'img/Xiaomi poco c85 4g.png', name: 'Xiaomi Poco C85 4G', brand: 'Xiaomi', price: '₱7,990', desc: 'kath' },
        { id: 'mf2', src: 'img/Xiaomi mix flip2.png', name: 'Xiaomi Mix Flip 2', brand: 'Xiaomi', price: '₱54,990', desc: 'kath' },
        { id: 'c5p', src: 'img/Xiaomi civi5 pro.png', name: 'Xiaomi Civi 5 Pro', brand: 'Xiaomi', price: '₱32,990', desc: 'kath' },

        { id: 'z80u', src: 'img/zte nubia z80 ultra.png', name: 'ZTE Nubia Z80 Ultra', brand: 'ZTE', price: '₱49,990', desc: 'kath' },
        { id: 'z70u', src: 'img/zte nubia z70 ultra.png', name: 'ZTE Nubia Z70 Ultra', brand: 'ZTE', price: '₱44,990', desc: 'kath' },
        { id: 'z60u', src: 'img/zte nubia z60 ultra.png', name: 'ZTE Nubia Z60 Ultra', brand: 'ZTE', price: '₱38,990', desc: 'kath' },
        { id: 'r11p+', src: 'img/zte nubia redmagic 11 pro+.png', name: 'ZTE Nubia RedMagic 11 Pro+', brand: 'ZTE', price: '₱52,990', desc: 'kath' },
        { id: 'r11p', src: 'img/zte nubia redmagic 11 pro.png', name: 'ZTE Nubia RedMagic 11 Pro', brand: 'ZTE', price: '₱46,990', desc: 'kath' },
        { id: 'r10p', src: 'img/zte nubia redmagic 10 pro.png', name: 'ZTE Nubia RedMagic 10 Pro', brand: 'ZTE', price: '₱39,990', desc: 'kath' },
        { id: 'r10a', src: 'img/zte nubia redmagic 10 air.png', name: 'ZTE Nubia RedMagic 10 Air', brand: 'ZTE', price: '₱36,990', desc: 'kath' },
        { id: 'r9p', src: 'img/zte nubia redmagic 9 pro.png', name: 'ZTE Nubia RedMagic 9 Pro', brand: 'ZTE', price: '₱33,990', desc: 'kath' },
        { id: 'ra', src: 'img/zte nubia redmagic astra.png', name: 'ZTE Nubia RedMagic Astra', brand: 'ZTE', price: '₱27,990', desc: 'kath' },
        { id: 'n3g', src: 'img/zte nubia neo 3 gt.png', name: 'ZTE Nubia Neo 3 GT', brand: 'ZTE', price: '₱22,990', desc: 'kath' },
        { id: 'n2', src: 'img/zte nubia neo 2.png', name: 'ZTE Nubia Neo 2', brand: 'ZTE', price: '₱18,990', desc: 'kath' },
        { id: 'na', src: 'img/zte nubia air.png', name: 'ZTE Nubia Air', brand: 'ZTE', price: '₱15,990', desc: 'kath' },
    ];

    const cart = {};
	const $ = (s) => document.querySelector(s);
	const create = (tag, cls) => { const el = document.createElement(tag); if (cls) el.className = cls; return el; };
	const format = (price) => {
        if (typeof price === 'string' && price.includes('₱')) {
            return price; // Return price as-is if it already has ₱ symbol
        }
        return `₱${Number(price).toLocaleString()}`;
    };

	// Heuristics: guess brand and price from filename
	function guessMetaFromFilename(filename) {
		const lower = filename.toLowerCase();
		let brand = 'Other';
		if (lower.includes('samsung')) brand = 'Samsung';
		else if (lower.includes('vivo')) brand = 'Vivo';
		else if (lower.includes('iphone') || lower.includes('ip ') || lower.includes('apple') || lower.includes('ipx')) brand = 'Apple';
		else if (lower.includes('xiaomi')) brand = 'Xiaomi';
		else if (lower.includes('oneplus')) brand = 'OnePlus';
		else if (lower.includes('google') || lower.includes('pixel')) brand = 'Google';

		let price = 299;
		if (brand === 'Apple') price = 799;
		if (brand === 'Samsung') price = 699;
		if (brand === 'Vivo') price = 349;
		if (brand === 'Xiaomi' || brand === 'OnePlus' || brand === 'Google') price = 499;

		// Build a readable name from filename: remove extension, replace separators with spaces, capitalize words
		const name = filename.replace(/\.[^/.]+$/, '').replace(/[_\-]+/g, ' ').replace(/\s+/g, ' ').trim()
			.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

		return { brand, price, name };
	}

	async function discoverImages() {
		try {
			const resp = await fetch('img/');
			if (!resp.ok) throw new Error('No directory listing');
			const text = await resp.text();
			// quick check: if response is HTML, parse anchors/hrefs
			if (resp.headers.get('content-type') && resp.headers.get('content-type').includes('text/html')) {
				const parser = new DOMParser();
				const doc = parser.parseFromString(text, 'text/html');
				const links = Array.from(doc.querySelectorAll('a')).map(a => a.getAttribute('href'));
				const imgs = links.filter(h => h && /\.(png|jpe?g|webp)$/i.test(h));
				// normalize and dedupe
				const unique = [...new Set(imgs.map(p => p.replace(/^\.\//, '')))];
				// build product objects
				const products = unique.map((file, idx) => {
					const meta = guessMetaFromFilename(file);
					return {
						id: `${meta.name.replace(/\s+/g, '-').toLowerCase()}-${idx}`,
						src: `img/${file}`,
						name: meta.name,
						brand: meta.brand,
						price: meta.price,
						desc: ''
					};
				});
				if (products.length) return products;
			}
			throw new Error('Directory HTML not found or parsing failed');
		} catch (err) {
			console.warn('Auto-discover of img/ failed:', err.message);
			return null;
		}
	}

	// Render functions (same behavior as earlier)
	function renderProducts(products) {
		const root = $('#products-root');
		if (!root) return;
		root.innerHTML = '';
		const brands = [...new Set(products.map(p => p.brand))];
		brands.forEach(brand => {
			const section = create('div', 'brand-section');
			section.innerHTML = `<h4>${brand}</h4>`;
			const grid = create('div', 'brand-products');
			products.filter(p => p.brand === brand).forEach(p => {
				const card = create('div', 'card');
				const imgPath = encodeURI(p.src);
				card.innerHTML = `
					<img class="thumb" src="${imgPath}" alt="${p.name}">
					<div style="font-weight:700">${p.name}</div>
					<div class="small">${p.desc || ''}</div>
					<div style="margin-top:auto;display:flex;gap:8px">
						<button class="btn buy-btn">Buy — ${p.price}</button>
						<button class="btn add-btn" style="background:transparent">Add to cart</button>
					</div>
				`;
				// Update: fix buy button to properly save data
				card.querySelector('.buy-btn').addEventListener('click', () => {
                    // Prepare order data with all necessary information
                    const orderData = {
                        items: {
                            [p.id]: {
                                id: p.id,
                                name: p.name,
                                price: p.price,
                                src: encodeURI(p.src),
                                qty: 1
                            }
                        },
                        total: p.price
                    };
                    // Save to localStorage and redirect
                    localStorage.setItem('pendingOrder', JSON.stringify(orderData));
                    window.location.href = 'order.html';
                });
				card.querySelector('.add-btn').addEventListener('click', () => addToCart(p));
				grid.appendChild(card);
			});
			section.appendChild(grid);
			root.appendChild(section);
		});
	}

	// Cart operations
	function addToCart(product) {
		if (!cart[product.id]) cart[product.id] = { ...product, qty: 0 };
		cart[product.id].qty += 1;
		renderCart();
	}
	function removeFromCart(id) { delete cart[id]; renderCart(); }
	function changeQty(id, delta) { if (!cart[id]) return; cart[id].qty = Math.max(1, cart[id].qty + delta); renderCart(); }
	function clearCart() { for (const k in cart) delete cart[k]; renderCart(); }

	function renderCart() {
        const itemsEl = $('#cart-items');
        const countEl = $('#cart-count');
        const totalEl = $('#cart-total');
        if (!itemsEl || !countEl || !totalEl) return;
        itemsEl.innerHTML = '';
        let total = 0, count = 0;
        Object.values(cart).forEach(item => {
            // Parse price string to number by removing '₱' and ',' characters
            const priceNum = parseFloat(item.price.replace('₱', '').replace(/,/g, ''));
            total += priceNum * item.qty;
            count += item.qty;
            const row = create('div', 'cart-item');
            const imgPath = encodeURI(item.src);
            row.innerHTML = `
                <img src="${imgPath}" alt="${item.name}" style="width:56px;height:56px;object-fit:contain;border-radius:8px;background:var(--glass)">
                <div class="cart-item-details">
                    <div style="font-weight:700">${item.name}</div>
                    <div class="small">${item.price} × ${item.qty}</div>
                    <div class="cart-actions">
                        <button class="btn small dec">−</button>
                        <button class="btn small inc">+</button>
                        <button class="btn small remove" style="background:transparent">Remove</button>
                    </div>
                </div>
            `;
			row.querySelector('.inc').addEventListener('click', () => changeQty(item.id, 1));
			row.querySelector('.dec').addEventListener('click', () => changeQty(item.id, -1));
			row.querySelector('.remove').addEventListener('click', () => removeFromCart(item.id));
			itemsEl.appendChild(row);
		});
		countEl.textContent = count;
		totalEl.textContent = format(total);
	}

	const cartSidebar = $('#cart-sidebar');
	function openCart() { if (cartSidebar) { cartSidebar.classList.add('open'); cartSidebar.setAttribute('aria-hidden', 'false'); } }
	function closeCart() { if (cartSidebar) { cartSidebar.classList.remove('open'); cartSidebar.setAttribute('aria-hidden', 'true'); } }

	// UI wiring
	const cartToggle = $('#cart-toggle'); if (cartToggle) cartToggle.addEventListener('click', () => { if (cartSidebar && cartSidebar.classList.contains('open')) closeCart(); else openCart(); });
	const cartClose = $('#cart-close'); if (cartClose) cartClose.addEventListener('click', closeCart);
	const clearBtn = $('#clear-cart'); if (clearBtn) clearBtn.addEventListener('click', clearCart);
	const checkoutBtn = $('#checkout-btn'); 
	if (checkoutBtn) checkoutBtn.addEventListener('click', () => {
		if (Object.keys(cart).length === 0) return alert('Cart is empty');
		// Save cart data to localStorage and redirect to order page
		localStorage.setItem('pendingOrder', JSON.stringify({
			items: cart,
			total: $('#cart-total').textContent
		}));
		window.location.href = 'order.html';
	});

	// bootstrap: try discovery, else fallback
	(async () => {
		const discovered = await discoverImages();
		const products = discovered && discovered.length ? discovered : fallbackProducts;
		renderProducts(products);
		renderCart();
	})();
});