import { configureStore } from '@reduxjs/toolkit';
import searchValueReducer from './searchValueSlice';
import gameCardsReducer from './gameCardsSlice';

export const store = configureStore({
  reducer: {
    searchValue: searchValueReducer,
    gameCards: gameCardsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
