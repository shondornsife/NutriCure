import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer style={{ marginTop: '20px', padding: '20px', backgroundColor: '#f5f5f5', textAlign: 'center' }}>
            <div>
                <Link to="/about">About</Link> | 
                <Link to="/contact">Contact</Link>
            </div>
            <div style={{ marginTop: '10px' }}>
                &copy; {new Date().getFullYear()} NutriCure
            </div>
        </footer>
    );
};

export default Footer;
