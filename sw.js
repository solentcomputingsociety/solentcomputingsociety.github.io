const version = "0.0.2";
const cacheName = "offline";
var updateCache = async function() {
	await caches.open('offline').then(async function(cache) {
		await cache.delete("/app/offline.html");
	})
	return caches.open(cacheName).then(function (cache) {
		return cache.addAll(["/app/offline.html"]);
	});
};

self.addEventListener("install", function (event) {
	event.waitUntil(updateCache());
});

var doesRequestAcceptHtml = function (request) {
	return request.headers.get("Accept").split(",").some(function (type) { return type === "text/html"; });
};

self.addEventListener("fetch", function (event) {
	var request = event.request;
	if (doesRequestAcceptHtml(request)) {
		event.respondWith(fetch(request).catch(function() {
			return caches.match("/app/offline.html");
		}));
	} else {
		event.respondWith(caches.match(request).then(function (response) {
			return response || fetch(request);
		}));
	}
});
