import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sort: {
    name_ru: 'популярные',
    name_eng: 'ratingProduct',
    orderBy: 'desc',
  },
};

const localizationMap = {
  ratingProduct: {
    desc: 'популярные',
    asc: 'менее популярные',
  },
  pricePerKG: {
    desc: 'подороже',
    asc: 'подешевле',
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
      state.sort.name_ru =
        localizationMap[state.sort.name_eng][state.sort.orderBy];
    },
    setSortingOrderBy: (state, action) => {
      state.sort.orderBy = action.payload;
      state.sort.name_ru =
        localizationMap[state.sort.name_eng][state.sort.orderBy];
    },
    resetSorting: (state) => {
      state.sort = initialState.sort;
    },
  },
});

export const selectSort = (state) => state.popupSort.sort;

export const {
  setSortingBy,
  setSortingName_eng,
  setSortingOrderBy,
  resetSorting,
} = popupSlice.actions;

export default popupSlice.reducer;
