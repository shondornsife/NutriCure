const mongoose = require('mongoose');

const StorySchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Story title is required'],
        minlength: [3, 'Story title must be at least 3 characters long']
    },
    content: {
        type: String,
        required: [true, 'Story content is required'],
        minlength: [10, 'Story content must be at least 10 characters long']
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'Author is required']
    },
    ingredient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Ingredient',
        required: [false, 'Associated ingredient is optional']
    },
}, { timestamps: true });

module.exports = mongoose.model('Story', StorySchema);
