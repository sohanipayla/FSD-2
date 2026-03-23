const EventEmitter = require('events');
const myEmitter = new EventEmitter();
// welcome event
myEmitter.on('welcome', () => {
    console.log("Welcome to Node.js");
});
// time event
myEmitter.on('time', () => {
    let currentTime = new Date();
    console.log("Current Time:", currentTime.toLocaleTimeString());
});
// bye event
myEmitter.on('bye', () => {
    console.log("Goodbye!");
});
myEmitter.emit('welcome');
myEmitter.emit('time');
myEmitter.emit('bye');