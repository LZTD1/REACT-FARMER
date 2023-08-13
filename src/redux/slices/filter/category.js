import { createSlice } from '@reduxjs/toolkit';

const initialState = { categoryId: 0 };

const categorySlice = createSlice({
  name: 'category',
  initialState: initialState,
  reducers: {
    setCategoryId: (state, action) => {
      state.categoryId = action.payload;
    },
    resetCategoryId: (state) => {
      state.categoryId = initialState.categoryId;
    },
  },
});

export const { setCategoryId, resetCategoryId } = categorySlice.actions;

export default categorySlice.reducer;
