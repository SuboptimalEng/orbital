import React, { useEffect } from 'react';
import { baseTheme } from './themes/base';
import { darkTheme } from './themes/dark';
import { applyTheme } from './themes/utils';
import { FolderPicker } from './components/FolderPicker';
import { ReduxExample } from './components/ReduxExample';

declare global {
  interface Window {
    ipc: any;
  }
}

function App() {
  useEffect(() => {
    applyTheme(baseTheme);
  }, []);

  const ipcTest = () => {
    console.log('sending...');
    window.ipc.send('test', { from: 'app.tsx' });
  };

  // TODO: Only run this once (maybe in useEffect?)
  window.ipc.on('test', (payload: any) => console.log({ payload }));

  return (
    <div>
      <div className="bg-secondary text-text-base flex flex-col place-items-center">
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
        {/* NOTE: Hide this for now. */}
        {/* <img
            src="file-protocol://getMediaFile/Users/suboptimaleng/Desktop/orb/abc.jpg"
            alt="logo"
            className="w-80"
          ></img>
          <video
            src="file-protocol://getMediaFile/Users/suboptimaleng/Desktop/orb/steve_jobs_demo.mp4"
            className="w-80"
            controls
          ></video> */}

        <FolderPicker />
        <ReduxExample />
      </div>
    </div>
  );
}

export default App;
