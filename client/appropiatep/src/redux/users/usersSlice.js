import { createSlice } from '@reduxjs/toolkit';
import {
  getSearchedUsers,
  getUsers,
  resetPassword,
  resetRecovery,
  resetState,
  updatePassword,
  updateRecovery,
  updateUsers,
  verifyUser,
} from './usersAction';

const initialState = {
  users: [],
  success: null,
  error: null,
  searchedUsers: [],
  verificationState: false,
  verificationLoading: null,
  passwordResetSucess: null,
  passwordResetLoading: null,
  passwordResetError: null,
  passwordUpdateSucess: null,
  passwordUpdateLoading: null,
  passwordUpdateError: null,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: {
    [getUsers.fulfilled]: (state, { payload }) => {
      state.users = payload;
    },
    [getUsers.rejected]: (state, { payload }) => {
      state.users = payload;
    },
    [updateUsers.fulfilled]: (state, { payload }) => {
      state.success = true;
    },
    [updateUsers.rejected]: (state, { payload }) => {
      state.error = true;
    },
    [getSearchedUsers.fulfilled]: (state, { payload }) => {
      state.searchedUsers = payload;
    },
    [getSearchedUsers.rejected]: (state, { payload }) => {
      state.searchedUsers = payload;
      state.error = true;
    },
    [verifyUser.fulfilled]: (state) => {
      state.verificationState = true;
      state.verificationLoading = false;
    },
    [verifyUser.pending]: (state) => {
      state.verificationLoading = true;
    },
    [resetPassword.fulfilled]: (state, { payload }) => {
      state.passwordResetSucess = payload;
      state.passwordResetLoading = false;
      state.passwordResetError = null;
    },
    [resetPassword.pending]: (state) => {
      state.passwordResetSucess = null;
      state.passwordResetError = null;
      state.passwordResetLoading = true;
    },
    [resetPassword.rejected]: (state, { payload }) => {
      state.passwordResetSucess = false;
      state.passwordResetLoading = false;
      state.passwordResetError = payload;
    },
    [updatePassword.fulfilled]: (state, { payload }) => {
      state.passwordUpdateSucess = payload;
      state.passwordUpdateLoading = false;
      state.passwordUpdateError = null;
    },
    [updatePassword.pending]: (state) => {
      state.passwordUpdateSucess = null;
      state.passwordUpdateError = null;
      state.passwordUpdateLoading = true;
    },
    [updatePassword.rejected]: (state, { payload }) => {
      state.passwordUpdateSucess = false;
      state.passwordUpdateLoading = false;
      state.passwordUpdateError = payload;
    },
    [resetRecovery.fulfilled]: (state, { payload }) => {
      state.passwordResetSucess = payload;
      state.passwordResetLoading = payload;
      state.passwordResetError = payload;
    },
    [updateRecovery.fulfilled]: (state) => {
      state.passwordUpdateSucess = null;
      state.passwordUpdateLoading = null;
      state.passwordUpdateError = null;
    },
    [resetState.fulfilled]: (state) => {
      state.passwordResetError = null;
      state.passwordResetLoading = null;
      state.passwordResetSucess = null;
    },
  },
});

export default usersSlice.reducer;
