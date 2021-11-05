import { createSlice } from '@reduxjs/toolkit';

export interface UIState {
  dark: boolean;
}

const initialState: UIState = {
  dark: false,
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.dark = !state.dark;
    },
  },
});

export const { toggleTheme } = uiSlice.actions;

export default uiSlice.reducer;
