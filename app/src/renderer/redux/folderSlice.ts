import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import type { RootState } from './store';

interface IFile {
  name: string;
  path: string;
}

interface IFolder {
  path: string;
  files: Array<IFile>;
}

const initialState: IFolder = {
  path: '',
  files: [],
};

export const folderSlice = createSlice({
  name: 'folder',
  initialState,
  reducers: {
    setFolder: (state, action: PayloadAction<IFolder>) => {
      state.path = action.payload.path;
      state.files = [...action.payload.files];
    },
  },
});

export const { setFolder } = folderSlice.actions;
export const folderSliceReducer = folderSlice.reducer;
