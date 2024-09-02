document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const name = form.name.value;
        const email = form.email.value;
        const message = form.message.value;

        // Simulate form submission
        alert(`Message sent!\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
        
        // Clear the form
        form.reset();
    });
});
