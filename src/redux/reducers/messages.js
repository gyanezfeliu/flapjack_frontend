import { CREATE_MESSAGE } from '../actions/types';

const initialState = {};

const errorsReducer = (state = initialState, action) => {
  switch(action.type) {
    // ITS GONNA RETURN THE MESSAGE CREATED
    // THIS WE WANNA CALL FROM THE ALERTS COMPONENT
    
    // ITS GONNA SET THE STATE TO THAT MESSAGE
    case CREATE_MESSAGE:
      // THIS WILL BE A MESSAGE OBJECT
      // SET THE STATE TO WHATEVER WE PASS IN, WICH WILL BE A MSG OBJECT
      return (state = action.payload)
    default:
      return state;
  }
}

export default errorsReducer;