import { CREATE_MESSAGE, GET_ERRORS } from './types';

// CREATE MESSAGE
export const createMessage = msg => {
  // NOT NEED TO MAKE AN ASYNCHRONOUS REQUEST, SO WE DON'T NEED TO PASS DISPATCH,
  // DIRECTLY RETURN THE TYPE AND PAYLOAD
  return {
    // THIS WILL RETURN (OR DISPATCH) THE CREATE_MESSAGE TYPE TO THE REDUCER
    type: CREATE_MESSAGE,
    payload: msg
  }
} 

// RETURN ERRORS
export const returnErrors = (msg, status) => {
  return {
    type: GET_ERRORS,
    payload: { msg, status}
  };
}