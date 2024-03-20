const Article = require('../models/article.model');

module.exports.createArticle = (req, res) => {
    Article.create(req.body)
        .then(newArticle => res.json({ article: newArticle }))
        .catch(err => res.status(400).json(err));
};

module.exports.findAllArticles = (req, res) => {
    Article.find()
        .then(allArticles => res.json({ articles: allArticles }))
        .catch(err => res.status(400).json(err));
};

module.exports.findArticleById = (req, res) => {
    Article.findById(req.params.id)
        .then(oneArticle => res.json({ article: oneArticle }))
        .catch(err => res.status(400).json(err));
};

module.exports.updateArticle = (req, res) => {
    Article.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        .then(updatedArticle => res.json({ article: updatedArticle }))
        .catch(err => res.status(400).json(err));
};

module.exports.deleteArticle = (req, res) => {
    Article.findByIdAndDelete(req.params.id)
        .then(deletionResult => res.json({ result: deletionResult }))
        .catch(err => res.status(400).json(err));
};
