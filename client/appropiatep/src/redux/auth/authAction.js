import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const registerUser = createAsyncThunk(
  'auth/register',
  async (user, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const info = await axios.post('/auth/users/signup', user, config);
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
export const refreshInfo = createAsyncThunk(
  'auth/refresh',
  async (id, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      //console.log(id);
      let info = await axios.get(`/users/${id}`, config);
      console.log(info.data);
      return info.data;
    } catch (error) {
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
export const userLogin = createAsyncThunk(
  'auth/login',
  async (user, { rejectWithValue }) => {
    try {
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const info = await axios.post('/auth/clients/login', user, config);
      console.log(info.data.client);
      // store user's token in local storage
      localStorage.setItem('userToken', info.data.token);
      return info.data;
    } catch (error) {
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const authAdminLogin = createAsyncThunk(
  'auth/login/admin',
  async (user, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const info = await axios.post('/auth/admin/login', user, config);
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
export const logOut = createAsyncThunk(
  'auth/logout',
  async (some, { rejectWithValue }) => {
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
