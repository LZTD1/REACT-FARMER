import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { ICategorySlice } from '../../../@types/redux/ICategorySlice';

const initialState: ICategorySlice = { categoryId: 0 };

const categorySlice = createSlice({
  name: 'category',
  initialState: initialState,
  reducers: {
    setCategoryId: (state, action: PayloadAction<number>) => {
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
