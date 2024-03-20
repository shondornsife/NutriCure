const CommunityPost = require('../models/community.model');

module.exports.createPost = (req, res) => {
    CommunityPost.create(req.body)
        .then(newPost => res.json({ post: newPost }))
        .catch(err => res.status(400).json(err));
};

module.exports.findAllPosts = (req, res) => {
    CommunityPost.find()
        .then(posts => res.json({ posts }))
        .catch(err => res.status(400).json(err));
};

module.exports.findPostById = (req, res) => {
    CommunityPost.findById(req.params.id)
        .then(post => {
            if (!post) {
                res.status(404).json({ message: 'Post not found' });
            } else {
                res.json({ post });
            }
        })
        .catch(err => res.status(400).json(err));
};

module.exports.updatePost = (req, res) => {
    CommunityPost.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        .then(updatedPost => res.json({ post: updatedPost }))
        .catch(err => res.status(400).json(err));
};

module.exports.deletePost = (req, res) => {
    CommunityPost.findByIdAndDelete(req.params.id)
        .then(deletionResult => {
            if (!deletionResult) {
                res.status(404).json({ message: 'Post not found' });
            } else {
                res.json({ message: 'Post deleted successfully' });
            }
        })
        .catch(err => res.status(400).json(err));
};
