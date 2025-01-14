/* artwork.js - Enhanced artwork interaction */
document.addEventListener('DOMContentLoaded', () => {
    const artworkCards = document.querySelectorAll('.artwork-card');
    
    artworkCards.forEach(card => {
        card.addEventListener('click', () => {
            const title = card.querySelector('.card-title').textContent;
            const artist = card.querySelector('.card-artist').textContent;
            const imgSrc = card.querySelector('img').src;
            
            showArtworkModal(title, artist, imgSrc);
        });
    });
});

function showArtworkModal(title, artist, imgSrc) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <img src="${imgSrc}" alt="${title}" style="width: 100%; max-height: 70vh; object-fit: contain;">
            <h2>${title}</h2>
            <p>${artist}</p>
        </div>
    `;
    
    document.body.appendChild(modal);
    modal.style.display = 'block';
    
    modal.querySelector('.close-modal').onclick = () => {
        modal.remove();
    };
    
    modal.onclick = (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    };
}