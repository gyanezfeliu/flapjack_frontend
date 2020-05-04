import { combineReducers } from 'redux';
import studies from './studies';
import errors from './errors';

export default combineReducers({
  studies,
  errors
});