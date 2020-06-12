import {
  ADD_LOGIN_ERROR_MESSAGE,
  REMOVE_LOGIN_ERROR_MESSAGE,
} from '../types/reducerTypes';

const initialState = {
  errors: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_LOGIN_ERROR_MESSAGE:
      return {
        ...state,
        errors: [payload],
      };
    case REMOVE_LOGIN_ERROR_MESSAGE:
      return {
        ...state,
        errors: state.errors.filter((error) => error.id !== payload),
      };

    default:
      return state;
  }
}
