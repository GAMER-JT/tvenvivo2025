export function setupSearch() {
  const searchInput = document.querySelector('.search-bar input');
  const channelsContainer = document.getElementById('channels-container');

  searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const channelCards = channelsContainer.querySelectorAll('.channel-card');

    channelCards.forEach(card => {
      const channelName = card.querySelector('h3').textContent.toLowerCase();
      if (channelName.includes(searchTerm)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
}