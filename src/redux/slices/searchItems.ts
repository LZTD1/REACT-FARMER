import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { ISearchItems, IItemInSearch } from '../../@types/redux/ISearchItems';

export const fetchItems = createAsyncThunk<IItemInSearch[], string>(
  'searchItems/fetchItems',
  async (value) => {
    const res = await axios.get<IItemInSearch[]>(
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

const initialState: ISearchItems = {
  items: [],
  status: {
    state: 'pending',
    meta: '',
  },
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
  extraReducers: (builder) => {
    builder.addCase(fetchItems.pending, (state) => {
      state.status.state = 'pending';
      state.items = [];
    });
    builder.addCase(fetchItems.fulfilled, (state, action) => {
      state.status.state = 'fulfilled';
      state.items = action.payload;
    });
    builder.addCase(fetchItems.rejected, (state, action) => {
      state.status = { state: 'rejected', meta: action.payload as string };
      state.items = [];
    });
  },
});

export const { setItems, resetItems } = searchItemsSlice.actions;

export default searchItemsSlice.reducer;
