import React from 'react';
import MouseTracker from './MouseTracker';
import Mouse from './Mouse';
import Cat from './Cat';



export const App = () => {



  return (
    <div >
      <h1>Move your mouse around!</h1>
      <MouseTracker render={(mousePosition) => <Mouse {...mousePosition} />} />
      <MouseTracker render={(mousePosition) => <Cat {...mousePosition} />} />
    </div>
  );
};
export default App;