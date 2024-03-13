import { configureStore } from '@reduxjs/toolkit'

import userSlice from '../features/userSlice'
import profileSlice from '../features/profileSlice'
import socialLoginSlice from '../features/socialLoginSlice'
import friendSlice from '../features/followersSlice'
import profilepicSlice from '../features/profilepicSlice'

const store = configureStore({
    reducer: {
        userSlice: userSlice,
        profileSlice: profileSlice,
        socialLoginSlice: socialLoginSlice,
        friendSlice: friendSlice,
        profilepicSlice: profilepicSlice
    }
})

export default store