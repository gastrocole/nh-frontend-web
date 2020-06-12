import { combineReducers } from 'redux';
import auth from './auth';
import loginMessages from './loginMessages';
import registerMessages from './registerMessages';

export default combineReducers({
  auth,
  loginMessages,
  registerMessages,
});
