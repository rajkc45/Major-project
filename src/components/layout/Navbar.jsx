import { useNavigate } from "react-router-dom";
import { ShieldAlert } from "lucide-react";

export default function Navbar() {
  return (
    <div className="bg-[#0d1117] border-b border-slate-800 px-6 py-3 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <ShieldAlert size={15} className="text-cyan-400" />
        <h2 className="text-sm font-semibold text-white">Binary Analyzer</h2>
      </div>
      <span className="text-xs text-slate-500">Major Project · Final Year</span>
    </div>
  );
}