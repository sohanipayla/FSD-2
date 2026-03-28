const fs = require('fs');
const http = require('http');
const EventEmitter = require('events');
const eventEmitter = new EventEmitter();
// Task A: Create file and write data
eventEmitter.on('createFile', () => {
    fs.writeFile('abc.txt', 'Hello, this is the initial data.\n', (err) => {
        if (err) throw err;
        eventEmitter.emit('appendData');
    });
});
// Task B: Append data and print success message
eventEmitter.on('appendData', () => {
    fs.appendFile('abc.txt', 'This is the appended data.', (err) => {
        if (err) throw err;
        console.log('Data Appended Successfully');
        eventEmitter.emit('readAndServe');
    });
});
// Task C: Read content and print on HTTP web server
eventEmitter.on('readAndServe', () => {
    fs.readFile('abc.txt', 'utf8', (err, data) => {
        if (err) throw err;
        http.createServer((req, res) => {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(data);
        }).listen(3000);
        // Task D: Print final success message on console
        console.log('All operations performed successfully');
    }); 
});
eventEmitter.emit('createFile');
