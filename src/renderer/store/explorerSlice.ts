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
    setFilteredFiles: (state, action: PayloadAction<Array<IFile>>) => {
      state.filteredFiles = action.payload;
    },
    toggleMediaPreview: (state) => {
      state.showMediaPreview = !state.showMediaPreview;
    },
  },
});

export const { setQuery, setFilteredFiles, toggleMediaPreview } =
  explorerSlice.actions;
export const explorerSliceReducer = explorerSlice.reducer;
