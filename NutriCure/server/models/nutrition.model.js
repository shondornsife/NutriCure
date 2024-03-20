const mongoose = require('mongoose');

const nutritionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: String,
    benefits: String,
    nutritionalValues: {
        calories: Number,
        protein: Number,
        carbs: Number,
        fats: Number,
    },
}, { timestamps: true });

module.exports = mongoose.model('Nutrition', nutritionSchema);
