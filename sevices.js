document.addEventListener('DOMContentLoaded', function() {
    // === Handle "Book Now" button clicks ===
    const bookButtons = document.querySelectorAll('.book-btn');

    bookButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Get the event name from the button's data attribute
            const eventName = this.getAttribute('data-event');

            // Pre-fill the event dropdown in the booking form
            document.getElementById('event').value = eventName;

            // Smoothly scroll to the booking section
            document.getElementById('booking').scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // === Handle booking form submission ===
    const bookingForm = document.getElementById('bookingForm');
    const bookingMessage = document.getElementById('bookingMessage');

    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent page reload on form submit

        // Gather form data
        const formData = new FormData(bookingForm);
        const bookingDetails = {
            event: formData.get('event'),
            name: formData.get('name'),
            email: formData.get('email'),
            tickets: formData.get('tickets'),
            date: new Date(formData.get('date')).toLocaleDateString(),
            notes: formData.get('notes')
        };

        // Display confirmation message with booking details
        bookingMessage.innerHTML = `
            <h3><i class="fas fa-check-circle"></i> Booking Confirmed!</h3>
            <p>Thank you, ${bookingDetails.name}!</p>
            <p>You have booked ${bookingDetails.tickets} ticket(s) for <strong>${bookingDetails.event}</strong> on ${bookingDetails.date}.</p>
            <p>A confirmation has been sent to ${bookingDetails.email}.</p>
        `;
        bookingMessage.className = 'success';
        bookingMessage.style.display = 'block';

        // Reset the form fields after submission
        bookingForm.reset();

        // Smooth scroll to the confirmation message
        bookingMessage.scrollIntoView({
            behavior: 'smooth'
        });

        // Automatically hide the message after 10 seconds
        setTimeout(() => {
            bookingMessage.style.display = 'none';
        }, 10000);
    });

    // === Set the date input's minimum value to today ===
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('date').setAttribute('min', today);
});
