import React, { useEffect } from 'react';

import { applyTheme } from './themes/utils';
import { gruvboxTheme } from './themes/gruvbox';
import { draculaTheme } from './themes/dracula';

import { Sidebar } from './components/sidebar/index';
import { ActivityBar } from './components/ActivityBar';
import { FolderPicker } from './components/FolderPicker';
import { ReduxExample } from './components/ReduxExample';

import { useAppSelector } from './store/hooks';

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

  const { activityBar } = useAppSelector((state) => state.activityBar);
  const sidebar = activityBar.find((activity) => activity.isActive);

  return (
    <div className="font-sans antialiased">
      <div className="bg-activity-bg text-red text-6xl flex place-items-center h-screen min-w-full max-w-full">
        <ActivityBar></ActivityBar>
        {sidebar?.isActive ? <Sidebar {...sidebar} /> : null}
        <div className="flex flex-col">
          <div
            onClick={() => applyTheme(gruvboxTheme)}
            className="border-2 rounded p-2 m-2"
          >
            Gruvbox Theme
          </div>
          <div
            onClick={() => applyTheme(draculaTheme)}
            className="border-2 rounded p-2 m-2"
          >
            Dracula Theme
          </div>
          <div onClick={() => ipcTest()} className="border-2 rounded p-2 m-2">
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

        <div className="flex flex-col">
          <FolderPicker />
          <ReduxExample />
        </div>
      </div>
    </div>
  );
}

export default App;
