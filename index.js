// This file is intentionally left blank.
document.addEventListener('DOMContentLoaded', () => {
	// Cart Toggle
	const cartToggle = document.getElementById('cart-toggle');
	const cartSidebar = document.getElementById('cart-sidebar');
	const cartClose = document.getElementById('cart-close');
	const navCart = document.getElementById('nav-cart');

	function openCart(){ if (cartSidebar) { cartSidebar.classList.add('open'); cartSidebar.setAttribute('aria-hidden','false'); } }
	function closeCart(){ if (cartSidebar) { cartSidebar.classList.remove('open'); cartSidebar.setAttribute('aria-hidden','true'); } }

	if (cartToggle) cartToggle.addEventListener('click', () => { if (cartSidebar && cartSidebar.classList.contains('open')) closeCart(); else openCart(); });
	if (navCart) navCart.addEventListener('click', openCart);
	if (cartClose) cartClose.addEventListener('click', closeCart);

	// Smooth Scroll (replaced with more robust handler)
	document.querySelectorAll('a[href*="#"]').forEach(anchor => {
		anchor.addEventListener('click', function (e) {
			const href = this.getAttribute('href');
			if (!href) return;

			try {
				// Determine the hash target only when it points to this page
				let targetHash = null;
				if (href.startsWith('#')) {
					targetHash = href;
				} else {
					const url = new URL(href, location.href);
					// Only intercept if the link points to the same pathname (same page)
					if (url.pathname === location.pathname && url.hash) {
						targetHash = url.hash;
					}
				}

				if (!targetHash) return; // allow default navigation for other links

				const target = document.querySelector(targetHash);
				if (!target) return; // no element -> allow default

				e.preventDefault();
				target.scrollIntoView({ behavior: 'smooth', block: 'start' });

				// update focus for accessibility
				target.setAttribute('tabindex', '-1');
				target.focus({ preventScroll: true });
				// Clean up tabindex after a short delay
				setTimeout(()=> target.removeAttribute('tabindex'), 1000);
			} catch (err) {
				// if URL parsing fails, do nothing and allow default navigation
				return;
			}
		});
	});

	// reveal on scroll using IntersectionObserver (fixed: options passed to constructor)
	const reveals = document.querySelectorAll('.reveal');
	if ('IntersectionObserver' in window && reveals.length) {
		const io = new IntersectionObserver((entries, observer) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					entry.target.classList.add('is-visible');
					observer.unobserve(entry.target);
				}
			});
		}, { threshold: 0.15 });
		reveals.forEach(r => io.observe(r));
	} else {
		reveals.forEach(r => r.classList.add('is-visible'));
	}

	// Basic contact form handler
	const contactForm = document.getElementById('contact-form');
	if (contactForm) {
		contactForm.addEventListener('submit', (ev) => {
			ev.preventDefault();
			const name = document.getElementById('contact-name').value.trim();
			const email = document.getElementById('contact-email').value.trim();
			const msg = document.getElementById('contact-message').value.trim();
			if (!name || !email || !msg) { alert('Please complete all fields.'); return; }
			alert('Thanks — your message has been sent. We will reply soon.');
			contactForm.reset();
		});
	}

	// Theme toggle: ensure button icon reflects current state and persist choice
	const themeToggle = document.getElementById('theme-toggle');
	function setTheme(mode){
		if (mode === 'dark') document.body.classList.add('dark');
		else document.body.classList.remove('dark');
		if (themeToggle) themeToggle.textContent = document.body.classList.contains('dark') ? '🌙' : '🌗';
	}
	// initialize
	const saved = localStorage.getItem('theme') || 'light';
	setTheme(saved);
	if (themeToggle) {
		themeToggle.addEventListener('click', () => {
			const isDark = document.body.classList.toggle('dark');
			localStorage.setItem('theme', isDark ? 'dark' : 'light');
			themeToggle.textContent = isDark ? '🌙' : '🌗';
		});
	}
});