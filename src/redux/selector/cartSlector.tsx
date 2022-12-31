import {RootState} from "../rootReducer";
export const getInfoCart=(state:RootState)=>state.cartSlice
export const getCountCart=(state:RootState)=>state.cartSlice.count
