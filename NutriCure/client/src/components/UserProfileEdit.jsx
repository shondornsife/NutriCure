import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const UserProfileEdit = () => {
    const [userDetails, setUserDetails] = useState({
        username: '',
        firstName: '',
        lastName: '',
        email: ''
    });
    const [errors, setErrors] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/users/profile/${id}`, { withCredentials: true })
            .then(response => {
                setUserDetails(response.data);
            })
            .catch(err => console.error(err));
    }, [id]);

    const handleChange = (e) => {
        setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/users/profile/${id}`, userDetails, { withCredentials: true })
            .then(() => navigate('/profile'))
            .catch(err => {
                if (err.response && err.response.data) {
                    setErrors(err.response.data.errors);
                }
            });
    };

    return (
        <div>
            <h2>Edit Profile</h2>
            <form onSubmit={handleSubmit}>
                {errors && Object.keys(errors).map((key, index) => (
                    <p key={index} style={{ color: 'red' }}>{errors[key].message}</p>
                ))}
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        name="username"
                        value={userDetails.username}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>First Name:</label>
                    <input
                        type="text"
                        name="firstName"
                        value={userDetails.firstName}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Last Name:</label>
                    <input
                        type="text"
                        name="lastName"
                        value={userDetails.lastName}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={userDetails.email}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Update Profile</button>
            </form>
        </div>
    );
};

export default UserProfileEdit;
