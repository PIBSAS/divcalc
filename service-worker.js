const CACHE_NAME = 'divisor-v-cache-v1';
const URLS_TO_CACHE = [
  '/divcalc/',
  '/divcalc/index.html',
  '/divcalc/style.css',
  '/divcalc/script.js',
  '/divcalc/manifest.json',
  '/divcalc/icon-192.png',
  '/divcalc/icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(URLS_TO_CACHE))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
