// create react component that contains an array of Student objects with i,name, and  standard perform the following task
// using filter and map. 1) display only students whos standard is 5. 2)incerease that standard by 1. 3) display 
// student name and updated standard .
function MF1() {
    // Array of Student objects
    const students = [
      { id: 1, name: "Sohani", standard: 4 },
      { id: 2, name: "Rahul", standard: 6 },
      { id: 3, name: "Anjali", standard: 5 },
      { id: 4, name: "Aman", standard: 4 }
    ];
  
    return (
      <div>
        <h1>Student Details</h1>
          {students
            // 1. Filter: Selects only standard 5
            .filter(student => student.standard == 5)
            
            // 2 & 3. Map: Increases standard and displays it
            .map(student => (
                
                <div key={student.id}>
                    <h2> Student name: {student.name.toUpperCase()} </h2>
                    <h2> Updated Standard: {student.standard + 1} </h2>
                </div>
            ))
          }
      </div>
    );
}
  
export default MF1;
