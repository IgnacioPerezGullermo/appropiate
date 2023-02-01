import { createSlice } from '@reduxjs/toolkit';
import {
  clearCreatedBroker,
  getBrokers,
  registerBroker,
} from './brokersAction';

const initialState = {
  brokers: [],
  error: null,
  createdBroker: {},
  loading: false,
  success: false,
};

const brokersSlice = createSlice({
  name: 'brokers',
  initialState,
  reducers: {},
  extraReducers: {
    [getBrokers.fulfilled]: (state, { payload }) => {
      state.brokers = payload;
    },
    [getBrokers.rejected]: (state, { payload }) => {
      state.brokers = payload;
    },
    [registerBroker.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.createdBroker = payload;
    },
    [registerBroker.pending]: (state, { payload }) => {
      state.loading = true;
      state.error = null;
    },
    [registerBroker.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [clearCreatedBroker.fulfilled]: (state, { payload }) => {
      state.createdBroker = payload;
    },
    [clearCreatedBroker.rejected]: (state, { payload }) => {
      state.createdBroker = payload;
    },
  },
});

export default brokersSlice.reducer;
