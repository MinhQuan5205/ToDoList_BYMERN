# 🚀 TodoX - MERN Stack Task Management App

**TodoX** là một ứng dụng quản lý công việc (To-do list) hiện đại, được xây dựng trên nền tảng **MERN Stack** (MongoDB, Express, React, Node.js). Ứng dụng tập trung vào sự tối giản, hiệu suất và trải nghiệm người dùng mượt mà nhờ sự kết hợp của **shadcn/ui** và **Tailwind CSS**.

---

## ✨ Tính năng chính

- **Quản lý công việc (CRUD):** Thêm, sửa, xóa và theo dõi danh sách công việc dễ dàng.
- **Trạng thái linh hoạt:** Đánh dấu hoàn thành/chưa hoàn thành chỉ với một cú click.
- **Giao diện hiện đại:** Sử dụng hệ thống component của **Radix UI** và **shadcn/ui**.
- **Responsive Design:** Tương thích hoàn hảo trên mọi thiết bị (Mobile, Tablet, Desktop).
- **Dark Mode:** Hỗ trợ chuyển đổi giao diện Sáng/Tối linh hoạt.

---

## 🛠 Công nghệ sử dụng

### Frontend

- **ReactJS (Vite)**
- **shadcn/ui** (Tailwind CSS + Radix UI)
- **Lucide React** (Icons)
- **Axios** (Kết nối API)

### Backend

- **Node.js & Express**
- **MongoDB & Mongoose**
- **dotenv** (Quản lý biến môi trường)

---

## 📂 Cấu trúc dự án

```text
todoX/
├── client/              # Mã nguồn ReactJS
│   ├── src/
│   │   ├── components/  # shadcn components & custom components
│   │   ├── lib/         # Tiện ích (utils)
│   │   └── App.jsx
├── server/              # Mã nguồn Node.js
│   ├── models/          # Mongoose Schemas
│   ├── routes/          # API Routes
│   └── server.js        # Entry point
└── README.md
```

---

## 🛠 Hướng dẫn cấu hình MongoDB Atlas

Để lấy được chuỗi kết nối `MONGODB_URI`, bạn thực hiện các bước sau:

1. **Tạo tài khoản:** Truy cập [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) và đăng ký tài khoản miễn phí.
2. **Tạo Cluster:** Chọn gói "Shared" (Free) và nhấn **Create**.
3. **Cấu hình Quyền truy cập (Security):**
   - **Database Access:** Tạo một user với username và password (hãy ghi nhớ mật khẩu này).
   - **Network Access:** Chọn **Add IP Address** và chọn **Allow Access From Anywhere** (0.0.0.0/0) để có thể kết nối từ bất cứ đâu.
4. **Lấy Connection String:**
   - Tại tab **Deployment > Database**, nhấn nút **Connect**.
   - Chọn **Drivers**.
   - Sao chép chuỗi có dạng: `mongodb+srv://<username>:<password>@cluster0.xxxx.mongodb.net/?retryWrites=true&w=majority`
5. **Cấu hình file .env:** Thay thế `<password>` bằng mật khẩu bạn đã tạo ở bước 3 và dán toàn bộ chuỗi vào biến `MONGODB_URI` trong file `.env` ở thư mục `/server`.

---

## ⚙️ Quy trình khởi chạy chi tiết

### 1. Bản sao mã nguồn (Clone)

```bash
git clone [https://github.com/your-username/todoX.git](https://github.com/your-username/todoX.git)
cd todoX
```

### 2. Cấu hình Backend

```bash
cd server
npm install
# Tạo file .env và thêm PORT, MONGODB_URI
npm run dev
```

### 3. Cấu hình Frontend

```bash
cd ../client
npm install
npm run dev
```

---

### ✨ Thành phần UI (shadcn/ui)

**Dự án sử dụng các thư viện giao diện hàng đầu để đảm bảo trải nghiệm tốt nhất:**

- Button, Input, Checkbox: Các điều hướng và nhập liệu cơ bản.

- Card: Bao bọc nội dung từng công việc.

- Dialog: Cửa sổ modal hỗ trợ chỉnh sửa thông tin task nhanh chóng.

- Toast: Hiển thị thông báo trạng thái (thành công/lỗi) một cách trực quan.

---

### Chúc bạn có trải nghiệm tuyệt vời với todoX!
