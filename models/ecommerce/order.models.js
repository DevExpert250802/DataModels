import mongoose from "mongoose"

const orderItemSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    min: [1, "Quantity must be at least 1"],
  },
});

const orderSchema = new mongoose.Schema(
  {
    orderPrice: {
      type: Number,
      required: true,
      min: [0, "Order price cannot be negative"],
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    orderItems: {
      type: [orderItemSchema],
      validate: {
        validator: (v) => v.length > 0,
        message: "An order must have at least one item.",
      },
    },
    address: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum :  ["PENDING", "CANCELLED","DELIVERED"],
      default: "PENDING",
    },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

export const Order = mongoose.model("Order", orderSchema)