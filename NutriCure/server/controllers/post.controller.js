const Post = require('../models/post.model');

module.exports.createPost = (req, res) => {
    Post.create(req.body)
        .then(newPost => res.json({ post: newPost }))
        .catch(err => res.status(400).json(err));
};

module.exports.findAllPosts = (req, res) => {
    Post.find()
        .populate('comments')
        .then(allPosts => res.json({ posts: allPosts }))
        .catch(err => res.status(400).json(err));
};

module.exports.findPostById = (req, res) => {
    Post.findById(req.params.id)
        .populate('comments')
        .then(onePost => res.json({ post: onePost }))
        .catch(err => res.status(400).json(err));
};

module.exports.updatePost = (req, res) => {
    Post.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        .then(updatedPost => res.json({ post: updatedPost }))
        .catch(err => res.status(400).json(err));
};

module.exports.deletePost = (req, res) => {
    Post.findByIdAndDelete(req.params.id)
        .then(deletionResult => res.json({ result: deletionResult }))
        .catch(err => res.status(400).json(err));
};
