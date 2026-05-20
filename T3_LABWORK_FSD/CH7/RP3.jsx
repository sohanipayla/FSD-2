// create a react application using props  to pass an object from one component to another component 1) create a parent
// component RP3.jsx 2) create an object named details containing student name and university name 3) pass the detail 
// to child component RP4.jsx using props 4) in child component recieve the object using props and display student name 
// and university in browser. 
import RP4 from './RP4.jsx';

function RP3() {
  const details = {
    studentName: "Sohani",
    universityName: "L.J UNIVERSITY"
  };

  return (
    <div>
      <RP4 studentDetails={details} />
    </div>
  );
}

export default RP3;
