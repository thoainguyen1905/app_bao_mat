import {createSlice} from '@reduxjs/toolkit';
import {APP_SLICE} from '@types';
import {categoryInterface} from "../types";
const initialState = {
    list:[]
} as categoryInterface;
const categorySlice =createSlice({
    name:APP_SLICE.CATEGORY_SLICE,
    initialState,
    reducers:{
        setCategory(state,action){
            state.list=action.payload
        }
    }
})
export const {setCategory}=categorySlice.actions
export default categorySlice.reducer
