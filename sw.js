// ===== LulusYuk - sw.js =====
// Naikkin angka versi ini SETIAP KALI kamu update file2 di ASSETS,
// biar cache lama otomatis dibuang dan gak nyangkut kayak kasus kemarin.
const CACHE_NAME = 'lulusyuk-cache-v2';

const ASSETS = [
  './',
  './index.html',
  './login.html',
  './signup.html',
  './target.html',
  './dashboard.html',
  './style.css',
  './script.js',
  './logo.svg',
  './manifest.json'
];

// Install: simpan file-file utama ke cache
self.addEventListener('install', (event) => {
  self.skipWaiting(); // langsung aktif, gak nunggu tab lama ditutup
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// Activate: buang cache versi lama
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

// Fetch: NETWORK-FIRST -> coba internet dulu, kalau gagal (offline) baru pakai cache
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        const responseClone = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseClone));
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});