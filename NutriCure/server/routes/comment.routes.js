const CommentController = require('../controllers/comment.controller');

module.exports = (app) => {
    app.post('/api/comments', CommentController.createComment);
    app.get('/api/comments/:id', CommentController.findCommentById);
    app.get('/api/comments', CommentController.findAllComments);
    app.put('/api/comments/:id', CommentController.updateComment);
    app.delete('/api/comments/:id', CommentController.deleteComment);
};
