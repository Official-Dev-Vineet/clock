const assets = [
  "/",
  "/index.html",
  "/style.css",
  "/app.js",
  "/sw.js",
  "clock.png",
  "manifest.json"
];
const v1 = "static-code";
self.addEventListener("install", (e) => {
  console.log("install", e);
  e.waitUntil(
    caches.open(v1).then((cache) => {
      cache.addAll(assets);
    })
  );
});
self.addEventListener("activate", (e) => {
  console.log("activate");
});
self.addEventListener("fetch", (e) => {
  console.log("fetch");
  e.respondWith(
    caches.match(e.request).then((res) => {
      return res || fetch(e.request);
    })
  );
});
