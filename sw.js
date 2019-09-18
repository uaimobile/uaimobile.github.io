
const cacheActual = 'UAIMobile-v5';

const recursosEstaticos = [
  'css/materialize.min.css',
  'css/estilos.css',
  'js/materialize.min.js' , 
  'icons/uai.svg',
  'icons/192.png',
   'offline.html'
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
        
	try 
	    {	   
	      	return  fetch(request);
	    } 
	    catch (err) 
	    {	    
		return caches.match('offline.html');	    	 
   	    }	  
	      
      })
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
