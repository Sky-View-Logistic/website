document.addEventListener('DOMContentLoaded', () => {
    // Track Order Functionality
    const trackOrderForm = document.getElementById('track-order-form');
    if (trackOrderForm) {
        trackOrderForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const orderNumber = document.getElementById('order-number').value;
            alert(`Tracking Order: ${orderNumber}`);
            // Implement order tracking logic here
        });
    }

    // Request Quote Form Functionality
    const quoteForm = document.getElementById('quote-form');
    if (quoteForm) {
        quoteForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const details = document.getElementById('details').value;
            alert(`Quote Requested by ${name} (${email}): ${details}`);
            // Implement quote request logic here
        });
    }
});
