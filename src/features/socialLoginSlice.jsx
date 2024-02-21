import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
    users: null,
    isSuccess: false,
    isLoading: false,
    isError: null
}
import axios from '../interceptors/axios'

export const googleLogin = createAsyncThunk(
    "googleLogin",
    async(datas, { rejectWithValue }) => {
        try {
            const { data } = await axios.post(
                'google-auth/',
                datas
            )

            console.log(data)

            if(data.status === 200) {
                axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`
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

export const socialLoginSlice = createSlice({
    name: "socialLoginSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(googleLogin.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(googleLogin.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.users = action.payload
        })
        builder.addCase(googleLogin.rejected, (state, action) => {
            state.isLoading = false
            state.isError = action.payload
        })
    }
})

export default socialLoginSlice.reducer