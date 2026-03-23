// 1) Node.js Events:

// In Node.js, events are used for communication between different parts of an application. It follows an 
// event-driven architecture, where a specific action triggers an event and a listener (callback function) 
// responds to it.
// Node.js uses the EventEmitter class from the events module to handle events.

// 2)Common Event Methods:
// on() → registers an event listener
// emit() → triggers an event
// removeListener() / off() → removes an event listener

// Example:
const EventEmitter = require('events');
const myEmitter = new EventEmitter();
// on()
myEmitter.on('message', () => {
    console.log("Message event triggered");
});
// emit()
myEmitter.emit('message');
myEmitter.emit('onceEvent');
myEmitter.emit('onceEvent'); // will not run again
// removeListener()
function greet() {
    console.log("Hello!");
}
myEmitter.on('greet', greet);
myEmitter.emit('greet');
myEmitter.removeListener('greet', greet);
myEmitter.emit('greet'); // will not run