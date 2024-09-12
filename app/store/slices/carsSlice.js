import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getCars = createAsyncThunk("carsSlice/getCars", async ({slug = "", category = "", model = "", fuel_type = "", is_luxury = "", limit = 0}) => {
    const response = await axios.get(`api/cars?slug=${slug}&category=${category}&model=${model}&fuel_type=${fuel_type}&is_luxury=${is_luxury}&limit=${limit}`)
    return response.data
})
export const getCar = createAsyncThunk("carsSlice/getCar", async (id) => {
    const response = await axios.get(`api/cars/${id}`)
    return response.data
})

export const carsSlice = createSlice({
    name: "carsSlice",
    initialState: {
        cars: [],
        car: {},
        loading: false
    },
    reducers: {

    },
    extraReducers: builder => {
        builder
            .addCase(getCars.pending, state => {
                state.loading = true
            })
            .addCase(getCars.fulfilled, (state, action) => {
                state.loading = false
                state.cars = action.payload
            })
            .addCase(getCars.rejected, (state, action) => {
                state.loading = false
            })
        
        builder
            .addCase(getCar.pending, state => {
                state.loading = true
            })
            .addCase(getCar.fulfilled, (state, action) => {
                state.loading = false
                state.car = action.payload
            })
            .addCase(getCar.rejected, (state, action) => {
                state.loading = false
            })
    }
})

export default carsSlice.reducer