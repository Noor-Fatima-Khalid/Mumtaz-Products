import Product from '../models/Product.js';
import asyncHandler from '../utils/asyncHandler.js';

// @Public
export const getProducts = asyncHandler(async (req, res) => {
  const { category, search, page = 1, limit = 12 } = req.query;

  const filter = { isActive: true };
  if (category) filter.category = category;
  if (search) filter.name = { $regex: search, $options: 'i' };

  const total = await Product.countDocuments(filter);
  const products = await Product.find(filter)
    .populate('category', 'name slug')
    .skip((page - 1) * limit)
    .limit(Number(limit));

  res.json({ products, total, page: Number(page), pages: Math.ceil(total / limit) });
});

// @Public
export const getProductBySlug = asyncHandler(async (req, res) => {
  const product = await Product.findOne({ slug: req.params.slug, isActive: true })
    .populate('category', 'name slug');
  if (!product) return res.status(404).json({ message: 'Product not found' });
  res.json(product);
});

// @Admin
export const createProduct = asyncHandler(async (req, res) => {
  const { name, description, images, category, brand, variants } = req.body;
  const slug = name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');

  const product = await Product.create({ name, slug, description, images, category, brand, variants });
  res.status(201).json(product);
});

// @Admin
export const updateProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) return res.status(404).json({ message: 'Product not found' });

  if (req.body.name) {
    req.body.slug = req.body.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
  }

  Object.assign(product, req.body);
  await product.save();
  res.json(product);
});

// @Admin
export const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) return res.status(404).json({ message: 'Product not found' });

  product.isActive = false; // soft delete
  await product.save();
  res.json({ message: 'Product deactivated' });
});

// @Admin - update only a single variant's stock safely
export const updateVariantStock = asyncHandler(async (req, res) => {
  const { variantId, stock } = req.body;

  const product = await Product.findOneAndUpdate(
    { _id: req.params.id, 'variants._id': variantId },
    { $set: { 'variants.$.stock': stock } },
    { new: true }
  );

  if (!product) return res.status(404).json({ message: 'Product or variant not found' });
  res.json(product);
});