import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  amnount: 0,
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItems: (state, action) => {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
    },
  },
});

export const { addItem, removeItems } = cartSlice.actions;

export default cartSlice.reducer;
