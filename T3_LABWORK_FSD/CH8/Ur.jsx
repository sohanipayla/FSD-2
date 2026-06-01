// write react component to increase value by 5 while clocking on button initial lize value with 20 use use reducer to 
// perform the task.

import { use, useReducer } from "react"; 
function reducer(state,action){
    return state+action 
}
function Ur(){
    const[state,dispatch]=useReducer(reducer,20)
    return(
        <div align='center'>
            <h1>{state}</h1>
            <button onClick={()=>dispatch(5)}>Add</button>
        </div>
    )
}

export default Ur