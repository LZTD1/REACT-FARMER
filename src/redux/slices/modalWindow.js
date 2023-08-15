import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  active: false,
  modalData: {
    ratingProduct: null,
    sellerCity: null,
    sellerName: null,
    name: null,
    photo: null,
    pricePerKG: null,
    type: null,
    buyProduct: null,
  },
};

const modalWindowSlice = createSlice({
  name: 'modalWindow',
  initialState: initialState,
  reducers: {
    setStateModalWindow: (state, action) => {
      state.active = action.payload;
    },
    setModalData: (state, action) => {
      state.modalData = action.payload;
    },
  },
});

export const { setStateModalWindow, setModalData } = modalWindowSlice.actions;

export default modalWindowSlice.reducer;
