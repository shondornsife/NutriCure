import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const IngredientDetails = () => {
    const [ingredient, setIngredient] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/ingredients/${id}`)
            .then(response => {
                setIngredient(response.data.ingredient);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error:', err);
                setError('Failed to load ingredient details');
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <div>Loading ingredient details...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (!ingredient) {
        return <div>Ingredient not found.</div>;
    }

    return (
        <div>
            <h1>{ingredient.name}</h1>
            <img src={ingredient.imageUrl} alt={ingredient.name} style={{ maxWidth: '100%', height: 'auto' }} />
            <p>{ingredient.description}</p>
            <h3>Benefits</h3>
            <p>{ingredient.benefits}</p>
        </div>
    );
};

export default IngredientDetails;
