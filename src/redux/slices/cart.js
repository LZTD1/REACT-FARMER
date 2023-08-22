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
      state.amnount = state.items.reduce((sum, item) => {
        return sum + item.pricePerKG * item.diliveryProperty.inputHowMutch;
      }, 0);
    },
    removeItems: (state, action) => {
      state.items = state.items.filter(
        (obj) => obj.orderDate !== action.payload
      );
      state.amnount = state.items.reduce((sum, item) => {
        return sum + item.pricePerKG * item.diliveryProperty.inputHowMutch;
      }, 0);
    },
  },
});

export const { addItem, removeItems } = cartSlice.actions;

export default cartSlice.reducer;
