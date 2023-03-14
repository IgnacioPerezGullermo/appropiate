import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const secondAPI = axios.create({
  baseURL: 'https://api.cmfchile.cl',
});
const apiKey = import.meta.env.UF_API_KEY;

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

export const getUFData = createAsyncThunk(
  'propierty/Uf',
  async ({ rejectWithValue }) => {
    try {
      secondAPI
        .get(
          '/api-sbifv3/recursos_api/uf?apikey=37d5541b50a3e72b425781f8d5ada51aff9ee8a8&formato=JSON'
        )
        .then((response) => {
          let data = response.data.UFs[0];
          console.log(data);
          return data;
        });
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
