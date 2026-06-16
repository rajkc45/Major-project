import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function MainLayout() {
  return (
    <div className="flex min-h-screen bg-[#080c10] text-white">
      <Sidebar />
      <div className="flex-1 ml-52">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
}