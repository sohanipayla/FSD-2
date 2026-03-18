// create node js programs using events module 1) registering multiple event listner for different events(myevent1,
// myevent2) .2)removing a specific event listner for myevent2. 3) removing all listners associated with myevent1.
// 4) triggering event and observing which listners execute

const EventEmitter = require('events');
const myEmitter = new EventEmitter();
