const StoryController = require('../controllers/story.controller');

module.exports = app => {
    app.post('/api/stories', StoryController.createStory);
    app.get('/api/stories', StoryController.findAllStories);
    app.get('/api/stories/:id', StoryController.findStoryById);
    app.put('/api/stories/:id', StoryController.updateStory);
    app.delete('/api/stories/:id', StoryController.deleteStory);
}
