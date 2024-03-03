import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from '../interceptors/axios'

const initialState = {
    loading: false,
    success: false,
    friends: null,
    isError: null
}

export const getFollowers = createAsyncThunk(
    "getFollowers",
    async(args, { rejectWithValue }) => {
        try {
            const { data } = await axios.get(
                'findFollowers/'
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

export const friendSlice = createSlice({
    name: "friendSlice",
    initialState,
    reducer: {},
    extraReducers: (builder) => {
        builder.addCase(getFollowers.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getFollowers.fulfilled, (state, action) => {
            state.loading = false
            state.success = true
            state.friends = action.payload
        })
        builder.addCase(getFollowers.rejected, (state, action) => {
            state.loading = false
            state.isError = action.payload
        })
    }
})

export default friendSlice.reducer