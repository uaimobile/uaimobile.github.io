
const cacheActual = 'UAIMobile-v8';

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


self.addEventListener('fetch', function(event) {
  event.respondWith(
    // Try the cache
    caches.match(event.request).then(function(response) {
      // Fall back to network
      return response || fetch(event.request);
    }).catch(function() {
      // If both fail, show a generic fallback:
      return caches.match('/offline.html');
      // However, in reality you'd have many different
      // fallbacks, depending on URL & headers.
      // Eg, a fallback silhouette image for avatars.
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
        
	      
	if (event.request.mode === 'navigate') {
 	 try 
	    {	   
	      	return  fetch(request);
	    } 
	    catch (err) 
	    {	    
		return caches.match('offline.html');	    	 
   	    }	  
	}
	      
	
	      
      })
  );
});

*/	  
	  

/*
try 
	    {	   
	      	return  fetch(request);
	    } 
	    catch (err) 
	    {	    
		return caches.match('offline.html');	    	 
   	    }	  

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
