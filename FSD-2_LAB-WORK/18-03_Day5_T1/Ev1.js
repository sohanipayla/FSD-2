const eventemitter=require("events");
const myevent=new eventemitter();
myevent.on('greet',()=>{
    console.log("Hello User")
})
myevent.emit('greet');