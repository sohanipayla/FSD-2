// write node js script  to handle events 
// 1) check the radius is negative or not if negative then display radius must be positive
// 2) check side is negative or not negative then display radius must be positive
// dono keh else part me peremeter 
//  findval(r,s)
//  nradius->msg  , nside->msg

const EventEmitter = require('events');
const myEmitter = new EventEmitter();

myEmitter.on('nradius', (msg) => {
    console.log("Radius must be positive");
});
myEmitter.on('nside', () => {
    console.log("Side must be positive");
});

var findval=(r,s)=>{
    if(r<0){
        myEmitter.emit('nradius');
    }
    else{
        let cperi = 2 * 3.14* r;
        console.log(cperi)
    }
    if (s < 0) {
        myEmitter.emit('nside');
    } else {
        let speri = 4 * s;
        console.log(speri)
    }
}
findval(-5, 10);
findval(5, -10);