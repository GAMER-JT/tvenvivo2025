export function setupDarkMode() {
  const darkModeToggle = document.getElementById('dark-mode-toggle');
  const body = document.body;
  
  // Verificar preferencia guardada
  const isDarkMode = localStorage.getItem('darkMode') === 'true';
  if (isDarkMode) {
    body.classList.add('dark-mode');
  }

  darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', body.classList.contains('dark-mode'));
  });
}