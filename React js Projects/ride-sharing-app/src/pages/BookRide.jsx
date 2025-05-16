// src/pages/BookRide.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addRide } from '../redux/rideSlice';

const BookRide = () => {
    const [destination, setDestination] = useState('');
    const dispatch = useDispatch();

    const handleBookRide = () => {
        dispatch(addRide({ id: Date.now(), destination }));
        setDestination('');
    };

    return (
        <div>
            <h2>Book a Ride</h2>
            <input
                type="text"
                value={destination}
                placeholder="Enter Destination"
                onChange={(e) => setDestination(e.target.value)}
            />
            <button onClick={handleBookRide}>Book Ride</button>
        </div>
    );
};

export default BookRide;
