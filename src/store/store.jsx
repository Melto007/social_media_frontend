import { configureStore } from '@reduxjs/toolkit'

import {
    registerReducer,
    loginReducer,
    userReducer,
    forgotpasswordReducer,
    resetPasswordReducer
} from '../reducers/registerReducers'

const store = configureStore({
    reducer: {
        register: registerReducer,
        login: loginReducer,
        userReducer: userReducer,
        forgotpasswordReducer: forgotpasswordReducer,
        resetPasswordReducer: resetPasswordReducer
    }
})

export default store