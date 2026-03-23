const EventEmitter = require('events');
const myEmitter = new EventEmitter();
// start event
myEmitter.on('start', () => {
    console.log("Process started");
});
// process event
myEmitter.on('process', () => {
    console.log("Processing...");
});
// end event
myEmitter.on('end', () => {
    console.log("Process ended");
});
myEmitter.emit('start');
myEmitter.emit('process');
myEmitter.emit('end');