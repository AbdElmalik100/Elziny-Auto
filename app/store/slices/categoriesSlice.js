import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getCategories = createAsyncThunk('categoriesSlice/getCategories', async () => {
    try {
        const response = await axios.get(`api/categories`)
        return response.data
    } catch (error) {
        return error
    }
})

const categoriesSlice = createSlice({
    name: "categoriesSlice",
    initialState: {
        categories: [],
        category: {},
        loading: false,
        errors: {}
    },
    reducers: {

    },
    extraReducers: builder => {
        builder
            .addCase(getCategories.pending, state => {
                state.loading = true
            })
            .addCase(getCategories.fulfilled, (state, action) => {
                state.loading = false
                state.categories = action.payload
            })
            .addCase(getCategories.rejected, (state, action) => {
                state.loading = false
                console.log(action.error);
                state.errors = action.error
            })
    }
})

export default categoriesSlice.reducer