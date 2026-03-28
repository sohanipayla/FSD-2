// create http webpage on which home page display welcome to login page in blue color and font size must be 32 px
// login pagr shows 1 html file from static url having from with detgail username,password and submit button and reset button
// gallery page reflect 1 image hello.png and any other page shows page not found 
var http = require("http"); 
var fs = require("fs"); 
var server = http.createServer(function (req, res) { 
    // Home Page 
    if (req.url == "/") { 
        res.writeHead(200, { "Content-Type": "text/html" }); 
        res.write("<h1 style='color:blue;font-size:32px;'>Welcome to Log in page</h1>"); 
        res.end(); 
    } 
    // Login Page 
    else if (req.url == "/login") { 
        fs.readFile("logi.html", function (err, data) { 
            if (err) { 
                res.writeHead(500); 
                return res.end("Error loading file"); 
            } 
            res.writeHead(200, { "Content-Type": "text/html" }); 
            res.write(data); 
            res.end(); 
        }); 
    } 
    // Gallery Page 
    else if (req.url == "/gallery") { 
        fs.readFile("logo192.png", function (err, data) { 
            if (err) { 
                res.writeHead(500); 
                return res.end("Error loading image"); 
            } 
            res.writeHead(200, { "Content-Type": "image/jpeg" }); 
            res.end(data); 
        }); 
    } 
    // Page Not Found 
    else { 
        res.writeHead(404, { "Content-Type": "text/plain" }); 
        res.end("Page Not Found"); 
    } 
}).listen(3365)