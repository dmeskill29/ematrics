const CACHE_NAME = 'ematrics-v1';

// Only cache in production
const isProduction = location.hostname !== 'localhost' && location.hostname !== '127.0.0.1';

const urlsToCache = [
  '/',
  '/pricing',
  '/about',
  '/contact',
  '/demo',
  '/insights',
  '/privacy',
  '/offline',
];

// Install event - cache resources (only in production)
self.addEventListener('install', (event) => {
  if (!isProduction) {
    self.skipWaiting();
    return;
  }
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Caching resources for production');
        return cache.addAll(urlsToCache);
      })
      .catch((error) => {
        console.error('Failed to cache resources:', error);
      })
  );
});

// Fetch event - serve from cache when offline (only in production)
self.addEventListener('fetch', (event) => {
  if (!isProduction) {
    return; // Let Next.js handle all requests in development
  }
  
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        return response || fetch(event.request).catch(() => {
          // If both cache and network fail, return offline page
          return caches.match('/offline');
        });
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
