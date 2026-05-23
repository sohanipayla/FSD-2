// write react js script to display alert box with text welcome to LJU by clicking on button button shold have
// following css color, backgroundcolor, padding, margin 

function ReactEvent1() {
  return (
    <div>
      <button 
        onClick={() => alert("welcome to LJU")}
        style={{
          color: "white",
          backgroundColor: "blue",
          padding: "10px",
          margin: "10px"
        }}
      >
        Click Me
      </button>
    </div>
  )
}

export default ReactEvent1
