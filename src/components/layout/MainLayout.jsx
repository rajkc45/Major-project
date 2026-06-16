import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function MainLayout() {
  return (
    <div className="flex min-h-screen text-white">
      <div className="ambient-orb" />
      <Sidebar />
      <div className="flex-1 ml-52 relative z-[1]">
        <Navbar />
        <main className="animate-fade-in">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
