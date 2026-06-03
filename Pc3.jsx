//use multiple context in react application by crating and consuming then across diffrent components Pc3.jsx create a context
// for css styling and provides it ti C6.jsx . C6.jsx create a context for a string value students and provides it to C7.
// C7.jsx consume both context and display a message with provided styles and string.

import React, { createContext } from 'react';
import C6 from './C6';

const StyleContext = createContext();
function Pc3() {

  const customStyle = {
    color: 'darkblue',
    backgroundColor: '#e8f5e9',
    padding: '20px',
    borderRadius: '10px',
    border: '2px dashed green',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif'
  };

  return (
    <StyleContext.Provider value={customStyle}>
      <div>
        <C6 />
      </div>
    </StyleContext.Provider>
  );
}

export default Pc3;
export {StyleContext}