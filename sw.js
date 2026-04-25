const CACHE_NAME = 'hts-cache-v1';
const urlsToCache = [
  './HTS.html',
  './manifest.json',
  './HTS.png'
];

// Instala el Service Worker y guarda los archivos en caché
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Intercepta las solicitudes para cargar desde el caché si no hay internet
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Devuelve el archivo del caché si existe, si no, lo busca en la red
        if (response) {
            return response;
        }
        return fetch(event.request);
      })
  );
});
