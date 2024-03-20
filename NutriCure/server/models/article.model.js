const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Article title is required'],
        minlength: [3, 'Article title must be at least 3 characters long']
    },
    content: {
        type: String,
        required: [true, 'Article content is required'],
        minlength: [10, 'Article content must be at least 10 characters long']
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'Article author is required']
    },
    publishedDate: {
        type: Date,
        default: Date.now
    },
}, { timestamps: true });

module.exports = mongoose.model('Article', ArticleSchema);
