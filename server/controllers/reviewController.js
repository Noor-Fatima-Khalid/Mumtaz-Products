import Review from '../models/Review.js';
import Product from '../models/Product.js';
import asyncHandler from '../utils/asyncHandler.js';

export const addReview = asyncHandler(async (req, res) => {
  const { productId, rating, comment } = req.body;

  const existing = await Review.findOne({ productId, userId: req.user._id });
  if (existing) return res.status(400).json({ message: 'You already reviewed this product' });

  const review = await Review.create({ productId, userId: req.user._id, rating, comment });

  // recalculate product rating
  const reviews = await Review.find({ productId });
  const average = reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;
  await Product.findByIdAndUpdate(productId, { 'ratings.average': average, 'ratings.count': reviews.length });

  res.status(201).json(review);
});

export const getProductReviews = asyncHandler(async (req, res) => {
  const reviews = await Review.find({ productId: req.params.productId })
    .populate('userId', 'name')
    .sort({ createdAt: -1 });
  res.json(reviews);
});

export const deleteReview = asyncHandler(async (req, res) => {
  const review = await Review.findById(req.params.id);
  if (!review) return res.status(404).json({ message: 'Review not found' });
  if (review.userId.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
    return res.status(403).json({ message: 'Not authorized' });
  }

  await review.deleteOne();

  // recalculate
  const reviews = await Review.find({ productId: review.productId });
  const average = reviews.length ? reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length : 0;
  await Product.findByIdAndUpdate(review.productId, { 'ratings.average': average, 'ratings.count': reviews.length });

  res.json({ message: 'Review deleted' });
});