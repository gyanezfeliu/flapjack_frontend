import axios from 'axios';
// I WANT TO CREATE THE MESSAGE IN THE ACTION, NOT IN THE COMPONENT
import { createMessage, returnErrors } from './messages';
import { GET_STUDIES, DELETE_STUDY, CREATE_STUDY } from './types';
// IN ORDER TO GET THE TOKEN AND ACCESS TO STUDIES FOR LOGGED IN USERS
import { tokenConfig } from './auth';

// GET STUDIES
// getState is used to get the token
export const getStudies = () => (dispatch, getState) => {
  // Any route that is protected, I have to pass in the tokenConfig func
  axios
    .get('http://localhost:8989/api/study/', tokenConfig(getState))
    .then(res => {
      dispatch({
        type: GET_STUDIES,
        payload: res.data.results
      });
    }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}

// DELETE STUDY
export const deleteStudy = (id) => (dispatch, getState) => {
  axios
    .delete(`http://localhost:8989/api/study/${id}/`, tokenConfig(getState))
    .then(res => {
      // THIS CALL THE ACTION createMessage
      // IN THE ALERT I WILL USE THE NAME 'studyDeleted'
      dispatch(createMessage({ studyDeleted: 'Study deleted' }));
      dispatch({
        type: DELETE_STUDY,
        payload: id
      })
    })
    .catch(err => console.log(err));
}

// ADD STUDY
export const addStudy = (study) => (dispatch, getState)=> {
  // CREATE STUDY
  axios
    .post('http://localhost:8989/api/study/', study, tokenConfig(getState))
    .then(res => {
      dispatch({
        type: CREATE_STUDY,
        // THE PAYLOAD IS THE STUDY CREATED WITH ALL ITS INFO
        payload: res.data
      });
    })
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}