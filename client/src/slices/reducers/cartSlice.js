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

      // for (let id of action.payload) {
      //   // console.log(id);
      //   state.cartData.carts[id] ? state.cartData.carts[id]++ : (state.cartData.carts[id] = 1);
      // }

      state.cartData.carts[action.payload]
        ? state.cartData.carts[action.payload]++
        : (state.cartData.carts[action.payload] = 1);

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
    addAllToCart: (state, action) => {
      state.cartData.cartNum += action.payload.length;

      for (let id of action.payload) {
        state.cartData.carts[id]
          ? state.cartData.carts[id]++
          : (state.cartData.carts[id] = 1);
      }
    },

    clearCart: (state, action) => {
      state.cartData = { cartNum: 0, carts: {} };
    },
  },
});

export default cartSlice.reducer;

export const { addToCart, addAllToCart,clearCart } = cartSlice.actions;
