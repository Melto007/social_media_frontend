import {
    REGISTER_ITEM_CONSTANTS,
    REGISTER_LOADING_CONSTANTS,
    REGISTER_ERROR_CONSTANTS,

    LOGIN_ERROR_CONSTANTS,
    LOGIN_ITEM_CONSTANTS,
    LOGIN_LOADING_CONSTANTS
} from '../constants/registerConstant'

export function registerReducer(state = { user: [] }, action) {
    switch(action.type) {
        case REGISTER_LOADING_CONSTANTS:
            return {
                loading: true,
                user: [],
                isError: null
            }
        case REGISTER_ITEM_CONSTANTS:
            return {
                loading: false,
                user: action.payload,
                isError: null
            }
        case REGISTER_ERROR_CONSTANTS:
            return {
                loading: false,
                user: [],
                isError: action.payload
            }
        default:
            return state
    }
}

export function loginReducer(state = { user: [] }, action) {
    switch(action.type) {
        case LOGIN_LOADING_CONSTANTS:
            return {
                loading: true,
                user: [],
                isError: null,
                success: false
            }
        case LOGIN_ITEM_CONSTANTS:
            return {
                loading: false,
                user: action.payload,
                isError: null,
                success: true
            }
        case LOGIN_ERROR_CONSTANTS:
            return {
                loading: false,
                user: [],
                isError: action.payload,
                success: false
            }
        default:
            return state
    }
}