import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { applyThemeByName, selectableThemes } from '../../themes/utils';
import { setNumOfFilesToLoad, setThemeName } from '../../store/settingsSlice';
import DropdownList from '../Base/DropdownList';

export default function SettingsDisplay() {
  const dispatch = useAppDispatch();
  const { themeName, numOfFilesToLoad } = useAppSelector(
    (state) => state.settings
  );

  const numOfFilesToLoadOptions = [
    {
      label: '25 Items',
      value: 25,
    },
    {
      label: '50 Items',
      value: 50,
    },
    {
      label: '100 Items',
      value: 100,
    },
  ];

  const onNumOfFilesToLoadChange = (value: number) => {
    dispatch(setNumOfFilesToLoad(value));
  };

  const themeNameOptions = selectableThemes.map((theme) => {
    return {
      label: theme.name,
      value: theme.name,
    };
  });

  const onThemeNameChange = (value: string) => {
    dispatch(setThemeName(value));
  };

  useEffect(() => {
    applyThemeByName(themeName);
  }, [themeName]);

  return (
    <div className="p-20">
      <div className="flex flex-col space-y-8">
        <div className="font-bold">Settings</div>
        <div className="text-2xl flex flex-col place-items-start space-y-4">
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
    </div>
  );
}
