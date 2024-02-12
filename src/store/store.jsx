import { configureStore } from '@reduxjs/toolkit'

import userSlice from '../features/userSlice'

const store = configureStore({
    reducer: {
        userSlice: userSlice
    }
})

export default store