import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ICategorySlice, ITypesProduct } from '../../../@types/MainTypes';
import { RootState } from '../../store';

const initialState: ICategorySlice = { categoryId: 0 };

const categorySlice = createSlice({
  name: 'category',
  initialState: initialState,
  reducers: {
    setCategoryId: (state, action: PayloadAction<ITypesProduct>) => {
      state.categoryId = action.payload;
    },
    resetCategoryId: (state) => {
      state.categoryId = initialState.categoryId;
    },
  },
});

export const selectCategoryId = (state: RootState) =>
  state.categorySort.categoryId;

export const { setCategoryId, resetCategoryId } = categorySlice.actions;

export default categorySlice.reducer;
