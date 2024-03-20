import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const UserProfile = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/user/${id}`)
            .then(response => {
                setUser(response.data.user);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error:', err);
                setError('Failed to load user profile');
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <div>Loading user profile...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (!user) {
        return <div>User profile not found.</div>;
    }

    return (
        <div>
            <h1>User Profile</h1>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
        </div>
    );
};

export default UserProfile;
