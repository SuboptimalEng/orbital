import { createSlice } from '@reduxjs/toolkit';
import { ISettings } from '../types';

const initialState: ISettings = {
  numOfFilesToLoad: 25,
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    decrementNumOfFilesToLoad: (state) => {
      if (state.numOfFilesToLoad <= 25) {
        state.numOfFilesToLoad = 25;
      } else {
        state.numOfFilesToLoad -= 25;
      }
    },
    incrementNumOfFilesToLoad: (state) => {
      if (state.numOfFilesToLoad >= 100) {
        state.numOfFilesToLoad = 100;
      } else {
        state.numOfFilesToLoad += 25;
      }
    },
  },
});

export const { decrementNumOfFilesToLoad, incrementNumOfFilesToLoad } =
  settingsSlice.actions;
export const settingsSliceReducer = settingsSlice.reducer;
