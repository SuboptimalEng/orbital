import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './store/hooks';

import { IFolder } from './types';
import { applyThemeByName } from './themes/utils';
import { setFolder, setFolderIsLoading } from './store/folderSlice';
import { setNumOfFilesToLoad, setThemeName } from './store/settingsSlice';

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
      removeAllListeners: (channel: string) => void;
    };
  }
}

function App() {
  const dispatch = useAppDispatch();
  const { themeName } = useAppSelector((state) => state.settings);
  const { folderIsLoading } = useAppSelector((state) => state.folder);

  // NOTE: Change app theme whenever the redux themeName variable changes.
  useEffect(() => {
    applyThemeByName(themeName);
  }, [themeName]);

  useEffect(() => {
    // NOTE: Ask for user settings from the main process onMount.
    window.ipc.send('load-settings');

    // NOTE: Handle load-settings event from the main process.
    // NOTE: Info is passed from userData (themeName + numOfFilesToLoad)
    window.ipc.on('load-settings', (payload: any) => {
      console.log(payload);
      dispatch(setThemeName(payload.themeName));
      dispatch(setNumOfFilesToLoad(payload.numOfFilesToLoad));
    });

    // NOTE: Create ipc event handler for handling directory changes.
    window.ipc.on('open-directory', (payload: IFolder) => {
      dispatch(setFolder(payload));
      dispatch(setFolderIsLoading(false));
    });

    // NOTE Remove event listeners on unMount to prevent infinite listeners.
    return () => {
      window.ipc.removeAllListeners('get-settings');
      window.ipc.removeAllListeners('open-directory');
    };

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
