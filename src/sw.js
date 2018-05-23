/*global google*/
var CACHE_NAME = "resturant-v1";
var urlsToCache = ["/",
    "./App.css",
    "./App.js",
    "./index.css",
    "./index.js",
    "./ListView.js",
    "./LocInfo.js",
    "./MapView.js"
];

self.addEventListener("install", function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(function(cache) {
            return cache.addAll(urlsToCache);
        })
        .catch(function() {
            console.log("cache failed to open");
        })
    );
});

self.addEventListener("fetch", function(event) {
    event.respondWith(
        caches.match(event.request)
        .then(function(response) {
            if (response) {
                return response;
            }
            return fetch(event.request);
        })
    );
});