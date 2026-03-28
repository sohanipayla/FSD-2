// write a node js program to load a simple html file defined as static on node js web server and print its content as
// html content

http=require("http");
fs=require("fs");
url=require("url");
process.noDeprecation=true;
addr='http://localhost:6051/demo.html';
q=url.parse(addr,true);
http.createServer(function(req,res){
    fs.readFile("."+q.pathname,
        function(err,data){
            if(err){
                res.writeHead(404,{'content-type':'text/plain'});
                res.end("Page not found");
            }
            else{
                res.writeHead(200,{'content-type':'text/html'});
                res.end(data);
            }
        }
    )
}).listen(3062);