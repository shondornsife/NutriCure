const NutritionController = require('../controllers/nutrition.controller');

module.exports = app => {
    app.post('/api/ingredients', NutritionController.createNutrition);
    app.get('/api/ingredients', NutritionController.getAllNutrition);
    app.get('/api/ingredients/:id', NutritionController.getNutritionById);
    app.put('/api/ingredients/:id', NutritionController.updateNutrition);
    app.delete('/api/ingredients/:id', NutritionController.deleteNutrition);
};

