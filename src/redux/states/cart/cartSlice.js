import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalCount: 0,
  productsList: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProductToCart: (state, action) => {
      state.productsList = [...state.productsList, action.payload];
      state.totalCount += 1;

      localStorage.setItem('cartState', JSON.stringify(state));
      localStorage.setItem('cartTotalCount', state.totalCount)
    },
    removeProductCart: (state, action) => {
      const productId = action.payload;
      state.totalCount -= 1;
      state.productsList = state.productsList.filter(product => product.id !== productId);

      localStorage.setItem('cartState', JSON.stringify(state));
      localStorage.setItem('cartTotalCount', state.totalCount);
    },
  }
})


export const { addProductToCart, removeProductCart } = cartSlice.actions;

export default cartSlice.reducer;