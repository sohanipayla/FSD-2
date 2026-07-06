const mg=require("mongoose") 
mg.connect("mongodb://127.0.0.1:27017/Company2").then(()=>{console.log("success")}).catch((err)=>{console.error(err)}); 
mg.pluralize(null)
const mySchema=new mg.Schema( 
    { 
        name:String, 
        age:Number, 
        active:Boolean, 
       
    } 
);
const employee=new mg.model("employee",mySchema) 
// const createDoc=async()=> 
//     { 
//         try{ 
//         // const empdata1=new employee( 
//         //     { 
//         //         name:"shyam", 
//         //         age:23, 
//         //         active:true 
//         //     } 
//         // ) 
//         // const empdata2=new employee( 
//         //     { 
//         //         name:"mira", 
//         //         age:20, 
//         //         active:true 
//         //     } 
//         // ) 
//         //    const result= await employee.insertMany([empdata1,empdata2]) 
//         //     console.log(result) 
//         } 
//         catch(err) 
//             { 
//                 console.log(err); 
//             } 
//     } 

// 2)update age 25and active status false whee name=shyam if document is not available then insert a new document 

// const createDoc = async () => {
//     try {
//         const result = await employee.updateOne(
//             { name: "shyam" },
//             { 
//                 $set: { 
//                     age: 25, 
//                     active: false 
//                 } 
//             }, 
//             { upsert: true } 
//         );
//         console.log("Query Result:", result);
//     } 
//     catch (err) {
//         console.error(err);
//     }
// };

// createDoc();

// 3)find employee where name=mira display employee name and employee id on console
// const createDoc = async () => {
//     try{
//         const result = await employee.findOne({name:"mira"})
//         console.log(result.name)
//         console.log(result._id)

//     }
//     catch (err) {
//         console.error(err);
//     }
// }
// createDoc()

// 4)find update age 30 and name radha by using _id
// const createDoc = async () => {
//         try{
//             const result = await employee.findOne({name:"mira"})
//             const updateperson=await employee.findByIdAndUpdate(employee._id,{name:"Radha",age:10},{new:true})
//             console.log(updateperson)
//         }
//         catch (err) {
//             console.error(err);
//         }
//     }
//     createDoc()

// 5) delete person by using id 
const createDoc = async () => {
            try{
                const result = await employee.findOne({name:"mira"})
                const deleteperson=await employee.findByIdAndDelete(result._id)
                console.log(deleteperson)
            }
            catch (err) {
                console.error(err);
            }
        }
        createDoc()