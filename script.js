document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // You can add code here to handle form submission, like sending data to a server.
        // For this basic example, we'll just display an alert.
        
        alert('Form submitted!');
        contactForm.reset(); // Clear the form
    });
});
