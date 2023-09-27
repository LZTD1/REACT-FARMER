import { configureStore } from '@reduxjs/toolkit';

import category from './slices/filter/category';
import popupSort from './slices/filter/popupSort';
import paginaton from './slices/paginaton';
import modalWindow from './slices/modalWindow';
import cart from './slices/cart';
import homeItems from './slices/homeItems';
import searchItems from './slices/searchItems';
import pageItem from './slices/pageItem';

const store = configureStore({
  reducer: {
    categorySort: category,
    popupSort: popupSort,
    paginaton: paginaton,
    modalWindow: modalWindow,
    cart: cart,
    homeItems: homeItems,
    searchItems: searchItems,
    pageItem: pageItem,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
