// src/components/BookingForm.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addEvent } from "../redux/eventSlice";

const BookingForm = () => {
  const [eventName, setEventName] = useState("");
  const [seats, setSeats] = useState(10);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (eventName.trim() && seats > 0) {
      dispatch(
        addEvent({
          id: uuidv4(),
          name: eventName,
          availableSeats: seats,
          bookedSeats: 0,
        })
      );
      setEventName("");
      setSeats(10);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="booking-form">
      <input
        type="text"
        placeholder="Event Name"
        value={eventName}
        onChange={(e) => setEventName(e.target.value)}
      />
      <input
        type="number"
        min="1"
        placeholder="Total Seats"
        value={seats}
        onChange={(e) => setSeats(parseInt(e.target.value))}
      />
      <button type="submit">Add Event</button>
    </form>
  );
};

export default BookingForm;
