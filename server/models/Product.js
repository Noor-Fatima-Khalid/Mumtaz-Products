import mongoose from 'mongoose';

const variantSchema = new mongoose.Schema({
  label: { type: String, required: true },
  price: { type: Number, required: true },
  compareAtPrice: { type: Number, default: null },
  stock: { type: Number, default: 0 },
  sku: { type: String },
});

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  description: String,
  images: [String],
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
  brand: String,
  variants: [variantSchema],
  ratings: {
    average: { type: Number, default: 0 },
    count: { type: Number, default: 0 },
  },
  isActive: { type: Boolean, default: true },
}, { timestamps: true });

export default mongoose.model('Product', productSchema);