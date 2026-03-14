// create json object which contains array of object calculate perimeter of square and perimeter of circle by using side 
// value and diameter respectively write obj as well as peri values in shape.txt
 var fs = require('fs');
 const data = {
    shapes: [
        { type: "square", side: 10 },
        { type: "circle", diameter: 14 }
    ]
};
data.shapes.forEach(s => {
    s.perimeter = s.type === "square" ? 4 * s.side : +(Math.PI * s.diameter).toFixed(3);
  });  
fs.writeFileSync('shape.txt', JSON.stringify(data));
console.log("Calculated and saved to shape.txt:", data);
