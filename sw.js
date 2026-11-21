const CACHE = 'lamb barista-v1';
const ASSETS = [
  './',
  './index.html',
  './cong-thuc.html',
  './nguyen-lieu.html',
  './ky-thuat.html',
  './assets/style.min.css',
  './assets/app.js',
  './assets/images/old-fashioned.webp',
  './assets/images/mojito.webp',
  './assets/images/negroni.webp',
  './assets/images/margarita.webp',
  './assets/images/espresso-martini.webp',
  './assets/images/virgin-mojito.webp'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request))
  );
});
