import React from "react";

export default function Header() {
  return (
    <div className="space-y-2 text-center">
      <h1 className="text-4xl font-bold text-transparent bg-gray-700 bg-clip-text">
        🎓 TodoX 🎓
      </h1>

      <a href="https://github.com/MinhQuan5205/ToDoList_BYMERN">
        👉 Link Github 👈
      </a>
      <p className="text-muted-foreground">
        🤖 Không có việc gì khó, chỉ sợ mình không làm 🤖
      </p>
    </div>
  );
}
