import {RootState} from "../rootReducer";
export const getListOrder=(state:RootState)=>state.orderSlice.list
export const getStatusOrder=(state:RootState)=>state.orderSlice.status
