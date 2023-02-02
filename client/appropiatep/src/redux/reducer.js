import {
  AUTH_BROKER_LOGIN,
  AUTH_BROKER_SIGNIN,
  AUTH_USER_LOGIN,
  AUTH_USER_SIGNIN,
  CLEAR_CREATED_BROKER,
  GET_BROKERS,
  LOG_OUT,
  SET_SESSION_TYPE,
} from './types';

const authToken = localStorage.getItem('authToken')
  ? localStorage.getItem('authToken')
  : null;

const initialState = {
  authClient: [],
  authToken,
  sessionType: '',
  error: '',
  loading: '',
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
    case LOG_OUT:
      return {
        ...state,
        authUser: '',
        authToken: '',
      };
    case SET_SESSION_TYPE:
      return {
        ...state,
        sessionType: action.payload,
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
