import { configureStore } from '@reduxjs/toolkit';

import category from './slices/filter/category';
import popupSort from './slices/filter/popupSort';

export const store = configureStore({
  reducer: {
    categorySort: category,
    popupSort: popupSort,
  },
});
