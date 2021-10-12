import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ISettings, numOfFilesToLoadType } from '../types';

const initialState: ISettings = {
  theme: 'light',
  numOfFilesToLoad: 25,
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setNumOfFilesToLoad: (
      state,
      action: PayloadAction<numOfFilesToLoadType>
    ) => {
      state.numOfFilesToLoad = action.payload;
    },
  },
});

export const { setNumOfFilesToLoad } = settingsSlice.actions;
export const settingsSliceReducer = settingsSlice.reducer;
