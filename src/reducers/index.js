import { combineReducers } from 'redux';
import auth from './auth';
import loginMessages from './loginMessages';
import notifications from './notifications';

export default combineReducers({
  auth,
  loginMessages,
  notifications,
});
