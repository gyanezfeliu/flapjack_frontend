import axios from 'axios';
import { GET_STUDIES } from './types';

// GET STUDIES
export const getStudies = () => dispatch => {
  axios.get('http://localhost:8989/api/study/')
    .then(res => {
      dispatch({
        type: GET_STUDIES,
        payload: res.data.results
      });
    }).catch(err => console.log(err));
}