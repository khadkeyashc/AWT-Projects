// src/redux/eventSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  events: [
    {
      id: uuidv4(),
      name: "Tech Conference",
      availableSeats: 50,
      bookedSeats: 0,
    },
    {
      id: uuidv4(),
      name: "Music Festival",
      availableSeats: 100,
      bookedSeats: 0,
    },
    {
      id: uuidv4(),
      name: "Art Exhibition",
      availableSeats: 30,
      bookedSeats: 0,
    },
  ],
};

const eventSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    bookSeat: (state, action) => {
      const event = state.events.find((e) => e.id === action.payload);
      if (event && event.availableSeats > 0) {
        event.availableSeats -= 1;
        event.bookedSeats += 1;
      }
    },
    addEvent: (state, action) => {
      state.events.push(action.payload);
    },
  },
});

export const { bookSeat, addEvent } = eventSlice.actions; // ✅ Ensure addEvent is exported
export default eventSlice.reducer;
