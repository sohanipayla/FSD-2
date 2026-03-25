/* write node script to fecth values from url and display output 
url : http://www.google.com/exam.txt?c1=Hello&c2=FSD2T1Test&cs=welcometoLJU#AllTheBest
// 1.Data must be written in file exam.txt 
// File name must be fetch from url
// Output:Hello!
//        Welcome to LJU FSD2 T1 Test
//        #Allthebest
// 2. Read the content from file and send response to server and display data in "/" page in same formate but in h1 tag and in red color
// 3.If any other page is requested , it shows page not found in plain text.                                                                                                    
*/
const fs = require('fs');
const url = require('url');
const http = require('http');

const add = "http://www.google.com/exam.txt?c1=Hello&c2=FSD2T1Test&c3=welcometoLJU#AllTheBest";
const q = url.parse(add, true);

const filename = q.pathname.split('/').pop(); // Extract 'exam.txt'
const content = `${q.query.c1}!\n${q.query.c3} ${q.query.c2}\n${q.hash}`;


fs.writeFileSync(filename, content);

http.createServer((req, res) => {
    if (req.url === '/') {
        const data = fs.readFileSync(filename, 'utf-8');
        
        const htmlOutput = data.split('\n').map(line => 
            `<h1 style="color:red;">${line}</h1>`
        ).join('');

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(htmlOutput);
    } else {
        // Handle other routes
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('page not found');
    }
}).listen(3000, () => {

});
