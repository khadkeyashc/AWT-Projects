// src/pages/RideHistory.js
import React from 'react';
import { useSelector } from 'react-redux';

const RideHistory = () => {
    const rides = useSelector(state => state.rides);

    return (
        <div>
            <h2>Ride History</h2>
            <ul>
                {rides.map((ride) => (
                    <li key={ride.id}>Destination: {ride.destination}</li>
                ))}
            </ul>
        </div>
    );
};

export default RideHistory;
