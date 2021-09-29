import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { applyTheme, selectableThemes } from '../../themes/utils';
import {
  decrementNumOfCols,
  incrementNumOfCols,
} from '../../store/settingsSlice';

const Settings = () => {
  const [toggle, setToggle] = useState(false);

  const { numOfCols } = useAppSelector((state) => state.settings);
  const dispatch = useAppDispatch();

  const ipcTest = () => {
    console.log('sending...');
    window.ipc.send('test', { from: 'app.tsx' });
  };

  const maybeDecrementNumOfCols = () => {
    if (numOfCols <= 1) {
      return;
    }
    dispatch(decrementNumOfCols());
  };

  const maybeIncrementNumOfCols = () => {
    if (numOfCols >= 5) {
      return;
    }
    dispatch(incrementNumOfCols());
  };

  return (
    <div>
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
      <div>
        <div className="flex">
          <button
            className="border-2 border-editor-fg rounded"
            onClick={maybeDecrementNumOfCols}
          >
            -
          </button>
          <div>{numOfCols}</div>
          <button
            className="border-2 border-editor-fg rounded"
            onClick={maybeIncrementNumOfCols}
          >
            +
          </button>
        </div>
        <div
          onClick={() => ipcTest()}
          className="border-2 border-editor-fg rounded p-2"
        >
          IPC
        </div>
      </div>
    </div>
  );
};

export { Settings };
