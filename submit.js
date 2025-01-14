/* submit.js - Form handling and validation */
document.addEventListener('DOMContentLoaded', () => {
    const portfolioForm = document.getElementById('portfolioForm');
    
    portfolioForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Basic form validation
        const formData = {
            artistName: document.getElementById('artistName').value,
            email: document.getElementById('email').value,
            portfolioUrl: document.getElementById('portfolioUrl').value,
            artistStatement: document.getElementById('artistStatement').value,
            artType: document.getElementById('artType').value
        };

        // Validate URL format
        try {
            new URL(formData.portfolioUrl);
        } catch (err) {
            alert('Please enter a valid URL');
            return;
        }

        // Here you would typically send the data to your backend
        // For now, we'll just show a success message
        alert('Thank you for submitting your portfolio! We will review it shortly.');
        portfolioForm.reset();
    });
});