import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./states/cart/cartSlice";

export default configureStore({
  reducer: {
    cart: cartReducer
  },
})