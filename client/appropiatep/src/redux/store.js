import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { applyMiddleware, compose, createStore } from 'redux';

import appointmentsReducer from './appointments/appointmentsSlice';
import authReducer from './auth/authSlice';
import brokersReducer from './brokers/brokersSlice';
import clientsReducer from './clients/clientsSlice';
import propiertiesReducer from './properties/propertiesSlice';
import usersReducer from './users/usersSlice';

const composeEnhancer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

const store = configureStore({
  reducer: {
    appointments: appointmentsReducer,
    auth: authReducer,
    brokers: brokersReducer,
    clients: clientsReducer,
    propierties: propiertiesReducer,
    users: usersReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});

export default store;
