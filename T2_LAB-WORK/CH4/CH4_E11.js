var express=require("express");
var app=express()

app.use(express.urlencoded({extended:true}))
app.get("/", (req, res) => {
    res.send(`
        <form action="/details" method="POST">
            Name: <input type="text" name="name" required><br><br>
            Age: <input type="number" name="age" required><br><br>
            City: <input type="text" name="city" required><br><br>
            Marks: <input type="number" name="marks" required><br><br>
            Course: <input type="text" name="course" required><br><br>
            <button type="submit">Submit Details</button>
        </form>
    `);
});
app.post("/details", (req, res) => {
    const name = req.body.name;
    const age = req.body.age;
    const city = req.body.city;
    const marks = req.body.marks;
    const course = req.body.course;

    res.send(`
        <p><b>Name:</b> ${name}</p>
        <p><b>Age:</b> ${age}</p>
        <p><b>City:</b> ${city}</p>
        <p><b>Marks:</b> ${marks}</p>
        <p><b>Course:</b> ${course}</p>
    `);
});
app.listen(6054,()=>{
    console.log("running")
})