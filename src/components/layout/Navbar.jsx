import { ShieldAlert } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 bg-[#0d1117]/80 backdrop-blur-xl border-b border-slate-800/60 px-6 py-3 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-cyan-500/20 to-cyan-600/10 ring-1 ring-cyan-500/30 flex items-center justify-center">
          <ShieldAlert size={14} className="text-cyan-400" />
        </div>
        <h2 className="text-sm font-semibold text-white tracking-tight">
          <span className="gradient-text">Sentinel</span>
        </h2>
        <span className="hidden sm:inline text-[10px] font-medium text-slate-600 bg-slate-800/60 px-2 py-0.5 rounded-full border border-slate-700/50">
          v0.1 · Final Year Project
        </span>
      </div>

      <div className="flex items-center gap-3">
        <Link
          to="/upload"
          className="text-xs font-medium text-cyan-400 hover:text-cyan-300 bg-cyan-500/10 hover:bg-cyan-500/20 px-3 py-1.5 rounded-lg ring-1 ring-cyan-500/20 hover:ring-cyan-500/40 transition-all duration-200"
        >
          + Upload
        </Link>
      </div>
    </header>
  );
}
