// Custom imports by library:
import { v4 } from 'uuid';

// Types:
import {
  ADD_LOGIN_ERROR_MESSAGE,
  REMOVE_LOGIN_ERROR_MESSAGE,
} from '../types/reducerTypes';

export const addLoginErrorMessage = (message, timeout = 10000) => (
  dispatch
) => {
  const id = v4();

  dispatch({ type: ADD_LOGIN_ERROR_MESSAGE, payload: { id, message } });

  setTimeout(
    () => dispatch({ type: REMOVE_LOGIN_ERROR_MESSAGE, payload: id }),
    timeout
  );
};
