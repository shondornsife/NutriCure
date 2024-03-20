import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const CommunityPostsList = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const isLoggedIn = true;

    useEffect(() => {
        axios.get('http://localhost:8000/api/community/posts')
            .then(response => {
                setPosts(response.data.posts);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error fetching posts:', err);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading posts...</div>;
    }

    return (
        <div>
            <h1>Community Posts</h1>
            {isLoggedIn && (
                <Link to="/community/new" style={{ marginBottom: '20px', display: 'block' }}>Add New Post</Link>
            )}
            {posts.length > 0 ? (
                <ul>
                    {posts.map(post => (
                        <li key={post._id}>
                            <Link to={`/community/${post._id}`}>{post.title}</Link>
                        </li>
                    ))}
                </ul>
            ) : (
                <div>No posts found.</div>
            )}
        </div>
    );
};

export default CommunityPostsList;

