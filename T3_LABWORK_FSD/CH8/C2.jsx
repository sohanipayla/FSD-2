import React, { useContext } from 'react';
import { Fname, Lname } from './Pc1'; 

function C2() {
  const firstName = useContext(Fname);
  const lastName = useContext(Lname);

  return (
    <div>
      <h1>Welcome {firstName} {lastName}</h1>
    </div>
  );
}

export default C2;
