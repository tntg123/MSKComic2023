const cacheName = 'my-cache';
const urlsToCache = [
  '/',
  'https://cdn.jsdelivr.net/gh/tntg123/MSKComic2023@main/quicklink-MSKComic(post).js',
  'https://cdn.jsdelivr.net/npm/jquery@3.6.3/dist/jquery.min.js'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        }
        return fetch(event.request)
          .then(function(response) {
            return caches.open(cacheName)
              .then(function(cache) {
                cache.put(event.request, response.clone());
                return response;
              });
          });
      })
  );
});

self.addEventListener('click', function(event) {
  if (event.target.tagName === 'A') {
    event.preventDefault();
    var url = event.target.href;
    caches.open(cacheName).then(function(cache) {
      cache.add(url);
    });
  }
});
