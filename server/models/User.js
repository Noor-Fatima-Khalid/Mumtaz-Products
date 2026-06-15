const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
  fullName: String,
  phone: String,
  city: String,
  area: String,
  street: String,
  postalCode: String,
  isDefault: {
    type: Boolean,
    default: false
  }
});

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },

    email: {
      type: String,
      required: true,
      unique: true
    },

    password: {
      type: String,
      required: true
    },

    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user"
    },

    addresses: [addressSchema]
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("User", userSchema);