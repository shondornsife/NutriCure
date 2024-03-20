import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddIngredient = () => {
    const [ingredientData, setIngredientData] = useState({
        name: '',
        description: '',
        benefits: '',
        imageUrl: ''
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleChange = (e) => {
        setIngredientData({ ...ingredientData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/ingredients', ingredientData)
            .then(() => navigate('/ingredients'))
            .catch(err => {
                if (err.response && err.response.data) {
                    setErrors(err.response.data.errors);
                }
            });
    };

    return (
        <div>
            <h2>Add New Ingredient</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={ingredientData.name}
                        onChange={handleChange}
                    />
                    {errors.name && <p>{errors.name.message}</p>}
                </div>
                <div>
                    <label>Description:</label>
                    <textarea
                        name="description"
                        value={ingredientData.description}
                        onChange={handleChange}
                    />
                    {errors.description && <p>{errors.description.message}</p>}
                </div>
                <div>
                    <label>Benefits:</label>
                    <textarea
                        name="benefits"
                        value={ingredientData.benefits}
                        onChange={handleChange}
                    />
                    {errors.benefits && <p>{errors.benefits.message}</p>}
                </div>
                <div>
                    <label>Image URL:</label>
                    <input
                        type="text"
                        name="imageUrl"
                        value={ingredientData.imageUrl}
                        onChange={handleChange}
                    />
                    {errors.imageUrl && <p>{errors.imageUrl.message}</p>}
                </div>
                <button type="submit">Add Ingredient</button>
            </form>
        </div>
    );
};

export default AddIngredient;
