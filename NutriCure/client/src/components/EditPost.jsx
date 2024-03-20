import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditPost = () => {
    const [postData, setPostData] = useState({
        title: '',
        content: ''
    });
    const [errors, setErrors] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/community/posts/${id}`)
            .then(response => {
                setPostData(response.data.post);
            })
            .catch(err => {
                console.error('Error fetching post:', err);
            });
    }, [id]);

    const handleChange = (e) => {
        setPostData({ ...postData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/community/posts/${id}`, postData)
            .then(() => navigate('/community'))
            .catch(err => {
                if (err.response && err.response.data) {
                    setErrors(err.response.data.errors);
                }
            });
    };

    return (
        <div>
            <h2>Edit Post</h2>
            <form onSubmit={handleSubmit}>
                {Object.keys(errors).map((key, index) => (
                    errors[key] && <p key={index} style={{ color: 'red' }}>{errors[key].message}</p>
                ))}
                <div>
                    <label>Title:</label>
                    <input
                        type="text"
                        name="title"
                        value={postData.title}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Content:</label>
                    <textarea
                        name="content"
                        value={postData.content}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Update Post</button>
            </form>
        </div>
    );
};

export default EditPost;
