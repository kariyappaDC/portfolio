document.addEventListener('DOMContentLoaded', () => {
    const cursorArrow = document.querySelector('.cursor-arrow');

    document.addEventListener('mousemove', (e) => {
        cursorArrow.style.left = `${e.clientX}px`;
        cursorArrow.style.top = `${e.clientY}px`;
    });

    document.querySelectorAll('a, button, input[type="submit"]').forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursorArrow.style.transform = 'scale(1.5)';
        });
        el.addEventListener('mouseleave', () => {
            cursorArrow.style.transform = 'scale(1)';
        });
    });

    // Add form submission handler
    const contactForm = document.querySelector('.contact-form');
    contactForm.addEventListener('submit', function(e) {
        // The form will still submit to Formspree
        // This function will run after the form submission
        setTimeout(() => {
            // Clear form fields
            this.reset();
        }, 100);
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
