const Story = require('../models/story.model');

module.exports.createStory = (req, res) => {
    Story.create(req.body)
        .then(newStory => res.json({ story: newStory }))
        .catch(err => res.status(400).json(err));
};

module.exports.findAllStories = (req, res) => {
    Story.find()
        .then(allStories => res.json({ stories: allStories }))
        .catch(err => res.status(400).json(err));
};

module.exports.findStoryById = (req, res) => {
    Story.findById(req.params.id)
        .then(oneStory => res.json({ story: oneStory }))
        .catch(err => res.status(400).json(err));
};

module.exports.updateStory = (req, res) => {
    Story.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        .then(updatedStory => res.json({ story: updatedStory }))
        .catch(err => res.status(400).json(err));
};

module.exports.deleteStory = (req, res) => {
    Story.findByIdAndDelete(req.params.id)
        .then(deletionResult => res.json({ result: deletionResult }))
        .catch(err => res.status(400).json(err));
};
