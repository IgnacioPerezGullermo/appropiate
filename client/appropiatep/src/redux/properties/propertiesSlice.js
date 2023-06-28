import { createSlice } from '@reduxjs/toolkit';
import {
  clearPropiertyDetail,
  getPropiertyDetail,
  getSearchedPropierties,
  getUFData,
  registerPropierty,
} from './propertiesAction';

const initialState = {
  propierties: [],
  propiertyDetail: {},
  error: null,
  createdPropierty: {},
  UFValue: '',
  UFDate: '',
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
    [getPropiertyDetail.fulfilled]: (state, { payload }) => {
      state.propiertyDetail = payload;
    },
    [clearPropiertyDetail.fulfilled]: (state, { payload }) => {
      state.propiertyDetail = payload;
    },
    [getUFData.fulfilled]: (state, { payload }) => {
      state.UFValue = payload.Valor;
      state.UFDate = payload.Fecha;
    },
  },
});

export default propiertiesSlice.reducer;
