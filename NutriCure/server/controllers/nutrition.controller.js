const Nutrition = require('../models/nutrition.model');

module.exports.createNutrition = (req, res) => {
    Nutrition.create(req.body)
        .then(newNutrition => res.json({ nutrition: newNutrition }))
        .catch(err => res.status(400).json(err));
};

module.exports.getAllNutrition = (req, res) => {
    Nutrition.find()
        .then(nutritionData => res.json({ nutrition: nutritionData }))
        .catch(err => res.status(400).json(err));
};

module.exports.getNutritionById = (req, res) => {
    Nutrition.findById(req.params.id)
        .then(nutrition => {
            if (!nutrition) {
                res.status(404).json({ message: 'Nutrition information not found' });
            } else {
                res.json({ nutrition });
            }
        })
        .catch(err => res.status(400).json(err));
};

module.exports.updateNutrition = (req, res) => {
    Nutrition.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        .then(updatedNutrition => res.json({ nutrition: updatedNutrition }))
        .catch(err => res.status(400).json(err));
};

module.exports.deleteNutrition = (req, res) => {
    Nutrition.findByIdAndDelete(req.params.id)
        .then(deletionResult => {
            if (!deletionResult) {
                res.status(404).json({ message: 'Nutrition information not found' });
            } else {
                res.json({ message: 'Nutrition information deleted successfully' });
            }
        })
        .catch(err => res.status(400).json(err));
};
