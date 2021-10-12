import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { applyTheme, selectableThemes } from '../../themes/utils';
import { setNumOfFilesToLoad } from '../../store/settingsSlice';
import DropdownList from '../Base/DropdownList';
import { numOfFilesToLoadType } from '../../types';

export default function SettingsDisplay() {
  const dispatch = useAppDispatch();
  const { numOfFilesToLoad } = useAppSelector((state) => state.settings);

  console.log(selectableThemes);

  const numOfFileSettings: Array<numOfFilesToLoadType> = [25, 50, 100];
  const onChange = (value: numOfFilesToLoadType) => {
    dispatch(setNumOfFilesToLoad(value));
  };

  return (
    <div className="p-20">
      <div className="flex flex-col space-y-4">
        <div className="font-bold">Settings</div>
        <div className="text-2xl flex flex-col place-items-start">
          <DropdownList
            initialValue={numOfFilesToLoad}
            array={numOfFileSettings}
            onChange={onChange}
          />

          {/* <div
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
          </div> */}
        </div>
      </div>
    </div>
  );
}
