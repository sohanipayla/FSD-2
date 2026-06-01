// 
// /*write a prog having button  which increase count 1 by cliking */
import { useState } from "react";
function us1() {
    const [count, setCount] = useState(0);
    function handleCount() {
        setCount(count + 1);
    }
    return (
        <div>
            <p>You cliked {count} times </p>
            <button onClick={handleCount}>Click</button>
        </div>
    );
}
export default us1;