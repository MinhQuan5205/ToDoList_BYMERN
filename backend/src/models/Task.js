import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
      trim: true, //nếu có khoảng trắng thừa ở đầu và cuối thì sẽ tự động xóa đi
    },
    status: {
      type: String,
      enum: ["active", "complete"],
      default: "active",
    },
    completedAt: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true, //createAt và updatedAt tụ động thêm vào
  },
);

const Task = mongoose.model("Task", taskSchema);
export default Task;
