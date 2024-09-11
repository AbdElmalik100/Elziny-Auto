import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./slices/categoriesSlice";
import carsSlice from './slices/carsSlice'
import carModelsSlice from './slices/carModelsSlice'

export const store = configureStore({
    reducer: {
        categories: categoriesSlice,
        cars: carsSlice,
        carModels: carModelsSlice
    }
})