import { Link } from "react-router-dom";
import { Home, Frown } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#e2ded6] flex items-center justify-center px-4 relative overflow-hidden">
      {/* ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#e8635a]/3 rounded-full blur-3xl pointer-events-none" />

      <div className="relative text-center space-y-6">
        <div className="flex justify-center">
          <div className="w-16 h-16 rounded-2xl bg-[#fce8e6] flex items-center justify-center animate-float">
            <Frown size={30} className="text-[#e8635a]" />
          </div>
        </div>

        <div>
          <h1 className="text-7xl font-bold text-[#2b2824] tracking-tight">
            <span className="text-[#e8635a]">4</span>
            <span className="text-[#aba498]">0</span>
            <span className="text-[#e8635a]">4</span>
          </h1>
          <p className="text-[#787268] text-sm mt-3">This page could not be found</p>
          <p className="text-[#aba498] text-xs mt-1">The page you're looking for doesn't exist or has been moved.</p>
        </div>

        <div className="flex items-center justify-center gap-1 text-[#aba498] text-xs">
          <span className="text-[#e8635a]">~$</span>
          <span>page not found</span>
          <span className="animate-pulse">_</span>
        </div>

        <Link
          to="/home"
          className="inline-flex items-center gap-2 bg-[#fce8e6] text-[#e8635a] px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-[#f8d5d1] transition-all"
        >
          <Home size={15} />
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
