import React, { useEffect, useState } from 'react';
import "../styles/main.scss";

const Functional = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    console.log('Component mounted');

    let interval = null;

    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((prev) => {
          const updated = prev + 1;
          console.log(`Timer updated: ${updated}s`);
          return updated;
        });
      }, 1000);
    }

    return () => {
      clearInterval(interval);
      console.log('Component unmounted or timer paused');
    };
  }, [isRunning]);

  const toggleRunning = () => {
    setIsRunning((prev) => !prev);
  };

  const resetTimer = () => {
    setSeconds(0);
    setIsRunning(false);
  };

  return (
    <div className='timer'>
      <h2>Timer: {seconds} seconds</h2>
      <button onClick={toggleRunning}>
        {isRunning ? 'Pause' : 'start'}
      </button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
};

export default Functional;
