import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setNumOfFilesToLoad, setThemeName } from '../../store/settingsSlice';

import { selectableThemes } from '../../themes/utils';

import DropdownList from '../Base/DropdownList';

export default function SettingsDisplay() {
  const dispatch = useAppDispatch();
  const { themeName, numOfFilesToLoad } = useAppSelector(
    (state) => state.settings
  );

  const themeNameOptions = selectableThemes.map((theme) => {
    return {
      label: theme.name,
      value: theme.name,
    };
  });

  const numOfFilesToLoadOptions = [
    {
      label: '25 files',
      value: 25,
    },
    {
      label: '50 files',
      value: 50,
    },
    {
      label: '100 files',
      value: 100,
    },
  ];

  const storeSettingsInElectron = (t: string, n: number) => {
    window.ipc.send('update-settings', {
      themeName: t,
      numOfFilesToLoad: n,
    });
  };

  const onThemeNameChange = (value: string) => {
    dispatch(setThemeName(value));
    storeSettingsInElectron(value, numOfFilesToLoad);
  };

  const onNumOfFilesToLoadChange = (value: number) => {
    dispatch(setNumOfFilesToLoad(value));
    storeSettingsInElectron(themeName, value);
  };

  return (
    <div className="absolute inset-0 scrollbar scrollbar-thumb-scrollbar-fg scrollbar-track-scrollbar-bg">
      <div className="p-20 flex flex-col space-y-16">
        <div className="flex flex-col space-y-4">
          <div className="font-bold">Settings</div>
          <div className="text-2xl flex flex-col place-items-start space-y-2">
            <DropdownList<number>
              title={'Select the number of files to load per scroll.'}
              value={numOfFilesToLoad}
              options={numOfFilesToLoadOptions}
              onChange={onNumOfFilesToLoadChange}
            />

            <DropdownList<string>
              title={'Select a color theme for Orbital.'}
              value={themeName}
              options={themeNameOptions}
              onChange={onThemeNameChange}
            />
          </div>
        </div>

        <div className="flex flex-col space-y-4">
          <div className="font-bold">Key Bindings</div>
          <div className="text-2xl flex flex-col space-y-2">
            <div className="font-medium">Close Preview</div>
            <div className="bg-activity-bg text-activity-fg p-1 w-40">esc</div>
          </div>
          <div className="text-2xl flex flex-col space-y-2">
            <div className="font-medium">Previous Image</div>
            <div className="bg-activity-bg text-activity-fg p-1 w-40">
              left arrow
            </div>
          </div>
          <div className="text-2xl flex flex-col space-y-2">
            <div className="font-medium">Next Image</div>
            <div className="bg-activity-bg text-activity-fg p-1 w-40">
              right arrow
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
