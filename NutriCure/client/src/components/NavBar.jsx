import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const NavBar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        axios.post('http://localhost:8000/api/users/logout', {}, { withCredentials: true })
            .then(() => {
                navigate('/login');
            })
            .catch(err => console.error('Logout error:', err));
    };

    return (
        <nav style={{ backgroundColor: '#f5f5f5', padding: '10px', textAlign: 'center' }}>
            <Link to="/" style={{ margin: '10px' }}>Home</Link>
            <Link to="/about" style={{ margin: '10px' }}>About</Link>
            <Link to="/ingredients" style={{ margin: '10px' }}>Ingredients</Link>
            <Link to="/stories" style={{ margin: '10px' }}>Stories</Link>
            <Link to="/community" style={{ margin: '10px' }}>Community</Link>
            <Link to="/login" style={{ margin: '10px' }}>Login</Link>
            <Link to="#" onClick={handleLogout} style={{ margin: '10px' }}>Logout</Link>
        </nav>
    );
};

export default NavBar;