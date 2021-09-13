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

  return (
    <div>
      <div className="border" onClick={() => setToggle(!toggle)}>
        {props.icon}
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
        <div className="flex flex-col">
          <div
            className="border-2"
            onClick={() => dispatch(decrementNumOfCols())}
          >
            -
          </div>
          <div>{numOfCols}</div>
          <div
            className="border-2"
            onClick={() => dispatch(incrementNumOfCols())}
          >
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
