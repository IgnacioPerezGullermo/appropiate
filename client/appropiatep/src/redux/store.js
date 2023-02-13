import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { applyMiddleware, compose, createStore } from 'redux';

import appointmentsReducer from './appointments/appointmentsSlice';
import authReducer from './auth/authSlice';
import brokersReducer from './brokers/brokersSlice';
import propiertiesReducer from './properties/propertiesSlice';
import usersReducer from './users/usersSlice';

const composeEnhancer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

const store = configureStore({
  reducer: {
    auth: authReducer,
    brokers: brokersReducer,
    appointments: appointmentsReducer,
    propierties: propiertiesReducer,
    users: usersReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});

export default store;
