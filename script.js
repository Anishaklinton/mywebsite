// Simple form submission handling
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way
    alert('Form submitted successfully!');
});