import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IModalWindowSlice } from '../../@types/redux/IModalWindow';

const initialState: IModalWindowSlice = {
  active: false,
  modalData: {
    id: null,
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
    setStateModalWindow: (state, action: PayloadAction<boolean>) => {
      state.active = action.payload;
    },
    setModalData: (
      state,
      action: PayloadAction<IModalWindowSlice['modalData']>
    ) => {
      state.modalData = action.payload;
    },
    resetModalWindow: (state) => {
      state.active = initialState.active;
      state.modalData = initialState.modalData;
    },
    setStateAndDataModalWindow: (
      state,
      action: PayloadAction<IModalWindowSlice>
    ) => {
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
