import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ArticlesList = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:8000/api/articles')
            .then(response => {
                setArticles(response.data.articles);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error:', err);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading articles...</div>;
    }

    return (
        <div>
            <h1>Articles</h1>
            {articles.length > 0 ? (
                <ul>
                    {articles.map(article => (
                        <li key={article._id}>
                            <Link to={`/articles/${article._id}`}>{article.title}</Link>
                        </li>
                    ))}
                </ul>
            ) : (
                <div>No articles available.</div>
            )}
        </div>
    );
};

export default ArticlesList;
