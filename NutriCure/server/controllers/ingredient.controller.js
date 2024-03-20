const Ingredient = require('../models/ingredient.model');

module.exports.findAllIngredients = (req, res) => {
    Ingredient.find()
        .then(allIngredients => res.json({ ingredients: allIngredients }))
        .catch(err => res.status(400).json(err));
};

module.exports.findIngredientById = (req, res) => {
    Ingredient.findOne({ _id: req.params.id })
        .then(oneIngredient => res.json({ ingredient: oneIngredient }))
        .catch(err => res.status(400).json(err));
};

module.exports.createIngredient = (req, res) => {
    Ingredient.create(req.body)
        .then(newIngredient => res.json({ ingredient: newIngredient }))
        .catch(err => res.status(400).json(err));
};

module.exports.updateIngredient = (req, res) => {
    Ingredient.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedIngredient => res.json({ ingredient: updatedIngredient }))
        .catch(err => res.status(400).json(err));
};

module.exports.deleteIngredient = (req, res) => {
    Ingredient.deleteOne({ _id: req.params.id })
        .then(deletionResult => res.json({ result: deletionResult }))
        .catch(err => res.status(400).json(err));
};
