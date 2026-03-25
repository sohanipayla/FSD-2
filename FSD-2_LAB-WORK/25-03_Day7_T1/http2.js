var http=require("http")
http.createServer(
    function(req,res){
        res.writeHead(200,{'content-type':'text/plain'})
        res.write('<h1>Hello</h1>');
        res.end()
    }
).listen(3300)