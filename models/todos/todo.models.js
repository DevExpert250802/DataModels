import mongoose from "mongoose"

const todoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      maxlength: 100, // Limit title length
    },
    content: {
      type: String,
      required: true,
      maxlength: 500, // Limit content length
    },
    complete: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true, // Ensure every To-Do is linked to a user
    },
    subTodos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SubTodo",
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const ToDo = mongoose.model("ToDo", todoSchema);
