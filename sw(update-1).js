self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('my-blog-cache').then(function(cache) {
      return cache.addAll([
        '/',
        'https://cdn.jsdelivr.net/npm/jquery@3.6.3/dist/jquery.min.js',
        'https://jsc.adskeeper.com/m/s/mskmangapro.blogspot.com.1422443.js',
        'https://cdn.jsdelivr.net/npm/lazysizes@5.3.2/lazysizes.min.js',
        'https://cdn.jsdelivr.net/gh/tntg123/MSKComic2023@main/allpage-mskcomic(Update-1).js'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
