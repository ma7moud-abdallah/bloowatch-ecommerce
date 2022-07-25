import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartReducer";
import productsReducer from "./storeReducer";

export default configureStore({
  reducer: { data: productsReducer, cart: cartReducer },
});