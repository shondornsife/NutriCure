import React, { useState } from 'react';
import axios from 'axios';

const AddComment = ({ postId, refreshComments }) => {
    const [commentContent, setCommentContent] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post(`http://localhost:8000/api/comments`, { 
            content: commentContent, 
            postId: postId 
        })
        .then(response => {
            setCommentContent('');
            if (refreshComments) refreshComments();
        })
        .catch(err => {
            console.error('Error posting comment:', err);
            setErrorMessage('Failed to post comment. Please try again.');
        });
    };

    return (
        <div>
            <h3>Add a Comment</h3>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            <form onSubmit={handleSubmit}>
                <textarea
                    value={commentContent}
                    onChange={(e) => setCommentContent(e.target.value)}
                    placeholder="Write your comment here"
                    required
                ></textarea>
                <button type="submit">Post Comment</button>
            </form>
        </div>
    );
};

export default AddComment;
