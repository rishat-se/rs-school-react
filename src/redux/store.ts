import { configureStore } from '@reduxjs/toolkit';
import searchValueReducer from './searchValueSlice';
import gameCardsReducer from './gameCardsSlice';
import { rickandmortyApi } from '../services/rickandmortyApi';

declare global {
  interface Window {
    __PRELOADED_STATE__: {} | undefined;
  }
}

export const store = configureStore({
  reducer: {
    searchValue: searchValueReducer,
    gameCards: gameCardsReducer,
    [rickandmortyApi.reducerPath]: rickandmortyApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(rickandmortyApi.middleware),
  preloadedState: typeof window !== 'undefined' ? window.__PRELOADED_STATE__ : undefined,
});

if (typeof window !== 'undefined' && typeof window.__PRELOADED_STATE__ !== 'undefined') {
  delete window.__PRELOADED_STATE__;
}

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
