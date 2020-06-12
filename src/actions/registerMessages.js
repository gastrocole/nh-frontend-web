// Custom imports by library:
import { v4 } from 'uuid';

// Types:
import {
  ADD_REGISTER_ERROR_MESSAGE,
  REMOVE_REGISTER_ERROR_MESSAGE,
} from '../types/reducerTypes';

export const addRegisterErrorMessage = (message, timeout = 10000) => (
  dispatch
) => {
  const id = v4();
  dispatch({ type: ADD_REGISTER_ERROR_MESSAGE, payload: { id, message } });

  setTimeout(
    () => dispatch({ type: REMOVE_REGISTER_ERROR_MESSAGE, payload: id }),
    timeout
  );
};
