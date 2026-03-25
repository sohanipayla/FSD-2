// create one page with two links /home and /about both pages must content html type content if user add any other url path
// it will be re directed two page with plain msg "page not found"

var http = require("http");

http.createServer(function(req, res) {
    
    if (req.url === '/home') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('<h1>Welcome to Home Page</h1><p>This is HTML content.</p>');
    } 
    
    else if (req.url === '/about') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('<h1>About Us</h1><p>We are learning Node.js!</p>');
    } 

    else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Page not found');
    }

}).listen(3550);

