import { Link } from "react-router-dom";
import { ShieldAlert, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#080c10] flex items-center justify-center px-4 relative overflow-hidden">
      {/* ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-rose-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative text-center space-y-6">
        <div className="flex justify-center">
          <div className="w-16 h-16 rounded-2xl bg-rose-500/10 ring-1 ring-rose-500/20 flex items-center justify-center">
            <ShieldAlert size={30} className="text-rose-400" />
          </div>
        </div>

        <div>
          <h1 className="text-7xl font-black text-white tracking-tight font-mono">
            <span className="text-rose-400">4</span>
            <span className="text-slate-600">0</span>
            <span className="text-rose-400">4</span>
          </h1>
          <p className="text-slate-400 text-sm mt-3">This sector of the binary could not be located</p>
          <p className="text-slate-600 text-xs mt-1">The page you're looking for doesn't exist or has been moved.</p>
        </div>

        <div className="flex items-center justify-center gap-1 text-slate-600 font-mono text-xs">
          <span className="text-rose-500/70">$</span>
          <span>page not found</span>
          <span className="animate-pulse">_</span>
        </div>

        <Link
          to="/home"
          className="inline-flex items-center gap-2 bg-cyan-500/10 text-cyan-400 ring-1 ring-cyan-500/30 px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-cyan-500/20 hover:ring-cyan-500/50 transition-all duration-200"
        >
          <Home size={15} />
          Return to Base
        </Link>
      </div>
    </div>
  );
}
