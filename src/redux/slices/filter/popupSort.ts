import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { IPopupSlice, IPopupSliceData } from '../../../@types/MainTypes';

const initialState: IPopupSlice = {
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
    setSortingBy: (state, action: PayloadAction<IPopupSliceData>) => {
      state.sort = action.payload;
    },
    setSortingName_eng: (state, action: PayloadAction<IPopupSliceData['name_eng']>) => {
      state.sort.name_eng = action.payload;
      state.sort.name_ru =
        localizationMap[state.sort.name_eng][state.sort.orderBy];
    },
    setSortingOrderBy: (state, action: PayloadAction<IPopupSliceData['orderBy']>) => {
      state.sort.orderBy = action.payload;
      state.sort.name_ru =
        localizationMap[state.sort.name_eng][state.sort.orderBy];
    },
    resetSorting: (state) => {
      state.sort = initialState.sort;
    },
  },
});

export const selectSort = (state: RootState) => state.popupSort.sort;

export const {
  setSortingBy,
  setSortingName_eng,
  setSortingOrderBy,
  resetSorting,
} = popupSlice.actions;

export default popupSlice.reducer;
