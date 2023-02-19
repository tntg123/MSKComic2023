// Lấy danh sách các phần tử <a> trong phần tử có ID là "inner_nPL_id"
const links = document.querySelectorAll('#inner_nPL_id a');

// Tạo một mảng để chứa các liên kết
const urlsToCache = [];

// Lặp qua danh sách các phần tử <a> và lấy các liên kết
for (let i = 0; i < links.length; i++) {
  const link = links[i].href;
  urlsToCache.push(link);
}

// Gửi danh sách các liên kết đến Service Worker để lưu vào bộ nhớ đệm
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.ready.then(registration => {
    registration.active.postMessage({
      type: 'cacheLinks',
      urls: urlsToCache
    });
  });
}
