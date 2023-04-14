import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface SearchValueState {
  value: string;
}

const initialState: SearchValueState = {
  value: '',
};

export const searchValueSlice = createSlice({
  name: 'searchValue',
  initialState,
  reducers: {
    setSearchValue: (state, action: PayloadAction<string>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSearchValue } = searchValueSlice.actions;

export default searchValueSlice.reducer;
