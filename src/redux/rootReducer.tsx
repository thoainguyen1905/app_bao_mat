import {combineReducers} from 'redux';
// import  from './slices';
import accountSlice from './slices/accountSlice';
import bottomTabSlice from './slices/bottomTabSlice';
import messageSlice from "./slices/messageSlice";
import categorySlice from "./slices/categorySlice";
import cartSlice from "./slices/cartSlices";
import orderSlice from "./slices/orderSlice";

const rootReducer = combineReducers({
  accountSlice: accountSlice,
  bottomTabSlice: bottomTabSlice,
  messageSlice:messageSlice,
  categorySlice:categorySlice,
  cartSlice:cartSlice,
  orderSlice:orderSlice
});
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
