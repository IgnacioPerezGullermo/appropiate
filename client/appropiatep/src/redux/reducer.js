import {
  AUTH_USER_LOGIN,
  AUTH_USER_SIGNIN,
  AUTH_BROKER_LOGIN,
  AUTH_BROKER_SIGNIN,
} from './types';

const initialState = {
  authClient: [],
  authToken: '',
  authBroker: [],
  clientAppointments: [],
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
    case AUTH_USER_SIGNIN:
      return {
        ...state,
        authBroker: action.payload.user,
        authToken: action.payload.token,
      };
    default:
      return state;
  }
}
