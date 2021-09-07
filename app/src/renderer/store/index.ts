import { configureStore } from '@reduxjs/toolkit';
import { folderSliceReducer } from './folderSlice';
import { counterSliceReducer } from './counterSlice';
import { activityBarSliceReducer } from './activityBarSlice';

export const store = configureStore({
  reducer: {
    folder: folderSliceReducer,
    counter: counterSliceReducer,
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
