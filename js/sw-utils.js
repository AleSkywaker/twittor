

//Guardar cache dinamico
function actualizaCacheDinamico(dynamicCache, req, res){
     if(res.ok){
         return caches.open(dymanicCache).then(cache=>{
             cache.put(req, res.clone());
             return res.clone();
         })
     }else{
         return res;
     }
}