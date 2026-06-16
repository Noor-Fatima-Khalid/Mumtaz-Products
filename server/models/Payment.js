import mongoose from 'mongoose';

const paymentSchema = new mongoose.Schema({
  orderId: { type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true },
  method: { type: String, enum: ['stripe', 'jazzcash', 'easypaisa', 'cod'] },
  transactionId: String,
  status: { type: String, enum: ['pending', 'paid', 'failed'], default: 'pending' },
  amount: Number,
}, { timestamps: true });

export default mongoose.model('Payment', paymentSchema);