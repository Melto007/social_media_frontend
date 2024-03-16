import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../interceptors/axios'

const initialState = {
    isloading: false,
    issuccess: false,
    iserror: null,
    following: null
}

export const followingCreate = createAsyncThunk(
    "followingCreate",
    async(datas, { rejectWithValue })  => {
        try {
            const { data } = await axios.post(
                `following/`,
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

export const followingSlice = createSlice({
    name: "followingSlice",
    initialState,
    reducer: {},
    extraReducers: (builder) => {
        builder.addCase(followingCreate.pending, (state) => {
            state.isloading = true
        })
        builder.addCase(followingCreate.fulfilled, (state, action) => {
            state.isloading = false
            state.issuccess = true
            state.following = action.payload
        })
        builder.addCase(followingCreate.rejected, (state, action) => {
            state.isloading = false
            state.iserror = action.payload
        })
    }
})

export default followingSlice.reducer