// write a node js using the events module to simmulate a sequence of events 1) when a connection event occur print
// connection succesfully and trigger data recieved event 2) when the data recieved event occur print data recived 
// succesfully 3) finally print thanks end the end of exicution

const eventemitter = require("events");
const myevent = new eventemitter();
// 1. Connection event
myevent.on('connection', () => {
    console.log('connection successfully');
    myevent.emit('dataReceived'); 
});
// 2. Data received event
myevent.on('dataReceived', () => {
    console.log('data received successfully');
    // 3. 
    console.log('thanks');
});
myevent.emit('connection');