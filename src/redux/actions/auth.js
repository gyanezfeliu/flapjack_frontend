import axios from 'axios';
import { returnErrors } from './messages';
import {
  USER_LOADING,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS
} from '../actions/types';

// CHECK TOKEN & LOAD USER
export const loadUser = () => (dispatch, getState) => {
  // User Loading
  dispatch({ type: USER_LOADING });

  // Get token from state
  const token = getState().auth.token;

  // Headers for request
  const  config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  // If token, add to headers config
  if(token) {
    config.headers['Authorization'] = `Token ${token}`;
  }

  // GET request
  axios.get('http://localhost:8989/api/auth/user', config)
    .then(res => {
      dispatch({
        type:USER_LOADED,
        payload: res.data
      })
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: AUTH_ERROR
      });
    })
}

// LOGIN USER
export const login = (username, password) => dispatch => {
    // Headers for request
  const  config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  // Request Body
  const body = JSON.stringify({ username, password});

  // GET request
  axios.post('http://localhost:8989/api/auth/login', body, config)
    .then(res => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      })
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: LOGIN_FAIL
      });
    })
}

// LOGOUT USER
export const logout = () => (dispatch, getState) => {
  // Get token from state
  const token = getState().auth.token;

  // Headers for request
  const  config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  // If token, add to headers config
  if(token) {
    config.headers['Authorization'] = `Token ${token}`;
  }

  // GET request
  axios.post('http://localhost:8989/api/auth/logout', null, config)
    .then(res => {
      dispatch({
        type: LOGOUT_SUCCESS,
      })
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
    })
}