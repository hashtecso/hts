<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
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
>>>>>>> d0bb987d27a60792bf6027ad959d7783c7befc54
=======
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
>>>>>>> d0bb987d27a60792bf6027ad959d7783c7befc54
=======

>>>>>>> 193b65586528552d0ce04189e89ccb6d42b3fb44
