//Types:
import {
    ADD_REGISTER_ERROR_MESSAGE,
    REMOVE_REGISTER_ERROR_MESSAGE
} from '../types/reducerTypes'

const initialState = {errors: []}

export default function (state = initialState, action) {
    const {type, payload} = action;
    switch (type){
        case ADD_REGISTER_ERROR_MESSAGE:
            return {
                ...state, errors: [payload, ...state.errors]
            };
        case REMOVE_REGISTER_ERROR_MESSAGE: 
            return {
                ...state, 
                errors: state.errors.filter((error) => error.id !== payload)
            };
        default: 
        return state
    }}
    


