import { createSlice } from '@reduxjs/toolkit';
import {
  createAppointment,
  getBrokers,
  getClients,
} from './appointmentsAction';

const initialState = {
  loading: false,
  error: null,
  success: null,
  clients: [],
  brokers: [],
  appointments: [],
};

const appointmentsSlice = createSlice({
  name: 'appointments',
  initialState,
  reducers: {},
  extraReducers: {
    [getBrokers.fulfilled]: (state, { payload }) => {
      state.brokers = payload;
    },
    [getBrokers.rejected]: (state, { payload }) => {
      state.error = payload;
    },
    [getClients.fulfilled]: (state, { payload }) => {
      state.clients = payload;
    },
    [getClients.rejected]: (state, { payload }) => {
      state.error = payload;
    },
    [createAppointment.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
    },
    [createAppointment.pending]: (state, { payload }) => {
      state.loading = true;
      state.error = null;
    },
    [createAppointment.rejected]: (state, { payload }) => {
      state.loading = false;
      state.success = false;
      state.error = payload;
    },
  },
});

export default appointmentsSlice.reducer;
