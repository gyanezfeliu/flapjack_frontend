import axios from 'axios';
import { returnErrors } from './messages';
import {
  USER_LOADING,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL
} from '../actions/types';

// CHECK TOKEN & LOAD USER
export const loadUser = () => (dispatch, getState) => {
  // User Loading
  dispatch({ type: USER_LOADING });

  // GET request
  axios.get('http://localhost:8989/api/auth/user', tokenConfig(getState))
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

// REGISTER USER
export const register = ({username, email, password}) => dispatch => {
  // Headers for request
  const  config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  // Request Body
  const body = JSON.stringify({ username, email, password});

  // GET request
  axios.post('http://localhost:8989/api/auth/register', body, config)
    .then(res => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      })
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: REGISTER_FAIL
      });
    })
}

// LOGOUT USER
export const logout = () => (dispatch, getState) => {
  // GET request
  axios.post('http://localhost:8989/api/auth/logout', null, tokenConfig(getState))
    .then(res => {
      dispatch({
        type: LOGOUT_SUCCESS,
      })
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
    })
}

// Setup config with token - helper func
export const tokenConfig = getState => {
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

    return config
}