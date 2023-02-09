import { createSlice } from '@reduxjs/toolkit';
import { getSearchedUsers, getUsers, updateUsers } from './usersAction';

const initialState = {
  users: [],
  success: null,
  error: null,
  searchedUsers: [],
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
  },
});

export default usersSlice.reducer;
