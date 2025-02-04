const CACHE_NAME = 'primelive-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/styles/main.css',
  '/styles/dark-mode.css',
  '/js/app.js',
  '/js/channels.js',
  '/js/player.js',
  '/js/darkMode.js',
  '/js/search.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});