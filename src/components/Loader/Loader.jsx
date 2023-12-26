import React from 'react';
import { FallingLines } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div>
      <FallingLines
        color="#dcebfc"
        width="100"
        visible={true}
        ariaLabel="falling-circles-loading"
      />
    </div>
  );
};

export default Loader;
