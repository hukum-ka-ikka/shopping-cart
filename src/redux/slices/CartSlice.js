import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  cartItems: [],
  totalAmount: 0,
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = { ...action.payload, quantity: 1 };
      state.count += 1;
      state.cartItems.push(item);
      state.totalAmount += Number(action.payload.price);
    },

    removeFromCart: (state, action) => {
      const index = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.count -= 1;
      state.cartItems.splice(index, 1);
      state.totalAmount -= Number(action.payload.price);
    },

    addQuantity: (state, action) => {
      const index = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.count += 1;
      state.cartItems[index].quantity += 1;
      state.totalAmount += Number(action.payload.price);
    },

    reduceQuantity: (state, action) => {
      const index = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.count -= 1;
      state.cartItems[index].quantity === 1
        ? state.cartItems.splice(index, 1)
        : (state.cartItems[index].quantity -= 1);
      state.totalAmount -= Number(action.payload.price);
    },
  },
});

export const { addToCart, removeFromCart, addQuantity, reduceQuantity } =
  CartSlice.actions;

export default CartSlice.reducer;
