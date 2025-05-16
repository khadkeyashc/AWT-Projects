// src/redux/rideSlice.js
import { createSlice } from '@reduxjs/toolkit';

const rideSlice = createSlice({
    name: 'rides',
    initialState: [],
    reducers: {
        addRide: (state, action) => {
            state.push(action.payload);
        },
    },
});

export const { addRide } = rideSlice.actions;
export default rideSlice.reducer;
