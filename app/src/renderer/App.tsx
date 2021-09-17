import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { setFolder } from './store/folderSlice';
import { applyRandomTheme } from './themes/utils';

import { Editor } from './components/Editor/index';
import { Sidebar } from './components/Sidebar/index';
import { StatusBar } from './components/StatusBar/index';
import { ActivityBar } from './components/ActivityBar';

// TODO: Properly set up window interface.
declare global {
  interface Window {
    ipc: {
      send: (channel: string, data?: any) => void;
      on: (channel: string, func: any) => void;
    };
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

  const { activityBar } = useAppSelector((state) => state.activityBar);
  const sidebar = activityBar.find((activity) => activity.isActive);

  return (
    <div className="font-sans antialiased">
      <div className="bg-activity-bg text-red text-4xl flex place-items-center h-screen relative">
        <div className="absolute top-0 bottom-8 w-16">
          <ActivityBar />
        </div>
        <div className="absolute left-16 top-0 bottom-8 right-0 w-80">
          <Sidebar />
        </div>
        <div
          className={
            !sidebar
              ? 'absolute left-16 top-0 bottom-8 right-0'
              : 'absolute left-96 top-0 bottom-8 right-0'
          }
        >
          <Editor />
        </div>
        <div className="absolute left-0 right-0 bottom-0">
          <StatusBar />
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
      </div>
    </div>
  );
}

export default App;
