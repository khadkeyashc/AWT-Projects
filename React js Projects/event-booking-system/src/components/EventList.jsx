// src/components/EventList.js
import React from "react";
import { useSelector } from "react-redux";
import Event from "./Event";

const EventList = () => {
  const events = useSelector((state) => state.events.events);

  return (
    <div>
      {events.length === 0 ? (
        <p>No events available.</p>
      ) : (
        events.map((event) => <Event key={event.id} event={event} />)
      )}
    </div>
  );
};

export default EventList;
