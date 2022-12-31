import {createSlice} from '@reduxjs/toolkit';
import {APP_SLICE} from '@types';
import { messageInterface} from '../types';

const initialState = {
    count: 0,
    list: [],
} as messageInterface;

const messageSlice = createSlice({
    name: APP_SLICE.MESSAGE_SLICE,
    initialState,
    reducers: {
        setCountMessage(state, action) {
            state.count = action.payload;
        },
        setListMessage(state, action) {
            state.list = action.payload;
        }
    },
});

export const {setCountMessage, setListMessage} = messageSlice.actions;
export default messageSlice.reducer;
