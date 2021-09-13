import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { applyTheme, selectableThemes } from '../../themes/utils';
import {
  decrementNumOfCols,
  incrementNumOfCols,
} from '../../store/settingsSlice';

const Settings = (props: { icon: string }) => {
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
      <div className="border" onClick={() => setToggle(!toggle)}>
        {props.icon}
        Settings
        {toggle && (
          <div className="absolute bg-activity-bg border">
            {selectableThemes.map((theme) => {
              return (
                <div
                  key={theme.name}
                  onClick={() => applyTheme(theme.theme)}
                  className="border-2 rounded p-2 m-2"
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
          <div className="border-2" onClick={maybeDecrementNumOfCols}>
            -
          </div>
          <div>{numOfCols}</div>
          <div className="border-2" onClick={maybeIncrementNumOfCols}>
            +
          </div>
        </div>
        <div onClick={() => ipcTest()} className="border-2 rounded p-2">
          IPC
        </div>
      </div>
    </div>
  );
};

export { Settings };
