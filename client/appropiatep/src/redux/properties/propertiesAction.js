import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getSearchedPropierties = createAsyncThunk(
  'properties/searched',
  async ({ page, pageSize, projectname }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      if (projectname === '') {
        let info = await axios.get(
          `/propierties/find?page=${page}&pageSize=${pageSize}`,
          '',
          config
        );
        return info.data;
      } else {
        let info = await axios.get(
          `/propierties/searched/${projectname}?page=${page}&pageSize=${pageSize}`
        );
        return info.data;
      }
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

export const getPropiertyDetail = createAsyncThunk(
  'propierty/detail',
  async (id, { rejectWithValue }) => {
    try {
      const info = await axios.get(`/propierties/${id}`);
      //console.log(info.data);
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
