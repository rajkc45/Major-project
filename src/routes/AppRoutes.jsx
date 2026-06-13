import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Upload from "../pages/Upload";
import Report from "../pages/Report";
import Reports from "../pages/Reports";
import About from "../pages/About";
import NotFound from "../pages/Notfound";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/upload" element={<Upload />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/report/:id" element={<Report />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}