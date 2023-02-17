import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const createClient = createAsyncThunk(
  'clients/create',
  async (client, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const info = await axios.post('/clients ', client, config);
      let update = await axios.patch(
        `users/${info.data.userId}`,
        { clientId: info.data.id },
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
