import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../interceptors/axios'

const initialState = {
    users: [],
    userLoading: false,
    userSuccess: false,
    isAuthenticated: false,
    userError: null
}

// this function for register user
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
            return rejectWithValue(data.message)
        } catch(error) {
            const data = ['Oops something went wrong...']
            return rejectWithValue(data)
        }
    }
)

// this function for login the user
export const userLogin = createAsyncThunk(
    "userLogin",
    async(datas, { rejectWithValue }) => {
        try {
            const { data } = await axios.post(
                'login/',
                datas
            )

            if(data.status === 200) {
                axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`
                return data
            }

            if(data.status === 404) {
                console.log("error", data)
                return rejectWithValue(data)
            }
        } catch(error) {
            const data = ['Oops something went wrong...']
            return rejectWithValue(data)
        }
    }
)

// this function for logout the user
export const logoutUser = createAsyncThunk(
    "logoutUser",
    async(args, { rejectWithValue }) => {
        try {
            const { data, status } = await axios.get(
                'logout/'
            )

            if(status === 200) {
                axios.defaults.headers.common['Authorization'] = ''
                sessionStorage.removeItem('token')
                return data
            }
            return rejectWithValue(data)
        } catch(error) {
            const data = ['Oops something went wrong...']
            return rejectWithValue(data)
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
        builder.addCase(userLogin.pending, (state) => {
            state.userLoading = true
        })
        builder.addCase(userLogin.fulfilled, (state, action) => {
            state.userLoading = false,
            state.userSuccess = true,
            state.isAuthenticated = true,
            state.users.push(action.payload)
        })
        builder.addCase(userLogin.rejected, (state, action) => {
            state.userLoading = false,
            state.userSuccess = false,
            state.users = [],
            state.isAuthenticated = false
            state.userError = action.payload
        })
        builder.addCase(logoutUser.pending, (state) => {
            state.userLoading = true
        })
        builder.addCase(logoutUser.fulfilled, (state, action) => {
            state.userLoading = false,
            state.userSuccess = false,
            state.users = [],
            state.isAuthenticated = false
            state.userError = null
        })
        builder.addCase(logoutUser.rejected, (state, action) => {
            state.userSuccess = false,
            state.userError = action.payload
        })
    }
})

export default userSlice.reducer