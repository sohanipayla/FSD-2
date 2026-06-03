import React, { useContext } from 'react';
import { StyleContext } from './Pc3';
import { StringContext } from './C6';

function C7() {
  const receivedStyle = useContext(StyleContext);
  const receivedString = useContext(StringContext);

  return (
    <div>
     
      <div style={receivedStyle}>
        <h1>Welcome, {receivedString}</h1>
      </div>
    </div>
  );
}

export default C7;
