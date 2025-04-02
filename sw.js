const CACHE_NAME = 'mon-cache-v1';
const URLS_TO_CACHE = [
    '/',
    '/index.html',
    '/style.css',
    '/app.js',
    '/icon-192x192.png',
    '/icon-512x512.png'
];

// Installer le service worker et mettre en cache les ressources
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('Mise en cache des fichiers');
            return cache.addAll(URLS_TO_CACHE);
        })
    );
});

// Intercepter les requêtes et servir les fichiers depuis le cache
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});

// Mettre à jour le cache si une nouvelle version est disponible
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cache) => {
                    if (cache !== CACHE_NAME) {
                        console.log('Suppression de l’ancien cache:', cache);
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
});