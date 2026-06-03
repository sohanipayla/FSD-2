import{ createContext } from 'react';
import PBChild1378 from './PBChild1378';

const ColorContext = createContext();
function PB378() {
  const themeColors = {
    backgroundColor: 'red',
    fontColor: 'green'
  };
  return (

    <ColorContext.Provider value={themeColors}>
      <div >
        <PBChild1378 />
      </div>
    </ColorContext.Provider>
  );
}

export default PB378;
export {ColorContext}