import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddStory = () => {
    const [storyData, setStoryData] = useState({
        title: '',
        content: ''
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleChange = (e) => {
        setStoryData({ ...storyData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/stories', storyData)
            .then(() => navigate('/stories'))
            .catch(err => {
                if (err.response && err.response.data) {
                    setErrors(err.response.data.errors);
                }
            });
    };

    return (
        <div>
            <h2>Add Your Story</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input
                        type="text"
                        name="title"
                        value={storyData.title}
                        onChange={handleChange}
                    />
                    {errors.title && <p>{errors.title.message}</p>}
                </div>
                <div>
                    <label>Story:</label>
                    <textarea
                        name="content"
                        value={storyData.content}
                        onChange={handleChange}
                    />
                    {errors.content && <p>{errors.content.message}</p>}
                </div>
                <button type="submit">Submit Story</button>
            </form>
        </div>
    );
};

export default AddStory;
