import { combineReducers } from 'redux';
import auth from './auth';
import loginMessages from './loginMessages';
import registerMessages from './registerMessages';
import notifications from './notifications';

export default combineReducers({
  auth,
  loginMessages,
  registerMessages,
  notifications,
});
