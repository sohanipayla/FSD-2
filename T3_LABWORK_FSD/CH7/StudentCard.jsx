
function StudentCard(props) {
  return (
    <div>
      <img src={props.image} alt="id-card" style={{ width: "100px", height: "100px" }} />
      <h3>Name: {props.name}</h3>
      <p>Roll No: {props.rollNo}</p>
      <p>Marks: {props.marks}</p>
    </div>
  )
}

export default StudentCard
