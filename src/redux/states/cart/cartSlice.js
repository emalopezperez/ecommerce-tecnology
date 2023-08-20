import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalCount: 0,
  productsList: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
  }
})


export const { } = cartSlice.actions;

export default cartSlice.reducer;