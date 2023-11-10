const { Router } = require("express");

const reviewRouter = Router();
const { addReview } = require('./reviewController')

reviewRouter.post('/reviews', addReview);

module.exports = reviewRouter;
