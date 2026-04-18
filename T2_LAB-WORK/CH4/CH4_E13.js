var express = require("express");
var app = express();

app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {
    res.send(`
        <h2>Employee Detail Form</h2>
        <form action="/details" method="POST">
            Name: <input type="text" name="empName" required><br><br>
            Gender: 
            <input type="radio" name="gender" value="Male"> Male
            <input type="radio" name="gender" value="Female"> Female
            <input type="radio" name="gender" value="others">Others<br><br>
            Skills: 
            <input type="checkbox" name="skills" value="Python">Python
            <input type="checkbox" name="skills" value="React">React
            <input type="checkbox" name="skills" value="Node">Node
            <input type="checkbox" name="skills" value="Express">Express<br><br>
            Department: 
            <select name="dept">
                <option value="IT">IT</option>
                <option value="HR">HR</option>
                <option value="Sales">Sales</option>
            </select><br><br>
            <button type="submit">Submit Details</button>
        </form>
    `);
});

app.post("/details", (req, res) => {
    const { empName, gender, skills, dept } = req.body;
    const skillsSelected = Array.isArray(skills) ? skills.join(", ") : (skills || "None");

    res.send(`
        <h2>Employee Summary</h2>
        <p><b>Name:</b> ${empName}</p>
        <p><b>Gender:</b> ${gender}</p>
        <p><b>Skills:</b> ${skillsSelected}</p>
        <p><b>Department:</b> ${dept}</p>
        <br>
    `);
});

app.listen(6235, () => {
    console.log("running");
});