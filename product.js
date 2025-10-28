document.addEventListener('DOMContentLoaded', () => {
	// Try to auto-discover images inside the img/ folder by fetching the folder index (works if directory listing is enabled).
	// If that fails, fallbackProducts will be used — edit that array to add any missing images manually.
	const fallbackProducts = [
       
  { id: 'ip17pm', src: 'img/ip 17 pro max.png', name: 'iPhone 17 Pro Max', brand: 'Apple', price: '₱109,990', desc: 'The ultimate iPhone experience with A19 Pro chip, 6.9" ProMotion XDR display, and all-day battery life.', ram: '8 GB', storage: '256 GB / 512 GB / 1 TB' },
  { id: 'ip17p', src: 'img/ip 17 pro.png', name: 'iPhone 17 Pro', brand: 'Apple', price: '₱99,990', desc: 'Powerful A19 Pro processor, advanced triple-camera system, and aerospace-grade titanium design.', ram: '8 GB', storage: '256 GB / 512 GB / 1 TB' },
  { id: 'ip17', src: 'img/ip 17.png', name: 'iPhone 17', brand: 'Apple', price: '₱84,990', desc: 'A19 Bionic chip, vivid OLED display, and exceptional performance in a sleek, lightweight body.', ram: '6 GB', storage: '128 GB / 256 GB / 512 GB' },

  { id: 'ip16pm', src: 'img/ip 16 pro max.png', name: 'iPhone 16 Pro Max', brand: 'Apple', price: '₱94,990', desc: 'Large Super Retina XDR display, titanium build, and cinematic 4K video capabilities.', ram: '8 GB', storage: '256 GB / 512 GB / 1 TB' },
  { id: 'ip16', src: 'img/ip 16.png', name: 'iPhone 16', brand: 'Apple', price: '₱79,990', desc: 'Smooth performance powered by A18 chip with improved camera and battery efficiency.', ram: '6 GB', storage: '128 GB / 256 GB / 512 GB' },

  { id: 'ip15pm', src: 'img/ip 15 pro max.png', name: 'iPhone 15 Pro Max', brand: 'Apple', price: '₱89,990', desc: 'Titanium body, 5x optical zoom telephoto lens, and lightning-fast A17 Pro chip.', ram: '8 GB', storage: '256 GB / 512 GB / 1 TB' },
  { id: 'ip15', src: 'img/ip 15.png', name: 'iPhone 15', brand: 'Apple', price: '₱69,990', desc: 'Dynamic Island display, USB-C charging, and an upgraded dual-camera system.', ram: '6 GB', storage: '128 GB / 256 GB / 512 GB' },

  { id: 'ip14pm', src: 'img/ip 14 pro max.png', name: 'iPhone 14 Pro Max', brand: 'Apple', price: '₱79,990', desc: 'Always-On display, ProMotion technology, and the powerful A16 Bionic processor.', ram: '6 GB', storage: '128 GB / 256 GB / 512 GB / 1 TB' },
  { id: 'ip14', src: 'img/ip 14.png', name: 'iPhone 14', brand: 'Apple', price: '₱59,990', desc: 'Advanced dual-camera setup, crash detection, and vibrant OLED display.', ram: '6 GB', storage: '128 GB / 256 GB / 512 GB' },

  { id: 'ip13pm', src: 'img/ip 13 pro max.png', name: 'iPhone 13 Pro Max', brand: 'Apple', price: '₱64,990', desc: 'A15 Bionic chip, ProMotion 120Hz display, and professional-grade triple-camera system.', ram: '6 GB', storage: '128 GB / 256 GB / 512 GB / 1 TB' },
  { id: 'ip13', src: 'img/ip 13.png', name: 'iPhone 13', brand: 'Apple', price: '₱49,990', desc: 'Balanced power and efficiency with A15 Bionic and a bright Super Retina XDR display.', ram: '4 GB', storage: '128 GB / 256 GB / 512 GB' },

  { id: 'ip12pm', src: 'img/ip 12 pro max.png', name: 'iPhone 12 Pro Max', brand: 'Apple', price: '₱54,990', desc: 'Stainless steel frame, 5G capability, and LiDAR for enhanced AR experiences.', ram: '6 GB', storage: '128 GB / 256 GB / 512 GB' },
  { id: 'ip12', src: 'img/ip 12.png', name: 'iPhone 12', brand: 'Apple', price: '₱44,990', desc: 'Super Retina XDR display, A14 Bionic performance, and MagSafe wireless charging.', ram: '4 GB', storage: '64 GB / 128 GB / 256 GB' },

  { id: 'ip11', src: 'img/ip 11.png', name: 'iPhone 11', brand: 'Apple', price: '₱32,990', desc: 'Dual-camera system with Night Mode and excellent performance from the A13 Bionic chip.', ram: '4 GB', storage: '64 GB / 128 GB / 256 GB' },
  { id: 'ipair', src: 'img/ip air.png', name: 'iPhone Air', brand: 'Apple', price: '₱56,990', desc: 'Ultra-lightweight design with a vivid edge-to-edge display and long-lasting battery life.', ram: '6 GB', storage: '128 GB / 256 GB' },

  { id: 's25u', src: 'img/samsung s25 ultra.png', name: 'Samsung S25 Ultra', brand: 'Samsung', price: '₱82,990', desc: 'Experience next-gen performance with Snapdragon 8 Gen 4, 200MP quad camera, and S Pen precision.', ram: '12 GB / 16 GB', storage: '256 GB / 512 GB / 1 TB' },
  { id: 's25fe', src: 'img/samsung s25 fe.png', name: 'Samsung S25 FE', brand: 'Samsung', price: '₱49,990', desc: 'Bright AMOLED 120Hz display, pro-grade camera, and flagship performance at an affordable price.', ram: '8 GB', storage: '128 GB / 256 GB' },
  { id: 's25', src: 'img/samsung s25.png', name: 'Samsung S25', brand: 'Samsung', price: '₱62,990', desc: 'Sleek, durable design with a stunning Infinity-O display and AI-powered imaging features.', ram: '12 GB', storage: '256 GB / 512 GB' },

  { id: 's24u', src: 'img/samsung s24 ultra.png', name: 'Samsung S24 Ultra', brand: 'Samsung', price: '₱72,990', desc: 'Titanium frame, built-in S Pen, and an advanced quad camera system for professional photography.', ram: '12 GB', storage: '256 GB / 512 GB / 1 TB' },
  { id: 's24fe', src: 'img/samsung s24 fe.png', name: 'Samsung S24 FE', brand: 'Samsung', price: '₱42,990', desc: 'Vibrant 6.4" Dynamic AMOLED screen with smooth 120Hz refresh and long-lasting battery life.', ram: '8 GB', storage: '128 GB / 256 GB' },

  { id: 's23u', src: 'img/samsung s23 ultra.png', name: 'Samsung S23 Ultra', brand: 'Samsung', price: '₱58,990', desc: 'Powerful Snapdragon 8 Gen 2, precision S Pen, and immersive QHD+ display.', ram: '8 GB / 12 GB', storage: '256 GB / 512 GB / 1 TB' },
  { id: 's22u5g', src: 'img/samsung s22 ultra 5g.png', name: 'Samsung S22 Ultra 5G', brand: 'Samsung', price: '₱49,990', desc: 'Iconic Note-inspired design with 5G speed, 108MP camera, and dynamic AMOLED 2X display.', ram: '8 GB / 12 GB', storage: '128 GB / 256 GB / 512 GB' },

  { id: 'a56', src: 'img/samsung a56.png', name: 'Samsung A56', brand: 'Samsung', price: '₱28,990', desc: 'Elegant design with 50MP triple camera, Super AMOLED display, and long battery endurance.', ram: '8 GB', storage: '128 GB / 256 GB' },
  { id: 'a55', src: 'img/samsung a55.png', name: 'Samsung A55', brand: 'Samsung', price: '₱25,990', desc: 'Premium feel with 120Hz display, enhanced low-light photography, and smooth performance.', ram: '8 GB', storage: '128 GB / 256 GB' },
  { id: 'a36', src: 'img/samsung a36.png', name: 'Samsung A36', brand: 'Samsung', price: '₱19,990', desc: 'Stylish and reliable with vivid AMOLED visuals and a fast, efficient processor for daily use.', ram: '6 GB / 8 GB', storage: '128 GB' },
  { id: 'a35', src: 'img/samsung a35.png', name: 'Samsung A35', brand: 'Samsung', price: '₱17,990', desc: 'Slim build, crisp display, and all-day battery — perfect for everyday multitasking.', ram: '6 GB / 8 GB', storage: '128 GB' },

  { id: 'v60', src: 'img/vivo v60.png', name: 'Vivo V60', brand: 'Vivo', price: '₱45,990', desc: 'Flagship-class performance with a curved AMOLED display, 120Hz refresh rate, and 80W fast charging.', ram: '12 GB', storage: '256 GB / 512 GB' },

  { id: 'iqooneo10', src: 'img/vivo iqoo neo 10.png', name: 'Vivo IQOO Neo 10', brand: 'Vivo', price: '₱32,990', desc: 'Gaming powerhouse with Snapdragon 8 Gen 3, vapor cooling system, and 144Hz display.', ram: '12 GB / 16 GB', storage: '256 GB / 512 GB' },

  { id: 'iqoo15', src: 'img/vivo iqoo 15.png', name: 'Vivo IQOO 15', brand: 'Vivo', price: '₱36,990', desc: 'Flagship gaming phone featuring AMOLED panel, 5000mAh battery, and ultra-fast 120W charging.', ram: '12 GB / 16 GB', storage: '256 GB / 512 GB / 1 TB' },

  { id: 'iqoo13', src: 'img/vivo iqoo 13.png', name: 'Vivo IQOO 13', brand: 'Vivo', price: '₱29,990', desc: 'High-performance gaming device with smooth refresh rates and efficient cooling design.', ram: '12 GB', storage: '256 GB / 512 GB' },

  { id: 'iqooz10x', src: 'img/vivo iqoo z10x.png', name: 'Vivo IQOO Z10x', brand: 'Vivo', price: '₱21,990', desc: 'Stylish mid-ranger with 5G connectivity, AMOLED display, and long-lasting battery life.', ram: '8 GB / 12 GB', storage: '128 GB / 256 GB' },

  { id: 'iqooz10t', src: 'img/vivo iqoo z10 turbo+.png', name: 'Vivo IQOO Z10 Turbo+', brand: 'Vivo', price: '₱24,990', desc: 'Boosted gaming edition with advanced cooling, 120Hz screen, and ultra-smooth multitasking.', ram: '12 GB', storage: '256 GB / 512 GB' },

  { id: 'iqooz10', src: 'img/vivo iqoo z10.png', name: 'Vivo IQOO Z10', brand: 'Vivo', price: '₱20,990', desc: 'Reliable performance, bold design, and AI-powered photography in a budget-friendly package.', ram: '8 GB', storage: '128 GB / 256 GB' },

  { id: 't40p', src: 'img/vivo t40 pro.png', name: 'Vivo T40 Pro', brand: 'Vivo', price: '₱27,990', desc: 'Balanced power and style with a bright AMOLED display, smooth UI, and 66W fast charging.', ram: '8 GB / 12 GB', storage: '128 GB / 256 GB' },

  { id: 'x300p', src: 'img/vivo x300 pro.png', name: 'Vivo X300 Pro', brand: 'Vivo', price: '₱59,990', desc: 'Professional-grade camera system with Zeiss optics, flagship chipset, and premium build.', ram: '12 GB / 16 GB', storage: '256 GB / 512 GB / 1 TB' },

  { id: 'x300', src: 'img/vivo x300.png', name: 'Vivo X300', brand: 'Vivo', price: '₱49,990', desc: 'Elegant design, cinematic AMOLED display, and powerful imaging powered by Zeiss technology.', ram: '12 GB', storage: '256 GB / 512 GB' },

  { id: 'x200p', src: 'img/vivo x200 pro.png', name: 'Vivo X200 Pro', brand: 'Vivo', price: '₱47,990', desc: 'High-end photography phone with Zeiss lenses, vivid display, and ultra-fast charging.', ram: '12 GB / 16 GB', storage: '256 GB / 512 GB' },

  { id: 'x200fe', src: 'img/vivo x200 fe.png', name: 'Vivo X200 FE', brand: 'Vivo', price: '₱39,990', desc: 'Fan Edition model offering flagship experience at a lower price with stunning visuals and performance.', ram: '8 GB / 12 GB', storage: '256 GB' },

  { id: 'y400', src: 'img/vivo y400.png', name: 'Vivo Y400', brand: 'Vivo', price: '₱17,990', desc: 'Stylish midrange phone with long battery life, sharp display, and enhanced night photography.', ram: '8 GB', storage: '128 GB / 256 GB' },

  { id: 'y31', src: 'img/vivo y31.png', name: 'Vivo Y31', brand: 'Vivo', price: '₱11,990', desc: 'Affordable and sleek with reliable performance and AI-enhanced dual cameras.', ram: '6 GB / 8 GB', storage: '128 GB' },

  { id: 'y29', src: 'img/vivo y29.png', name: 'Vivo Y29', brand: 'Vivo', price: '₱9,990', desc: 'Compact design, efficient performance, and a bright HD+ screen perfect for everyday tasks.', ram: '6 GB', storage: '128 GB' },

  { id: 'y20', src: 'img/vivo y20.png', name: 'Vivo Y20', brand: 'Vivo', price: '₱7,990', desc: 'Budget-friendly phone with long-lasting 5000mAh battery and clear AI camera system.', ram: '4 GB / 6 GB', storage: '64 GB / 128 GB' },

		
  { id: 'k90pm', src: 'img/Xiaomiredmik90promax.png', name: 'Xiaomi Redmi K90 Pro Max', brand: 'Xiaomi', price: '₱39,990', desc: 'Flagship-level performance with Snapdragon 8 Gen 3, 144Hz OLED display, and 120W fast charging.', ram: '12 GB / 16 GB', storage: '256 GB / 512 GB' },

  { id: 'rk80u', src: 'img/Xiaomi k80 Ultra.png', name: 'Xiaomi Redmi K80 Ultra', brand: 'Xiaomi', price: '₱36,990', desc: 'High-performance smartphone featuring Dimensity 9300 chipset, 1.5K AMOLED display, and robust battery life.', ram: '12 GB / 16 GB', storage: '256 GB / 512 GB' },

  { id: '17pm', src: 'img/Xiaomi17promax.png', name: 'Xiaomi 17 Pro Max', brand: 'Xiaomi', price: '₱42,990', desc: 'Premium craftsmanship with Leica camera tuning, Snapdragon 8 Gen 3 power, and 2K AMOLED screen.', ram: '12 GB / 16 GB', storage: '256 GB / 512 GB / 1 TB' },

  { id: '15u', src: 'img/Xiaomi 15 ultra.png', name: 'Xiaomi 15 Ultra', brand: 'Xiaomi', price: '₱37,990', desc: 'Professional-grade photography powered by Leica optics, Snapdragon 8 Gen 2, and 90W fast charging.', ram: '12 GB / 16 GB', storage: '256 GB / 512 GB' },

  { id: '15tp', src: 'img/Xiaomi15tpro.png', name: 'Xiaomi 15T Pro', brand: 'Xiaomi', price: '₱35,990', desc: 'Stylish and powerful with AMOLED display, flagship camera setup, and efficient Snapdragon 8+ Gen 1 chip.', ram: '8 GB / 12 GB', storage: '256 GB / 512 GB' },

  { id: 'r154g', src: 'img/Xiaomi redmi 15 4g.png', name: 'Xiaomi Redmi 15 4G', brand: 'Xiaomi', price: '₱10,990', desc: 'Affordable smartphone with large display, solid performance, and long-lasting 5000mAh battery.', ram: '6 GB / 8 GB', storage: '128 GB' },

  { id: 'r15c', src: 'img/Xiaomi redmi15c.png', name: 'Xiaomi Redmi 15C', brand: 'Xiaomi', price: '₱8,990', desc: 'Entry-level phone with efficient processor, HD+ screen, and dependable all-day battery life.', ram: '4 GB / 6 GB', storage: '64 GB / 128 GB' },

  { id: 'r13x', src: 'img/Xiaomi redmi 13x.png', name: 'Xiaomi Redmi 13X', brand: 'Xiaomi', price: '₱11,990', desc: 'Sleek budget phone with 90Hz AMOLED display and dual-camera setup for sharp everyday shots.', ram: '6 GB / 8 GB', storage: '128 GB / 256 GB' },

  { id: 'rn15p+', src: 'img/Xiaomi redmi note 15 pro+.png', name: 'Xiaomi Redmi Note 15 Pro+', brand: 'Xiaomi', price: '₱19,990', desc: 'Impressive midrange phone with 200MP camera, Dimensity processor, and 120Hz AMOLED screen.', ram: '8 GB / 12 GB', storage: '256 GB / 512 GB' },

  { id: 'rn15p', src: 'img/Xiaomi redmi note 15 pro.png', name: 'Xiaomi Redmi Note 15 Pro', brand: 'Xiaomi', price: '₱17,990', desc: 'Smooth performance with 120Hz display, 67W charging, and AI-enhanced photography.', ram: '8 GB / 12 GB', storage: '128 GB / 256 GB' },

  { id: 'rn15', src: 'img/Xiaomi redmi note 15.png', name: 'Xiaomi Redmi Note 15', brand: 'Xiaomi', price: '₱14,990', desc: 'Stylish midrange with crisp AMOLED screen, long battery life, and capable dual-camera setup.', ram: '6 GB / 8 GB', storage: '128 GB / 256 GB' },

  { id: 'pm74g', src: 'img/Xiaomi poco m7 4g.png', name: 'Xiaomi Poco M7 4G', brand: 'Xiaomi', price: '₱9,990', desc: 'Budget beast with 90Hz FHD+ display, large battery, and reliable MediaTek processor.', ram: '6 GB', storage: '128 GB' },

  { id: 'pm7', src: 'img/Xiaomi poco m7.png', name: 'Xiaomi Poco M7', brand: 'Xiaomi', price: '₱10,990', desc: 'Affordable 5G smartphone with fast display, smooth performance, and long-lasting battery.', ram: '6 GB / 8 GB', storage: '128 GB / 256 GB' },

  { id: 'pf7', src: 'img/Xiaomi poco f7.png', name: 'Xiaomi Poco F7', brand: 'Xiaomi', price: '₱19,990', desc: 'High-performance gaming-focused phone with AMOLED 120Hz screen and Snapdragon 8+ Gen 1.', ram: '8 GB / 12 GB', storage: '256 GB / 512 GB' },

  { id: 'pc854g', src: 'img/Xiaomi poco c85 4g.png', name: 'Xiaomi Poco C85 4G', brand: 'Xiaomi', price: '₱7,990', desc: 'Compact and efficient entry-level phone with great battery life and reliable performance.', ram: '4 GB / 6 GB', storage: '64 GB / 128 GB' },

  { id: 'mf2', src: 'img/Xiaomi mix flip2.png', name: 'Xiaomi Mix Flip 2', brand: 'Xiaomi', price: '₱54,990', desc: 'Elegant foldable with AMOLED inner and cover displays, Snapdragon 8 Gen 3, and premium build.', ram: '12 GB / 16 GB', storage: '512 GB / 1 TB' },

  { id: 'c5p', src: 'img/Xiaomi civi5 pro.png', name: 'Xiaomi Civi 5 Pro', brand: 'Xiaomi', price: '₱32,990', desc: 'Slim and stylish phone with flagship camera system, Snapdragon 8s Gen 3, and curved OLED screen.', ram: '12 GB', storage: '256 GB / 512 GB' },

		
  { id: 'z80u', src: 'img/zte nubia z80 ultra.png', name: 'ZTE Nubia Z80 Ultra', brand: 'ZTE', price: '₱49,990', desc: 'Flagship device featuring Snapdragon 8 Gen 3, AMOLED 120Hz display, and pro-grade triple camera system.', ram: '12 GB / 16 GB', storage: '256 GB / 512 GB / 1 TB' },

  { id: 'z70u', src: 'img/zte nubia z70 ultra.png', name: 'ZTE Nubia Z70 Ultra', brand: 'ZTE', price: '₱44,990', desc: 'Premium design with under-display camera, ultra-clear AMOLED screen, and long-lasting 6000mAh battery.', ram: '12 GB / 16 GB', storage: '256 GB / 512 GB' },

  { id: 'z60u', src: 'img/zte nubia z60 ultra.png', name: 'ZTE Nubia Z60 Ultra', brand: 'ZTE', price: '₱38,990', desc: 'True full-screen experience with flagship Snapdragon chip, triple camera setup, and 80W fast charging.', ram: '8 GB / 12 GB', storage: '256 GB / 512 GB' },

  { id: 'r11p+', src: 'img/zte nubia redmagic 11 pro+.png', name: 'ZTE Nubia RedMagic 11 Pro+', brand: 'ZTE', price: '₱52,990', desc: 'Ultimate gaming performance powered by Snapdragon 8 Gen 3, 165Hz AMOLED display, and advanced cooling system.', ram: '16 GB / 24 GB', storage: '512 GB / 1 TB' },

  { id: 'r11p', src: 'img/zte nubia redmagic 11 pro.png', name: 'ZTE Nubia RedMagic 11 Pro', brand: 'ZTE', price: '₱46,990', desc: 'High-end gaming phone with AMOLED 120Hz display, Snapdragon 8 Gen 3, and shoulder trigger controls.', ram: '12 GB / 16 GB', storage: '256 GB / 512 GB' },

  { id: 'r10p', src: 'img/zte nubia redmagic 10 pro.png', name: 'ZTE Nubia RedMagic 10 Pro', brand: 'ZTE', price: '₱39,990', desc: 'Elite gaming experience with Snapdragon 8 Gen 2, 165Hz screen, and RGB cooling fan system.', ram: '12 GB / 16 GB', storage: '256 GB / 512 GB' },

  { id: 'r10a', src: 'img/zte nubia redmagic 10 air.png', name: 'ZTE Nubia RedMagic 10 Air', brand: 'ZTE', price: '₱36,990', desc: 'Streamlined gaming phone with 144Hz AMOLED, active cooling, and long battery life.', ram: '12 GB', storage: '256 GB / 512 GB' },

  { id: 'r9p', src: 'img/zte nubia redmagic 9 pro.png', name: 'ZTE Nubia RedMagic 9 Pro', brand: 'ZTE', price: '₱33,990', desc: 'Smooth gameplay with Snapdragon 8 Gen 2, AMOLED 120Hz panel, and ICE 13.0 cooling system.', ram: '12 GB / 16 GB', storage: '256 GB / 512 GB' },

  { id: 'ra', src: 'img/zte nubia redmagic astra.png', name: 'ZTE Nubia RedMagic Astra', brand: 'ZTE', price: '₱27,990', desc: 'Midrange gaming smartphone with RGB lighting, smooth display, and immersive sound system.', ram: '12 GB', storage: '256 GB' },

  { id: 'n3g', src: 'img/zte nubia neo 3 gt.png', name: 'ZTE Nubia Neo 3 GT', brand: 'ZTE', price: '₱22,990', desc: 'Stylish gaming-inspired design with Dimensity chipset, 120Hz LCD screen, and large 5500mAh battery.', ram: '8 GB / 12 GB', storage: '128 GB / 256 GB' },

  { id: 'n2', src: 'img/zte nubia neo 2.png', name: 'ZTE Nubia Neo 2', brand: 'ZTE', price: '₱18,990', desc: 'Affordable gaming phone with smooth 120Hz display, long-lasting battery, and bold futuristic design.', ram: '8 GB', storage: '128 GB / 256 GB' },

  { id: 'na', src: 'img/zte nubia air.png', name: 'ZTE Nubia Air', brand: 'ZTE', price: '₱15,990', desc: 'Lightweight and efficient smartphone with sleek design, AMOLED display, and fast charging support.', ram: '8 GB', storage: '128 GB' },
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
