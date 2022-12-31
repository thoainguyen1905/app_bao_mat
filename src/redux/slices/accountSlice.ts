import {createSlice} from '@reduxjs/toolkit';
import {APP_SLICE} from '@types';
import {accountInterface} from '../types';

const initialState = {
  token: '',
  userProfile: {},
  address:[],
  addressSelect:{}
} as accountInterface;

const accountSlice = createSlice({
  name: APP_SLICE.ACCOUNT_SLICE,
  initialState,
  reducers: {
    setAccountToken(state, action) {
      state.token = action.payload;
    },
    setUserProfile(state, action) {
      state.userProfile = action.payload;
    },
    setAddressUserProfile(state, action) {
      state.address = action.payload;
    },
    setAddressSelect(state, action) {
      console.log({action})
      state.addressSelect = action.payload;
    },
    logoutUser(state) {
      state.token =''
      state.userProfile = {};
    },
  },
});

export const {setAccountToken, setUserProfile,logoutUser,setAddressUserProfile,setAddressSelect} = accountSlice.actions;
export default accountSlice.reducer;
