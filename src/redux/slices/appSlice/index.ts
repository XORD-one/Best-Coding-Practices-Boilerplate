import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppState } from './app.types';

const initialState: AppState = {
  value: 0,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setValue: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

export const { setValue } = appSlice.actions;

export default appSlice.reducer;
