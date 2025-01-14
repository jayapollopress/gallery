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

        alert('Thank you for submitting your portfolio! We will review it shortly.');
        portfolioForm.reset();
    });
});