// Custom imports by library:
import { v4 } from 'uuid';

// Types:
import { ADD_NOTIFICATION, REMOVE_NOTIFICATION } from '../types/reducerTypes';

export const addNotification = (message, type, timeout = 10000) => (
  dispatch
) => {
  const id = v4();

  dispatch({ type: ADD_NOTIFICATION, payload: { id, message, type } });

  setTimeout(
    () => dispatch({ type: REMOVE_NOTIFICATION, payload: id }),
    timeout
  );
};

export const removeNotification = (id) => (dispatch) => {
  dispatch({ type: REMOVE_NOTIFICATION, payload: id });
};
