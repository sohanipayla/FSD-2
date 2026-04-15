// develop a web app that simulates a college classroom entry system using middleware when a student access the class routes 
// i) Log that the student entered the campus
// ii) Verify wheather the student have a valid id proof 
// iii) If valid, allow entry and display a welcome message. If not valid deny access

const express = require("express")
const app = express()
const entryLog = (req,res,next)=>{
    console.log("Student Entered in Campus")
    next()
}
hasid=true
const checkId = (req,res,next)=>{
    if (hasid == true){
	req.student="Siya";
        console.log("ID verified");
    }
    else{
        console.log("Not a valid id");
    }
    next()
}

app.use("/user",entryLog,checkId)
app.get("/user",(req,res)=>{
    res.send(`Welcome ${req.student} to class`)
})
app.listen(2000,()=>{
    console.log("Running");
    
})
