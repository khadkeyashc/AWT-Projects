// src/components/Event.js
import React from "react";
import { useDispatch } from "react-redux";
import { bookSeat } from "../redux/eventSlice";
import { FaTicketAlt } from "react-icons/fa";

const Event = ({ event }) => {
  const dispatch = useDispatch();

  const handleBooking = () => {
    dispatch(bookSeat(event.id));
  };

  return (
    <div className="event">
      <h3>{event.name}</h3>
      <p>Available Seats: {event.availableSeats}</p>
      <p>Booked Seats: {event.bookedSeats}</p>
      <button onClick={handleBooking} disabled={event.availableSeats === 0}>
        <FaTicketAlt /> {event.availableSeats > 0 ? "Book Now" : "Sold Out"}
      </button>
    </div>
  );
};

export default Event;
