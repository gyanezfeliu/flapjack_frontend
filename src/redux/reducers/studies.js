import { GET_STUDIES } from '../actions/types';

const initialState = {
  studies: []
}

const studyReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_STUDIES:
      return {
        ...state,
        studies: action.payload
      }
    default:
      return state;
  }
}

export default studyReducer;