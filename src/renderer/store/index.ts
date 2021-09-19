import { configureStore } from '@reduxjs/toolkit';
import { folderSliceReducer } from './folderSlice';
import { activityBarSliceReducer } from './activityBarSlice';
import { settingsSliceReducer } from './settingsSlice';

export const store = configureStore({
  reducer: {
    folder: folderSliceReducer,
    settings: settingsSliceReducer,
    activityBar: activityBarSliceReducer,
    // posts: postsReducer,
    // comments: commentsReducer,
    // users: usersReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
