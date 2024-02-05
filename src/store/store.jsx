import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux'
import { thunk } from 'redux-thunk'

import {
    registerReducer,
    loginReducer,
    userReducer
} from '../reducers/registerReducers'

const reducer = combineReducers({
    register: registerReducer,
    login: loginReducer,
    userReducer: userReducer,
})

const middleware = [thunk]

const store = createStore(reducer, applyMiddleware(...middleware))

export default store