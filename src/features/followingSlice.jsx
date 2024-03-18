import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../interceptors/axios'

const initialState = {
    isloading: false,
    issuccess: false,
    iserror: null,
    following: []
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

export const followingList = createAsyncThunk(
    "followingList",
    async(args, { rejectWithValue }) => {
        try {
            const { data } = await axios.get(
                'following/'
            )

            if(data.status === 200) {
                return data
            }

            if(data.status === 400) {
                return rejectWithValue(data)
            }
        }catch(error) {
            const data = ['Oops something went wrong...']
            return rejectWithValue(data)
        }
    }
)

export const followingDelete = createAsyncThunk(
    "followingDelete",
    async(slug, { rejectWithValue }) => {
        try {
            const { data } = await axios.delete(
                `following/${slug}/`
            )

            if(data.status === 200) {
                return data
            }

            if(data.status === 400) {
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
            state.issuccess = false
        })
        builder.addCase(followingCreate.fulfilled, (state, action) => {
            state.isloading = false
            state.issuccess = true
            state.following = []
            action.payload.data.map(item => {
                if(state.following.indexOf(item) === -1) {
                    state.following.push(item.following.id)
                }
            })
        })
        builder.addCase(followingCreate.rejected, (state, action) => {
            state.isloading = false
            state.iserror = action.payload
        })
        builder.addCase(followingList.pending, (state) => {
            state.isloading = true
            state.issuccess = false
        })
        builder.addCase(followingList.fulfilled, (state, action) => {
            state.isloading = false
            state.issuccess = true
            state.following = []
            action.payload.data.map(item => {
                if(state.following.indexOf(item) === -1) {
                    state.following.push(item.following.id)
                }
            })
        })
        builder.addCase(followingList.rejected, (state, action) => {
            state.isloading = false
            state.iserror = action.payload
        })
        builder.addCase(followingDelete.pending, (state) => {
            state.isloading = true
            state.issuccess = false
        })
        builder.addCase(followingDelete.fulfilled, (state, action) => {
            state.isloading = false
            state.issuccess = true
            state.following = []
            action.payload.data.map(item => {
                if(state.following.indexOf(item) === -1) {
                    state.following.push(item.following.id)
                }
            })
        })
        builder.addCase(followingDelete.rejected, (state, action) => {
            state.isloading = false
            state.iserror = action.payload
        })
    }
})

export default followingSlice.reducer