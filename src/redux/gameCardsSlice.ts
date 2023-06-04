import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { GameCardData } from '../components/GameCard/GameCard';

export interface GameCardsState {
  list: GameCardData[];
}

const initialState: GameCardsState = {
  list: [],
};

export const gameCardsSlice = createSlice({
  name: 'GameCards',
  initialState,
  reducers: {
    addGameCard: (state, action: PayloadAction<GameCardData>) => {
      state.list = [...state.list, action.payload];
    },
  },
});

export const { addGameCard } = gameCardsSlice.actions;

export default gameCardsSlice.reducer;
