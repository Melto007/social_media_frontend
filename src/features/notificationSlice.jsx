import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from '../interceptors/axios'

const initialState = {
    issuccess: false,
    isloading: false,
    iserror: false,
    notification: null
}

export const notificationView = createAsyncThunk(
    "notificationView",
    async(args, { rejectWithValue }) => {
        try {
            const { data } = await axios.get(
                'notification/'
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


export const notificationUpdate = createAsyncThunk(
    "notificationUpdate",
    async(pk, { rejectWithValue }) => {
        try {
            const { data } = await axios.put(
                `notification/${pk}/`
            )

            if(data.status === 200) {
                return data
            }

            if(data.status === 404) {
                return rejectWithValue(data)
            }
        } catch(error) {
            const data = ['Oops something went wrong...']
            return rejectWithValue(data)
        }
    }
)

export const notificationSlice = createSlice({
    name: "notificationSlice",
    initialState,
    reducer: {},
    extraReducers: (builder) => {
        builder.addCase(notificationView.pending, (state) => {
            state.isloading = true
        })
        builder.addCase(notificationView.fulfilled, (state, action) => {
            state.isloading = false
            state.issuccess = true
            state.notification = action.payload
        })
        builder.addCase(notificationView.rejected, (state, action) => {
            state.isloading = false
            state.iserror = action.payload
        })
    }
})

export default notificationSlice.reducer