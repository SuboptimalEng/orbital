import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFolder } from '../types/index';
// import type { RootState } from './index';

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

// Other code such as selectors can use the imported `RootState` type
// export const selectFolderFiles = (state: RootState) => state.folder.files;

export const { setFolder } = folderSlice.actions;
export const folderSliceReducer = folderSlice.reducer;
