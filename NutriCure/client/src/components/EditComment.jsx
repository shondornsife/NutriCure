import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditComment = () => {
    const [commentContent, setCommentContent] = useState('');
    const [errors, setErrors] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/comments/${id}`)
            .then(response => {
                setCommentContent(response.data.comment.content);
            })
            .catch(err => {
                console.error('Error fetching comment:', err);
            });
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/comments/${id}`, { content: commentContent })
            .then(() => navigate(-1))
            .catch(err => {
                if (err.response && err.response.data) {
                    setErrors(err.response.data.errors);
                }
            });
    };

    return (
        <div>
            <h2>Edit Comment</h2>
            <form onSubmit={handleSubmit}>
                {errors.content && <p style={{ color: 'red' }}>{errors.content.message}</p>}
                <textarea
                    value={commentContent}
                    onChange={(e) => setCommentContent(e.target.value)}
                    required
                ></textarea>
                <button type="submit">Update Comment</button>
            </form>
        </div>
    );
};

export default EditComment;
