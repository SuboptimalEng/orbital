import { createSlice } from '@reduxjs/toolkit';
import { ISettings } from '../types';

const initialState: ISettings = {
  filesToLoad: 25,
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    decrementFilesToLoad: (state) => {
      if (state.filesToLoad <= 25) {
        state.filesToLoad = 25;
      } else {
        state.filesToLoad -= 25;
      }
    },
    incrementFilesToLoad: (state) => {
      if (state.filesToLoad >= 100) {
        state.filesToLoad = 100;
      } else {
        state.filesToLoad += 25;
      }
    },
  },
});

export const { incrementFilesToLoad, decrementFilesToLoad } =
  settingsSlice.actions;
export const settingsSliceReducer = settingsSlice.reducer;
