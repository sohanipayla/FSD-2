// develop a web appli that simulates a college class room antisystem using middleware when a student access 
// a class route 1)log that the student enter the campus
    //2) verify whether the student has a valid id proof 
    //3) if valid allow entry and  display a welcome msg if not valid deny acces 


const express=require('express');
const app=express();

const Jessica=(req,res,next)=>{
    console.log(`${new Date().toISOString} Fucking student entered in LJ Campus`);
    next();
}

const verifyid=(req,res,next)=>{
    const id1=req.query.id==='true';
    if(id1){
        next();
    }
    else{
        res.send("Access Denied")
    }
}
app.use(Jessica);

app.get('/class',verifyid,(req,res)=>{
    const studentName = req.query.name || "Student"; 
    res.send(`Welcome  ${studentName}  to the classroom! Please take your seat.`);
})

app.listen(3000);
