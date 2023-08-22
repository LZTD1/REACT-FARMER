import { configureStore } from '@reduxjs/toolkit';

import category from './slices/filter/category';
import popupSort from './slices/filter/popupSort';
import paginaton from './slices/paginaton';
import modalWindow from './slices/modalWindow';
import cart from './slices/cart';

export const store = configureStore({
  reducer: {
    categorySort: category,
    popupSort: popupSort,
    paginaton: paginaton,
    modalWindow: modalWindow,
    cart: cart,
  },
});
