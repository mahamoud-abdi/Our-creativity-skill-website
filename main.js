// JavaScript for contact form submission handling
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for contacting us! We will get back to you soon.');
        form.reset();
    });
});
