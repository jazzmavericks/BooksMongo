const Review = require('./reviewsModel');
const addReview = async (req, res) => {
    try {
    const newReview = await Review.create({
        book: req.body.book,
        rating: req.body.rating,
        comment: req.body.comment,
    });
        res.status(201).json(newReview);
    } catch (error) {
        res.status(500).json({ message: 'Error creating the review', error });
    }
};


module.exports = {
    addReview,
};
