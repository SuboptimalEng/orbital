import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFile, IExplorer } from '../types';

const initialState: IExplorer = {
  query: '',
  filteredFiles: [],
  showMediaPreview: false,
};

// TODO V2: Allow user to sort files by name.
const explorerSlice = createSlice({
  name: 'explorer',
  initialState,
  reducers: {
    setQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
    openMediaPreview: (state) => {
      state.showMediaPreview = true;
    },
    closeMediaPreview: (state) => {
      state.showMediaPreview = false;
    },
    setFilteredFiles: (state, action: PayloadAction<Array<IFile>>) => {
      state.filteredFiles = action.payload;
    },
  },
});

export const {
  setQuery,
  setFilteredFiles,
  openMediaPreview,
  closeMediaPreview,
} = explorerSlice.actions;
export const explorerSliceReducer = explorerSlice.reducer;
