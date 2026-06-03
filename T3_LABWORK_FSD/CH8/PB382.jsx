import { createContext } from 'react';
import PBChild1382 from './PBChild1382';

 const StyleContext = createContext();

function PB382() {
  const textStyles = {
    fontStyle: 'italic',
    fontSize: '40px'
  };

  return (
    <StyleContext.Provider value={textStyles}>
      <div>
        <PBChild1382 />
      </div>
    </StyleContext.Provider>
  );
}

export default PB382;
export{StyleContext}