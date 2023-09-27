import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Pagination } from '../../@types/Pagination';

const initialState: Pagination = {
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
