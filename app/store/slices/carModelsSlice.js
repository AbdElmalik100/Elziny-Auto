import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const getCarModels = createAsyncThunk('carModelsSlice/getCarModels', async ({categorySlug = '', categoryId = ''}) => {
    const response = await axios.get(`api/car-models?category=${categorySlug}&categoryId=${categoryId}`)
    return response.data
})

export const carModelsSlice = createSlice({
    name: "carModelsSlice",
    initialState: {
        carModels: [],
        loading: false
    },
    reducers: {

    },
    extraReducers: builder => {
        builder
            .addCase(getCarModels.pending, state => {
                state.loading = true
            })
            .addCase(getCarModels.fulfilled, (state, action) => {
                state.loading = false
                state.carModels = action.payload
            })
            .addCase(getCarModels.rejected, state => {
                state.loading = false
            })
    }
})

export default carModelsSlice.reducer