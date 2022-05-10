import { configureStore } from "@reduxjs/toolkit";
import wishlistReducer from './wishlistReducer';
import cartReducer from './cartReducer'

export const store = configureStore({
    reducer: {
      cartIds : cartReducer,
      wishlistIds: wishlistReducer
    }
  });