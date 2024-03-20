import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ArticleDetails = () => {
    const [article, setArticle] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/articles/${id}`)
            .then(response => {
                setArticle(response.data.article);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error:', err);
                setError('Failed to load article');
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <div>Loading article...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (!article) {
        return <div>Article not found.</div>;
    }

    return (
        <div>
            <h1>{article.title}</h1>
            <p>{article.content}</p>
        </div>
    );
};

export default ArticleDetails;
