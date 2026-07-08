//write a node js script using mongoosh to perform the following opr on courses collection
//1.insert multiple course document
//2.display the course having the highest fees 
//3.find the course named mern stack development
//4.update the fees to 15000 and duration to 5 months for the course named mern stack dev using findbyidandupdate
//5.display all online courses having fees lt 20000.
//6.display all active courses whose duartion gt 4 months but exclude that online courses that are belonged to cloud category
//7.delete the course named cloud computiog using its id

const mg = require('mongoose');
mg.connect("mongodb://127.0.0.1:27017/university")
    .then(() => {
        console.log("Success: Connected to MongoDB");
    })
    .catch((err) => {
        console.error("Connection Error:", err);
    });

mg.pluralize(null);
const courseSchema = new mg.Schema({
    courseName: String,
    instructor: String,
    duration: Number,
    fees: Number,
    mode: String,
    category: String,
    active: Boolean
});

const Course = mg.model('Course', courseSchema);
const courses = [
    { courseName: "MERN Stack Development", instructor: "Niharika Sen", duration: 6, fees: 18000, mode: "Offline", category: "Web Development", active: true },
    { courseName: "Python Programming", instructor: "Rahul Shah", duration: 4, fees: 12000, mode: "Online", category: "Programming", active: true },
    { courseName: "Data Science", instructor: "Priya Patel", duration: 8, fees: 25000, mode: "Offline", category: "Data Analytics", active: true },
    { courseName: "Machine Learning", instructor: "Amit Joshi", duration: 7, fees: 22000, mode: "Online", category: "Artificial Intelligence", active: false },
    { courseName: "Java Full Stack", instructor: "Neha Mehta", duration: 6, fees: 20000, mode: "Offline", category: "Web Development", active: true },
    { courseName: "UI/UX Design", instructor: "Karan Desai", duration: 3, fees: 10000, mode: "Online", category: "Design", active: true },
    { courseName: "Cloud Computing", instructor: "Riya Sharma", duration: 5, fees: 16000, mode: "Offline", category: "Cloud", active: false }
];

const perform=async()=>{
    try{
        const result=[];
        //insert multiple documents
        result.push(await Course.insertMany(courses))
        //display the course having higest fees
        result.push(await Course.find().sort({fees:-1}).limit(1))
        //find the course name "MERN stack Development"
        result.push(await Course.findOne({courseName:"MERN Stack Development"}))
        //UPDATE FEES    AND DUration
        const course1=await Course.findOne({courseName:"MERN Stack Development"})
        result.push(await Course.findByIdAndUpdate(course1._id,{$set:{fees:15000,duration:5}},{new:true}))
        //display all online courses having fees less then 20000
        result.push(await Course.find({ mode: "Online", fees: { $lt: 20000 } }));
        //
        result.push(await Course.find({
            $and:[
                {active:true},{duration:{$gt:4}}],
            $nor:[{mpde:"Online"},{category:"Cloud"}]
        }));
        //
        const course2=await Course.findOne({courseName:"Cloud Computing"})
        result.push(await Course.findByIdAndDelete(course2._id))
        console.log(result)
    }
    catch (err) {
        console.error(err);
}
}
perform()