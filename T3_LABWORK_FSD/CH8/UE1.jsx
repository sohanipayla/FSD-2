// write react js application to perform the following task add two buttons and increment count by 1 with each click display 
// alert as an effect on specified conditions 1) effect will be triggered only when page randered for the first time(empty array)
// 2) effect will be triggered evry time the button A is clicked (array with value) 3) when the page is rendered for the
// first time and on evry update event triggered

import { useState, useEffect } from 'react';

function UE1() {
  const [count, setCount] = useState(0); 
  const [calculation, setcal] = useState(0); 

  useEffect(() => {
    alert("Condition 1: Page rendered for the first time!");
  }, []); 

  useEffect(() => {
    if (count > 0) {
      alert(`Condition 2: Button A clicked! Count is: ${count}`);
    }
  }, [count]); 

  useEffect(() => {
    alert(`Condition 3: Page Rendered or Updated! (Count: ${count}, Calculation: ${calculation})`);
  }); 

  const changecount = () => {
    setCount(count + 1);
  };

  const changecal = () => {
    setcal(calculation + 1);
  };

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={changecount}>Button A</button>

      <h2>Calculation: {calculation}</h2>
      <button onClick={changecal}>Button B</button>
    </div>
  );
}

export default UE1;
