import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditStory = () => {
    const [storyData, setStoryData] = useState({
        title: '',
        content: ''
    });
    const [errors, setErrors] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/stories/${id}`)
            .then(response => {
                setStoryData(response.data.story);
            })
            .catch(err => {
                console.error('Error fetching story:', err);
            });
    }, [id]);

    const handleChange = (e) => {
        setStoryData({ ...storyData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/stories/${id}`, storyData)
            .then(() => navigate('/stories'))
            .catch(err => {
                if (err.response && err.response.data) {
                    setErrors(err.response.data.errors);
                }
            });
    };

    return (
        <div>
            <h2>Edit Story</h2>
            <form onSubmit={handleSubmit}>
                {Object.keys(errors).map((key, index) => (
                    errors[key] && <p key={index} style={{ color: 'red' }}>{errors[key].message}</p>
                ))}
                <div>
                    <label>Title:</label>
                    <input
                        type="text"
                        name="title"
                        value={storyData.title}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Story:</label>
                    <textarea
                        name="content"
                        value={storyData.content}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Update Story</button>
            </form>
        </div>
    );
};

export default EditStory;
