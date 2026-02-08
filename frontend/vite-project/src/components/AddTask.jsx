import React, { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";
import { Input } from "./ui/input";
import axios from "axios";
import { toast } from "sonner";
import api from "@/lib/axios";

const AddTask = ({ handleNewTaskAdded }) => {
  const [newTaskTitle, setNewTaskTitle] = useState("");

  const addTask = async () => {
    if (newTaskTitle) {
      try {
        await api.post("/tasks/", {
          title: newTaskTitle,
        });
        toast.success(`Nhiệm vụ ${newTaskTitle} đã được thêm vào`);
        handleNewTaskAdded();
      } catch (error) {
        console.log("Lỗi Xảy Ra Khi Thêm Task", error);
        toast.error("Lỗi Xảy Ra Khi Thêm Nhiệm Vụ Mới");
      }

      setNewTaskTitle("");
    } else {
      toast.error("Bạn Cẩn Nhập Nội Dung của Task");
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      addTask();
    } //này giúp cho thay vì họ phải bấm vào ô enter thì chỉ cần nhập dữ liệu vào ô input thì dữ liệu sẽ được gửi
    //nếu người dùng gõ phím enter thì mình sẽ gọi hàm addTask
  };
  return (
    <Card className="p-6 border-0 bg-gradient-card shadow-custom-lg">
      <div className="flex flex-col gap-3 sm:flex-row">
        <Input
          type="text"
          placeholder="Cần phải làm gì?"
          className="h-12 text-base bg-slate-50 sm:flex-1 border-border/50 focus:border-amber-500/50 focus:ring-amber-500/20"
          value={newTaskTitle}
          onChange={(even) => {
            setNewTaskTitle(even.target.value);
          }}
          onKeyPress={handleKeyPress}
        />

        <Button
          varient="gradient"
          size="xl"
          className="px-6"
          onClick={addTask}
          disabled={!newTaskTitle.trim()}
        >
          <Plus className="size-5" />
          Thêm
        </Button>
      </div>
    </Card>
  );
};

export default AddTask;
