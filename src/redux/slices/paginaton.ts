import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IPagination } from '../../@types/redux/IPagination';

const initialState: IPagination = {
  pageNumber: 1,
  allPages: 3,
};

const paginationSlice = createSlice({
  name: 'pagination',
  initialState: initialState,
  reducers: {
    setPageNumber: (state, action: PayloadAction<number>) => {
      state.pageNumber = action.payload;
    },
    resetPageNumber: (state) => {
      state.pageNumber = initialState.pageNumber;
    },
  },
});

export const { setPageNumber, resetPageNumber } = paginationSlice.actions;

export default paginationSlice.reducer;
