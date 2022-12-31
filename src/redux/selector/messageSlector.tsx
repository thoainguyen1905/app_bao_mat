import {RootState} from "../rootReducer";
export const getCountMessage=(state:RootState)=> state.messageSlice.count
export const getMessage=(state:RootState)=> state.messageSlice.list
