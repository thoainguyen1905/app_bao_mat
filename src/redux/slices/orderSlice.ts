import { orderInterface} from "../types";
import {createSlice} from "@reduxjs/toolkit";
import {APP_SLICE} from "@types";

const initialState = {
    status: 0,
    list:[],
} as orderInterface;

const orderSlice =createSlice({
    name:APP_SLICE.CART_SLICE,
    initialState,
    reducers:{
        setListOrder(state,action){
            state.status=action.payload.status;
            state.list=action.payload.list;
        }
    }
})
export const {setListOrder}=orderSlice.actions;
export default orderSlice.reducer;
