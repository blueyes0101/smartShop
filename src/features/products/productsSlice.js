import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  filter: {
    category: '',
    priceRange: [0, 100],
  },
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts(state, action) {
      state.items = action.payload;
    },
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { setProducts, setFilter } = productsSlice.actions;
export default productsSlice.reducer;
