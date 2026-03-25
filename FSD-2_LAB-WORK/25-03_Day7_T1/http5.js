var http = require("http");
var fs = require("fs");

http.createServer(function(req, res) {
    if (req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        // Yahan dhyan dein: Bahar backticks (`) use karein ya quotes ko manage karein
        res.end(`
            <h1>HELLO JOKER</h1>
            <img src="/download.png">
        `); 
    } 
    else if (req.url === '/download.png') {
        try {
            const img = fs.readFileSync('download.png');
            res.writeHead(200, {'Content-Type': 'image/png'});
            res.end(img);
        } catch (e) {
            res.writeHead(404);
            res.end("Image file not found!");
        }
    }
}).listen(8180);
