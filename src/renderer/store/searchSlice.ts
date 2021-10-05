import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ISearch } from '../types';

const initialState: ISearch = {
  query: '',
  sortByName: 'asc',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
    toggleSortByName: (state) => {
      if (state.sortByName === 'asc') {
        state.sortByName = 'desc';
      } else {
        state.sortByName = 'asc';
      }

      console.log(state.sortByName);
    },
  },
});

export const { setQuery, toggleSortByName } = searchSlice.actions;
export const searchSliceReducer = searchSlice.reducer;
