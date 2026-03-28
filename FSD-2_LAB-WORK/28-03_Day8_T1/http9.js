// write a node js program to load a simple html file on node js web server and print its content as html content
http=require("http");
fs=require("fs");
url=require("url");
process.noDeprecation=true;
http.createServer(function(req,res){
    fs.readFile('.'+(req.url==='/'?'/home.html':req.url), function(err,data){
        if(err){
            res.writeHead(404,{'content-type': 'text/plain'})
            res.end('Page not found')
        }
        else{
            res.writeHead(200,{'content-type': 'text/html'})
            res.end(data)
        }
    })
}).listen(3063)