import mongoose from 'mongoose';

const orderItemSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
  variantId: mongoose.Schema.Types.ObjectId,
  name: String,
  variantLabel: String,
  price: Number,
  image: String,
  qty: Number,
});

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  items: [orderItemSchema],
  shippingAddress: {
    street: String,
    city: String,
    province: String,
    zip: String,
  },
  status: {
    type: String,
    enum: ['pending', 'processing', 'shipped', 'delivered', 'cancelled'],
    default: 'pending',
  },
  totalAmount: Number,
  isPaid: { type: Boolean, default: false },
}, { timestamps: true });

export default mongoose.model('Order', orderSchema);