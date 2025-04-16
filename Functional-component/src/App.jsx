import React, { useState } from 'react';
import Functional from './components/Functional';

const App = () => {
  const [showTimer, setShowTimer] = useState(true);

  return (
    <div className='timer'>
      <button onClick={() => setShowTimer(!showTimer)}>
        {showTimer ? 'Hide' : 'Show'} Timer
      </button>

      {showTimer && <Functional/>}
    </div>
  );
};

export default App;
