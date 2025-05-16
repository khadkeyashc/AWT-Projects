// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import eventReducer from "./eventSlice";

const store = configureStore({
  reducer: {
    events: eventReducer,
  },
});

export default store;
