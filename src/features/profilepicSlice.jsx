import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from '../interceptors/axios'

const initialState = {
    createLoading: false,
    isSuccess: false,
    profilePic: null,
    isError: null
}

export const createProfileImage = createAsyncThunk(
    "createProfileImage",
    async({ datas, pk }, { rejectWithValue }) => {
        try {
            const { data } = await axios.put(
                `profile/${pk}/`,
                datas
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

export const profilepicSlice = createSlice({
    name: 'profilepicSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(createProfileImage.pending, (state) => {
            state.createLoading = true,
            state.isSuccess = false,
            state.profilePic = null
            state.isError = null
        })
        builder.addCase(createProfileImage.fulfilled, (state, action) => {
            state.createLoading = false,
            state.isSuccess = true,
            state.profilePic = action.payload,
            state.isError = null
        })
        builder.addCase(createProfileImage.rejected, (state, action) => {
            state.createLoading = false,
            state.isSuccess = false,
            state.profilePic = null,
            state.isError = action.payload
        })
    }
})

export default profilepicSlice.reducer