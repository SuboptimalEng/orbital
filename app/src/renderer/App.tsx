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

  const ipcTest = () => {
    console.log('sending...');
    window.ipc.send('test', { from: 'app.tsx' });
  };

  // TODO: Only run this once (maybe in useEffect?)
  window.ipc.on('test', (payload: any) => console.log({ payload }));

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
          {/* NOTE: Two slashes does not work */}
          {/* src="file://Users/suboptimaleng/Desktop/orb/abc.jpg" */}
          {/* NOTE: Three slashes works */}
          {/* src="file:///Users/suboptimaleng/Desktop/orb/abc.jpg" */}
          {/* NOTE: This is an alternative way to display files in prod. */}
          {/* <img
            src="file:///Users/suboptimaleng/Desktop/orb/abc.jpg"
            alt="logo"
            className="w-80"
          ></img> */}
          <img
            src="file-protocol://getMediaFile/Users/suboptimaleng/Desktop/orb/abc.jpg"
            alt="logo"
            className="w-80"
          ></img>
          <video
            src="file-protocol://getMediaFile/Users/suboptimaleng/Desktop/orb/steve_jobs_demo.mp4"
            className="w-80"
            controls
          ></video>
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
