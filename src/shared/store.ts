import { configureStore } from '@reduxjs/toolkit';

import matchesReducer from './reducers/matches.slice';
import playersReducer from './reducers/players.slice';

export const store = configureStore({
  reducer: {
    players: playersReducer,
    matches: matchesReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
