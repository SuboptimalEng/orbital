import hotkeys from 'hotkeys-js';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './store/hooks';

import { IFolder } from './types';
import { applyRandomTheme } from './themes/utils';
import { setThemeName } from './store/settingsSlice';
import { closeMediaPreview } from './store/explorerSlice';
import { setFolder, setFolderIsLoading } from './store/folderSlice';

import Editor from './components/Editor';
import Loading from './components/Loading';
import StatusBar from './components/StatusBar';
import ActivityBar from './components/ActivityBar';

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
  const { folderIsLoading } = useAppSelector((state) => state.folder);

  useEffect(() => {
    // NOTE: Ensure that random theme is applied only once.
    const themeName = applyRandomTheme();
    dispatch(setThemeName(themeName));

    // NOTE: Create ipc event handler for handling directory changes.
    // NOTE: Run this in useEffect to prevent multiple-triggers.
    window.ipc.on('open-directory', (payload: IFolder) => {
      console.log(payload);
      dispatch(setFolder(payload));
      dispatch(setFolderIsLoading(false));
    });

    // eslint-disable-next-line
  }, []);

  return (
    <div className="font-sans antialiased">
      <div className="text-4xl flex place-items-center h-screen relative">
        {folderIsLoading ? (
          <Loading />
        ) : (
          <div>
            <div className="absolute top-0 bottom-8 w-16">
              <ActivityBar />
            </div>
            <div className="absolute left-16 top-0 bottom-8 right-0">
              <Editor />
            </div>
            <div className="absolute left-0 right-0 bottom-0">
              <StatusBar />
            </div>
          </div>
        )}

        {/* NOTE: Two slashes does not work */}
        {/* src="file://Users/suboptimaleng/Desktop/orb/abc.jpg" */}
        {/* NOTE: Three slashes works */}
        {/* NOTE: https://superuser.com/questions/352133/why-do-file-urls-start-with-3-slashes */}
        {/* src="file:///Users/suboptimaleng/Desktop/orb/abc.jpg" */}
      </div>
    </div>
  );
}

export default App;
