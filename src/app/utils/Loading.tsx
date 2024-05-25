import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

const LoadingComponent = () => {
  return (
    <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <ClipLoader color="#123abc" size={150} style={{ display: 'block', margin: '0 auto', borderColor: 'red' }} />
    </div>
  );
};

export default LoadingComponent;