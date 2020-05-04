import axios from 'axios';
import { GET_STUDIES, DELETE_STUDY, CREATE_STUDY } from './types';

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
    .catch(err => console.log(err));
}