const mongoose = require('mongoose');

const IngredientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Ingredient name is required'],
        minlength: [3, 'Ingredient name must be at least 3 characters long']
    },
    description: {
        type: String,
        required: [true, 'Ingredient description is required'],
        minlength: [10, 'Ingredient description must be at least 10 characters long']
    },
    benefits: {
        type: String,
        required: [true, 'Benefits of the ingredient are required']
    },
    imageUrl: {
        type: String,
        required: [false, 'Ingredient image URL is optional']
    },
    researchLinks: {
        type: [String],
        default: []
    },
    userStories: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Story'
    }],
}, { timestamps: true });

module.exports = mongoose.model('Ingredient', IngredientSchema);
