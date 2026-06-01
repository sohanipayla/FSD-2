// create react app to increase value by 1 while clicking on button increment an decrease value by one while clicking 
// button initialize value by zero use reducer perform this task


import { use, useReducer } from "react"; 
function reducer(state,action){
    if(action.type=="increment"){
        return state+1 
    }
    else if(action.type=="decrement"){
        return state-1 
    }
}

function Ur2(){
    const[state,dispatch]=useReducer(reducer,0)
    return(
        <div align='center'>
            <h1>{state}</h1>
            <button onClick={()=>dispatch({type:"increment"},1)}>inc</button>
            <button onClick={()=>dispatch({type:"decrement"},1)}>dec</button>
        </div>
    )
}

export default Ur2