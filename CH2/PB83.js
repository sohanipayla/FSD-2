const EventEmitter = require('events');
const myEmitter = new EventEmitter();
// Event: percentage
myEmitter.on('percentage', (total) => {
    let percent = (total / 125) * 100; // 5 subjects * 25 marks
    console.log("Percentage:", percent + "%");
});
// Event: calculate
myEmitter.on('calculate', () => {
    let marks = [20, 18, 22, 15, 19]; // marks out of 25

    let total = 0;
    for (let i = 0; i < marks.length; i++) {
        total += marks[i];
    }
    console.log("Total Marks:", total);
    myEmitter.emit('percentage', total);
});
myEmitter.emit('calculate');