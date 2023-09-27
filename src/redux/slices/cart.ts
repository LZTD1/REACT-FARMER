import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ICartSlice, IItemInCart } from '../../@types/MainTypes';
import { RootState } from '../store';

const saveCartToLocalStorage = (cartState: ICartSlice) => {
  try {
    const serializedCartState = JSON.stringify(cartState);
    localStorage.setItem('cart', serializedCartState);
  } catch (error) {
    console.error('Ошибка сохранения в локальное хранилище:', error);
  }
};
const loadCartFromLocalStorage = (): ICartSlice | null => {
  try {
    const serializedCartState = localStorage.getItem('cart');
    if (serializedCartState === null) {
      return null;
    }
    return JSON.parse(serializedCartState);
  } catch (error) {
    console.error('Ошибка загрузки из локального хранилища:', error);
    return null;
  }
};

const initialState: ICartSlice = loadCartFromLocalStorage() || {
  amnount: 0,
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addItem: (state, action: PayloadAction<IItemInCart>) => {
      state.items.push(action.payload);
      state.amnount = state.items.reduce((sum, item) => {
        return sum + item.price * item.diliveryProperty.inputHowMutch;
      }, 0);

      saveCartToLocalStorage(state);
    },
    removeItems: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(
        (obj) => obj.orderDate !== action.payload
      );
      state.amnount = state.items.reduce((sum, item) => {
        return sum + item.price * item.diliveryProperty.inputHowMutch;
      }, 0);

      saveCartToLocalStorage(state);
    },
  },
});

export const selectCart = (state: RootState) => [
  state.cart.amnount,
  state.cart.items.length,
];

export const { addItem, removeItems } = cartSlice.actions;

export default cartSlice.reducer;
