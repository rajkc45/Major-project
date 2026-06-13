import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function MainLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-slate-950 text-white">
      <Sidebar />

      <div className="flex-1">
        <Navbar />
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}