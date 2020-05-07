import { combineReducers } from 'redux';
import studies from './studies';
import errors from './errors';
import messages from './messages';
import auth from './auth';

export default combineReducers({
  // THIS ADDS EACH STATE TO THE RENDER (IT APPEARS IN REACT TOOLS/STATES)
  studies,
  errors,
  messages,
  auth
});