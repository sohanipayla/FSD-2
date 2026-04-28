const express = require("express");
const app = express();

// Serve index.html as default static file
app.use(express.static(__dirname, { index: 'PB159.html' }));

// GET - Show Result
app.get("/result", (req, res) => {
    const username = req.query.username;
    const country  = req.query.country;

    res.send(`
        <h2>Username : ${username}</h2>
        <h2>You are from "${country}"</h2>
        <br>
        <a href="/"><button>Go Back</button></a>
    `);
});

app.listen(3000, () => console.log("Running on http://localhost:3000"));