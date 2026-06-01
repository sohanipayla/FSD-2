//with the help of onsubmit method and also inline 
import { useState } from "react";
function Us10()
{
    const [name, setname] = useState("");
    function handlesubmit(event)
    {
        event.preventDefault();
        alert(`you entered : ${name}`)
    }
    return (
        <form onSubmit={handlesubmit}>
            <textarea rows={5} cols={15} value={name}  onChange={(e) => setname(e.target.value)}></textarea>
            <input type="submit"></input>
        </form>
    )
}
export default Us10