import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { selectableThemes } from '../themes/utils';

interface ISettings {
  themeName: string;
  numOfFilesToLoad: number;
}

const initialState: ISettings = {
  themeName: 'light',
  numOfFilesToLoad: 25,
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setThemeName: (state, action: PayloadAction<string>) => {
      const isValidTheme = (themeName: string) => {
        return selectableThemes.some(
          (selectableTheme) => selectableTheme.name === themeName
        );
      };
      if (isValidTheme(action.payload)) {
        state.themeName = action.payload;
      } else {
        state.themeName = 'light';
      }
    },
    setNumOfFilesToLoad: (state, action: PayloadAction<number>) => {
      if (
        action.payload === 25 ||
        action.payload === 50 ||
        action.payload === 100
      ) {
        state.numOfFilesToLoad = action.payload;
      } else {
        state.numOfFilesToLoad = 25;
      }
    },
  },
});

export const { setThemeName, setNumOfFilesToLoad } = settingsSlice.actions;
export const settingsSliceReducer = settingsSlice.reducer;
