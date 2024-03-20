import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const PostDetails = () => {
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/community/posts/${id}`)
            .then(response => {
                setPost(response.data.post);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error:', err);
                setError('Failed to load post details');
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <div>Loading post details...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (!post) {
        return <div>Post not found.</div>;
    }

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </div>
    );
};

export default PostDetails;
