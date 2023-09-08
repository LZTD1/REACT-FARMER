import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  active: false,
  modalData: {
    rating: null,
    seller: null,
    city: null,
    name: null,
    photo: null,
    price: null,
    purchases: null,
    type: null,
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
    resetModalWindow: (state) => {
      state.active = initialState.active;
      state.modalData = initialState.modalData;
    },
    setStateAndDataModalWindow: (state, action) => {
      state.active = action.payload.active;
      state.modalData = action.payload.modalData;
    },
  },
});

export const {
  setStateModalWindow,
  setModalData,
  resetModalWindow,
  setStateAndDataModalWindow,
} = modalWindowSlice.actions;

export default modalWindowSlice.reducer;
