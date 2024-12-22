import mongoose from "mongoose";

const subTodoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
      maxlength: 300, // Limit content length
    },
    complete: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    priority: {
      type: String,
      enum: ['low', 'medium', 'high'], // Restrict to specific values
      default: 'low',
    },
  },
  {
    timestamps: true,
  }
);

export const SubTodo = mongoose.model("SubTodo", subTodoSchema);
