import express from "express";
import taskRoute from "./routes/tasksRouters.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

const PORT = process.env.PORT || 5001;
const app = express();

//MidlleWares
app.use(express.json());
app.use(cors({ origin: ["http://localhost:5173"] }));

app.use("/api/tasks", taskRoute); //khai báo sử dụng api trong tệp mới

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server bắt đầu trên cổng 5001");
  });
}); //này đảm bảo rằng chỉ khi kết nối với database rồi thì server mới chạy ở cổng 5001
