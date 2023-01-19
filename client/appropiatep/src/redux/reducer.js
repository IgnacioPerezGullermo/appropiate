import {
  AUTH_BROKER_LOGIN,
  AUTH_BROKER_SIGNIN,
  AUTH_USER_LOGIN,
  AUTH_USER_SIGNIN,
  CLEAR_CREATED_BROKER,
  GET_BROKERS,
} from './types';

const initialState = {
  authClient: [],
  authToken: '',
  authBroker: [],
  clientAppointments: [],
  createdBroker: [],
  brokers: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_USER_LOGIN:
      return {
        ...state,
        authClient: action.payload.client,
        authToken: action.payload.token,
      };
    case AUTH_USER_SIGNIN:
      return {
        ...state,
        authClient: action.payload.user,
        authToken: action.payload.token,
      };
    case AUTH_USER_LOGIN:
      return {
        ...state,
        authBroker: action.payload.client,
        authToken: action.payload.token,
      };
    case AUTH_BROKER_SIGNIN:
      return {
        ...state,
        createdBroker: action.payload.user,
      };
    case CLEAR_CREATED_BROKER:
      return {
        ...state,
        createdBroker: action.payload,
      };
    case GET_BROKERS:
      return {
        ...state,
        brokers: action.payload,
      };
    default:
      return state;
  }
}
