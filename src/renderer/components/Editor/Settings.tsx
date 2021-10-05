import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { applyTheme, selectableThemes } from '../../themes/utils';
import {
  decrementFilesToLoad,
  incrementFilesToLoad,
} from '../../store/settingsSlice';

export default function SettingsDisplay() {
  const dispatch = useAppDispatch();
  const [toggle, setToggle] = useState(false);
  const { filesToLoad } = useAppSelector((state) => state.settings);

  const ipcTest = () => {
    console.log('sending...');
    window.ipc.send('test', { from: 'app.tsx' });
  };

  return (
    <div className="p-20">
      <div className="flex flex-col space-y-4">
        <div className="font-bold">Settings</div>
        <div className="text-2xl flex flex-col place-items-start">
          <div
            className="border-2 border-editor-fg rounded"
            onClick={() => setToggle(!toggle)}
          >
            Theme
            {toggle && (
              <div className="absolute bg-editor-bg border-2 border-editor-fg rounded">
                {selectableThemes.map((theme) => {
                  return (
                    <div
                      key={theme.name}
                      onClick={() => applyTheme(theme.theme)}
                      className="border-2 border-editor-fg rounded p-2"
                    >
                      {theme.name}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
      <div>
        <div
          onClick={() => dispatch(decrementFilesToLoad())}
          className="border border-editor-fg rounded p-2"
        >
          -
        </div>
        {filesToLoad}
        <div
          onClick={() => dispatch(incrementFilesToLoad())}
          className="border border-editor-fg rounded p-2"
        >
          +
        </div>
      </div>
      <div>
        <div
          onClick={() => ipcTest()}
          className="flex border-2 border-editor-fg rounded p-2"
        >
          IPC
        </div>
      </div>
    </div>
  );
}
