import { createSlice } from '@reduxjs/toolkit';
import { registerPropierty, getSearchedPropierties } from './propertiesAction';

const initialState = {
  propierties: [],
  error: null,
  createdPropierty: {},
  loading: false,
  success: false,
};

const propiertiesSlice = createSlice({
  name: 'propierties',
  initialState,
  reducers: {},
  extraReducers: {
    [getSearchedPropierties.fulfilled]: (state, { payload }) => {
      state.propierties = payload;
    },
    [getSearchedPropierties.rejected]: (state, { payload }) => {
      state.propierties = payload;
    },
    [registerPropierty.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.createdPropierty = payload;
    },
    [registerPropierty.pending]: (state, { payload }) => {
      state.loading = true;
      state.error = null;
    },
    [registerPropierty.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    // [clearCreatedBroker.fulfilled]: (state, { payload }) => {
    //   state.createdBroker = payload;
    // },
    // [clearCreatedBroker.rejected]: (state, { payload }) => {
    //   state.createdBroker = payload;
    // },
  },
});

export default propiertiesSlice.reducer;
