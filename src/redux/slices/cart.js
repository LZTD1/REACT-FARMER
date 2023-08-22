import { createSlice } from '@reduxjs/toolkit';

const saveCartToLocalStorage = (cartState) => {
  try {
    const serializedCartState = JSON.stringify(cartState);
    localStorage.setItem('cart', serializedCartState);
  } catch (error) {
    console.error('Ошибка сохранения в локальное хранилище:', error);
  }
};
const loadCartFromLocalStorage = () => {
  try {
    const serializedCartState = localStorage.getItem('cart');
    if (serializedCartState === null) {
      return undefined;
    }
    return JSON.parse(serializedCartState);
  } catch (error) {
    console.error('Ошибка загрузки из локального хранилища:', error);
    return undefined;
  }
};

const initialState = loadCartFromLocalStorage() || {
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

      saveCartToLocalStorage(state);
    },
    removeItems: (state, action) => {
      state.items = state.items.filter(
        (obj) => obj.orderDate !== action.payload
      );
      state.amnount = state.items.reduce((sum, item) => {
        return sum + item.pricePerKG * item.diliveryProperty.inputHowMutch;
      }, 0);

      saveCartToLocalStorage(state);
    },
  },
});

export const { addItem, removeItems } = cartSlice.actions;

export default cartSlice.reducer;
