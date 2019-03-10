

//Guardar cache dinamico
function actualizaCacheDinamico(dynamicCache, req, res){
     if(res.ok){
         caches.open(dymanicCache).then(cache=>{
             cache.put(req, res.clone());
         })
     }
}