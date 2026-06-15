const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema(
  {
    orderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order"
    },

    method: {
      type: String,
      enum: ["cod", "card", "bank_transfer", "wallet"]
    },

    transactionId: String,

    status: {
      type: String,
      enum: ["pending", "success", "failed"],
      default: "pending"
    },

    amount: Number
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Payment", paymentSchema);