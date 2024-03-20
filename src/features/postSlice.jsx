import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../interceptors/axios'

const initialState = {
    issuccess: false,
    isloading: false,
    iserror: null,
    post: null
}

export const postView = createAsyncThunk(
    "postView",
    async(args, { rejectWithValue }) => {
        try {
            const { data } = await axios.get(
                `post`
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

export const postSlice = createSlice({
    name: "postSlice",
    initialState,
    reducer: {},
    extraReducers: (builder) => {
        builder.addCase(postView.pending, (state) => {
            state.isloading = true
        })
        builder.addCase(postView.fulfilled, (state, action) => {
            state.isloading = false
            state.issuccess = true
            state.post = action.payload
        })
        builder.addCase(postView.rejected, (state, action) => {
            state.isloading = false
            state.iserror = action.payload
        })
    }
})

export default postSlice.reducer