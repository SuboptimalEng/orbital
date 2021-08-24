import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { applyTheme } from './themes/utils';
import { baseTheme } from './themes/base';
import { darkTheme } from './themes/dark';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { decrement, increment } from './redux/counterSlice';

declare global {
  interface Window {
    ipc: any;
  }
}

function App() {
  useEffect(() => {
    applyTheme(baseTheme);
  }, []);

  const { value } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  window.ipc.on('test', (payload: any) => console.log({ payload }));

  const ipcTest = () => {
    window.ipc.send('test', { from: 'app.tsx' });
  };

  return (
    <div className="App">
      <header className="App-header ">
        {/* TODO: Figure out bg opacity. */}
        <div className="bg-secondary bg-opacity-50 text-text-base flex flex-col place-items-center">
          <div className="flex">
            <div
              onClick={() => applyTheme(baseTheme)}
              className="border rounded p-2 m-2"
            >
              Base theme
            </div>
            <div
              onClick={() => applyTheme(darkTheme)}
              className="border rounded p-2 m-2"
            >
              Dark theme
            </div>
            <div onClick={() => ipcTest()} className="border rounded p-2 m-2">
              IPC
            </div>
          </div>
          <img src={logo} className="App-logo w-60" alt="logo" />
          <div className="border rounded p-2 mb-4">Learn React</div>
          <div className="flex w-full place-items-center justify-center space-x-2 mb-2">
            <div
              className="border p-2 rounded"
              onClick={() => dispatch(decrement())}
            >
              -
            </div>
            <div>{value}</div>
            <div
              className="border p-2 rounded"
              onClick={() => dispatch(increment())}
            >
              +
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
