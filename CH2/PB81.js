const EventEmitter = require('events');
// Create instance
const myEmitter = new EventEmitter();
// Register callbacks
myEmitter.on('greet', () => {
    console.log("Hello, welcome!");
});
myEmitter.on('bye', () => {
    console.log("Goodbye!");
});
// Emit events
myEmitter.emit('greet');
myEmitter.emit('bye');