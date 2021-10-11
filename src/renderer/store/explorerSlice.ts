import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFile, IExplorer } from '../types';

const initialState: IExplorer = {
  query: '',
  filteredFiles: [],
  showMediaDisplay: false,
};

// TODO V2: Allow user to sort files by name.
const explorerSlice = createSlice({
  name: 'explorer',
  initialState,
  reducers: {
    setQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
    setFilteredFiles: (state, action: PayloadAction<Array<IFile>>) => {
      state.filteredFiles = action.payload;
    },
    toggleMediaDisplay: (state) => {
      state.showMediaDisplay = !state.showMediaDisplay;
    },
  },
});

export const { setQuery, setFilteredFiles, toggleMediaDisplay } =
  explorerSlice.actions;
export const explorerSliceReducer = explorerSlice.reducer;
