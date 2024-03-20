import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const IngredientsList = () => {
    const [ingredients, setIngredients] = useState([]);
    const [loading, setLoading] = useState(true);
    const isLoggedIn = true;

    useEffect(() => {
        axios.get('http://localhost:8000/api/ingredients')
            .then(response => {
                setIngredients(response.data.nutrition);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error fetching ingredients:', err);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading ingredients...</div>;
    }

    return (
        <div>
            <h1>Ingredients</h1>
            {isLoggedIn && (
                <Link to="/ingredients/new" style={{ marginBottom: '20px', display: 'block' }}>Add New Ingredient</Link>
            )}
            {ingredients.length > 0 ? (
                <ul>
                    {ingredients.map(ingredient => (
                        <li key={ingredient._id}>
                            <Link to={`/ingredients/${ingredient._id}`}>{ingredient.name}</Link>
                        </li>
                    ))}
                </ul>
            ) : (
                <div>No ingredients found.</div>
            )}
        </div>
    );
};

export default IngredientsList;

