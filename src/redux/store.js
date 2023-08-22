import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./states/cart/cartSlice";
import productsReducer from "./states/products/productsSlice";

export default configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer
  },
})