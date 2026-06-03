import  { createContext } from 'react';
import PBChild1379 from './PBChild1379';

 const ColorContext = createContext();

function PB379() {
  const themeColors = {
    fontColor: 'yellow',
    bgColor: 'blue'
  };

  return (
    <ColorContext.Provider value={themeColors}>
      <div>
        <PBChild1379 />
      </div>
    </ColorContext.Provider>
  );
}

export default PB379;
export {ColorContext}