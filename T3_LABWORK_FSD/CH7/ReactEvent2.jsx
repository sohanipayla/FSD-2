import React from 'react'

function ReactEvent2() {
  return (
    <div>
      <button 
        onDoubleClick={() => alert("welcome to LJU")}
        style={{
          color: "white",
          backgroundColor: "purple",
          padding: "10px",
          margin: "10px"
        }}
      >
        Double Click Me
      </button>
    </div>
  )
}

export default ReactEvent2
