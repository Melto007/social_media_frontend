import {
    REGISTER_ITEM_CONSTANTS,
    REGISTER_LOADING_CONSTANTS,
    REGISTER_ERROR_CONSTANTS
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