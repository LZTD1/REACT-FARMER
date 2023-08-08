import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sort: {
    name: 'популярные',
    orderBy: 'ratingProduct',
    sortBy: 'desc',
  },
};

const popupSlice = createSlice({
  name: 'popup',
  initialState: initialState,
  reducers: {
    setSortingBy: (state, action) => {
      state.sort = action.payload;
    },
  },
});

export const { setSortingBy } = popupSlice.actions;

export default popupSlice.reducer;
