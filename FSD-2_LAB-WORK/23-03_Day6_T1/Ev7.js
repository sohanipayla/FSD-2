// write node js script to handle event to write data in file, append data in file , read data from file and display on console
// using ASYNCHRONOUS

const fs = require('fs');
const EventEmitter = require('events');
const fileEmitter = new EventEmitter();

// 1) EVENT: WRITE MODE 
fileEmitter.on('write', (data) => {
    fs.writeFile('async_demo.txt', data, (err) => {
        if (err) {
            fileEmitter.emit('error', err);
        } else {
            console.log('Data Succesfully Writen');
            fileEmitter.emit('read'); // Likhne ke baad Read karo
        }
    });
});
// 2. Append Event
fileEmitter.on('append', (data) => {
    fs.appendFile('async_demo.txt', data, (err) => {
        if (err) {
            fileEmitter.emit('error', err);
        } else {
            console.log('Data append ');
            fileEmitter.emit('read'); 
        }
    });
});
// 3. Read Event
fileEmitter.on('read', () => {
    fs.readFile('async_demo.txt', 'utf8', (err, data) => {
        if (err) {
            fileEmitter.emit('error', err);
        } else {
            console.log('Data Read');
            console.log(data);
        }
    });
});
// 4. Error Event 
fileEmitter.on('error', (err) => {
    console.log(' error:', err.message);
});
fileEmitter.emit('write', 'Hello World!');
setTimeout(() => {
    fileEmitter.emit('append', ' Users');
}, 2000);