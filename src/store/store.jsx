import { configureStore } from '@reduxjs/toolkit'

import userSlice from '../features/userSlice'
import profileSlice from '../features/profileSlice'
import socialLoginSlice from '../features/socialLoginSlice'
import friendSlice from '../features/followersSlice'
import profilepicSlice from '../features/profilepicSlice'
import detailProfileSlice from '../features/detailProfileSlice'
import followingSlice from '../features/followingSlice'

const store = configureStore({
    reducer: {
        userSlice: userSlice,
        profileSlice: profileSlice,
        socialLoginSlice: socialLoginSlice,
        friendSlice: friendSlice,
        profilepicSlice: profilepicSlice,
        detailProfileSlice: detailProfileSlice,
        followingSlice: followingSlice
    }
})

export default store