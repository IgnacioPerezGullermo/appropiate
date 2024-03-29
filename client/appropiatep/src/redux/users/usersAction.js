import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getUsers = createAsyncThunk('users/all', async () => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    let info = await axios.get('users', '', config);
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

export const updateUsers = createAsyncThunk(
  'users/update',
  async (user, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      console.log(user);
      let info = await axios.patch(`users/${user.id}`, user.info, config);
      console.log(info.data);
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

export const getSearchedUsers = createAsyncThunk(
  'users/searched',
  async (username) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      if (username === '') {
        let info = await axios.get('/users/find', '', config);
        return info.data;
      } else {
        let info = await axios.get(`/users/search/${username}`);
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

export const verifyUser = createAsyncThunk(
  'users/update',
  async (id, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      //console.log(id);
      let info = await axios.patch(`users/verify/${id}`, { id: id }, config);
      console.log(info.data);
      return info.data;
    } catch (error) {
      console.log(error);
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const resetPassword = createAsyncThunk(
  'users/reset',
  async (email, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      //console.log(id);
      let info = await axios.get(`users/password/reset/${email}`, config);
      return 'Enviamos a tu casilla de mail un link para recuperar tu contraseña';
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const updatePassword = createAsyncThunk(
  'users/update',
  async (user, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      let info = await axios.patch(
        `users/password/update/${user.id}`,
        { password: user.password },
        config
      );
      return 'Tu contraseña fue actualizada con exito';
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const resetRecovery = createAsyncThunk(
  'users/resetcleanup',
  async ({ rejectWithValue }) => {
    console.log('soy el recovery');
    return null;
  }
);

export const resetState = createAsyncThunk(
  'resetState',
  async (value, { rejectWithValue }) => {
    try {
      console.log('soy el recovery');
      return value;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const updateRecovery = createAsyncThunk(
  'users/updatecleanup',
  async ({ rejectWithValue }) => {
    try {
      return null;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
