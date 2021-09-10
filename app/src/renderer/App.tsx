import React, { useEffect } from 'react';

import { applyRandomTheme } from './themes/utils';

import { Sidebar } from './components/sidebar/index';
import { ActivityBar } from './components/ActivityBar';

import { setFolder } from './store/folderSlice';
import { useAppDispatch } from './store/hooks';

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

  // NOTE: Run this in useEffect to prevent multiple-triggers
  useEffect(() => {
    window.ipc.on('test', (payload: any) => console.log({ payload }));
    // eslint-disable-next-line
  }, []);

  return (
    <div className="font-sans antialiased">
      <div className="bg-activity-bg text-red text-6xl flex place-items-center h-screen min-w-full max-w-full">
        <ActivityBar />
        <Sidebar />

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
      </div>
    </div>
  );
}

export default App;
