// Simple Contact Form JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const submitBtn = document.querySelector('.submit-btn');

    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent default form submission

        // Get form data
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        // Simple validation
        if (!name || !email || !message) {
            showMessage('Please fill in all fields.', 'error');
            return;
        }

        if (!isValidEmail(email)) {
            showMessage('Please enter a valid email address.', 'error');
            return;
        }

        // Show loading state
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;

        // Simulate form submission (replace with actual form handling)
        setTimeout(function() {
            showMessage('Thank you! Your message has been sent successfully.', 'success');
            form.reset(); // Clear the form
            
            // Reset button
            submitBtn.textContent = 'Send Message';
            submitBtn.disabled = false;
        }, 2000);
    });

    // Email validation function
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Show message function
    function showMessage(text, type) {
        // Remove any existing message
        const existingMessage = document.querySelector('.form-message');
        if (existingMessage) {
            existingMessage.remove();
        }

        // Create message element
        const messageDiv = document.createElement('div');
        messageDiv.className = `form-message ${type}`;
        messageDiv.textContent = text;
        
        // Style the message
        messageDiv.style.cssText = `
            padding: 12px;
            margin: 16px 0;
            border-radius: 8px;
            text-align: center;
            font-weight: 500;
            ${type === 'success' 
                ? 'background: rgba(34, 197, 94, 0.2); color: #22c55e; border: 1px solid rgba(34, 197, 94, 0.3);' 
                : 'background: rgba(239, 68, 68, 0.2); color: #ef4444; border: 1px solid rgba(239, 68, 68, 0.3);'}
        `;

        // Insert message after the form
        form.appendChild(messageDiv);

        // Remove message after 5 seconds
        setTimeout(function() {
            if (messageDiv && messageDiv.parentNode) {
                messageDiv.remove();
            }
        }, 5000);
    }

    // Add input focus effects
    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.style.transform = 'scale(1.02)';
        });

        input.addEventListener('blur', function() {
            this.style.transform = 'scale(1)';
        });
    });
});