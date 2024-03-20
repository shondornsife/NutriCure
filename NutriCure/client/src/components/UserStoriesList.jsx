import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const UserStoriesList = () => {
    const [stories, setStories] = useState([]);
    const [loading, setLoading] = useState(true);
    const isLoggedIn = true;

    useEffect(() => {
        axios.get('http://localhost:8000/api/stories')
            .then(response => {
                setStories(response.data.stories);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error fetching stories:', err);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading stories...</div>;
    }

    return (
        <div>
            <h1>User Stories</h1>
            {isLoggedIn && (
                <Link to="/stories/new" style={{ marginBottom: '20px', display: 'block' }}>Add New Story</Link>
            )}
            {stories.length > 0 ? (
                <ul>
                    {stories.map(story => (
                        <li key={story._id}>
                            <Link to={`/stories/${story._id}`}>{story.title}</Link>
                        </li>
                    ))}
                </ul>
            ) : (
                <div>No stories found.</div>
            )}
        </div>
    );
};

export default UserStoriesList;

