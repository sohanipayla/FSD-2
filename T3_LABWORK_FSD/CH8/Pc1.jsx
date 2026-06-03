// write a react js program to perform  the following task create one main file named Pc1.jsx and other to component file 
// C1.jsx and C2.jsx pass first name and last name from Pc1.jsx to C2.jsx file and display welcome first name ,last name
// in browser.
import React, { createContext } from 'react';
import C1 from './C1';

const Fname = createContext();
const Lname = createContext();

function Pc1() {
  return (
    <Fname.Provider value="Sohani">
      <Lname.Provider value="Payla">
        <C1 />
      </Lname.Provider>
    </Fname.Provider>
  );
}

export default Pc1;
export {Fname,Lname}

