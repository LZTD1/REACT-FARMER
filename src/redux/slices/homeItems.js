import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchItems = createAsyncThunk(
  'homeItems/fetchItems',
  async ({ currentPage, category, name_eng, orderBy }) => {
    const res = await axios.get(
      `https://649d52b89bac4a8e669d91e8.mockapi.io/items?page=${currentPage}&limit=12${category}&sortBy=${name_eng}&order=${orderBy}`
    );
    return res.data;
  }
);

const initialState = {
  items: [],
  status: 'pending',
};

const homeItemsSlice = createSlice({
  name: 'homeItems',
  initialState: initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
  },
  extraReducers: {
    [fetchItems.pending]: (state) => {
      state.status = 'pending';
      state.items = [];
    },
    [fetchItems.fulfilled]: (state, action) => {
      state.status = 'fulfilled';
      state.items = action.payload;
    },
    [fetchItems.rejected]: (state) => {
      state.status = 'rejected';
      state.items = [];
    },
  },
});

export const { setItems } = homeItemsSlice.actions;

export default homeItemsSlice.reducer;
