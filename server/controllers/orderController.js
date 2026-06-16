import Order from '../models/Order.js';
import Product from '../models/Product.js';
import asyncHandler from '../utils/asyncHandler.js';

export const placeOrder = asyncHandler(async (req, res) => {
  const { items, shippingAddress } = req.body;
  // items: [{ productId, variantId, qty }]

  let totalAmount = 0;
  const snapshotItems = [];

  for (const item of items) {
    const product = await Product.findById(item.productId);
    if (!product) return res.status(404).json({ message: `Product not found: ${item.productId}` });

    const variant = product.variants.id(item.variantId);
    if (!variant) return res.status(404).json({ message: 'Variant not found' });
    if (variant.stock < item.qty) return res.status(400).json({ message: `Insufficient stock for ${product.name} - ${variant.label}` });

    // decrement stock atomically
    await Product.findOneAndUpdate(
      { _id: item.productId, 'variants._id': item.variantId },
      { $inc: { 'variants.$.stock': -item.qty } }
    );

    snapshotItems.push({
      productId: product._id,
      variantId: variant._id,
      name: product.name,
      variantLabel: variant.label,
      price: variant.price,
      image: product.images[0] || '',
      qty: item.qty,
    });

    totalAmount += variant.price * item.qty;
  }

  const order = await Order.create({
    userId: req.user._id,
    items: snapshotItems,
    shippingAddress,
    totalAmount,
  });

  res.status(201).json(order);
});

// @User - their own orders
export const getMyOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({ userId: req.user._id }).sort({ createdAt: -1 });
  res.json(orders);
});

// @Admin - all orders
export const getAllOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find().populate('userId', 'name email').sort({ createdAt: -1 });
  res.json(orders);
});

// @Admin - update order status
export const updateOrderStatus = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);
  if (!order) return res.status(404).json({ message: 'Order not found' });

  order.status = req.body.status;
  await order.save();
  res.json(order);
});