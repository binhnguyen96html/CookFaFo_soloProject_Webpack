import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartData: localStorage.getItem("cartData")
    ? JSON.parse(localStorage.getItem("cartData"))
    : { cartNum: 0, carts: {} },
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartData.cartNum++;

      for (let id of action.payload) {
        // console.log(id);
        state.cartData.carts[id] ? state.cartData.carts[id]++ : (state.cartData.carts[id] = 1);
      }

      localStorage.setItem(
        "cartData",
        JSON.stringify({
          cartData: {
            cartNum: state.cartNum,
            carts: state.carts,
          },
        })
      );
    },
    clearCart: (state, action) => {
      state.cartData = { cartNum: 0, carts: {} };
    },
  },
});

export default cartSlice.reducer;

export const { addToCart, clearCart } = cartSlice.actions;
