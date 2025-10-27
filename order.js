document.addEventListener('DOMContentLoaded', () => {
    try {
        // Get order data from localStorage
        const orderData = JSON.parse(localStorage.getItem('pendingOrder'));
        if (!orderData) {
            console.error('No order data found');
            return;
        }

        // Display order items
        const itemsContainer = document.getElementById('order-items');
        const totalEl = document.getElementById('order-total');

        if (itemsContainer && totalEl) {
            // Clear existing content
            itemsContainer.innerHTML = '';

            // Add each item from the order
            Object.values(orderData.items).forEach(item => {
                const div = document.createElement('div');
                div.className = 'order-item';
                div.innerHTML = `
                    <img src="${item.src}" alt="${item.name}" style="width:64px;height:64px;object-fit:contain;border-radius:8px;background:var(--glass)">
                    <div class="item-details">
                        <div style="font-weight:700">${item.name}</div>
                        <div class="small">${item.price}</div>
                    </div>
                `;
                itemsContainer.appendChild(div);
            });

            // Show total
            totalEl.textContent = orderData.total;
        }

        // Handle checkout form submission
        const form = document.getElementById('checkout-form');
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                
                // Basic validation
                const formData = {
                    name: form.querySelector('input[type="text"]').value,
                    email: form.querySelector('input[type="email"]').value,
                    phone: form.querySelector('input[type="tel"]').value,
                    address: form.querySelector('textarea').value,
                    payment: form.querySelector('input[name="payment"]:checked')?.value
                };

                if (!formData.payment) {
                    alert('Please select a payment method');
                    return;
                }

                // Clear order data and redirect
                localStorage.removeItem('pendingOrder');
                alert('Order placed successfully! Thank you for your purchase.');
                window.location.href = 'index.html';
            });
        }
    } catch (err) {
        console.error('Error processing order:', err);
    }
});