import {cartInterface} from '../types';
import {createSlice} from '@reduxjs/toolkit';
import {APP_SLICE} from '@types';

const initialState = {
  count: 0,
  list: [],
  total: 0,
} as cartInterface;

const totalPrice = (list: any) => {
  let total = 0;
  list.map((elm: any) => {
    total = total + elm?.product?.price * elm?.quantity;
  });
  return total;
};
const cartSlice = createSlice({
  name: APP_SLICE.CART_SLICE,
  initialState,
  reducers: {
    setListCart(state, action) {
      state.count = action.payload.length;
      state.list = action.payload;
      state.total = totalPrice(action.payload);
    },
    selectCart(state, action) {
      state.list = action.payload;
    },
  },
});
export const {setListCart, selectCart} = cartSlice.actions;
export default cartSlice.reducer;
