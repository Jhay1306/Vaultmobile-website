document.addEventListener('DOMContentLoaded', () => {
	// Try to auto-discover images inside the img/ folder by fetching the folder index (works if directory listing is enabled).
	// If that fails, fallbackProducts will be used — edit that array to add any missing images manually.
	const fallbackProducts = [
        { id: 'ip17pm', src: 'img/ip 17 pro max.png', name: 'iPhone 17 Pro Max', brand: 'Apple', price: '₱109,990', desc: 'A17 Bionic chip, 12GB RAM, 1TB storage, 6.9" Super Retina XDR display, 48MP triple camera, titanium frame, long-lasting battery, brushed metal finish' },
        { id: 'ip17p', src: 'img/ip 17 pro.png', name: 'iPhone 17 Pro', brand: 'Apple', price: '₱99,990', desc: 'A17 Bionic chip, 12GB RAM, 512GB storage, 6.7" OLED display, 48MP triple camera, sleek titanium design, excellent performance' },
        { id: 'ip17', src: 'img/ip 17.png', name: 'iPhone 17', brand: 'Apple', price: '₱84,990', desc: 'A17 chip, 8GB RAM, 256GB storage, 6.1" OLED display, dual 48MP camera, durable glass body, all-day battery' },
        { id: 'ip16pm', src: 'img/ip 16 pro max.png', name: 'iPhone 16 Pro Max', brand: 'Apple', price: '₱94,990', desc: 'A16 Bionic chip, 8GB RAM, 1TB storage, 6.9" Super Retina display, 48MP triple camera, titanium frame, great for photography' },
        { id: 'ip16', src: 'img/ip 16.png', name: 'iPhone 16', brand: 'Apple', price: '₱79,990', desc: 'A16 Bionic chip, 8GB RAM, 256GB storage, 6.1" OLED display, dual 48MP camera, sleek modern design' },
        { id: 'ip15pm', src: 'img/ip 15 pro max.png', name: 'iPhone 15 Pro Max', brand: 'Apple', price: '₱89,990', desc: 'A17 Pro chip, 8GB RAM, 512GB storage, 6.7" OLED display, 48MP triple camera, titanium body, fast charging support' },
        { id: 'ip15', src: 'img/ip 15.png', name: 'iPhone 15', brand: 'Apple', price: '₱69,990', desc: 'A16 Bionic chip, 6GB RAM, 256GB storage, 6.1" Super Retina XDR display, dual camera, durable design' },
        { id: 'ip14pm', src: 'img/ip 14 pro max.png', name: 'iPhone 14 Pro Max', brand: 'Apple', price: '₱79,990', desc: 'A16 Bionic chip, 6GB RAM, 512GB storage, 6.7" OLED ProMotion display, 48MP camera, Dynamic Island feature' },
        { id: 'ip14', src: 'img/ip 14.png', name: 'iPhone 14', brand: 'Apple', price: '₱59,990', desc: 'A15 Bionic chip, 6GB RAM, 256GB storage, 6.1" OLED display, dual 12MP camera, crash detection feature' },
        { id: 'ip13pm', src: 'img/ip 13 pro max.png', name: 'iPhone 13 Pro Max', brand: 'Apple', price: '₱64,990', desc: 'A15 Bionic chip, 6GB RAM, 512GB storage, 6.7" Super Retina XDR, 12MP triple camera, ProMotion 120Hz display' },
        { id: 'ip13', src: 'img/ip 13.png', name: 'iPhone 13', brand: 'Apple', price: '₱49,990', desc: 'A15 Bionic chip, 4GB RAM, 256GB storage, 6.1" OLED display, dual 12MP camera, long battery life' },
        { id: 'ip12pm', src: 'img/ip 12 pro max.png', name: 'iPhone 12 Pro Max', brand: 'Apple', price: '₱54,990', desc: 'A14 Bionic chip, 6GB RAM, 512GB storage, 6.7" OLED display, triple 12MP camera, 5G ready' },
        { id: 'ip12', src: 'img/ip 12.png', name: 'iPhone 12', brand: 'Apple', price: '₱44,990', desc: 'A14 Bionic chip, 4GB RAM, 256GB storage, 6.1" OLED display, dual 12MP camera, slim aluminum frame' },
        { id: 'ip11', src: 'img/ip 11.png', name: 'iPhone 11', brand: 'Apple', price: '₱32,990', desc: 'A13 Bionic chip, 4GB RAM, 128GB storage, 6.1" Liquid Retina display, dual 12MP camera, strong battery performance' },
        { id: 'ipair', src: 'img/ip air.png', name: 'iPhone Air', brand: 'Apple', price: '₱56,990', desc: 'A15 chip, 6GB RAM, 256GB storage, 6.5" OLED display, dual 12MP camera, ultra-slim lightweight design' },

        { id: 's25u', src: 'img/samsung s25 ultra.png', name: 'Samsung S25 Ultra', brand: 'Samsung', price: '₱82,990', desc: 'Snapdragon 8 Gen 4 chip, 12GB RAM, 512GB storage, 6.8" Dynamic AMOLED 2X display (120Hz), 200MP quad camera, 5000mAh battery, S Pen support, titanium frame' },
        { id: 's25fe', src: 'img/samsung s25 fe.png', name: 'Samsung S25 FE', brand: 'Samsung', price: '₱49,990', desc: 'Exynos 2400 chip, 8GB RAM, 256GB storage, 6.4" AMOLED display (120Hz), 50MP triple camera, 4500mAh battery, IP68 water resistance' },
        { id: 's25', src: 'img/samsung s25.png', name: 'Samsung S25', brand: 'Samsung', price: '₱62,990', desc: 'Snapdragon 8 Gen 4 chip, 8GB RAM, 256GB storage, 6.2" AMOLED 2X display (120Hz), 50MP triple camera, 4000mAh battery, sleek matte design' },
        { id: 's24u', src: 'img/samsung s24 ultra.png', name: 'Samsung S24 Ultra', brand: 'Samsung', price: '₱72,990', desc: 'Snapdragon 8 Gen 3 chip, 12GB RAM, 512GB storage, 6.8" QHD+ AMOLED display, 200MP quad camera, 5000mAh battery, titanium body, S Pen included' },
        { id: 's24fe', src: 'img/smasung s24 fe.png', name: 'Samsung S24 FE', brand: 'Samsung', price: '₱42,990', desc: 'Exynos 2200 chip, 8GB RAM, 256GB storage, 6.4" AMOLED 120Hz display, 50MP triple camera, 4500mAh battery, Gorilla Glass protection' },
        { id: 's23u', src: 'img/samsung s23 ultra.png', name: 'Samsung S23 Ultra', brand: 'Samsung', price: '₱58,990', desc: 'Snapdragon 8 Gen 2 chip, 12GB RAM, 512GB storage, 6.8" AMOLED QHD+ display, 200MP quad camera, 5000mAh battery, S Pen support' },
        { id: 's22u5g', src: 'img/samsung s22 ultra 5g.png', name: 'Samsung S22 Ultra 5G', brand: 'Samsung', price: '₱49,990', desc: 'Snapdragon 8 Gen 1 chip, 12GB RAM, 256GB storage, 6.8" AMOLED 120Hz display, 108MP quad camera, 5000mAh battery, S Pen ready' },
        { id: 'a56', src: 'img/samsung a56.png', name: 'Samsung A56', brand: 'Samsung', price: '₱28,990', desc: 'Exynos 1480 chip, 8GB RAM, 256GB storage, 6.6" Super AMOLED 120Hz display, 50MP triple camera, 5000mAh battery, fast charging' },
        { id: 'a55', src: 'img/samsung a55.png', name: 'Samsung A55', brand: 'Samsung', price: '₱25,990', desc: 'Exynos 1480 chip, 8GB RAM, 128GB storage, 6.6" AMOLED display (120Hz), 50MP triple camera, 5000mAh battery, premium aluminum frame' },
        { id: 'a36', src: 'img/samsung a36.png', name: 'Samsung A36', brand: 'Samsung', price: '₱19,990', desc: 'Exynos 1380 chip, 6GB RAM, 128GB storage, 6.5" AMOLED 120Hz display, 50MP triple camera, 5000mAh battery, slim matte design' },
        { id: 'a35', src: 'img/samsung a35.png', name: 'Samsung A35', brand: 'Samsung', price: '₱17,990', desc: 'Exynos 1380 chip, 6GB RAM, 128GB storage, 6.5" AMOLED display (120Hz), 50MP triple camera, 5000mAh battery, water-resistant body' },

        { id: 'v60', src: 'img/vivo v60.png', name: 'Vivo V60', brand: 'Vivo', price: '₱45,990', desc: 'Snapdragon 8 Gen 3 chip, 12GB RAM, 512GB storage, 6.8" AMOLED display (120Hz), 50MP triple camera, 5000mAh battery, fast charging, elegant matte design' },
        { id: 'iqooneo10', src: 'img/vivo iqoo neo 10.png', name: 'Vivo IQOO Neo 10', brand: 'Vivo', price: '₱32,990', desc: 'Snapdragon 8 Gen 2 chip, 8GB RAM, 256GB storage, 6.78" AMOLED 144Hz display, 50MP dual camera, 5160mAh battery, gaming performance optimized' },
        { id: 'iqoo15', src: 'img/vivo iqoo 15.png', name: 'Vivo IQOO 15', brand: 'Vivo', price: '₱36,990', desc: 'Snapdragon 8 Gen 3 chip, 12GB RAM, 512GB storage, 6.78" AMOLED 144Hz display, 50MP triple camera, 5000mAh battery, 120W fast charging' },
        { id: 'iqoo13', src: 'img/vivo iqoo 13.png', name: 'Vivo IQOO 13', brand: 'Vivo', price: '₱29,990', desc: 'Snapdragon 8+ Gen 1 chip, 8GB RAM, 256GB storage, 6.78" AMOLED display (120Hz), 50MP dual camera, 4700mAh battery, high-speed charging' },
        { id: 'iqooz10x', src: 'img/vivo iqoo z10x.png', name: 'Vivo IQOO Z10x', brand: 'Vivo', price: '₱21,990', desc: 'Snapdragon 7 Gen 1 chip, 6GB RAM, 128GB storage, 6.64" AMOLED 120Hz display, 64MP main camera, 5000mAh battery, fast 44W charging' },
        { id: 'iqooz10t', src: 'img/vivo iqoo z10 turbo+.png', name: 'Vivo IQOO Z10 Turbo+', brand: 'Vivo', price: '₱24,990', desc: 'Dimensity 8300 chip, 8GB RAM, 256GB storage, 6.78" AMOLED 144Hz display, 64MP triple camera, 5000mAh battery, 80W fast charging' },
        { id: 'iqooz10', src: 'img/vivo iqoo z10.png', name: 'Vivo IQOO Z10', brand: 'Vivo', price: '₱20,990', desc: 'Dimensity 7200 chip, 8GB RAM, 128GB storage, 6.64" AMOLED 120Hz display, 50MP dual camera, 5000mAh battery, stylish glass back' },
        { id: 't40p', src: 'img/vivo t40 pro.png', name: 'Vivo T40 Pro', brand: 'Vivo', price: '₱27,990', desc: 'Dimensity 8300 chip, 8GB RAM, 256GB storage, 6.7" AMOLED 120Hz display, 50MP triple camera, 5000mAh battery, fast charging support' },
        { id: 'x300p', src: 'img/vivo x300 pro.png', name: 'Vivo X300 Pro', brand: 'Vivo', price: '₱59,990', desc: 'Snapdragon 8 Gen 3 chip, 12GB RAM, 512GB storage, 6.78" AMOLED LTPO display, 50MP ZEISS quad camera, 5400mAh battery, luxury vegan leather finish' },
        { id: 'x300', src: 'img/vivo x300.png', name: 'Vivo X300', brand: 'Vivo', price: '₱49,990', desc: 'Snapdragon 8 Gen 3 chip, 12GB RAM, 256GB storage, 6.78" AMOLED display (120Hz), 50MP triple camera, 5000mAh battery, elegant curved design' },
        { id: 'x200p', src: 'img/vivo x200 pro.png', name: 'Vivo X200 Pro', brand: 'Vivo', price: '₱47,990', desc: 'Dimensity 9300 chip, 12GB RAM, 512GB storage, 6.78" AMOLED LTPO display, 50MP ZEISS camera system, 5400mAh battery, premium finish' },
        { id: 'x200fe', src: 'img/vivo x200 fe.png', name: 'Vivo X200 FE', brand: 'Vivo', price: '₱39,990', desc: 'Dimensity 9200 chip, 8GB RAM, 256GB storage, 6.7" AMOLED 120Hz display, 50MP triple camera, 5000mAh battery, slim matte body' },
        { id: 'y400', src: 'img/vivo y400.png', name: 'Vivo Y400', brand: 'Vivo', price: '₱17,990', desc: 'Helio G99 chip, 8GB RAM, 128GB storage, 6.64" AMOLED display, 50MP dual camera, 5000mAh battery, slim and lightweight design' },
        { id: 'y31', src: 'img/vivo y31.png', name: 'Vivo Y31', brand: 'Vivo', price: '₱11,990', desc: 'Snapdragon 662 chip, 6GB RAM, 128GB storage, 6.58" IPS LCD display, 48MP triple camera, 5000mAh battery, 18W fast charging' },
        { id: 'y29', src: 'img/vivo y29.png', name: 'Vivo Y29', brand: 'Vivo', price: '₱9,990', desc: 'Helio G85 chip, 6GB RAM, 128GB storage, 6.51" HD+ display, 50MP dual camera, 5000mAh battery, sleek gradient design' },
        { id: 'y20', src: 'img/vivo y20.png', name: 'Vivo Y20', brand: 'Vivo', price: '₱7,990', desc: 'Snapdragon 460 chip, 4GB RAM, 64GB storage, 6.51" LCD display, 13MP triple camera, 5000mAh battery, side fingerprint sensor' },

        { id: 'k90pm', src: 'img/Xiaomiredmik90promax.png', name: 'Xiaomi Redmi K90 Pro Max', brand: 'Xiaomi', price: '₱39,990', desc: 'Snapdragon 8 Gen 3, 200MP AI camera, 5000mAh battery, and 120Hz AMOLED display' },
        { id: 'rk80u', src: 'img/Xiaomi k80 Ultra.png', name: 'Xiaomi Redmi K80 Ultra', brand: 'Xiaomi', price: '₱36,990', desc: 'Flagship performance with Dimensity 9300, 144Hz display, and 120W fast charging' },
        { id: '17pm', src: 'img/Xiaomi17promax.png', name: 'Xiaomi 17 Pro Max', brand: 'Xiaomi', price: '₱42,990', desc: 'Premium curved AMOLED display, Snapdragon 8s Gen 3, and Leica triple camera system' },
        { id: '15u', src: 'img/Xiaomi 15 ultra.png', name: 'Xiaomi 15 Ultra', brand: 'Xiaomi', price: '₱37,990', desc: 'Powerful Snapdragon 8 Gen 2, 1-inch 50MP camera sensor, and 120W charging' },
        { id: '15tp', src: 'img/Xiaomi15tpro.png', name: 'Xiaomi 15T Pro', brand: 'Xiaomi', price: '₱35,990', desc: 'Performance-focused phone with 144Hz AMOLED, Snapdragon 8 Gen 2, and fast charging' },
        { id: 'r154g', src: 'img/Xiaomi redmi 15 4g.png', name: 'Xiaomi Redmi 15 4G', brand: 'Xiaomi', price: '₱10,990', desc: 'Affordable 4G smartphone with 90Hz display, 50MP camera, and large 5000mAh battery' },
        { id: 'r15c', src: 'img/Xiaomi redmi15c.png', name: 'Xiaomi Redmi 15C', brand: 'Xiaomi', price: '₱8,990', desc: 'Budget phone with Helio G85 chip, HD+ display, and long-lasting 5000mAh battery' },
        { id: 'r13x', src: 'img/Xiaomi redmi 13x.png', name: 'Xiaomi Redmi 13x', brand: 'Xiaomi', price: '₱11,990', desc: 'Smooth 90Hz AMOLED, 108MP main camera, and 5000mAh battery with 33W charging' },
        { id: 'rn15p+', src: 'img/Xiaomi redmi note 15 pro+.png', name: 'Xiaomi Redmi Note 15 Pro+', brand: 'Xiaomi', price: '₱19,990', desc: 'Stylish midrange phone with Dimensity 8300, 120Hz AMOLED, and 200MP OIS camera' },
        { id: 'rn15p', src: 'img/Xiaomi redmi note 15 pro.png', name: 'Xiaomi Redmi Note 15 Pro', brand: 'Xiaomi', price: '₱17,990', desc: '120Hz AMOLED, 108MP AI triple camera, and fast 67W charging' },
        { id: 'rn15', src: 'img/Xiaomi redmi note 15.png', name: 'Xiaomi Redmi Note 15', brand: 'Xiaomi', price: '₱14,990', desc: 'Vivid AMOLED display, 64MP main camera, and 5000mAh battery' },
        { id: 'pm74g', src: 'img/Xiaomi poco m7 4g.png', name: 'Xiaomi Poco M7 4G', brand: 'Xiaomi', price: '₱9,990', desc: 'Reliable daily phone with 90Hz FHD+ screen, Helio G88, and large 5000mAh battery' },
        { id: 'pm7', src: 'img/Xiaomi poco m7.png', name: 'Xiaomi Poco M7', brand: 'Xiaomi', price: '₱10,990', desc: '90Hz AMOLED display, 64MP dual camera, and 33W fast charging' },
        { id: 'pf7', src: 'img/Xiaomi poco f7.png', name: 'Xiaomi Poco F7', brand: 'Xiaomi', price: '₱19,990', desc: 'Gaming-ready Snapdragon 7 Gen 2, 120Hz AMOLED, and 5000mAh battery' },
        { id: 'pc854g', src: 'img/Xiaomi poco c85 4g.png', name: 'Xiaomi Poco C85 4G', brand: 'Xiaomi', price: '₱7,990', desc: 'Affordable and durable phone with 6.7-inch display and 5000mAh battery' },
        { id: 'mf2', src: 'img/Xiaomi mix flip2.png', name: 'Xiaomi Mix Flip 2', brand: 'Xiaomi', price: '₱54,990', desc: 'Folding flagship with dual AMOLED screens, Snapdragon 8 Gen 3, and 50MP Leica camera' },
        { id: 'c5p', src: 'img/Xiaomi civi5 pro.png', name: 'Xiaomi Civi 5 Pro', brand: 'Xiaomi', price: '₱32,990', desc: 'Slim and elegant design, 120Hz AMOLED, and 32MP dual selfie camera' },

        { id: 'z80u', src: 'img/zte nubia z80 ultra.png', name: 'ZTE Nubia Z80 Ultra', brand: 'ZTE', price: '₱49,990', desc: 'Flagship powerhouse with Snapdragon 8 Gen 3, 1-inch 50MP camera, and 120Hz AMOLED display' },
        { id: 'z70u', src: 'img/zte nubia z70 ultra.png', name: 'ZTE Nubia Z70 Ultra', brand: 'ZTE', price: '₱44,990', desc: 'Premium design with Snapdragon 8 Gen 2, under-display selfie camera, and 144Hz AMOLED' },
        { id: 'z60u', src: 'img/zte nubia z60 ultra.png', name: 'ZTE Nubia Z60 Ultra', brand: 'ZTE', price: '₱38,990', desc: 'Bezel-less AMOLED screen, Snapdragon 8 Gen 2, 64MP triple camera, and 80W charging' },
        { id: 'r11p+', src: 'img/zte nubia redmagic 11 pro+.png', name: 'ZTE Nubia RedMagic 11 Pro+', brand: 'ZTE', price: '₱52,990', desc: 'Ultimate gaming phone with Snapdragon 8 Gen 3, 165Hz AMOLED, and built-in cooling fan' },
        { id: 'r11p', src: 'img/zte nubia redmagic 11 pro.png', name: 'ZTE Nubia RedMagic 11 Pro', brand: 'ZTE', price: '₱46,990', desc: 'Gaming performance with 165Hz display, RGB lights, and Snapdragon 8 Gen 3' },
        { id: 'r10p', src: 'img/zte nubia redmagic 10 pro.png', name: 'ZTE Nubia RedMagic 10 Pro', brand: 'ZTE', price: '₱39,990', desc: 'High-speed gaming phone with 144Hz AMOLED, Snapdragon 8 Gen 2, and 6000mAh battery' },
        { id: 'r10a', src: 'img/zte nubia redmagic 10 air.png', name: 'ZTE Nubia RedMagic 10 Air', brand: 'ZTE', price: '₱36,990', desc: 'Sleek design, 120Hz display, Snapdragon 8+ Gen 1, and improved cooling system' },
        { id: 'r9p', src: 'img/zte nubia redmagic 9 pro.png', name: 'ZTE Nubia RedMagic 9 Pro', brand: 'ZTE', price: '₱33,990', desc: 'Gaming-focused device with Snapdragon 8 Gen 2, AMOLED 120Hz display, and RGB fan cooling' },
        { id: 'ra', src: 'img/zte nubia redmagic astra.png', name: 'ZTE Nubia RedMagic Astra', brand: 'ZTE', price: '₱27,990', desc: 'Mid-tier gaming phone with AMOLED display, Dimensity 8300 chip, and long-lasting 5500mAh battery' },
        { id: 'n3g', src: 'img/zte nubia neo 3 gt.png', name: 'ZTE Nubia Neo 3 GT', brand: 'ZTE', price: '₱22,990', desc: 'Stylish and powerful with Snapdragon 7 Gen 2, 120Hz display, and 67W charging' },
        { id: 'n2', src: 'img/zte nubia neo 2.png', name: 'ZTE Nubia Neo 2', brand: 'ZTE', price: '₱18,990', desc: 'Gaming-inspired design, 120Hz display, Unisoc T820 processor, and 6000mAh battery' },
        { id: 'na', src: 'img/zte nubia air.png', name: 'ZTE Nubia Air', brand: 'ZTE', price: '₱15,990', desc: 'Lightweight phone with AMOLED screen, 64MP dual camera, and 5000mAh battery' },
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
					<div class="product-title" style="font-weight:700">${p.name}</div>
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

	// Add after renderProducts or near end of file where UI wiring is performed
	// Wire search + sort + modal + update cart count
	(function wireUI() {
		const searchEl = document.getElementById('product-search');
		const sortEl = document.getElementById('product-sort');
		const modal = document.getElementById('product-modal');
		const modalClose = document.getElementById('modal-close');
		const modalTitle = document.getElementById('modal-title');
		const modalPrice = document.getElementById('modal-price');
		const modalDesc = document.getElementById('modal-desc');
		const modalImages = document.getElementById('modal-images');
		const modalAdd = document.getElementById('modal-add');
		const modalBuy = document.getElementById('modal-buy');
		const modalReco = document.getElementById('modal-reco');

		// Filter & sort helpers that call renderProducts with filtered array
		function applyFilters() {
			let filtered = (window.__allProducts || fallbackProducts).slice();
			const q = searchEl?.value?.trim().toLowerCase();
			if (q) filtered = filtered.filter(p => (p.name + ' ' + (p.desc||'') + ' ' + p.brand).toLowerCase().includes(q));
			const s = sortEl?.value;
			if (s === 'price-asc') filtered.sort((a,b)=> parseFloat(a.price.replace(/[^\d]/g,'')) - parseFloat(b.price.replace(/[^\d]/g,'')));
			if (s === 'price-desc') filtered.sort((a,b)=> parseFloat(b.price.replace(/[^\d]/g,'')) - parseFloat(a.price.replace(/[^\d]/g,'')));
			if (s === 'brand') filtered.sort((a,b)=> a.brand.localeCompare(b.brand));
			renderProducts(filtered);
		}

		if (searchEl) searchEl.addEventListener('input', applyFilters);
		if (sortEl) sortEl.addEventListener('change', applyFilters);

		// Product click -> open modal (delegation)
		// REPLACED: require clicks on .product-title only (prevents image clicks from opening modal)
		document.addEventListener('click', (e) => {
			const titleEl = e.target.closest('.product-title');
			if (!titleEl) return; // only open modal when the title is clicked

			const card = titleEl.closest('.card');
			if (!card) return;
			const name = titleEl.textContent?.trim();
			if (!name) return;
			const prod = (window.__allProducts || fallbackProducts).find(p => p.name === name);
			if (!prod) return;
			openModal(prod);
		});

		function openModal(p) {
			// populate modal
			modalTitle.textContent = p.name;
			modalPrice.textContent = p.price;
			modalDesc.textContent = p.desc || '';
			modalImages.innerHTML = `<img src="${encodeURI(p.src)}" style="width:100%;height:360px;object-fit:contain;border-radius:12px;background:var(--glass)">`;
			// recommendations: same brand, exclude current
			const recos = (window.__allProducts || fallbackProducts).filter(x => x.brand === p.brand && x.id !== p.id).slice(0,4);
			modalReco.innerHTML = recos.map(r=>`<div class="card" style="width:120px;padding:8px"><img src="${encodeURI(r.src)}" style="height:90px;object-fit:contain;border-radius:8px"><div style="font-size:13px;font-weight:700;margin-top:6px">${r.name}</div><div class="small">${r.price}</div></div>`).join('');
			// wire add/buy
			modalAdd.onclick = () => { addToCart(p); updateCartCount(); };
			modalBuy.onclick = () => {
				localStorage.setItem('pendingOrder', JSON.stringify({ items:{ [p.id]: {...p, qty:1} }, total: p.price }));
				window.location.href = 'order.html';
			};
			modal.classList.add('open'); modal.setAttribute('aria-hidden','false');
		}

		modalClose.addEventListener('click', ()=> { modal.classList.remove('open'); modal.setAttribute('aria-hidden','true'); });

		// ensure global copy for search/sort
		window.__allProducts = null;
		(async () => {
			const discovered = await discoverImages();
			const all = discovered && discovered.length ? discovered : fallbackProducts;
			window.__allProducts = all;
			renderProducts(all);
			renderCart();
		})();

		// update cart count UI helper
		function updateCartCount(){
			const count = Object.values(cart).reduce((s,it)=>s+it.qty,0);
			// floating/cart-toggle counts
			document.querySelectorAll('#cart-count').forEach(n=>n.textContent = count);
			// nav cart count
			const navEl = document.getElementById('nav-cart-count');
			if (navEl) navEl.textContent = count;
		}
		// call after cart render
		const origRenderCart = renderCart;
		renderCart = function(){ origRenderCart(); updateCartCount(); };

		// expose applyFilters for immediate use
		window.applyProductFilters = applyFilters;
	})();

	// bootstrap: try discovery, else fallback
	(async () => {
		const discovered = await discoverImages();
		const products = discovered && discovered.length ? discovered : fallbackProducts;
		renderProducts(products);
		renderCart();
	})();
});