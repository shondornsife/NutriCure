import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [registrationData, setRegistrationData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleChange = (e) => {
        setRegistrationData({ ...registrationData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { confirmPassword, ...dataToSend } = registrationData;
            const response = await axios.post('http://localhost:8000/api/users/register', dataToSend, { withCredentials: true });
            console.log(response.data);
            navigate('/login');
        } catch (err) {
            if (err.response && err.response.data && err.response.data.errors) {
                setErrors(err.response.data.errors);
            } else {
                console.log(err);
            }
        }
    };

    return (
        <div>
            <h2>Register</h2>
            {Object.keys(errors).length > 0 && Object.keys(errors).map((key, index) => (
                <p key={index} style={{ color: 'red' }}>{errors[key].message}</p>
            ))}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input type="text" name="username" value={registrationData.username} onChange={handleChange} />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" value={registrationData.email} onChange={handleChange} />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" name="password" value={registrationData.password} onChange={handleChange} />
                </div>
                <div>
                    <label>Confirm Password:</label>
                    <input type="password" name="confirmPassword" value={registrationData.confirmPassword} onChange={handleChange} />
                </div>
                <button type="submit">Register</button>
            </form>
            <button onClick={() => navigate('/login')} style={{ marginTop: '10px' }}>Back to Login</button>
        </div>
    );
};

export default Register;

