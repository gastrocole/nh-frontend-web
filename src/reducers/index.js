import { combineReducers } from 'redux';
import auth from './auth';
import loginMessages from './loginMessages';

export default combineReducers({
  auth,
  loginMessages,
});
