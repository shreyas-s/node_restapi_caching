const express = require('express');
const app = express();
var cache = require('./middleware/cache_middleware');

app.listen('3000',()=>{
    console.log("connected to Node on server 3000");
});

app.get('/',cache(10),(req,resp)=>{
    setTimeout(()=>{
        resp.send("welcome to caching world");
    },5000); //just to simulate slow process running.
});
