import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    users: [],
    userLoading: false,
    userSuccess: false,
    userError: null
}

export const logoutUser = createAsyncThunk(
    "logoutUser",
    async(args, { rejectWithValue }) => {
        try {
            const { data } = await axios.get(
                'logout/'
            )
            return data
        }catch(error) {
            return rejectWithValue('Oops found an error', error.response.data)
        }
    }
)

export const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(logoutUser.pending, (state) => {
            state.userLoading = true,
            state.userSuccess = false,
            state.users = [],
            state.userError = null
        })
        builder.addCase(logoutUser.fulfilled, (state, action) => {
            state.userLoading = false,
            state.userSuccess = true,
            state.users = action.payload,
            state.userError = null
        })
        builder.addCase(logoutUser.rejected, (state, action) => {
            state.userLoading = false,
            state.userSuccess = false,
            state.users = [],
            state.userError = action.payload
        })
    }
})

export default userSlice.reducer