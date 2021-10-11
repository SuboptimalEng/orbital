import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFile, IExplorer } from '../types';

const initialState: IExplorer = {
  query: '',
  filteredFiles: [],
  showFileDisplay: false,
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
    toggleFileDisplay: (state) => {
      state.showFileDisplay = !state.showFileDisplay;
    },
  },
});

export const { setQuery, setFilteredFiles, toggleFileDisplay } =
  explorerSlice.actions;
export const explorerSliceReducer = explorerSlice.reducer;
