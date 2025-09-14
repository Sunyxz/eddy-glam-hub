// Simple Booking Form Confirmation
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('bookingForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            document.getElementById('confirmation').textContent = 
                "Thank you! Your appointment has been received.";
            form.reset();
        });
    }
});
