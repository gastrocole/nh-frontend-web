import axios from 'axios';
import setAuthToken from '../utils/auth';
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
//TO DO: create reducer consts in ..types/reducerTypes

// load user
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

// register user
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
  } catch (err) {
    console.log('error');
    // TO DO: set alert
    // TO DO: catch for both axios and non-axios errors
    localStorage.removeItem('token');
    dispatch({
      type: REGISTER_FAIL,
    });
  }
};

// login user
export const login = ({ email, password }) => async (dispatch) => {
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
    console.log(error);
    // TO DO: set alert
    // TO DO: catch for both axios and non-axios errors
    localStorage.removeItem('token');
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

// clear profile & log out
export const logoutUser = () => async (dispatch) => {
  localStorage.removeItem('token');
  dispatch({
    type: CLEAR_PROFILE,
  });
  dispatch({
    type: LOGOUT,
  });
};
