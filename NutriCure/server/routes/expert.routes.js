const ExpertController = require('../controllers/expert.controller');

module.exports = app => {
    app.post('/api/experts/articles', ExpertController.createArticle);
    app.get('/api/experts/articles', ExpertController.findAllArticles);
    app.get('/api/experts/articles/:id', ExpertController.findArticleById);
    app.put('/api/experts/articles/:id', ExpertController.updateArticle);
    app.delete('/api/experts/articles/:id', ExpertController.deleteArticle);
}
