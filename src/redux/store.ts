import { configureStore } from '@reduxjs/toolkit';
import searchValueReducer from './searchValueSlice';
import gameCardsReducer from './gameCardsSlice';
import { rickandmortyApi } from '../services/rickandmortyApi';

export const store = configureStore({
  reducer: {
    searchValue: searchValueReducer,
    gameCards: gameCardsReducer,
    [rickandmortyApi.reducerPath]: rickandmortyApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(rickandmortyApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
