import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddPost = () => {
    const [postData, setPostData] = useState({
        title: '',
        content: ''
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleChange = (e) => {
        setPostData({ ...postData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/community/posts', postData)
            .then(() => navigate('/community'))
            .catch(err => {
                if (err.response && err.response.data) {
                    setErrors(err.response.data.errors);
                }
            });
    };

    return (
        <div>
            <h2>Add New Post</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input
                        type="text"
                        name="title"
                        value={postData.title}
                        onChange={handleChange}
                    />
                    {errors.title && <p>{errors.title.message}</p>}
                </div>
                <div>
                    <label>Content:</label>
                    <textarea
                        name="content"
                        value={postData.content}
                        onChange={handleChange}
                    />
                    {errors.content && <p>{errors.content.message}</p>}
                </div>
                <button type="submit">Add Post</button>
            </form>
        </div>
    );
};

export default AddPost;
