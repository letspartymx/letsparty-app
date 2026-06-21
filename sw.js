const CACHE = "letsparty-v2";
const ARCHIVOS = [
  "/letsparty-app/index.html",
  "/letsparty-app/dashboard.html",
  "/letsparty-app/eventos.html",
  "/letsparty-app/styles.css"
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(ARCHIVOS))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (e) => {
  // Solo cachear peticiones GET
  if (e.request.method !== "GET") return;

  e.respondWith(
    fetch(e.request)
      .then(res => {
        const copia = res.clone();
        caches.open(CACHE).then(cache => cache.put(e.request, copia));
        return res;
      })
      .catch(() => caches.match(e.request))
  );
});
