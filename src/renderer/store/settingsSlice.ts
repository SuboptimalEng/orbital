import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from './index';

interface ISettingsState {
  numOfCols: number;
}

const initialState: ISettingsState = {
  numOfCols: 3,
};

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    incrementNumOfCols: (state) => {
      state.numOfCols += 1;
    },
    decrementNumOfCols: (state) => {
      state.numOfCols -= 1;
    },
  },
});

// Other code such as selectors can use the imported `RootState` type
export const selectNumOfCols = (state: RootState) => state.settings.numOfCols;

export const { incrementNumOfCols, decrementNumOfCols } = settingsSlice.actions;
export const settingsSliceReducer = settingsSlice.reducer;
