import express from "express";
import taskRoute from "./routes/tasksRouters.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 5001;
const app = express();

connectDB();

app.use(express.json());

app.use("/api/tasks", taskRoute); //khai báo sử dụng api trong tệp mới

app.listen(PORT, () => {
  console.log("Server bắt đầu trên cổng 5001");
});
