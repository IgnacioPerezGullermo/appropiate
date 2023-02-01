import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getBrokers = createAsyncThunk('brokers/all', async () => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    let info = await axios.get('/broker', '', config);
    console.log(info.data);
    return info.data;
  } catch (error) {
    // return custom error message from backend if present
    if (error.response && error.response.data.message) {
      return rejectWithValue(error.response.data.message);
    } else {
      return rejectWithValue(error.message);
    }
  }
});

export const registerBroker = createAsyncThunk(
  'brokers/create',
  async (broker, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const info = await axios.post('/broker', broker, config);
      //console.log(info.data);
      let update = await axios.patch(
        `users/${info.data.userId}`,
        { brokerId: info.data.id },
        config
      );
      return info.data;
    } catch (error) {
      // return custom error message from backend if present
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const clearCreatedBroker = createAsyncThunk(
  'brokers/clear-created-broker',
  async ({ rejectWithValue }) => {
    try {
      const info = {};
      return info;
    } catch (error) {
      // return custom error message from backend if present
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
