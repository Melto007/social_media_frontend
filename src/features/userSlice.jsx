import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../interceptors/axios'

const initialState = {
    users: [],
    userLoading: false,
    userSuccess: false,
    userError: null
}

export const userRegister = createAsyncThunk(
    "userRegister",
    async(datas, { rejectWithValue }) => {
        try {
            const { data, status } = await axios.post(
                'register/',
                datas
            )

            if(status === 201) {
                return data.message
            }
            return data.message
        } catch(error) {
            return rejectWithValue("Oops found an error", error.response.data.message)
        }
    }
)

export const logoutUser = createAsyncThunk(
    "logoutUser",
    async(args, { rejectWithValue }) => {
        try {
            const { data, status } = await axios.get(
                'logout/'
            )

            if(status === 200) {
                axios.defaults.headers.common['Authorization'] = ''
                return data
            }
            return data
        }catch(error) {
            return rejectWithValue('Oops found an error', error.response.data.message)
        }
    }
)

export const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(userRegister.pending, (state) => {
            state.userLoading = true,
            state.userSuccess = false,
            state.users = []
            state.userError = null
        })
        builder.addCase(userRegister.fulfilled, (state, action) => {
            state.userLoading = false,
            state.userSuccess = true,
            state.users.push(action.payload),
            state.userError = null
        })
        builder.addCase(userRegister.rejected, (state, action) => {
            state.userLoading = false,
            state.userSuccess = false,
            state.users = [],
            state.userError = action.payload
        })
        builder.addCase(logoutUser.pending, (state) => {
            state.userLoading = true
        })
        builder.addCase(logoutUser.fulfilled, (state, action) => {
            state.userSuccess = true,
            state.users = action.payload
        })
        builder.addCase(logoutUser.rejected, (state, action) => {
            state.userSuccess = false,
            state.userError = action.payload
        })
    }
})

export default userSlice.reducer