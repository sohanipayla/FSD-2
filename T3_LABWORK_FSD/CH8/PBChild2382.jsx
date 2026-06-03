import { useContext } from 'react';
import { StyleContext } from './PB382';

function PBChild2382() {
  const styles = useContext(StyleContext);

  return (
    <div>
      <h1 style={{ fontStyle: styles.fontStyle, fontSize: styles.fontSize }}>
        Full stack Development
      </h1>
    </div>
  );
}

export default PBChild2382;
