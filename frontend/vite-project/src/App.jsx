import { Toaster } from "sonner";
import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import "./index.css";

function App() {
  return (
    <>
      <Toaster richColors></Toaster>
      <BrowserRouter>
        <Routes>
          {/* Nơi chứa các danh sách các Route */}
          <Route path="/" element={<HomePage />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
