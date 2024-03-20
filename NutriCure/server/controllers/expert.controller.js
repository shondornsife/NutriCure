const ExpertArticle = require('../models/expert.model');

module.exports.createArticle = (req, res) => {
    ExpertArticle.create(req.body)
        .then(newArticle => res.json({ article: newArticle }))
        .catch(err => res.status(400).json(err));
};

module.exports.findAllArticles = (req, res) => {
    ExpertArticle.find()
        .then(articles => res.json({ articles }))
        .catch(err => res.status(400).json(err));
};

module.exports.findArticleById = (req, res) => {
    ExpertArticle.findById(req.params.id)
        .then(article => {
            if (!article) {
                res.status(404).json({ message: 'Article not found' });
            } else {
                res.json({ article });
            }
        })
        .catch(err => res.status(400).json(err));
};

module.exports.updateArticle = (req, res) => {
    ExpertArticle.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        .then(updatedArticle => res.json({ article: updatedArticle }))
        .catch(err => res.status(400).json(err));
};

module.exports.deleteArticle = (req, res) => {
    ExpertArticle.findByIdAndDelete(req.params.id)
        .then(deletionResult => {
            if (!deletionResult) {
                res.status(404).json({ message: 'Article not found' });
            } else {
                res.json({ message: 'Article deleted successfully' });
            }
        })
        .catch(err => res.status(400).json(err));
};
