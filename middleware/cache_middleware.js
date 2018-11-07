var mcache = require('memory-cache');

var cache = (duration) =>{
    return(req,resp,next)=>{
        let key = '_cust_Cache_'+req.originalUrl || req.url;
        let cacheBody = mcache.get(key);
        if(cacheBody){
            resp.send(cacheBody);
            return;
        }
        else{
            resp.sendResponse = resp.send;
            resp.send = (body)=>{
                mcache.put(key,body,duration*1000);
                resp.sendResponse(body);
            }
            next();
        }
    }
}

module.exports = cache;