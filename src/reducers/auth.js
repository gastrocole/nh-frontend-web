import {
    USER_LOADED,
    AUTH_ERROR,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    CLEAR_PROFILE, 
    LOGOUT
} from '../types/reducerTypes'

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null, 
    loading: true,
    user: null
}

export default function (state = initialState, action) {
    const { type, payload } = action
    switch (type) {
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                user: payload
            };
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
            return {
                ...state,
                ...payload,
                isAuthenticated: true,
                loading: false
            };
            console.log('success')
        case AUTH_ERROR:
        case REGISTER_FAIL:
        case LOGIN_FAIL:
        case CLEAR_PROFILE:
        case LOGOUT:
            return {
                ...state,
                token: null,
                isAuthenticated: false, 
                loading: false,
            };
            console.log('fail')
        default:
            return state;
    }
    
}