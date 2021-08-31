import React, { useEffect } from 'react';
import { gruvboxTheme } from './themes/gruvbox';
import { draculaTheme } from './themes/dracula';
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
    applyTheme(gruvboxTheme);
  }, []);

  const ipcTest = () => {
    console.log('sending...');
    window.ipc.send('test', { from: 'app.tsx' });
  };

  // TODO: Only run this once (maybe in useEffect?)
  window.ipc.on('test', (payload: any) => console.log({ payload }));

  return (
    <div>
      <div className="bg-activity-bg text-white flex flex-col place-items-center">
        <div className="flex">
          <div
            onClick={() => applyTheme(gruvboxTheme)}
            className="border rounded p-2 m-2"
          >
            Gruvbox Theme
          </div>
          <div
            onClick={() => applyTheme(draculaTheme)}
            className="border rounded p-2 m-2"
          >
            Dracula Theme
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
