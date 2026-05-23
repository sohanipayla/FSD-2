// build a react app that display a list of students 1) create a StudentCard component to show product to details of student 
// like roll no, name , marks and image of an id-card finally display a student details heaving 25 marks using filter method
// 2) use StudenLisy component to store details of the student.


import StudentCard from './StudentCard'
import img1 from './assets/stu1.jpg'
import img2 from './assets/stu2.jpg'
import img3 from './assets/stu3.jpg'

function StudentList() {
  const students = [
    { rollNo: 1, name: "Rahul", marks: 25, image: img1 },
    { rollNo: 2, name: "Priya", marks: 40, image: img2 },
    { rollNo: 3, name: "Amit", marks: 25, image: img3 }
  ]

  const filteredStudents = students.filter( (stu) => stu.marks == 25 )

  return (
    <div>
      <h2>All Students</h2>
      <div>
        {students.map((stu) => {
          return (
            <StudentCard 
              rollNo={stu.rollNo} 
              name={stu.name} 
              marks={stu.marks} 
              image={stu.image} 
            />
          )
        })}
      </div>


  
      <h2>Students with 25 Marks</h2>
      <div>
        {filteredStudents.map((stu) => {
          return (
            <StudentCard 
              rollNo={stu.rollNo} 
              name={stu.name} 
              marks={stu.marks} 
              image={stu.image} 
            />
          )
        })}
      </div>
    </div>
  )
}

export default StudentList
