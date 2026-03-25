var http=require("http")
var fs = require("fs");
http.createServer(
    function(req,res){
        res.writeHead(200,{'content-type':'text/html'})
        res.end(req.url)
    }
).listen(5120)