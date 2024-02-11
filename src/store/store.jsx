import { configureStore } from '@reduxjs/toolkit'

import {
    registerReducer,
    loginReducer,
    userReducer,
    forgotpasswordReducer,
    resetPasswordReducer
} from '../reducers/registerReducers'

import userSlice from '../features/userSlice'

const store = configureStore({
    reducer: {
        register: registerReducer,
        login: loginReducer,
        userReducer: userReducer,
        forgotpasswordReducer: forgotpasswordReducer,
        resetPasswordReducer: resetPasswordReducer,
        userSlice: userSlice
    }
})

export default store