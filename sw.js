
const cacheActual = 'UAIMobile-v7';

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
        return fetch(event.request);
      })
  );
});


self.addEventListener("activate", function(event) {
  event.waitUntil(
    caches.keys().then(function(cachesExistentes) {
      return Promise.all(
        cachesExistentes.map(function(cacheVieja) {
          if (cacheVieja !== cacheActual) 	  
		  {		
            return caches.delete(cacheVieja);
          }
        })
      );
    })
  );
 // return self.clients.claim(); //fuerza que todos los clientes se actualicen
});
