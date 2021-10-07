import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFile, ISearch } from '../types';

const initialState: ISearch = {
  query: '',
  filteredFiles: [],
};

// TODO V2: Allow user to sort files by name.
const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
    setFilteredFiles: (state, action: PayloadAction<Array<IFile>>) => {
      state.filteredFiles = action.payload;
    },
  },
});

export const { setQuery, setFilteredFiles } = searchSlice.actions;
export const searchSliceReducer = searchSlice.reducer;
