/*
  Echoes of Play — Service Worker
  Enables offline use after first visit.
  Caches only local resources. Makes zero external requests.
  © ERRERlabs 2026 · Apache 2.0
*/

var CACHE_NAME = 'echoes-v5';
var ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icon-192.png',
  '/icon-512.png',
  '/favicon.ico',
  '/apple-touch-icon.png'
];

/* Install: cache core assets */
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(ASSETS);
    })
  );
  self.skipWaiting();
});

/* Activate: clean old caches */
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(names) {
      return Promise.all(
        names.filter(function(name) {
          return name !== CACHE_NAME;
        }).map(function(name) {
          return caches.delete(name);
        })
      );
    })
  );
  self.clients.claim();
});

/* Fetch: cache-first, then network fallback */
self.addEventListener('fetch', function(event) {
  /* Only handle same-origin GET requests */
  if (event.request.method !== 'GET') return;
  if (new URL(event.request.url).origin !== location.origin) return;

  event.respondWith(
    caches.match(event.request).then(function(cached) {
      if (cached) return cached;
      return fetch(event.request).then(function(response) {
        /* Cache successful responses */
        if (response.status === 200) {
          var clone = response.clone();
          caches.open(CACHE_NAME).then(function(cache) {
            cache.put(event.request, clone);
          });
        }
        return response;
      });
    }).catch(function() {
      /* If offline and not cached, return the main page */
      return caches.match('/');
    })
  );
});
