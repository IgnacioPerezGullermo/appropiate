import axios from 'axios';
import {
  AUTH_ADMIN_LOGIN,
  AUTH_BROKER_LOGIN,
  AUTH_BROKER_SIGNIN,
  AUTH_USER_LOGIN,
  AUTH_USER_SIGNIN,
  CLEAR_CREATED_BROKER,
  GET_BROKERS,
  LOG_OUT,
  SET_SESSION_TYPE,
} from './types';

export function authUserLogin(authInfo) {
  return async function (dispatch) {
    try {
      let info = await axios.post('/auth/clients/login', authInfo);
      let response = info.data;
      return dispatch({
        type: AUTH_USER_LOGIN,
        payload: response,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function authUserSignin(authInfo) {
  return async function (dispatch) {
    try {
      let info = await axios.post('/auth/clients/signup', authInfo);
      let response = info.data;
      return dispatch({
        type: AUTH_USER_SIGNIN,
        payload: response,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function authAdminLogin(authInfo) {
  return async function (dispatch) {
    try {
      console.log(authInfo);
      let info = await axios.post('/auth/admin/login', authInfo);
      let response = info.data;
      return dispatch({
        type: AUTH_ADMIN_LOGIN,
        payload: response,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function authBrokerSignin(authInfo) {
  return async function (dispatch) {
    try {
      let info = await axios.post('/auth/clients/signup', authInfo);
      let response = info.data;
      return dispatch({
        type: AUTH_BROKER_SIGNIN,
        payload: response,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function clearCreatedBroker() {
  return async function (dispatch) {
    try {
      return dispatch({
        type: CLEAR_CREATED_BROKER,
        payload: '',
      });
    } catch (error) {
      console.log(error);
    }
  };
}
export function logOut() {
  return async function (dispatch) {
    try {
      return dispatch({
        type: LOG_OUT,
        payload: response,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
export function setSessionType(arg) {
  return async function (dispatch) {
    try {
      if (arg === 'broker') {
        return dispatch({
          type: SET_SESSION_TYPE,
          payload: 'broker',
        });
      }
      if (arg === null) {
        return dispatch({
          type: SET_SESSION_TYPE,
          payload: 'client',
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
}

export function getBroker() {
  return async function (dispatch) {
    try {
      let info = await axios.get('users/broker');
      let response = info.data;
      //console.log(response);
      return dispatch({
        type: GET_BROKERS,
        payload: response,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
