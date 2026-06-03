import React, { createContext } from 'react';
import PBChild1367 from './PBChild1367';

 const UserContext = createContext();

function PB367() {
  const username = "Sohani_Payla"; 

  return (
    <UserContext.Provider value="Sohani_Payla">
      <div>
        <PBChild1367 />
      </div>
    </UserContext.Provider>
  );
}

export default PB367;
export {UserContext}