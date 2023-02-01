import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getClients = createAsyncThunk('appointment/clients', async () => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const info = await axios.get('users/client', '', config);
    //console.log(info);
    return info.data;
  } catch (error) {
    if (error.response && error.response.data.message) {
      return rejectWithValue(error.response.data.message);
    } else {
      return rejectWithValue(error.message);
    }
  }
});

export const getBrokers = createAsyncThunk('appointment/brokers', async () => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const info = await axios.get('users/broker', '', config);
    //console.log(info.data);
    return info.data;
  } catch (error) {
    if (error.response && error.response.data.message) {
      return rejectWithValue(error.response.data.message);
    } else {
      return rejectWithValue(error.message);
    }
  }
});

export const createAppointment = createAsyncThunk(
  'appointment/create',
  async (appointment, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const info = await axios.post('appointment', appointment, config);
      console.log(info);
      return info.data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
