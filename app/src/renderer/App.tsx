import React, { useEffect } from 'react';
import { useAppDispatch } from './store/hooks';
import { setFolder } from './store/folderSlice';

import { Sidebar } from './components/sidebar/index';
import { ActivityBar } from './components/ActivityBar';

import { applyRandomTheme } from './themes/utils';

declare global {
  // TODO: Properly set up window interface.
  interface Window {
    ipc: any;
  }
}

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    // NOTE: Ensure that random theme is applied only once.
    applyRandomTheme();

    // NOTE: Create ipc event handler for handling directory changes.
    window.ipc.on('select-dirs', (payload: any) => {
      console.log(payload);
      dispatch(setFolder(payload));
    });

    // NOTE: Run this in useEffect to prevent multiple-triggers
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
