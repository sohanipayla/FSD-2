// create react js to create a digital clock running contineously

import { useState, useEffect } from 'react';

function UE2() {
  
  const [date, setTime] = useState(new Date());

  useEffect(() => {
    
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

  }, []); 

  return (
    <div>
      <h2>Digital Clock </h2>
      <h1>
       Time: {date.toLocaleTimeString()} <br/>
       Hour: {date.getHours()} <br/>
       Min: {date.getMinutes()} <br/>
       Sec: {date.getSeconds()} 
      </h1>
    </div>
  );
}

export default UE2;
