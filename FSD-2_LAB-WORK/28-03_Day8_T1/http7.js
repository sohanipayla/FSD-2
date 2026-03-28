//write node script to fetch values from url and display output
//data must be written in file exam.txt filename must be fetch from the url
//expected output : 
// Hello!
// Welcome to LJU FSD2 T1 test
// #Allthebest
//read the content from file and send response to server display data on "/" page
//in same format but in <h1> and in red color
//if any other page is requested it shows page not found message

process.noDeprecation=true;
url1="http://www.google.com/exam.txt?c1=Hello&c2=FSD2 T1 Test&c3=Welcome To LJU #AllTheBest";
purl=url.parse(url1,true);
console.log(purl);
c1=purl.query.c1;
c2=purl.query.c2;
c3=purl.query.c3;
hash=purl.hash;
filename="."+purl.pathname;
content=c1+"!\n"+c3+""+c2+"\n"+hash;
fs.writeFileSync(filename,content);
server=http.createServer(
    (req,res)=>
    {
        if(req.url==="/")
        {
            data=fs.readFileSync(filename,"utf-8");
            res.writeHead(200,{"content-type":"text/html"});
            res.end("<h1 style='color:red'><pre>"+data+"</pre></h1>");
        }
        else
        {
           res.writeHead(404,{"content-type":"text/plain"});
            res.end("page not found");  
        }
    }
);
server.listen(1912);