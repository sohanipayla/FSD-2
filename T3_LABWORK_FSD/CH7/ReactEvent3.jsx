// write reatc js script to display  values  in console while changing it in change box


function ReactEvent3() {
  function handlechange(event) {
    console.log(event.target.value)
  }

  return (
    <div>
      <input 
        type="text" onChange={handlechange} style={{ padding: "10px", margin: "10px" }}
      />
    </div>
  )
}

export default ReactEvent3
