import { createSlice } from '@reduxjs/toolkit';
import { getUsers, updateUsers } from './usersAction';

const initialState = {
  users: [],
  success: null,
  error: null,
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
  },
});

export default usersSlice.reducer;
