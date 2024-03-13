import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoading: false,
    isSuccess: false,
    profile: null,
    isError: null
}
import axios from '../interceptors/axios'

// profile page
export const profileDetails = createAsyncThunk(
    "profileDetails",
    async(args, { rejectWithValue }) => {
        try {
            const { data } = await axios.get(
                `profile/`
            )

            if(data.status === 200) {
                return data
            }

            if(data.status === 404) {
                return rejectWithValue(data)
            }
        }catch(error) {
            const data = ['Oops something went wrong...']
            return rejectWithValue(data)
        }
    }
)

// other user profile
export const otherProfile = createAsyncThunk(
    "otherProfile",
    async(pk, { rejectWithValue }) => {
        try {
            const { data } = await axios.get(
                `profile/${pk}/`
            )

            if(data.status === 200) {
                return data
            }

            if(data.status === 404) {
                return rejectWithValue(data)
            }
        }catch(error) {
            const data = ['Oops something went wrong...']
            return rejectWithValue(data)
        }
    }
)

export const profileSlice = createSlice({
    name: 'profileSlice',
    initialState,
    reducer: {},
    extraReducers: (builder) => {
        builder.addCase(profileDetails.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(profileDetails.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.profile = action.payload
        })
        builder.addCase(profileDetails.rejected, (state, action) => {
            state.isLoading = false
            state.isError = action.payload
        })
        builder.addCase(otherProfile.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(otherProfile.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.profile = action.payload
        })
        builder.addCase(otherProfile.rejected, (state, action) => {
            state.isLoading = false
            state.isError = action.payload
        })
    }
})

export default profileSlice.reducer