import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sort: {
    name_ru: 'популярные',
    name_eng: 'ratingProduct',
    orderBy: 'desc',
  },
};

const popupSlice = createSlice({
  name: 'popup',
  initialState: initialState,
  reducers: {
    setSortingBy: (state, action) => {
      state.sort = action.payload;
    },
    setSortingName_eng: (state, action) => {
      state.sort.name_eng = action.payload;
    },
    setSortingOrderBy: (state, action) => {
      state.sort.orderBy = action.payload;
    },
  },
});

export const { setSortingBy, setSortingName_eng, setSortingOrderBy } = popupSlice.actions;

export default popupSlice.reducer;
