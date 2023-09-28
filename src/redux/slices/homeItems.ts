import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { IHomeItemsSlice } from '../../@types/redux/IHomeItems';
import { IPizzaItem } from '../../@types/MainTypes';

// returned , arg

export const fetchItems = createAsyncThunk<
  IPizzaItem[],
  Record<string, string>
>(
  'homeItems/fetchItems',
  async ({ currentPage, category, name_eng, orderBy }, thunkAPI) => {
    const res = await axios.get<IPizzaItem[]>(
      `https://649d52b89bac4a8e669d91e8.mockapi.io/items?page=${currentPage}&limit=12${category}&sortBy=${name_eng}&order=${orderBy}`
    );

    if (res.data.length === 0) {
      return thunkAPI.rejectWithValue('empty');
    }
    return res.data.map((obj) => {
      return {
        rating: obj['rating'],
        seller: obj['seller'],
        city: obj['city'],
        name: obj['name'],
        photo: obj['photo'],
        price: obj['price'],
        purchases: obj['purchases'],
        type: obj['type'],
        id: obj['id'],
        comments: obj['comments'],
        description: obj['description'],
        category: obj['category'],
      };
    });
  }
);

const initialState: IHomeItemsSlice = {
  items: [],
  status: { state: 'pending', meta: '' },
};

const homeItemsSlice = createSlice({
  name: 'homeItems',
  initialState: initialState,
  reducers: {
    setItems: (state, action: PayloadAction<IPizzaItem[]>) => {
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

export const { setItems } = homeItemsSlice.actions;

export default homeItemsSlice.reducer;
