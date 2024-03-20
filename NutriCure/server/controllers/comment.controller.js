const Comment = require('../models/comment.model');
const Post = require('../models/post.model');

module.exports.createComment = (req, res) => {
    let newCommentData;

    Comment.create(req.body)
        .then(newComment => {
            newCommentData = newComment;
            return Post.findByIdAndUpdate(req.body.post, { $push: { comments: newComment._id } }, { new: true });
        })
        .then(updatedPost => res.json({ comment: newCommentData, post: updatedPost }))
        .catch(err => res.status(400).json(err));
};

module.exports.findAllComments = (req, res) => {
    Comment.find()
        .then(comments => res.json({ comments }))
        .catch(err => res.status(400).json(err));
};

module.exports.findCommentById = (req, res) => {
    Comment.findById(req.params.id)
        .then(comment => res.json({ comment }))
        .catch(err => res.status(400).json(err));
};

module.exports.updateComment = (req, res) => {
    Comment.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        .then(updatedComment => res.json({ comment: updatedComment }))
        .catch(err => res.status(400).json(err));
};

module.exports.deleteComment = (req, res) => {
    Comment.findByIdAndDelete(req.params.id)
        .then(deletionResult => res.json({ result: deletionResult }))
        .catch(err => res.status(400).json(err));
};
