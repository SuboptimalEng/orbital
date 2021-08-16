import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <div className="App">
      <header className="App-header flex flex-col space-y-4">
        <div className="font-black text-4xl">Learn React</div>
        <div className="flex place-items-center space-x-2">
          <button onClick={decrementCount} className="border p-2">
            -
          </button>
          <div>{count}</div>
          <button onClick={incrementCount} className="border p-2">
            +
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
