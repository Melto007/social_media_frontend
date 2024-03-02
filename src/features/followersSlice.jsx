import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from '../interceptors/axios'

const initialState = {
    loading: false,
    success: true,
    friend: [],
    error: null
}

export const getFollowers = createAsyncThunk(
    "getFollowers",
    async(args, { rejectWithValue }) => {
        try {
            const { data } = await axios.get(
                'findFollowers/'
            )

            console.log(data)
        }catch(error) {
            const data = ['Oops something went wrong...']
            return rejectWithValue(data)
        }
    }
)

export const friendSlice = createSlice({
    name: "friendSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getFollowers.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getFollowers.fulfilled, (action, state) => {
            state.loading = false,
            state.success = true,
            state.friend.push(action.payload)
        })
        builder.addCase(getFollowers.rejected, (action, state) => {
            state.loading = false,
            state.error = action.payload
        })
    }
})