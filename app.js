if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('ServiceWorker registered');
      })
      .catch(err => {
        console.log('ServiceWorker registration failed: ', err);
      });
  });
}

import { initializeChannels } from './channels.js';
import { initializePlayer } from './player.js';
import { setupDarkMode } from './darkMode.js';
import { setupSearch } from './search.js';

document.addEventListener('touchstart', function(){}, {passive: true});

document.addEventListener('DOMContentLoaded', () => {
  // Inicializar componentes
  initializeChannels();
  initializePlayer();
  setupDarkMode();
  setupSearch();

  // Remover splash screen después de la carga
  setTimeout(() => {
    const splashScreen = document.getElementById('splash-screen');
    splashScreen.style.display = 'none';
  }, 3000);
});