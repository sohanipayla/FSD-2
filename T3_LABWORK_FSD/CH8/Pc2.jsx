// write react js program to perform the following task create one main file Pc2.jsx  and other 3 component files C3.jsx
// C4.jsx C5.jsx pass number 1 and numbeer 2 from Pc2 to C5 calculate multiplication of the numbers using use context.

import { createContext } from 'react';
import C3 from './C3';

 const Number1 = createContext();
 const Number2 = createContext();

function Pc2() {

  return (
   
    <Number1.Provider value="6">
      <Number2.Provider value="7">
        <div>
          <C3 />
        </div>
      </Number2.Provider>
    </Number1.Provider>
  );
}

export default Pc2;
export {Number1,Number2}