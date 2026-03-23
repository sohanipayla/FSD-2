const EventEmitter = require('events');
const myEmitter = new EventEmitter();
const list1 = (msg) => console.log('Message from list1'+msg);
const list2 = (msg) => console.log('Message from list2'+msg);
myEmitter.on('common', list1);
myEmitter.on('common', list2);
console.log(myEmitter.listenerCount('common'))
console.log(myEmitter.removeListener('common', list1));
console.log(myEmitter.listenerCount('common'))
console.log(myEmitter.removeAllListener('common'));
console.log(myEmitter.listenerCount('common'))