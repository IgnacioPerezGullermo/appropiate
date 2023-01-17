import axios from 'axios';
import {
  AUTH_BROKER_LOGIN,
  AUTH_BROKER_SIGNIN,
  AUTH_USER_LOGIN,
  AUTH_USER_SIGNIN,
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

export function authBrokerLogin(authInfo) {
  return async function (dispatch) {
    try {
      console.log(authInfo);
      let info = await axios.post('/auth/admin/login', authInfo);
      let response = info.data;
      return dispatch({
        type: AUTH_BROKER_LOGIN,
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
      let info = await axios.post('/auth/broker/signup', authInfo);
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
