import axios from 'axios';
// I WANT TO CREATE THE MESSAGE IN THE ACTION, NOT IN THE COMPONENT
import { createMessage } from './messages';
import { GET_STUDIES, DELETE_STUDY, CREATE_STUDY, GET_ERRORS } from './types';

// GET STUDIES
export const getStudies = () => dispatch => {
  axios
    .get('http://localhost:8989/api/study/')
    .then(res => {
      dispatch({
        type: GET_STUDIES,
        payload: res.data.results
      });
    }).catch(err => console.log(err));
}

// DELETE STUDY
export const deleteStudy = (id) => dispatch => {
  axios
    .delete(`http://localhost:8989/api/study/${id}/`)
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
export const addStudy = (study) => dispatch=> {
  // CREATE STUDY
  axios
    .post('http://localhost:8989/api/study/', study)
    .then(res => {
      dispatch({
        type: CREATE_STUDY,
        // THE PAYLOAD IS THE STUDY CREATED WITH ALL ITS INFO
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err.response.data)
      const errors = {
        msg: err.response.data,
        status: err.response.status
      }
      dispatch({
        type: GET_ERRORS,
        payload: errors
      })
    });
}