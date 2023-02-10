import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// export const getBrokers = createAsyncThunk(
//   'brokers/all',
//   async ({ page, pageSize }) => {
//     try {
//       const config = {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       };
//       let info = await axios.get(
//         `/broker?page=${page}&pageSize=${pageSize}`,
//         '',
//         config
//       );
//       console.log(info.data);
//       return info.data;
//     } catch (error) {
//       // return custom error message from backend if present
//       if (error.response && error.response.data.message) {
//         return rejectWithValue(error.response.data.message);
//       } else {
//         return rejectWithValue(error.message);
//       }
//     }
//   }
// );

export const registerPropierty = createAsyncThunk(
  'propierties/create',
  async (propierty, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const info = await axios.post('/propierties', propierty, config);
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

// export const clearCreatedBroker = createAsyncThunk(
//   'brokers/clear-created-broker',
//   async ({ rejectWithValue }) => {
//     try {
//       const info = {};
//       return info;
//     } catch (error) {
//       // return custom error message from backend if present
//       if (error.response && error.response.data.message) {
//         return rejectWithValue(error.response.data.message);
//       } else {
//         return rejectWithValue(error.message);
//       }
//     }
//   }
// );
