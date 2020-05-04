import { GET_STUDIES, DELETE_STUDY, CREATE_STUDY } from '../actions/types';

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
    case DELETE_STUDY:
      return {
        // Any current state
        ...state,
        // filter through all studies and return all but the deleted
        studies: state.studies.filter(study => study.id !==action.payload)
      }
    case CREATE_STUDY:
      return {
        ...state,
        // ADD THE PAYLOAD, WHICH IS THE NEW STUDY
        studies: [...state.studies, action.payload]
      }
    default:
      return state;
  }
}

export default studyReducer;