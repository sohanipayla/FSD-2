import{ createContext } from 'react';
import C7 from './C7';

const StringContext = createContext();

function C6() {

  return (
    <StringContext.Provider value="Superb Students of React!">
      <div>
        <C7 />
      </div>
    </StringContext.Provider>
  );
}

export default C6;
export {StringContext}