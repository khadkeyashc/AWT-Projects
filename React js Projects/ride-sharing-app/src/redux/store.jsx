// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import rideReducer from './rideSlice';

export const store = configureStore({
    reducer: {
        rides: rideReducer,
    },
});
