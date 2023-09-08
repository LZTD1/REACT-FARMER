import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  item: [],
  status: { state: 'pending', meta: '' },
};

export const fetchItemById = createAsyncThunk(
  'pageItem/fetchItemById',
  async (fetchedID, thunkAPI) => {
    const res = await axios.get(
      `https://649d52b89bac4a8e669d91e8.mockapi.io/items/${fetchedID}`
    );
    return {
      rating: res.data['rating'],
      seller: res.data['seller'],
      city: res.data['city'],
      name: res.data['name'],
      photo: res.data['photo'],
      price: res.data['price'],
      purchases: res.data['purchases'],
      type: res.data['type'],
      description: res.data['description'],
      comments: res.data['comments'],
    };
  }
);

const pageItem = createSlice({
  name: 'pageItem',
  initialState: initialState,

  extraReducers: {
    [fetchItemById.pending]: (state) => {
      state.status.state = 'pending';
      state.items = [];
    },
    [fetchItemById.fulfilled]: (state, action) => {
      state.status.state = 'fulfilled';
      state.items = action.payload;
    },
    [fetchItemById.rejected]: (state, action) => {
      state.status = { state: 'rejected', meta: action.payload };
      state.items = [];
    },
  },
});

export default pageItem.reducer;
