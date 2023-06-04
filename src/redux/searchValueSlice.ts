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
      state.value = action.payload;
    },
  },
});

export const { setSearchValue } = searchValueSlice.actions;

export default searchValueSlice.reducer;
