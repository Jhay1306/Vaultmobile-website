// This file is intentionally left blank.
document.addEventListener('DOMContentLoaded', () => {
	// Cart Toggle
    const cartToggle = document.getElementById('cart-toggle');
    const cartSidebar = document.getElementById('cart-sidebar');
    const cartClose = document.getElementById('cart-close');

    if (cartToggle && cartSidebar && cartClose) {
        cartToggle.addEventListener('click', () => {
            cartSidebar.classList.add('open');
        });

        cartClose.addEventListener('click', () => {
            cartSidebar.classList.remove('open');
        });
    }

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});