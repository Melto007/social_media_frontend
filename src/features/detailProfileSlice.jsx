import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
    profileLoading: false,
    profileSuccess: false,
    profileSave: null,
    isError: null
}
import axios from '../interceptors/axios'

export const detailedProfile = createAsyncThunk(
    "detailedProfile",
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

export const detailProfileSlice = createSlice({
    name: 'detailProfileSlice',
    initialState,
    reducer: {},
    extraReducers: (builder) => {
        builder.addCase(detailedProfile.pending, (state) => {
            state.profileLoading = true
        })
        builder.addCase(detailedProfile.fulfilled, (state, action) => {
            state.profileLoading = false
            state.profileSuccess = true
            state.profileSave = action.payload
        })
        builder.addCase(detailedProfile.rejected, (state, action) => {
            state.profileLoading = false
            state.isError = action.payload
        })
    }
})

export default detailProfileSlice.reducer