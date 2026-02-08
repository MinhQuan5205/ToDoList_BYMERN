import { cn } from "@/lib/utils";
import {
  Calendar,
  Check,
  CheckCircle2,
  Circle,
  SquarePen,
  Trash2,
} from "lucide-react";
import React, { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import api from "@/lib/axios";
import { toast } from "sonner";

const TaskCard = ({ task, index, handleTaskChanged }) => {
  const [isEditting, setIsEditting] = useState(false);
  const [updateTaskTitle, setUpdateTaskTitle] = useState(task.title || "");

  const deleteTask = async (taskId) => {
    try {
      await api.delete(`/tasks/${taskId}`);
      toast.success("Nhiệm vụ đã xóa");
      handleTaskChanged();
    } catch (error) {
      console.log("Lỗi Xảy Ra Khi Xóa Task", error);
      toast.error("Lỗi Xảy Ra Khi Xóa Nhiệm Vụ");
    }
  };

  //hàm này chỉ chạy khi người dùng nhấn enter rổi nên mình thoát khỏi chế độ edit
  const updateTask = async () => {
    try {
      if (updateTaskTitle.trim() === "") {
        toast.error("Không Được Để Trống Task Title");
        return;
      }
      setIsEditting(false);
      await api.put(`/tasks/${task._id}`, {
        title: updateTaskTitle,
      });
      toast.success(`Nhiệm Vụ Đã Đổi Thành ${updateTaskTitle}`);
      handleTaskChanged();
    } catch (error) {
      console.log("Lỗi Xảy Ra Khi Update Task", error);
      toast.error("Lỗi Xảy Ra Khi Cập Nhật Nhiệm Vụ mới.");
    }
  };

  //Hàm Này giúp thay đổi nút button active hay complete
  const toggleTaskCompleteButton = async () => {
    try {
      if (task.status === "active") {
        await api.put(`/tasks/${task._id}`, {
          status: "complete",
          completeAt: new Date().toISOString(),
        });
        toast.success(`${task.title} đã HOÀN THÀNH`);
      } else {
        await api.put(`/tasks/${task._id}`, {
          status: "active",
          completeAt: null,
        });
        toast.success(`${task.title} đã đổi sang trạng thái CHƯA HOÀN THÀNH`);
      }
      handleTaskChanged();
    } catch (error) {
      console.log("Lỗi Xảy Ra Khi Update Task", error);
      toast.error("Lỗi Xảy Ra Khi Cập Nhật Nhiệm Vụ mới.");
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      updateTask();
    } //này giúp cho thay vì họ phải bấm vào ô enter thì chỉ cần nhập dữ liệu vào ô input thì dữ liệu sẽ được gửi
    //nếu người dùng gõ phím enter thì mình sẽ gọi hàm addTask
  };

  return (
    <Card
      className={cn(
        "p-4 bg-gradient-card border-0 shadow-custom-md hover:shadow-custom-lg transition-all duration-200 animate-fade-in group ",
        task.status === "complete" && "opacity-75",
      )}
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <div className="flex items-center gap-4">
        {/* Nút tròn */}
        <Button
          varient="ghost"
          size="icon"
          className={cn(
            "flex shrink-0 size-8 rounded-full transition-all duration-200",
            task.status === "completed"
              ? "text-success hover:text-success/80"
              : "text-muted-foreground hover:text-primary",
          )}
          onClick={toggleTaskCompleteButton}
        >
          {task.status === "complete" ? (
            <CheckCircle2 className="size-5" />
          ) : (
            <Circle className="size-5" />
          )}
        </Button>

        {/* Hiển thị hoặc chỉnh sửa tiêu đề */}
        <div className="flex-1 min-w-0">
          {isEditting ? (
            <Input
              placeholder="Cần phải làm gì"
              className="flex-1 h-12 text-base border-border/50 focus:boder-primary/50 focus:ring-primary/20"
              type="text"
              value={updateTaskTitle}
              onChange={(e) => setUpdateTaskTitle(e.target.value)}
              onKeyPress={handleKeyPress}
              onBlur={() => {
                setIsEditting(false);
                setUpdateTaskTitle(task.title);
              }}
            />
          ) : (
            <p
              className={cn(
                "text-base transition-all duration-200",
                task.status === "complete"
                  ? "line-through text-muted-foreground"
                  : "text-foreground",
              )}
            >
              {task.title}
            </p>
          )}
          {/* Ngày tạo và ngày hoàn thành */}
          <div className="flex items-center gap-2 mt-1">
            <Calendar className="size-3 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">
              {new Date(task.createdAt).toLocaleString()}
              {/* Do nó sẽ luôn lưu là giờ quốc tế nên mình phải đổi thành giờ Việt Nam */}
            </span>
            {task.completeAt && (
              <>
                <span className="text-xs text-muted-foreground">-</span>
                <Calendar className="size-3 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">
                  {new Date(task.completeAt).toLocaleString()}
                </span>
              </>
            )}
          </div>
        </div>

        {/* Nút chỉnh và xóa */}
        <div className="hidden gap-2 group-hover:inline-flex animate-slide-up">
          {/* Nút edit */}
          <Button
            variant="ghost"
            size="icon"
            className="flex-shrink-0 transition-colors size-8 text-muted-foreground hover:text-info"
            onClick={() => {
              setIsEditting(true);
              setUpdateTaskTitle(task.title || "");
            }}
          >
            <SquarePen className="size-4" />
          </Button>

          {/* Nút xóa */}
          <Button
            variant="ghost"
            size="icon"
            className="flex-shrink-0 transition-colors size-8 text-muted-foreground hover:text-destructive"
            onClick={() => deleteTask(task._id)}
          >
            <Trash2 className="size-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default TaskCard;
