const CACHE_NAME = 'cacheapp';
const URLS_TO_CACHE = [
    '/index.html',
    '/comment-ca-marche.html',
    '/ou-utiliser.html',
    '/app.js',
    '/assets/favicon.png'
];

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