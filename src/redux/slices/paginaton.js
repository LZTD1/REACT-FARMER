import { createSlice } from '@reduxjs/toolkit';

const initialState = { pageNumber: 1, allPages: 3 };

const paginationSlice = createSlice({
  name: 'pagination',
  initialState: initialState,
  reducers: {
    setPageNumber: (state, action) => {
      state.pageNumber = action.payload;
    },
    resetPageNumber: (state) => {
      state.pageNumber = initialState.pageNumber;
    },
  },
});

export const { setPageNumber, resetPageNumber } = paginationSlice.actions;

export default paginationSlice.reducer;
