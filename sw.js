
const cacheActual = 'UAIMobile-v4';

const recursosEstaticos = [
  'css/materialize.min.css',
  'css/estilos.css',
  'js/materialize.min.js' , 
  'icons/uai.svg',
  'icons/192.png'
];

self.addEventListener('install', function(event) 
{
  event.waitUntil
  (
    caches.open(cacheActual).then(function(cache) 
       {
        return cache.addAll(recursosEstaticos);
       })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
       // return fetch(event.request);
	      
	    try {
	      // Otherwise, get from the network
	      return  fetch(request);
	    } catch (err) {
	      // If this was a navigation, show the offline page:
	      //if (request.mode === 'navigate') {
		return caches.match('offline.html');
	      //}   
   	   }
  );
});

/*
self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});

*/
