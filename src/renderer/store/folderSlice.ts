import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFolder } from '../types';
// import type { RootState } from './index';

const initialState: IFolder = {
  path: '',
  files: [],
  folderIsLoading: false,
};

export const folderSlice = createSlice({
  name: 'folder',
  initialState,
  reducers: {
    setFolder: (state, action: PayloadAction<IFolder>) => {
      state.path = action.payload.path;
      state.files = [...action.payload.files];
    },
    setFolderIsLoading: (state, action: PayloadAction<boolean>) => {
      state.folderIsLoading = action.payload;
    },
  },
});

// Other code such as selectors can use the imported `RootState` type
// export const selectFolderFiles = (state: RootState) => state.folder.files;

export const { setFolder, setFolderIsLoading } = folderSlice.actions;
export const folderSliceReducer = folderSlice.reducer;
