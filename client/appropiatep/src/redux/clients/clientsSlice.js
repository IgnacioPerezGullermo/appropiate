import { createSlice } from '@reduxjs/toolkit';
import { createClient } from './clientsAction';

const initialState = {
  clients: [],
  error: null,
  createdClient: {},
  loading: false,
  success: false,
};

const clientsSlice = createSlice({
  name: 'clients',
  initialState,
  reducers: {},
  extraReducers: {
    //   [getBrokers.fulfilled]: (state, { payload }) => {
    //     state.brokers = payload;
    //   },
    //   [getBrokers.rejected]: (state, { payload }) => {
    //     state.brokers = payload;
    //   },
    [createClient.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.createdClient = payload;
    },
    [createClient.pending]: (state, { payload }) => {
      state.loading = true;
      state.error = null;
    },
    [createClient.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    //   [clearCreatedBroker.fulfilled]: (state, { payload }) => {
    //     state.createdBroker = payload;
    //   },
    //   [clearCreatedBroker.rejected]: (state, { payload }) => {
    //     state.createdBroker = payload;
    //   },
  },
});

export default clientsSlice.reducer;
