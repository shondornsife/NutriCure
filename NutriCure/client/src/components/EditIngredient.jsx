import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditIngredient = () => {
    const [ingredientData, setIngredientData] = useState({
        name: '',
        description: '',
        benefits: '',
        imageUrl: ''
    });
    const [errors, setErrors] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/ingredients/${id}`)
            .then(response => {
                setIngredientData(response.data.ingredient);
            })
            .catch(err => {
                console.error('Error fetching ingredient:', err);
            });
    }, [id]);

    const handleChange = (e) => {
        setIngredientData({ ...ingredientData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/ingredients/${id}`, ingredientData)
            .then(() => navigate('/ingredients'))
            .catch(err => {
                if (err.response && err.response.data) {
                    setErrors(err.response.data.errors);
                }
            });
    };

    return (
        <div>
            <h2>Edit Ingredient</h2>
            <form onSubmit={handleSubmit}>
                {Object.keys(errors).map((key, index) => (
                    errors[key] && <p key={index} style={{ color: 'red' }}>{errors[key].message}</p>
                ))}
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={ingredientData.name}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Description:</label>
                    <textarea
                        name="description"
                        value={ingredientData.description}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Benefits:</label>
                    <textarea
                        name="benefits"
                        value={ingredientData.benefits}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Image URL:</label>
                    <input
                        type="text"
                        name="imageUrl"
                        value={ingredientData.imageUrl}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Update Ingredient</button>
            </form>
        </div>
    );
};

export default EditIngredient;
