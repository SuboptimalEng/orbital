import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IQuery } from '../types';

const initialState: IQuery = {
  query: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
  },
});

export const { setQuery } = searchSlice.actions;
export const searchSliceReducer = searchSlice.reducer;
