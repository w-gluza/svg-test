import React from 'react';

import Kazakhstan from './src/Kazakhstan';
// import Live from './src/Live';
// import CV from './src/CV';
// import LinkedIn from './src/LinkedIn';

const Map = props => {
  switch (props.name) {
    case 'Kazakhstan':
      return <Kazakhstan {...props} />;
    // case 'Live':
    //   return <Live {...props} />;
    // case 'CV':
    //   return <CV {...props} />;
    // case 'LinkedIn':
    //   return <LinkedIn {...props} />;
    default:
      return;
  }
};

export default Map;