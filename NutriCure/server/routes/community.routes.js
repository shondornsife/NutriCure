const CommunityController = require('../controllers/community.controller');

module.exports = app => {
    app.post('/api/community/posts', CommunityController.createPost);
    app.get('/api/community/posts', CommunityController.findAllPosts);
    app.get('/api/community/posts/:id', CommunityController.findPostById);
    app.put('/api/community/posts/:id', CommunityController.updatePost);
    app.delete('/api/community/posts/:id', CommunityController.deletePost);
}
