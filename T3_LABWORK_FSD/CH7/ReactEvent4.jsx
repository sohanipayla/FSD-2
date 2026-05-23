import React from 'react'

function ReactEvent4() {

  function handleSubmit(event) {
    event.preventDefault() 
    alert("You clicked submit")
  }

  return (
    <div>

      <form onSubmit={handleSubmit} style={{ margin: "20px" }}>
        
        <input 
          type="text" 
          style={{ padding: "10px", margin: "10px" }}
        />
        
        <button 
          type="submit" 
          style={{
            color: "white",
            backgroundColor: "green",
            padding: "10px",
            margin: "10px"
          }}
        >
          Submit
        </button>

      </form>
    </div>
  )
}

export default ReactEvent4
