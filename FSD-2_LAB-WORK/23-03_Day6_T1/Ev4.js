// create node js programs using events module 1) registering multiple event listner for different events(myevent1,
// myevent2) .2)removing a specific event listner for myevent2. 3) removing all listners associated with myevent1.
// 4) triggering event and observing which listners execute

const EventEmitter = require('events');
const myEmitter = new EventEmitter();
var fun1=(msg)=>{
    console.log('Message from fun1'+msg);
}
var fun2=(msg)=>{
    console.log('Message from fun2'+msg);
}
myEmitter.on('myevent1',fun1);
myEmitter.on('myevent1',fun2);
myEmitter.on('myevent2',fun1);
myEmitter.on('myevent2',fun2);
myEmitter.removeListener('myevent2', fun2);
myEmitter.removeAllListeners('myevent1');
myEmitter.emit('myevent1', "LJ");
myEmitter.emit('myevent2', " D3");
