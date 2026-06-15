const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product"
    },

    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },

    rating: {
      type: Number,
      min: 1,
      max: 5
    },

    comment: String
  },
  {
    timestamps: true
  }
);

reviewSchema.index(
  { productId: 1, userId: 1 },
  { unique: true }
);

module.exports = mongoose.model("Review", reviewSchema);