import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
      state.themeName = action.payload;
    },
    setNumOfFilesToLoad: (state, action: PayloadAction<number>) => {
      state.numOfFilesToLoad = action.payload;
    },
  },
});

export const { setThemeName, setNumOfFilesToLoad } = settingsSlice.actions;
export const settingsSliceReducer = settingsSlice.reducer;
