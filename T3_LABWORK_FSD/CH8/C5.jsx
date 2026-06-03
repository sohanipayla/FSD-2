import  { useContext } from 'react';

import { Number1, Number2 } from './Pc2';
 function C5() {
 
  const n1 = useContext(Number1);
  const n2 = useContext(Number2);

  const multiplicationResult = n1 * n2;

  return (
    <div>
      <p> Number1: {n1}</p>
      <p> Number2: {n2}</p>
      <strong>Result: {n1} * {n2} = {multiplicationResult}</strong>
    </div>
  );
}
export default C5;