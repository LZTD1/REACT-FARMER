import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchItems = createAsyncThunk(
  'searchItems/fetchItems',
  async (value) => {
    const res = await axios.get(
      `https://649d52b89bac4a8e669d91e8.mockapi.io/items?search=${value}`
    );
    return res.data.map((obj, key) => {
      return {
        type: obj['type'],
        price: obj['price'],
        photo: obj['photo'],
        name: obj['name'],
        seller: obj['seller'],
        city: obj['city'],
        id: obj['id'],
      };
    });
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
    resetItems: (state) => {
      state.items = initialState.items;
      state.status = initialState.status;
    },
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

export const { setItems, resetItems } = searchItemsSlice.actions;

export default searchItemsSlice.reducer;
