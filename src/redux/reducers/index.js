import { combineReducers } from 'redux';
import studies from './studies';
import errors from './errors';
import messages from './messages';

export default combineReducers({
  // THIS ADDS EACH STATE TO THE RENDER (IT APPEARS IN REACT TOOLS/STATES)
  studies,
  errors,
  messages
});