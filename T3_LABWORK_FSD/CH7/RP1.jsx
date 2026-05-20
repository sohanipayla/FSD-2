// create a reacte aplication using props to display student details 1)create a parent component RP1.jsx 2)pass 
// the following data to child data RP2.jsx using props student name ,rollno and marks 3) in child component display 
// student details and increase marks by 1 and diplay updated marks   
import RP2 from './RP2.jsx';

function RP1() {
  return (
    <div>
      <h1>Student Dashboard</h1>
      <RP2 name="Arjun" roll="11" marks={20} />
      <RP2 name="Sohani" roll="12" marks={24} />
      <RP2 name="Rahul" roll="13" marks={18} />
    </div>
  )
}
 
export default RP1;
