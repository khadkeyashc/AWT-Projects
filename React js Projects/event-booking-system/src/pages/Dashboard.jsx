// src/pages/Dashboard.js
import React from "react";
import BookingForm from "../components/BookingForm";
import EventList from "../components/EventList";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h2>Event Booking System</h2>
      <BookingForm />
      <EventList />
    </div>
  );
};

export default Dashboard;
