import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-64 bg-slate-900 p-5 min-h-screen">
      <h1 className="text-xl font-bold mb-8">
        Binary Analyzer
      </h1>

      <div className="flex flex-col gap-4">
        <Link to="/home">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/upload">Upload</Link>
        <Link to="/reports">Reports</Link>
        <Link to="/about">About</Link>
      </div>
    </div>
  );
}