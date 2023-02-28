import { createSlice } from '@reduxjs/toolkit';
import {
  authAdminLogin,
  logOut,
  refreshInfo,
  registerUser,
  userLogin,
} from './authAction';

const initialState = {
  loading: false,
  userInfo: [], // for user object
  userToken: null, // for storing the JWT
  error: null,
  success: null, // for monitoring the registration process.
  admin: false,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: {
    [refreshInfo.fulfilled]: (state, { payload }) => {
      state.userInfo = payload;
    },
    [refreshInfo.pending]: (state) => {
      state.loading = true;
    },
    [userLogin.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [userLogin.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.userInfo = payload.client;
      state.userToken = payload.token;
    },
    [userLogin.rejected]: (state, { payload }) => {
      state.success = false;
      state.loading = false;
      state.error = payload;
    },
    [registerUser.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true; // registration successful
      state.userInfo = payload.user;
      state.userToken = payload.token;
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [authAdminLogin.fulfilled]: (state, { payload }) => {
      state.success = true;
      state.admin = true;
    },
    [authAdminLogin.rejected]: (state, { payload }) => {
      state.error = payload;
      state.success = false;
      state.loading = false;
    },
    [logOut.fulfilled]: (state, { payload }) => {
      state.userInfo = {};
      state.userToken = null;
      state.success = null;
    },
  },
});

export default authSlice.reducer;
