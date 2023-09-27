import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { PageItem } from '../../@types/PageItem';

const initialState: PageItem = {
  item: null,
  status: { state: 'pending', meta: '' },
};

export const fetchItemById = createAsyncThunk<
  PageItem['item'],
  Record<string, string>
>('pageItem/fetchItemById', async (fetchedID, thunkAPI) => {
  const res = await axios.get<PageItem['item']>(
    `https://649d52b89bac4a8e669d91e8.mockapi.io/items/${fetchedID}`
  );
  if (res.data === null) {
    return thunkAPI.rejectWithValue('empty');
  } else {
    return {
      rating: res.data['rating'],
      seller: res.data['seller'],
      city: res.data['city'],
      name: res.data['name'],
      photo: res.data['photo'],
      price: res.data['price'],
      purchases: res.data['purchases'],
      type: res.data['type'],
      id: res.data['id'],
      comments: res.data['comments'],
      description: res.data['description'],
      category: res.data['category'],
    };
  }
});

const pageItem = createSlice({
  name: 'pageItem',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchItemById.pending, (state) => {
      state.status.state = 'pending';
      state.item = null;
    });
    builder.addCase(fetchItemById.fulfilled, (state, action) => {
      state.status.state = 'fulfilled';
      state.item = action.payload;
    });
    builder.addCase(fetchItemById.rejected, (state, action) => {
      state.status = { state: 'rejected', meta: action.payload as string };
      state.item = null;
    });
  },
});

export default pageItem.reducer;
