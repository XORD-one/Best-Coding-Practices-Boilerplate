import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState } from './auth.types';

const initialState: AuthState = {
  value: 0,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setValue: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

export const { setValue } = authSlice.actions;

export default authSlice.reducer;
