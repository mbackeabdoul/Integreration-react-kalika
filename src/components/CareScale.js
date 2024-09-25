import React from 'react';

const CareScale = ({ scale }) => {
  const scales = Array(scale).fill('🌿');

  return (
    <div>
      {scales.map((leaf, index) => (
        <span key={index}>{leaf}</span>
      ))}
    </div>
  );
};

export default CareScale;
