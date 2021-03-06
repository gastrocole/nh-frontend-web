// Imported components by library:
import axios from 'axios';

// Actions:
import { addLoginErrorMessage } from './loginMessages';
import { addRegisterErrorMessage } from './registerMessages';

// Utility functions:
import setAuthToken from '../utils/auth';

// Types:
import {
  USER_LOADED,
  AUTH_ERROR,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  CLEAR_PROFILE,
  LOGOUT,
} from '../types/reducerTypes';

// Load user
export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get('/auth');
    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

// Register user
export const registerUser = (registerObject) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const body = JSON.stringify(registerObject);
  try {
    const res = await axios.post('/users', body, config);
    localStorage.setItem('token', res.data.token);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });

    dispatch(loadUser());
  } catch (error) {
    if (error.response.data.errors) {
      const errors = error.response.data.errors;
      errors.forEach((error) => dispatch(addRegisterErrorMessage(error.msg)));
    } else if (error.response.data) {
      console.log(error.response.data);
    } else {
      console.log(error);
    }
    // TO DO: catch for both axios and non-axios errors
    localStorage.removeItem('token');
    dispatch({
      type: REGISTER_FAIL,
    });
  }
};

// Login user
export const loginUser = ({ email, password }) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post('/auth', body, config);
    localStorage.setItem('token', res.data.token);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser());
  } catch (error) {
    if (error.response.data.errors) {
      const errors = error.response.data.errors;
      errors.forEach((error) => dispatch(addLoginErrorMessage(error.msg)));
    } else if (error.response.data) {
      console.log(error.response.data);
    } else {
      console.log(error);
    }
    localStorage.removeItem('token');
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

// Clear profile & log out
export const logoutUser = () => async (dispatch) => {
  localStorage.removeItem('token');
  dispatch({
    type: CLEAR_PROFILE,
  });
  dispatch({
    type: LOGOUT,
  });
};
