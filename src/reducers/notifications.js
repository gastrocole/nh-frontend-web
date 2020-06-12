// Types:
import { ADD_NOTIFICATION, REMOVE_NOTIFICATION } from '../types/reducerTypes';

const initialState = {
  messages: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_NOTIFICATION:
      return {
        ...state,
        messages: [payload, ...state.messages],
      };
    case REMOVE_NOTIFICATION:
      return {
        ...state,
        messages: state.messages.filter((message) => message.id !== payload),
      };
    default:
      return state;
  }
}
