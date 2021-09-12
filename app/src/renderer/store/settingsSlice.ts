import { createSlice } from '@reduxjs/toolkit';

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

export const { incrementNumOfCols, decrementNumOfCols } = settingsSlice.actions;
export const settingsSliceReducer = settingsSlice.reducer;
