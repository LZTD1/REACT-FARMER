import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchItems = createAsyncThunk(
  'searchItems/fetchItems',
  async (value) => {
    const res = await axios.get(
      `https://649d52b89bac4a8e669d91e8.mockapi.io/items?search=${value}`
    );
    return res.data;
  }
);

const initialState = {
  items: [],
  status: 'pending',
};

const searchItemsSlice = createSlice({
  name: 'searchItems',
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

export const { setItems } = searchItemsSlice.actions;

export default searchItemsSlice.reducer;
