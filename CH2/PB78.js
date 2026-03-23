const EventEmitter = require('events');
const myEmitter = new EventEmitter();
myEmitter.on('negSide', () => {
    console.log("Sides must be positive");
});
myEmitter.on('negPerimeter', () => {
    console.log("Perimeter must be positive");
});
var checkTriangle = (a, b, c) => {
    if (a < 0 || b < 0 || c < 0) {
        myEmitter.emit('negSide');
    } else {
        let perimeter = a + b + c;
        console.log("Perimeter:", perimeter);
    }
    let p = a + b + c;
    if (p < 0) {
        myEmitter.emit('negPerimeter');
    } else {
        console.log("Perimeter is valid");
    }
}
checkTriangle(-3, 4, 5);