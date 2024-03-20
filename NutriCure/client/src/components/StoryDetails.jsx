import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const StoryDetails = () => {
    const [story, setStory] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/stories/${id}`)
            .then(response => {
                setStory(response.data.story);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error:', err);
                setError('Failed to load story details');
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <div>Loading story details...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (!story) {
        return <div>Story not found.</div>;
    }

    return (
        <div>
            <h1>{story.title}</h1>
            <p>{story.content}</p>
        </div>
    );
};

export default StoryDetails;
