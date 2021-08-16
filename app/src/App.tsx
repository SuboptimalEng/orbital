import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from './redux/store';
import { decrement, increment } from './redux/counterSlice';

function App() {
  // Component state
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  };
  const decrementCount = () => {
    setCount(count - 1);
  };

  // Redux state
  const value = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

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
        <div className="flex place-items-center space-x-2">
          <button onClick={() => dispatch(decrement())} className="border p-2">
            -
          </button>
          <div>{value}</div>
          <button onClick={() => dispatch(increment())} className="border p-2">
            +
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
