// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <Link to="/">Home</Link> | 
            <Link to="/book-ride">Book Ride</Link> | 
            <Link to="/ride-history">Ride History</Link>
        </nav>
    );
};

export default Navbar;
