import React from 'react';

const Mouse = ({ x, y }) => {
  return (
    <div style={{ position: 'absolute', left: x, top: y }}>
      🐭
    </div>
  );
};

export default Mouse;