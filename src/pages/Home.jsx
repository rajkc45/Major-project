import { Link } from "react-router-dom";
import { Upload, FileText, Info, Clock, Sparkles } from "lucide-react";

const doodle = [
  "M20 40 Q40 20 60 40 T100 40",
  "M0 80 Q25 60 50 80 T100 80",
];

export default function Home() {
  return (
    <div className="space-y-6">
      {/* Hero */}
      <div className="relative overflow-hidden rounded-2xl bg-[#f0ede7] border border-[#d1ccc1] p-8 blob-deco">
        <svg className="absolute top-4 right-8 w-24 h-24 text-[#e8635a]/5" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
          {doodle.map((d, i) => <path key={i} d={d} strokeLinecap="round" />)}
        </svg>
        <div className="flex items-center gap-4 mb-2">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#e8635a] to-[#d4944a] flex items-center justify-center shadow-sm animate-float">
            <Sparkles size={18} className="text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-[#2b2824]">
              Hey there, <span className="text-[#e8635a]">Analyst</span>
            </h1>
            <p className="text-[#787268] text-sm mt-0.5">
              Here's your Binary Analysis Platform at a glance.
            </p>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 stagger">
        <div className="rounded-2xl bg-[#f0ede7] border border-[#d1ccc1] p-6 transition-all duration-200 hover:border-[#c4bfb4] hover:shadow-md hover:-translate-y-0.5">
          <div className="w-9 h-9 rounded-xl bg-[#fce8e6] flex items-center justify-center mb-4">
            <Upload size={16} className="text-[#e8635a]" />
          </div>
          <p className="text-3xl font-bold text-[#2b2824] tracking-tight">12</p>
          <p className="text-sm text-[#787268] mt-1">Total Uploads</p>
          <p className="text-xs text-[#e8635a] mt-1">+3 this week</p>
        </div>

        <div className="rounded-2xl bg-[#f0ede7] border border-[#d1ccc1] p-6 transition-all duration-200 hover:border-[#c4bfb4] hover:shadow-md hover:-translate-y-0.5">
          <div className="w-9 h-9 rounded-xl bg-[#e4f2f2] flex items-center justify-center mb-4">
            <FileText size={16} className="text-[#4a9e9e]" />
          </div>
          <p className="text-3xl font-bold text-[#2b2824] tracking-tight">5</p>
          <p className="text-sm text-[#787268] mt-1">Reports Generated</p>
          <p className="text-xs text-[#4a9e9e] mt-1">2 flagged critical</p>
        </div>

        <div className="rounded-2xl bg-[#f0ede7] border border-[#d1ccc1] p-6 transition-all duration-200 hover:border-[#c4bfb4] hover:shadow-md hover:-translate-y-0.5">
          <div className="w-9 h-9 rounded-xl bg-[#f0edf7] flex items-center justify-center mb-4">
            <Sparkles size={16} className="text-[#9b8ec4]" />
          </div>
          <p className="text-sm font-bold text-[#4a9e9e] mt-1">Active</p>
          <p className="text-sm text-[#787268] mt-1">System Status</p>
          <p className="text-xs text-[#9b8ec4] mt-1">All engines running</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="rounded-2xl bg-[#f0ede7] border border-[#d1ccc1] p-6">
        <div className="flex items-center gap-2 mb-5">
          <Clock size={15} className="text-[#d4944a]" />
          <h2 className="text-sm font-semibold text-[#2b2824]">Quick Actions</h2>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link
            to="/upload"
            className="inline-flex items-center gap-2 bg-[#fce8e6] text-[#e8635a] px-4 py-2.5 rounded-xl text-sm font-medium hover:bg-[#f8d5d1] transition-all"
          >
            <Upload size={14} /> Upload File
          </Link>

          <Link
            to="/reports"
            className="inline-flex items-center gap-2 bg-[#e4f2f2] text-[#4a9e9e] px-4 py-2.5 rounded-xl text-sm font-medium hover:bg-[#d4eaea] transition-all"
          >
            <FileText size={14} /> View Reports
          </Link>

          <Link
            to="/about"
            className="inline-flex items-center gap-2 bg-[#e5e1d8] text-[#787268] px-4 py-2.5 rounded-xl text-sm font-medium hover:bg-[#d1ccc1] transition-all"
          >
            <Info size={14} /> About System
          </Link>
        </div>
      </div>

    </div>
  );
}
