// Create a React app:
// • Display product quantity
// • Add buttons “Add Item” and “Remove Item”
// • Quantity should never go below 0
// • Use useReducer to manage state 


import React, { useReducer } from "react";
function counterReducer(state, action) {
  if (action == "+") {
    return state + 1;
  }

  if (action == "-") {
    if (state <= 0) {
      return state;
    }
    return state - 1;
  }
}

function PB386() {
  const [state, dispatch] = useReducer(counterReducer, 0);

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={() => dispatch("+")}>Add</button>
      <button onClick={() => dispatch("-")}>remove</button>
    </div>
  );
}

export default PB386;
