import React from 'react';

const Cat = ({ x, y }) => {
  const catStyle = {
    position: 'absolute',
    left: 300,
    top: 300,
    fontSize: '30px',
  };

  const isMouseNearCat = Math.abs(x - 300) < 50 && Math.abs(y - 300) < 50;
console.log(isMouseNearCat);
  return (
      <div>
          {isMouseNearCat && <p>The cat is watching!</p>}
      <div style={catStyle}>🐱</div>
     
    </div>
  );
};

export default Cat;