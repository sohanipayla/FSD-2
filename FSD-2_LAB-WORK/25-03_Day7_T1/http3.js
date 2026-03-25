var http=require("http")
http.createServer(
    function(req,res){
        res.writeHead(200,{'content-type':'application/json'})
        var myData = {
            message: "Hello",
            status: "success",
            id: 101
        };
        res.end(JSON.stringify(myData));
    }
).listen(3400)