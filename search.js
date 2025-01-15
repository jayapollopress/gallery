document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    const resultsContainer = document.getElementById('search-results');
    let artistData = [];

    // Load the artist data
    fetch('artists.json')
        .then(response => response.json())
        .then(data => {
            artistData = data.artists;
        })
        .catch(error => console.error('Error loading artist data:', error));

    // Search function
    function performSearch() {
        const query = searchInput.value.toLowerCase();
        resultsContainer.innerHTML = ''; // Clear previous results
        
        if (query.length < 2) return; // Don't search for very short queries

        artistData.forEach(artist => {
            if (artist.name.toLowerCase().includes(query)) {
                const link = document.createElement('a');
                link.href = artist.portfolio_url;
                link.className = 'search-result';
                link.textContent = artist.name;
                resultsContainer.appendChild(link);
            }
        });
    }

    searchInput.addEventListener('input', performSearch);
});