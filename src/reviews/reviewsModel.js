const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    book: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: false
    },
    comment: {
        type: String,
        required: false
    },
    
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
