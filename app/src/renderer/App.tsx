import React, { useEffect } from 'react';

import { applyRandomTheme } from './themes/utils';

import { Sidebar } from './components/sidebar/index';
import { ActivityBar } from './components/ActivityBar';
import { ReduxExample } from './components/ReduxExample';

import { useAppDispatch, useAppSelector } from './store/hooks';
import { setFolder } from './store/folderSlice';

declare global {
  interface Window {
    ipc: any;
  }
}

function App() {
  const dispatch = useAppDispatch();

  // NOTE: Apply random theme when app is initialized.
  useEffect(() => {
    applyRandomTheme();
    // eslint-disable-next-line
  }, []);

  // NOTE: Create ipc event handler for handling directory changes.
  useEffect(() => {
    window.ipc.on('select-dirs', (payload: any) => {
      console.log(payload);
      dispatch(setFolder(payload));
    });
    // eslint-disable-next-line
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
        <div onClick={() => ipcTest()} className="border-2 rounded p-2 m-2">
          IPC
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
          <ReduxExample />
        </div>
      </div>
    </div>
  );
}

export default App;
