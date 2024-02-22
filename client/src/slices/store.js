import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";
import authReducer from "./reducers/authSlice";
import cartReducer from './reducers/cartSlice';

export const store = configureStore({
  reducer: {
    // We can reuse the apiSlice.reducerPath field as a computed key in the reducer parameter, to ensure that the caching reducer is added in the right place.
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});
